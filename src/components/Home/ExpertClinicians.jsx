"use client";
import Image from "next/image";
import c1 from "../../../public/png/user4.png";
import c2 from "../../../public/png/image 9.png";

export default function ExpertClinicians() {
  return (
    <section className="relative max-w-screen mx-auto py-10 md:py-12 lg:py-20 px-4 md:px-8 lg:px-14 flex flex-col items-center bg-gradient-to-b from-[#114654] to-[#0C738E] overflow-hidden h-[50vh] md:min-h-screen">
      <div className="text-center mb-6 md:mb-8 lg:mb-10 max-w-3xl">
        <h2 className="text-xl md:text-4xl xl:text-5xl font-semibold text-white mb-3 md:mb-4">
          Meet Our Expert Clinicians
        </h2>
        <p className="text-white text-sm md:text-base lg:text-lg xl:text-xl">
          Our team of experienced clinicians is dedicated to providing accurate
          and compassionate neurological assessments.
        </p>
      </div>

      <div className="relative w-full max-w-4xl aspect-square flex items-center justify-center top-2 md:top-6 lg:top-1">
        {/* Orbit Container */}
        <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-4xl h-full flex justify-center items-center overflow-hidden">
          <div className="relative w-[280px] sm:w-[360px] md:w-[500px] lg:w-[700px] aspect-square flex justify-center items-center">
            {/* Outer Orbit */}
            <div className="absolute w-full h-full border border-white rounded-full">
              <div className="absolute top-0 left-[60%] w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 border-2 border-white bg-gray-500 rounded-full -translate-x-1/2" />
            </div>

            {/* Middle Orbit */}
            <div className="absolute w-[80%] h-[80%] border border-white rounded-full inset-0 m-auto">
              <div className="absolute top-[18%] left-[10%] w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 border-2 border-white bg-gray-500 rounded-full -translate-x-1/2" />
            </div>

            {/* Inner Orbit */}
            <div className="absolute w-[60%] h-[60%] border border-white rounded-full inset-0 m-auto">
              <div className="absolute top-[0%] left-1/3 w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 border-2 border-white bg-gray-500 rounded-full -translate-x-1/2" />
            </div>
          </div>
        </div>

        {/* Clinician Images */}
        <Image
          src={c1}
          alt="Clinician"
          className="absolute top-[25%] left-[20%] -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg border-2 border-white
                 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
        />
        <Image
          src={c1}
          alt="Clinician"
          className="absolute top-[15%] right-2/6 translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg border-2 border-white
                 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-20 lg:h-20"
        />
        <Image
          src={c1}
          alt="Clinician"
          className="absolute top-[32%] right-[30%] md:top-[40%] md:right-[27%] translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg border-2 border-white
                 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-14 lg:h-14"
        />

        {/* Top Left Badge */}
        <div className="absolute top-4 sm:top-6 md:top-8 lg:top-24 left-0 sm:left-2 md:-left-4 lg:-left-6 bg-white px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-1.5 md:py-2 lg:py-3 rounded-lg shadow-lg z-20 max-w-[140px] lg:max-w-[260px]">
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
            <Image
              src={c2}
              alt="Badge"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-10 lg:h-10"
            />
            <div>
              <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-800">
                Certified Clinical Psychologist (CCP)
              </p>
            </div>
          </div>
        </div>

        {/* Top Right Badge */}
        <div className="absolute -top-2  md:top-6 right-0 sm:right-2 md:-right-4 lg:-right-0 bg-white px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-1.5 md:py-2 lg:py-3 rounded-lg shadow-lg z-20 max-w-[160px] lg:max-w-[260px]">
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
            <Image
              src={c2}
              alt="Badge"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-10 lg:h-10"
            />
            <div>
              <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-800">
                Board-Certified Pediatric
              </p>
              <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-800">
                Neurologist (BCPN)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Right Badge */}
        <div className="absolute bottom-[52%] md:bottom-[50%] right-0 sm:right-2 md:-right-[8%]  bg-white px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-1.5 md:py-2 lg:py-3 rounded-lg shadow-lg z-20  max-w-[140px] md:max-w-[200px] lg:max-w-[280px]">
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
            <Image
              src={c2}
              alt="Badge"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-10 lg:h-10"
            />
            <div>
              <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-800">
                Registered ADHD Specialist (RADS)
              </p>
            </div>
          </div>
        </div>

        {/* Center Text */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-white text-center -mt-[5%] md:-mt-[8%] ">
          100+ Expert <br /> Clinicians
        </p>
      </div>
    </section>
  );
}
