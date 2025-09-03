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
      className="max-w-screen mx-auto py-14 md:py-20 px-4 md:px-10 lg:px-18"
    >
      {/* Heading */}
      <div className="mb-12 md:mb-16 flex flex-col items-center justify-center text-center">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6">
          How <span className="text-gray-500">Neurocheckpro Works</span>
        </h2>
        <p className="max-w-4xl text-secondary text-sm sm:text-base md:text-lg">
          A simple step-by-step process that combines smart technology with
          expert care to guide parents in supporting their child's development
          effectively.
        </p>
      </div>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-14">
        {/* Left side - animated */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 70, damping: 20 }}
          className="flex-1 sticky md:top-20 bg-[#FFE2F7] rounded-xl w-full order-1 lg:order-none"
        >
          <div className="flex justify-between items-start">
            <div className="rounded-full border border-[#849DAE] md:m-6 m-3 py-2 px-6 w-fit h-full mb-4 md:mb-6">
              <p className="text-base md:text-lg font-medium">5 Quick Steps</p>
            </div>
            <Image
              src={c1}
              height={400}
              width={400}
              className="h-[200px] w-[160px] sm:h-[280px] sm:w-[220px] md:h-[300px] md:w-[230px]"
              alt="Curve"
            />
          </div>
          <p className="text-2xl sm:text-3xl md:text-5xl leading-snug p-6 md:p-8">
            Your path <br />
            to <span className="font-semibold italic">Wellness</span>
          </p>
        </motion.div>

        {/* Right side */}
        <div className="relative order-2 lg:order-none">
          <div
            ref={listContainerRef}
            className="max-h-[380px] sm:max-h-[420px] md:max-h-[500px] overflow-y-auto pr-2 md:pr-4 space-y-6 sm:space-y-8 md:space-y-12 pt-4 sm:pt-6 md:pt-10 hide-scrollbar"
          >
            {howItWorksSteps.map((item) => (
              <div key={item.id} className="flex items-start gap-4 md:gap-8">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-gray-500 text-white flex items-center justify-center text-base sm:text-lg md:text-3xl font-semibold">
                  {item.id}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base max-w-sm md:max-w-3xl pr-4 md:pr-0">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Fade effect */}
          {showFade && (
            <div className="absolute bottom-0 left-0 right-4 h-20 md:h-48 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
