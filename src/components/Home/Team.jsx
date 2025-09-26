"use client";
import React, { useState } from "react";
import Image from "next/image";
import { teamData } from "../../lib/data";

// Import images here
import founder from "../../../public/png/IMG_1013_SnapseedCopy.jpeg";
import cofounder from "../../../public/png/IMG_7702_SnapseedCopy_SnapseedCopy.jpeg"; 
import cto from "../../../public/png/1000217788.jpg"; 

const images = [founder, cofounder, cto];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const sliceText = (text, length) =>
    text.length > length ? text.slice(0, length) + "..." : text;

  return (
    <section
      id="meetourteam"
      className="max-w-screen lg:h-[90vh] mx-auto py-14 md:py-20 px-4 sm:px-6 md:px-10 lg:px-18 bg-[#114654]/5 "
    >
      <div className="mb-6 md:mb-16 flex flex-col items-center justify-center text-center">
        <h1 className="font-bold text-center text-xl md:text-2xl lg:text-4xl">
          Meet Our Team
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-4 px-3 md:px-0 ">
        {teamData.map((member, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center p-6 lg:h-auto md:h-[55vh] w-full bg-white rounded-2xl "
          >
            {/* Image */}
            <Image
              src={images[idx]}
              alt={member.name}
              width={128}
              height={128}
              className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover border-2 lg:border-4 border-[#114654]/20 mb-4"
            />

            {/* Name & Designation */}
            <h2 className="font-bold text-base md:text-lg lg:text-xl">
              {member.name}
            </h2>
            <p className="text-xs lg:text-sm text-gray-600 mb-3">
              {member.title}
            </p>

            {/* Responsive Bio */}
            <p className="block sm:hidden text-xs text-gray-500 leading-relaxed">
              {sliceText(member.bio, 40)}
            </p>
            <p className="hidden sm:block lg:hidden text-xs text-gray-500 leading-relaxed">
              {sliceText(member.bio, 74)}
            </p>
            <p className="hidden lg:block text-sm text-gray-500 leading-relaxed">
              {sliceText(member.bio, 85)}
            </p>

            {/* Read More Button */}
            <button
              onClick={() => setSelectedMember({ ...member, img: images[idx] })}
              className="mt-3 underline  text-[#114654 rounded-lg text-xs md:text-sm"
            >
              Read More
            </button>
          </div>
        ))}

        {/* Blank Cards */}
        <div className="flex flex-col items-center text-center justify-center p-6 lg:h-[50vh] md:h-[55vh] w-full bg-white rounded-2xl ">
          <p className="font-bold text-lg md:text-xl mb-3">Clinician</p>
          <p className="text-gray-500">Coming Soon</p>
        </div>
        <div className="flex flex-col items-center text-center justify-center p-6 lg:h-[50vh] md:h-[55vh] w-full bg-white rounded-2xl ">
          <p className="font-bold text-lg md:text-xl mb-3">Clinician</p>
          <p className="text-gray-500">Coming Soon</p>
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 p-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-lg w-full relative">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <Image
              src={selectedMember.img}
              alt={selectedMember.name}
              width={128}
              height={128}
              className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-[#114654]/20 mb-4 mx-auto"
            />

            <h2 className="font-bold text-lg md:text-xl text-center">
              {selectedMember.name}
            </h2>
            <p className="text-sm md:text-base text-gray-600 text-center mb-4">
              {selectedMember.title}
            </p>
            <p className="text-sm text-gray-500 leading-relaxed text-justify">
              {selectedMember.bio}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;
