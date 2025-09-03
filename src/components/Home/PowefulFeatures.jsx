"use client";
import React, { useState } from "react";

const PowerfulFeatures = () => {
  const cards = [
    {
      Image: "/png/powerful1.png",
      title: "AI-Powered Development Assessment",
      subtitle:
        "Parents answer structured questions, and the system analyzes responses to highlight potential concerns in a clear, easy-to-understand way.",
    },
    {
      Image: "/png/powerful2.png",
      title: "Clinician Feedback & Prescription",
      subtitle:
        "Verified clinicians review assessment results and provide professional feedback, and prescriptions when necessary.",
    },
    {
      Image: "/png/powerful3.png",
      title: "Multiple Child Profile Management",
      subtitle:
        "Parents can create and manage multiple child profiles with details like age, gender, and developmental history for tailored assessments.",
    },
    {
      Image: "/png/powerful4.png",
      title: "Secure Communication & Records",
      subtitle:
        "All assessments, clinician feedback, and prescriptions are stored safely, allowing parents to access past reports anytime.",
    },
    {
      Image: "/png/powerful5.png",
      title: "Flexible Plans & Transparent Pricing",
      subtitle:
        "Options for free initial assessments, detailed paid assessments, and clear information on clinician commissions and service charges.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="features"
      className="py-16 max-w-screen mx-auto px-4 md:px-14 flex flex-col items-center justify-center overflow-hidden bg-primary"
    >
      {/* Text Section */}
      <div className="text-white gap-8 md:gap-12 flex flex-col md:flex-row items-center md:items-end justify-between w-full mb-10 text-center md:text-left">
        <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl w-full md:w-2/5">
          Powerful Features, Simple Experience
        </h1>
        <p className="md:w-1/2 w-full text-base md:text-lg lg:text-xl">
          Discover how our platform makes developmental care easier, smarter,
          and more accessible. From guided assessments to expert clinician
          feedback, every feature is designed to support your child's growth
          with clarity and confidence.
        </p>
      </div>

      {/* Cards Section */}
      <section className="w-full py-8 rounded-3xl">
        {/* Large screens: 5 cards in a row */}
        <div className="hidden md:flex flex-wrap justify-center gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="md:w-[19%] lg:h-[400px] md:h-[400px]  py-4 pl-4 pr-3 bg-white rounded-xl flex flex-col justify-start  items-start gap-18 hover:shadow-lg transition-all duration-300"
            >
              <img
                src={card.Image}
                alt={card.title}
                className="w-[100px] h-[100px] object-cover rounded-md"
              />
              <div>
                <h3 className="text-gray-800 text-lg font-semibold pb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-base ">
                  {card.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Medium screens: 3 cards in a row */}
        <div className="hidden md:flex xl:hidden flex-wrap justify-center gap-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-[30%] h-[400px] py-5 px-4 bg-white rounded-xl flex flex-col justify-between gap-4 hover:shadow-lg transition-all duration-300"
            >
              <img
                src={card.Image}
                alt={card.title}
                className="w-[70px] h-[70px] object-cover rounded-md"
              />
              <div>
                <h3 className="text-gray-800 text-base font-semibold pb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm text-balance">
                  {card.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Small-medium screens: 2 cards in a row */}
        <div className="hidden sm:flex md:hidden flex-wrap justify-center gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-[45%] h-[380px] py-4 px-3 bg-white rounded-xl flex flex-col justify-between gap-3 hover:shadow-lg transition-all duration-300"
            >
              <img
                src={card.Image}
                alt={card.title}
                className="w-[60px] h-[60px] object-cover rounded-md"
              />
              <div>
                <h3 className="text-gray-800 text-sm font-semibold pb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-xs text-balance">
                  {card.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile screens: Accordion */}
        <div className="sm:hidden w-full space-y-4">
          {cards.map((card, index) => (
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
                  className="w-12 h-12 object-cover rounded-md flex-shrink-0"
                />
                <span className="text-base font-medium text-gray-800 flex-grow">
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