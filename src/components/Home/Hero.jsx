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
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
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
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  //  positions for each card
  const cardPositions = {
    advantages: {
      mobile: { top: "105%", left: 0 },
      desktop: { top: "85%", left: "-2.5rem" }
    },
    rating: {
      mobile: { bottom: "115%", right: 0 },
      desktop: { bottom: "3rem", right: "0rem" }
    },
    care: {
      mobile: { top: "-20%", left: "50%", transform: "translateX(-50%)" },
      desktop: { top: "1.75rem", left: "40%" }
    }
  };

  return (
    <section
      id="home"
      className="md:pt-[17vh] pt-14 pb-10 md:pb-20 min-h-screen max-w-screen mx-auto px-4 md:px-14 overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
    >
      {/* Background Blurs */}
      <div className="absolute -z-50 top-[-240px] left-[-180px] w-[900px] h-[900px] bg-[#F8D2D3]/40 rounded-full blur-3xl" />
      <div className="absolute -z-50 -top-2 right-[-220px] w-[900px] h-[600px] bg-[#114654]/25 rounded-full blur-3xl" />
      
      {/* Flex Container */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left Side */}
        <div className="flex-1 text-center lg:text-left mb-4 md:mb-0">
          <p className="font-medium text-lg uppercase mb-4">NeuroCheckPro</p>
          <h1 className="font-bold text-3xl md:text-5xl w-full md:max-w-3xl mb-6 leading-tight mx-auto lg:mx-0">
            Smarter <span className="text-primary">Autism </span>Care, Powered
            by Professional Clinicians
          </h1>
          <p className="w-full md:max-w-xl md:text-lg md:pb-4 text-gray-500 mx-auto lg:mx-0">
            A trusted digital platform that connects families with expert
            clinicians for early assessment, professional guidance, and
            personalized support.
          </p>

          {/* Users + Stores */}
          <div className="flex flex-col md:flex-row gap-4 items-center mt-6 justify-center lg:justify-start">
            <div className="flex items-center ">
              {[p1, p2, p3, p4, p5].map((user, index) => (
                <div
                  key={index}
                  className={`w-10 h-10 rounded-full overflow-hidden -ml-4 border-2 border-white`}
                >
                  <Image
                    src={user}
                    alt={`user ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="pl-2">
                <p className="text-secondary text-sm">
                  Personalised Care Pathways
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-10"
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
                  className="h-10"
                />
              </a>
            </div>
          </div>

          {/* Button */}
          <button className="mt-8 h-12 px-6 py-3 bg-[#0A4863] rounded-full text-white flex items-center justify-center gap-2 hover:bg-primary-dark transition mx-auto lg:mx-0 text-base">
            Learn More <IoIosArrowRoundForward size={24} />
          </button>
        </div>

        {/* Right Side */}
        <div className="relative flex-1 flex justify-center items-center mt-8 md:mt-0">
          {/* Orbits - Hidden on mobile */}
          <div className="absolute -z-10 -right-2/5 top-3/5 -translate-y-1/2 w-full max-w-[800px] aspect-square  justify-center items-center">
            <div className="w-full h-full border border-white rounded-full relative">
              <div className="w-6 h-6 border-2 border-white shadow-lg shadow-[#114654] bg-primary rounded-full absolute top-[-1%] left-[55%]" />
            </div>
            <div className="w-[80%] h-[80%] border border-white rounded-full absolute inset-0 m-auto">
              <div className="w-6 h-6 border-2 border-white shadow-lg shadow-[#114654] bg-primary rounded-full absolute top-[0%] left-[36%]" />
            </div>
            <div className="w-[60%] h-[60%] border border-white rounded-full absolute inset-0 m-auto">
              <div className="w-6 h-6 border-2 border-white shadow-lg shadow-[#114654] bg-primary rounded-full absolute top-[95%] left-[35%]" />
            </div>
          </div>

          <div className="relative w-full flex justify-center">
            {/* Main Image */}
            <Image
              src={ph}
              height={800}
              width={800}
              alt="neurocheckpro"
              className="object-cover md:pt-12 rounded-2xl relative z-20 max-w-xs md:max-w-md lg:max-w-xl"
            />

            {/* Cards  */}
            <div>
              {/* advantage */}
              <motion.div
                className="absolute bg-white shadow-lg rounded-xl w-fit z-20"
                style={{
                  top: isMobile ? cardPositions.advantages.mobile.top : cardPositions.advantages.desktop.top,
                  left: isMobile ? cardPositions.advantages.mobile.left : cardPositions.advantages.desktop.left,
                }}
                variants={cardVariants}
                initial="hidden"
                animate={isHovered ? "visible" : "hidden"}
                transition={{ delay: 0.1 }}
              >
                <div className="w-full h-12 md:h-14 flex items-center justify-center shadow-md shadow-gray-200">
                  <p className="text-lg md:text-xl font-semibold text-secondary">
                    Advantages
                  </p>
                </div>
                <ul className="space-y-2 p-3 md:p-4">
                  <li className="flex gap-2 md:gap-3 items-center text-sm md:text-base">
                    <HiShieldCheck color="#0DA43F" size={18} />
                    <span>Affordable & Transparent pricing</span>
                  </li>
                  <li className="flex gap-2 md:gap-3 items-center text-sm md:text-base">
                    <HiShieldCheck color="#0DA43F" size={18} />
                    <span>Parent–Clinician Connection</span>
                  </li>
                  <li className="flex gap-2 md:gap-3 items-center text-sm md:text-base">
                    <HiShieldCheck color="#0DA43F" size={18} />
                    <span>Clinically Informed, AI-Assisted</span>
                  </li>
                </ul>
              </motion.div>

{/* rating */}
              <motion.div
                className="absolute bg-white shadow-lg rounded-xl py-2 px-4 md:py-3 md:px-8 z-20 max-w-fit"
                style={{
                  bottom: isMobile ? cardPositions.rating.mobile.bottom : cardPositions.rating.desktop.bottom,
                  right: isMobile ? cardPositions.rating.mobile.right : cardPositions.rating.desktop.right,
                }}
                variants={cardVariants}
                initial="hidden"
                animate={isHovered ? "visible" : "hidden"}
                transition={{ delay: 0.2 }}
              >
                <div className="flex gap-1 text-yellow-400 pb-1 text-sm md:text-lg">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>
                <p className="text-gray-600 text-sm md:text-lg">Secure & Confidential</p>
              </motion.div>

              {/* Personalised Care Card */}
              <motion.div
                className="absolute bg-white shadow-lg rounded-xl p-2 md:p-3 w-48 md:w-56 z-20 flex justify-center items-center gap-2 md:gap-4"
                style={{
                  top: isMobile ? cardPositions.care.mobile.top : cardPositions.care.desktop.top,
                  left: isMobile ? cardPositions.care.mobile.left : cardPositions.care.desktop.left,
                  transform: isMobile ? cardPositions.care.mobile.transform : "none"
                }}
                variants={cardVariants}
                initial="hidden"
                animate={isHovered ? "visible" : "hidden"}
                transition={{ delay: 0.3 }}
              >
                <Image src={p6} height={32} width={32} className="h-8 w-8 md:h-10 md:w-10" />
                <p className="text-secondary text-sm md:text-lg">
                  Personalised Care
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