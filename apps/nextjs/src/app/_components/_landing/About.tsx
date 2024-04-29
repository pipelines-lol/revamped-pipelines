"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

import Timeline from "./Timeline";

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref);
  const inView2 = useInView(ref2);
  const parent = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <section className="flex h-full w-full flex-row items-center justify-center">
        <div className="flex h-full w-full flex-col">
          <h1 className="text-pipelines-gray-100 self-center text-4xl font-light lg:text-6xl">
            What is a pipeline?
          </h1>

          <motion.p
            variants={parent}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            ref={ref2}
            className="text-pipelines-gray-100 mx-12 mt-12 max-w-xl self-center text-center text-2xl font-light lg:text-3xl"
          >
            A pipeline is a collection of experiences that individuals embark on
            throughout their career.
          </motion.p>
          <div className="flex w-full flex-row items-center justify-center">
            <Timeline>
              <div className="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
                <div className="order-1"></div>
                <div className="order-1 hidden py-4 text-left text-4xl md:flex">
                  <p>
                    Think of a pipeline as a roadmap of internships, jobs, and
                    other opportunities that you can take to reach your career
                    goals.
                  </p>
                </div>
              </div>
            </Timeline>
          </div>
        </div>
      </section>

      <section className="flex h-full w-full flex-row flex-wrap items-center justify-evenly -space-x-32 py-24 lg:flex-nowrap">
        <motion.div
          variants={parent}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
          className="mb-12 flex h-full w-full flex-col items-start justify-center sm:mb-0"
        >
          <p className="text-pipelines-gray-100 relative left-[13%] w-3/4 text-center text-xl font-normal sm:left-[22%] sm:w-1/2 sm:text-left md:text-xl lg:text-2xl xl:text-4xl">
            With{" "}
            <span className="text-pipeline-blue-200 font-semibold">
              pipelines.lol
            </span>
            , gain insights, draw inspiration, and chart your course by
            discovering the diverse destinations that await along your very own
            career pipeline.
          </p>
        </motion.div>

        <div className="relative left-[15%] flex h-full w-full items-center justify-center sm:left-[-5%]">
          <Image
            fill={true}
            className="h-[25vh] w-full object-contain sm:h-[35vh]"
            src={"/Hero.svg"}
            alt={"Hero"}
          />
        </div>
      </section>
    </>
  );
};

export default About;
