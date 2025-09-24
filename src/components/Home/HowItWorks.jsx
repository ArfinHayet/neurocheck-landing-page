"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import c1 from "../../../public/png/curve.png";
import Image from "next/image";
import { howItWorksSteps } from "@/lib/data";

const HowItWorks = () => {
  const listContainerRef = useRef(null);
  const [showFade, setShowFade] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (listContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } =
          listContainerRef.current;
        setShowFade(scrollTop + clientHeight < scrollHeight - 10);
      }
    };

    const listContainer = listContainerRef.current;
    if (listContainer) {
      listContainer.addEventListener("scroll", checkScroll);
      checkScroll();
      return () => {
        listContainer.removeEventListener("scroll", checkScroll);
      };
    }
  }, []);

  return (
    <section
      id="howitworks"
      className="max-w-screen mx-auto py-14 md:py-20 px-4 sm:px-6 md:px-10 lg:px-18"
    >
      <div className="mb-12 md:mb-16 flex flex-col items-center justify-center text-center">
        <h2 className="font-bold text-xl md:4xl xl:text-5xl mb-4 md:mb-6">
          How <span className="text-gray-500">Neurocheck Pro Works</span>
        </h2>
        {/* <p className="max-w-4xl text-secondary text-sm sm:text-base md:text-lg">
          A simple step-by-step process that combines smart technology with
          expert care to guide parents in supporting their child's development
          effectively.
        </p> */}
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Left  */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 70, damping: 20 }}
          className="w-full md:w-1/3 sticky md:top-20 bg-[#FFE2F7] rounded-xl order-1 md:order-none"
        >
          <div className="flex justify-between items-start">
            <div className="rounded-full w-[100%] lg:w-fit border border-[#849DAE] m-3 md:m-4 py-2 px-2 md:px-4 mb-4 md:mb-6">
              <p className="text-sm sm:text-base font-medium">4 Quick Steps</p>
            </div>
            <Image
              src={c1}
              height={400}
              width={400}
              className="h-[180px] w-[120px] md:h-[300px] md:w-[200px] lg:w-[240px] "
              alt="Curve"
            />
          </div>
          <p className="text-xl md:text-5xl leading-snug p-4 md:p-6">
            Your path <br />
            to <span className="font-semibold italic">Wellness</span>
          </p>
        </motion.div>

        {/* Right */}
        <div className="relative w-full md:w-2/3 order-2 md:order-none">
          <div
            ref={listContainerRef}
            className="max-h-[360px] sm:max-h-[420px] md:max-h-[500px] overflow-y-auto pr-2 sm:pr-3 md:pr-4 space-y-6  md:space-y-10 pt-4  md:pt-8 hide-scrollbar"
          >
            {howItWorksSteps.map((item) => (
              <div key={item.id} className="flex items-start gap-2 md:gap-4 ">
                <div className="flex-shrink-0 w-8 h-8 md:h-10 md:w-10 lg:w-14 lg:h-14 rounded-full bg-gray-500 text-white flex items-center justify-center text-sm sm:text-lg md:text-2xl font-semibold">
                  {item.id}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-base w-[90%] pr-3 md:pr-0">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Fade effect */}
          {showFade && (
            <div className="absolute bottom-0 left-0 right-4 h-16 sm:h-20 md:h-48 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
