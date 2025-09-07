"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ph from "../../../public/png/herobanner.png";
import p1 from "../../../public/png/user1.png";
import p2 from "../../../public/png/user2.png";
import p3 from "../../../public/png/user3.png";
import p4 from "../../../public/png/user4.png";
import p5 from "../../../public/png/user5.png";
import p6 from "../../../public/png/circular.png";
import { FaArrowRightLong, FaStar } from "react-icons/fa6";
import { HiShieldCheck } from "react-icons/hi2";
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [screenType, setScreenType] = useState("desktop");

  const handleScroll = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth < 768) {
        setScreenType("mobile");
      } else if (window.innerWidth < 1024) {
        setScreenType("tablet");
      } else {
        setScreenType("desktop");
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  };

  // Adjusted positions for mobile visibility
  const cardPositions = {
    advantages: {
      mobile: { top: "96%", left: "-2%", transform: "translateX(-50%)" },
      tablet: { top: "96%", left: "-2rem" },
      desktop: { top: "88%", left: "-6rem" },
    },
    rating: {
      mobile: { top: "50%", right: "-10%" },
      tablet: { top: "60%", right: "-16%" },
      desktop: { bottom: "10%", right: "-7%" },
    },
    care: {
      mobile: { top: "-22%", left: "-3%", transform: "translateX(-50%)" },
      tablet: { top: "8%", left: "20%" },
      desktop: { top: "1rem", left: "25%" },
    },
  };

  return (
    <section
      id="home"
      className="pt-10 pb-24 md:pt-[19vh] md:pb-20 
                 max-w-screen mx-auto px-4 md:px-14 
                 overflow-hidden relative 
                 min-h-[110vh] md:min-h-[100vh] "
      onMouseEnter={() => setIsHovered(true)}
    >
      {/* Background Blurs */}
      <div className=" absolute -z-50 top-[-120px] left-[-90px] w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] md:w-[900px] md:h-[900px] bg-[#F8D2D3]/40 rounded-full blur-3xl " />
      <div className=" absolute -z-50 top-[50%] md:top-1 right-[-110px] w-[360px] h-[280px] md:w-[900px] md:h-[600px]  bg-[#114654]/25 rounded-full blur-3xl " />

      {/* Container */}
      <div className="flex flex-col md:flex-row justify-center md:justify-start  items-center md:items-start  gap-[10%] xl:gap-[12%]">
        {/* Left Side */}
        <div className="flex-1  text-center md:text-left mb-4 md:mb-0">
          <p className="font-medium text-xs md:text-lg uppercase mb-2 xl:mb-2">
            NeuroCheckPro
          </p>
          <h1 className="font-bold text-xl md:text-4xl xl:text-5xl w-full md:w-[95%] mb-4 lg:mb-6 leading-tight mx-auto lg:mx-0">
            Smarter <span className="text-primary">Autism </span>Care, Powered
            by Professional Clinicians
          </h1>
          <p className="w-full md:max-w-xl text-sm md:text-base lg:max-w-2xl  lg:text-lg text-gray-500 mx-auto lg:mx-0">
            A trusted digital platform that connects families with expert
            clinicians for early assessment, professional guidance, and
            personalized support.
          </p>

          {/* Users + Stores */}
          <div className="flex flex-col md:flex-row items-center mt-4 lg:mt-6 justify-center lg:justify-start gap-1 md:gap-2">
            <div className="flex items-center flex-1">
              <div className=" flex items-center ml-3">
                {[p1, p2, p3, p4, p5].map((user, index) => (
                  <div key={index} className={` -ml-3`}>
                    <Image
                      src={user}
                      alt={`user ${index + 1}`}
                      className="w-8 h-8  xl:w-12 xl:h-12 object-cover rounded-full border-2 border-white "
                    />
                  </div>
                ))}
              </div>
              <div className="ml-2 flex flex-col w-full">
                <p className="text-secondary text-sm md:text-base font-medium">
                  1200+
                </p>
                <p className="text-secondary text-sm lg:text-base">
                  Patients are served
                </p>
              </div>
            </div>
            <div className="flex gap-4 flex-1 w-fit">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-10 md:h-12"
                />
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-10 md:h-12"
                />
              </a>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={handleScroll}
            className="mt-6 lg:mt-8 h-9 md:h-10 lg:h-12 px-3 lg:px-6 py-1.5 lg:py-3 bg-[#0A4863] rounded-full text-white flex items-center justify-center gap-2 hover:bg-primary-dark transition mx-auto lg:mx-0 text-sm md:text-base"
          >
            Learn More <IoIosArrowRoundForward size={24} />
          </button>
        </div>

        {/* Right Side */}
        <div className="relative flex-1 flex justify-center items-center mt-4 md:mt-0 min-h-[50vh] md:min-h-0">
          {/* Orbits  */}
          <div className="absolute -z-10 -right-2/5 md:-right-[45%] top-1/2 md:top-[65%] lg:top-[62%]  -translate-y-1/2 w-full max-w-[900px] aspect-square flex justify-center items-center">
            <div className="w-full h-full border border-white rounded-full relative">
              <div className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-white shadow-lg shadow-[#114654] bg-primary rounded-full absolute top-[-1%] left-[55%]" />
            </div>
            <div className="w-[80%] h-[80%] border border-white rounded-full absolute inset-0 m-auto">
              <div className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-white shadow-lg shadow-[#114654] bg-primary rounded-full absolute top-[0%] left-[36%]" />
            </div>
            <div className="w-[60%] h-[60%] border border-white rounded-full absolute inset-0 m-auto">
              <div className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-white shadow-lg shadow-[#114654] bg-primary rounded-full absolute top-[95%] left-[35%]" />
            </div>
          </div>

          <div className="relative w-full flex justify-center">
            {/* Main Image */}
            <Image
              src={ph}
              height={800}
              width={800}
              alt="neurocheckpro"
              className="object-cover rounded-2xl relative z-20 md:pt-[20%] lg:pt-[8%] w-[95%]"
            />

            {/* Floating Cards */}
            <div>
              {/* Advantages */}
              <motion.div
                className="absolute bg-white shadow-lg rounded-xl z-30"
                style={{
                  top: cardPositions.advantages[screenType].top,
                  left: cardPositions.advantages[screenType].left,
                  transform:
                    cardPositions.advantages[screenType].transform || "none",
                  width: screenType === "mobile" ? "90%" : "auto",
                  maxWidth: screenType === "mobile" ? "230px" : "none",
                }}
                variants={cardVariants}
                initial="hidden"
                animate={
                  isHovered || screenType !== "desktop" ? "visible" : "hidden"
                }
              >
                <div className="w-full h-9 md:h-10 xl:h-12 flex items-center justify-center shadow-md shadow-gray-200">
                  <p className="text-base md:text-lg xl:text-xl font-semibold text-secondary">
                    Advantages
                  </p>
                </div>
                <ul className="space-y-2 p-3 md:p-4 xl:p-5">
                  <li className="flex gap-2 items-center text-sm">
                    <HiShieldCheck className="text-green-600 text-base md:text-lg lg:text-2xl" />
                    <span className="text-xs md:text-sm lg:text-lg">
                      Affordable & Transparent pricing
                    </span>
                  </li>
                  <li className="flex gap-2 items-center text-sm">
                    <HiShieldCheck className="text-green-600 text-base md:text-lg lg:text-2xl" />
                    <span className="text-xs md:text-sm lg:text-lg">
                      Parent–Clinician Connection
                    </span>
                  </li>
                  <li className="flex gap-2 items-center text-sm">
                    <HiShieldCheck className="text-green-600 text-base md:text-lg lg:text-2xl" />
                    <span className="text-xs md:text-sm lg:text-lg">
                      Clinically Informed, AI-Assisted
                    </span>
                  </li>
                </ul>
              </motion.div>

              {/* Rating Card */}
              <motion.div
                className="absolute bg-white shadow-lg rounded-xl py-1.5 px-4 md:py-3 md:px-6 z-30"
                style={{
                  top: cardPositions.rating[screenType].top,
                  right: cardPositions.rating[screenType].right,
                  bottom: cardPositions.rating[screenType].bottom,
                  minWidth: screenType === "mobile" ? "140px" : "auto",
                }}
                variants={cardVariants}
                initial="hidden"
                animate={
                  isHovered || screenType !== "desktop" ? "visible" : "hidden"
                }
              >
                <div className="flex gap-1 text-yellow-400 pb-1 text-sm md:text-lg">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>
                <p className="text-gray-600 text-xs md:text-base lg:text-lg">
                  Secure & Confidential
                </p>
              </motion.div>

              {/* Personalised Care Card */}
              <motion.div
                className="absolute bg-white shadow-lg rounded-xl p-2 md:px-3 md:py-2 z-30 flex justify-center items-center gap-2 xl:gap-4"
                style={{
                  top: cardPositions.care[screenType].top,
                  left: cardPositions.care[screenType].left,
                  transform: cardPositions.care[screenType].transform || "none",
                  width: screenType === "mobile" ? "200px" : "auto",
                }}
                variants={cardVariants}
                initial="hidden"
                animate={
                  isHovered || screenType !== "desktop" ? "visible" : "hidden"
                }
              >
                <Image
                  src={p6}
                  height={32}
                  width={32}
                  className="h-6 w-6 md:h-8 md:w-8 xl:h-10 xl:w-10"
                />
                <p className="text-secondary text-xs md:text-sm xl:text-lg">
                  Personalised Care Pathways
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
