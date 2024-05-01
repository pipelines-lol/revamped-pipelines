import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import { ZodError } from "zod";

import { auth } from "@acme/auth";
import type { Session } from "@acme/auth";
import { prisma } from "@acme/db";

interface CreateContextOptions {
  session: Session | null;
}

const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    session: opts.session,
    prisma,
  };
};

export const createTRPCContext = async (opts: {
  req?: Request;
  auth?: Session;
}) => {
  const session = opts.auth ?? (await auth());
  const source = opts.req?.headers.get("x-trpc-source") ?? "unknown";

  console.log(">>> tRPC Request from", source, "by", session?.user);

  return createInnerTRPCContext({
    session,
  });
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const createTRPCRouter = t.router;

const isAuthed = t.middleware(({ ctx, next }) => {
  const user = ctx.session?.user;
  if (!user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      // infers the `session` as non-nullable
      session: { ...ctx.session, user: user },
    },
  });
});

const isAdmin = t.middleware(({ ctx, next }) => {
  const user = ctx.session?.user;
  if (!user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  const email = user.email ? user.email : "";
  if (!email.endsWith("@pipelines.lol")) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Not an admin" });
  }

  return next({
    ctx: {
      // infers the `session` as non-nullable
      session: { ...ctx.session, user: user },
    },
  });
});

export const publicProcedure = t.procedure; // procedures accessible by anybody
export const authProcedure = t.procedure.use(isAuthed); // procedures acessible to only logged in users
export const adminProcedure = t.procedure.use(isAdmin); // procedures acessible to only admins
