"use client";

import React from "react";
import { redirect } from "next/navigation";

interface CTAButtonProps {
  text: string;
  to?: string;
  href?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, to, href }) => {
  if (href) {
    return (
      <>
        <a
          href={href}
          className="bg-pipelines-gray-100 group relative z-0 mt-6 inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-lg px-10 py-2 font-medium tracking-tighter text-black/80 hover:text-white"
        >
          <span className="bg-pipeline-blue-200 absolute h-0 w-0 rounded-full transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56"></span>
          <span className="absolute inset-0 -mt-1 h-full w-full rounded-lg bg-gradient-to-b from-transparent via-transparent to-gray-200 opacity-30"></span>
          <span className="relative">{text}</span>
        </a>
      </>
    );
  }

  return (
    <>
      <button
        onClick={() => redirect(to ? to : "")}
        className="bg-pipelines-gray-100 group relative z-0 mt-6 inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-lg px-10 py-2 font-medium tracking-tighter text-black/80 hover:text-white"
      >
        <span className="bg-pipeline-blue-200 absolute h-0 w-0 rounded-full transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56"></span>
        <span className="absolute inset-0 -mt-1 h-full w-full rounded-lg bg-gradient-to-b from-transparent via-transparent to-gray-200 opacity-30"></span>
        <span className="relative">{text}</span>
      </button>
    </>
  );
};

export default CTAButton;
