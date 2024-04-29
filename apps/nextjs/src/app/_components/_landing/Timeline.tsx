"use client";

import React from "react";
import Image from "next/image";

interface TimelineProps {
  children: React.ReactNode;
}

const Timeline: React.FC<TimelineProps> = ({ children }) => {
  return (
    <>
      <section>
        <div className="bg-black text-white">
          <div className="justfiy-evenly container mx-auto my-12 flex flex-col items-start md:my-24 md:flex-row">
            <div className="sticky mt-2 flex w-full translate-y-14 transform flex-col px-8 md:top-36 md:mt-24 lg:w-1/3">
              {children}
            </div>
            <div className="sticky ml-0 md:ml-52 lg:w-2/3">
              <div className="container mx-auto h-full w-full">
                <div className="wrap relative h-full overflow-hidden p-10">
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border"
                    style={{
                      left: "50%",
                      border: "2px solid #0265AC",
                      borderRadius: "1%",
                    }}
                  ></div>
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border"
                    style={{
                      left: "50%",
                      border: "2px solid #0265AC",
                      borderRadius: "1%",
                    }}
                  ></div>
                  <div className="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="text-pipeline-blue-200 mb-3 text-base">
                        May 2023 - September 2023
                      </p>
                      <h4 className="text-md mb-3 font-bold md:text-2xl">
                        Microsoft
                      </h4>
                      <h4 className="mb-3 text-lg font-light md:text-2xl">
                        Software Engineering Intern
                      </h4>
                    </div>
                  </div>
                  <div className="right-timeline mb-8 flex w-full items-center justify-between">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                      <p className="text-pipeline-blue-200 mb-3 text-base">
                        May 2022 - August 2022
                      </p>
                      <h4 className="mb-3 text-lg font-bold md:text-2xl">
                        Salesforce
                      </h4>
                      <h4 className="mb-3 text-lg font-light md:text-2xl">
                        Software Engineering Intern
                      </h4>
                    </div>
                  </div>
                  <div className="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="text-pipeline-blue-200 mb-3 text-base">
                        May 2021 - August 2021
                      </p>
                      <h4 className="mb-3 text-lg font-bold md:text-2xl">
                        DocuSign
                      </h4>
                      <h4 className="mb-3 text-lg font-light md:text-2xl">
                        Software Engineering Intern
                      </h4>
                    </div>
                  </div>

                  <div className="right-timeline mb-8 flex w-full items-center justify-between">
                    <div className="order-1 w-5/12"></div>

                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="text-pipeline-blue-200 mb-3 text-base">
                        May 2020 - August 2020
                      </p>
                      <h4 className="mb-3 text-left  text-lg font-bold md:text-2xl">
                        Lockheed Martin
                      </h4>
                      <h4 className="mb-3 text-left text-lg font-light md:text-2xl">
                        Software Engineer Intern
                      </h4>
                    </div>
                  </div>
                </div>
                <Image
                  width={420}
                  height={420}
                  className="mx-auto md:-mt-36"
                  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                  alt="error"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;
