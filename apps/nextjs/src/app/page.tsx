import About from "./_components/_landing/About";
import Hero from "./_components/_landing/Hero";
import Offerings from "./_components/_landing/Oferrings";

export default function HomePage() {
  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat">
        <Hero />
        <Offerings />
        <About />
      </div>
    </>
  );
}
