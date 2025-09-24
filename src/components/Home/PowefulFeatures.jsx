"use client";
import React, { useState } from "react";
import { powerfulFeatures } from "../../lib/data";

const PowerfulFeatures = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="features"
      className="py-12 md:py-16 max-w-screen mx-auto px-4 md:px-14 flex flex-col items-center justify-center overflow-hidden bg-primary"
    >
      <div className="text-white gap-8 md:gap-12 flex flex-col md:flex-row items-center md:items-end justify-between w-full mb-6 md:md-8 text-center md:text-left">
        <h1 className="font-semibold text-xl md:text-3xl lg:text-5xl w-full md:w-1/3">
          Powerful Features, Simple Experience
        </h1>
        {/* <p className="md:w-1/2 w-full text-sm md:text-lg xl:text-xl">
          Discover how our platform makes developmental care easier, smarter,
          and more accessible. From guided assessments to expert clinician
          feedback, every feature is designed to support your child's growth
          with clarity and confidence.
        </p> */}
      </div>

      {/* Cards Section */}
      <section className="w-full py-8 rounded-3xl">
        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 ">
          {powerfulFeatures.map((card, index) => (
            <div
              key={index}
              className=" bg-white rounded-xl flex flex-col justify-start items-start lg:gap-[33%] md:gap-[12%] p-4 md:p-5 h-[320px] md:h-[400px] lg:h-[400px] w-full  "
            >
              <img
                src={card.Image}
                alt={card.title}
                className="
            object-cover rounded-md
            w-[70px] h-[70px]  md:w-[80px] md:h-[80px] mb-3 md:mb-4 lg:mb-5
          "
              />
              <div className="md:space-y-4">
                <h3 className="text-gray-800 font-semibold text-base lg:text-lg  ">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-xs lg:text-sm  text-balance ">
                  {card.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Accordion for mobile */}
        <div className="md:hidden w-full space-y-4">
          {powerfulFeatures.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm"
            >
              <button
                className="flex items-center gap-4 p-4 w-full text-left"
                onClick={() => toggleAccordion(index)}
              >
                <img
                  src={card.Image}
                  alt={card.title}
                  className="w-10 h-10 object-cover rounded-md flex-shrink-0"
                />
                <span className="text-sm font-medium text-gray-800 flex-grow">
                  {card.title}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600 animate-fadeIn">
                  {card.subtitle}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PowerfulFeatures;
