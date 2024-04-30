"use client";

import React from "react";

import CTAButton from "./CTAButton";

const Hero: React.FC = () => {
  return (
    <section
      className="flex h-full w-full flex-col items-center justify-center pb-40 pt-40"
      style={{
        backgroundImage: 'url("hero.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100dvh",
      }}
    >
      <div className="mt-16 flex w-full flex-col items-center justify-center gap-4 text-center">
        <h1 className="xs:text-6xl text-pipelines-gray-100 mx-8 text-center text-5xl font-normal sm:text-5xl md:text-7xl lg:text-7xl xl:text-8xl">
          Visualize Tech <br />
          <span className="text-pipeline-blue-200 whitespace-nowrap font-normal">
            Career Pipelines <br />
          </span>
          With Ease
        </h1>

        <p className="xs:text-md mx-12 my-8 max-w-2xl text-lg font-light text-gray-300 sm:text-lg md:text-xl lg:text-xl xl:text-2xl">
          Track, visualize, and explore your career journey. From top tech
          giants to small startups, discover career path insights effortlessly.
        </p>
        <CTAButton to="/search" text="Get Started" />
      </div>
    </section>
  );
};

export default Hero;
