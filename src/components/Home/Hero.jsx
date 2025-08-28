"use client";
import React from "react";
import Image from "next/image";
import ph from "../../../public/png/herobanner.png";
import p1 from "../../../public/png/user1.png";
import p2 from "../../../public/png/user2.png";
import p3 from "../../../public/png/user3.png";
import p4 from "../../../public/png/user4.png";
import p5 from "../../../public/png/user5.png";
import p6 from "../../../public/png/circular.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiShieldCheck } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="pt-[16vh] pb-20 max-w-screen mx-auto px-4 md:px-14 h-screen overflow-hidden relative">
      <div className="absolute -z-50 top-[-250px] left-[-140px] w-[800px] h-[800px] bg-[#F8D2D3]/35 rounded-full blur-3xl" />
      <div className="absolute -z-50 bottom-20 right-[-260px] w-[1100px] h-[700px] bg-[#114654]/30 rounded-full blur-3xl" />

      <div className="flex justify-between items-center">
        <div className="">
          <p className="font-medium text-lg uppercase mb-4">NeuroCheckPro</p>
          <h1 className="font-semibold text-6xl max-w-2xl mb-8">
            Smarter <span className="text-primary">Autism </span>Care, Powered
            by Professional Clinicians
          </h1>
          <p className="max-w-xl text-gray-500">
            A trusted digital platform that connects families with expert
            clinicians for early assessment, professional guidance, and
            personalized support.
          </p>
          <div className="flex gap-8 items-center mt-6">
            <div className="flex items-center">
              {[p1, p2, p3, p4, p5].map((user, index) => (
                <div
                  key={index}
                  className={`w-10 h-10 rounded-full overflow-hidden -ml-4`}
                >
                  <Image
                    src={user}
                    alt={`user ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="flex flex-col pl-4">
                <p className="text-secondary text-sm">
                  Personalised Cared Pathways
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
          <button className="mt-8 h-13 px-6 py-3 bg-[#0A4863] rounded-full text-white font-semibold flex items-center justify-center gap-2 hover:bg-primary-dark transition">
            Learn More <FaArrowRightLong size={18} />
          </button>
        </div>

        {/* Right Side */}
        <div className="relative pt-20 pr-20">
          <div className="absolute z-10 right-[-150px] top-[50%] transform -translate-y-1/2 overflow-hidden w-[300px] h-[500px]">
            <div className="w-[500px] h-[500px] border-2 border-[#0A4863]/30 rounded-full absolute" />
            <div className="w-[350px] h-[350px] border-2 border-[#0A4863]/20 rounded-full absolute top-[75px] left-[75px]" />
            <div className="w-[200px] h-[200px] border-2 border-[#0A4863]/10 rounded-full absolute top-[150px] left-[150px]" />
          </div>

          <Image
            src={ph}
            height={600}
            width={600}
            alt="neurocheckpro"
            className="object-cover rounded-2xl relative z-20"
          />

          {/* Rectangles */}
          <div>
            <div className="absolute top-[90%] -left-20 bg-white shadow-lg rounded-xl w-fit z-20">
              <div className="w-full h-14 flex items-center justify-center shadow-md shadow-gray-200">
                <p className="text-xl font-semibold text-secondary">
                  Advantages
                </p>
              </div>

              <ul className="space-y-2 p-6">
                <li className="flex gap-3  items-center">
                  <HiShieldCheck color="#0DA43F" size={20} />
                  <span>Affordable & Transparent pricing</span>
                </li>
                <li className="flex gap-3  items-center">
                  <HiShieldCheck color="#0DA43F" size={20} />
                  <span>Parent–Clinician Connection</span>
                </li>
                <li className="flex gap-3  items-center">
                  <HiShieldCheck color="#0DA43F" size={20} />
                  <span>Clinically Informed, AI-Assisted</span>
                </li>
              </ul>
            </div>

            <div className="absolute bottom-12 -right-18 w-fit transform -translate-x-1/2 bg-white shadow-lg rounded-xl py-4 px-10  z-20">
              <div className="flex gap-1 text-yellow-400 mb-1 text-xl">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className=" text-gray-600 text-lg">
               Secure & Confidential
              </p>
            </div>

            <div className="absolute top-7 left-[40%] bg-white shadow-lg rounded-xl p-4 w-60 z-20 flex justify-center items-center gap-4">
              <Image src={p6} height={100} width={100} className="h-10 w-10" />
              <p className="text-secondary text-lg">
                Personalised Care Pathways
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
