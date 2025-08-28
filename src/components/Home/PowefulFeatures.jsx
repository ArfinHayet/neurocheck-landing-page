"use client";
import React from "react";
import Image from "next/image";
//import { useEffect, useRef } from "react";
//import {  Accordion, AccordionContent,  AccordionItem,  AccordionTrigger,} from "@/components/ui/accordion";



const PowerfulFeatures =() => {
  const cards = [
    {
      Image: "/png/powerful1.png",
      title: "AI-Powered Development Assessment",
      subtitle: "Parents answer structured questions, and the system analyzes responses to highlight potential concerns in a clear, easy-to-understand way.",
    },
    {
      Image: "/png/powerful2.png",
      title: "Clinician Feedback & Prescription",
      subtitle: "Verified clinicians review assessment results and provide professional feedback, and prescriptions when necessary.",
    },
    {
      Image: "/png/powerful3.png",
      title: "Multiple Child Profile Management",
      subtitle: "Parents can create and manage multiple child profiles with details like age, gender, and developmental history for tailored assessments.",
    },
    {
      Image: "/png/powerful4.png",
      title: "Secure Communication & Records",
      subtitle: "All assessments, clinician feedback, and prescriptions are stored safely, allowing parents to access past reports anytime.",
    },
    {
      Image: "/png/powerful5.png",
      title: "Flexible Plans & Transparent Pricing",
      subtitle: "Options for free initial assessments, detailed paid assessments, and clear information on clinician commissions and service charges.",
    },
  ];

  return (
    <div  id="about" className="bg-[#114654] mt-26 max-w-screen mx-auto px-4 md:px-14 lg:px-18 flex flex-col items-center justify-center overflow-hidden">
  
        <div className="text-white flex items-end justify-between  w-full mt-18 mb-4">
         <h1 className="font-semibold text-5xl w-lg ">Powerful Features, Simple Experience</h1>
          <p className="w-2xl text-lg ">
           Discover how our platform makes developmental care easier, smarter, and more accessible. From guided assessments to expert clinician feedback, every feature is designed to support your child’s growth with clarity and confidence.
          </p>
        </div>
    

{/* cards section */}
      <section className=" w-full py-20   rounded-3xl">

        {/* Large screen layout */}
        <div className="hidden lg:flex flex-wrap justify-center gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="lg:w-[18%] md:w-[200px] lg:h-[450px] md:h-[250px]  py-[18px] px-4 bg-white transition duration-300 rounded-xl cursor-pointer flex items-start flex-col justify-center gap-12 "
            >
              <img
                src={card.Image}
                alt={card.title}
                className="w-[100px] h-[100px] object-cover object-center rounded-md mt-[5px] mb-1"
              />
              <div className="flex flex-col justify-center gap-4"> 
                    <h3 className="text-xl font-semibold text-gray-800">
                {card.title}
              </h3>
              <p className="text-justify text-gray-600 pb-2 text-lg">{card.subtitle}</p>
              </div>
          
            </div>
          ))}
        </div>

        {/* Small screen accordion layout */}
        {/* <div className="lg:hidden w-full">
          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {cards.map((card, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white/70 rounded-xl overflow-hidden">
                <AccordionTrigger className="flex items-center gap-4 p-4">
                  <img
                    src={card.Image}
                    alt={card.title}
                    className="w-[48px] h-[48px] object-cover rounded-md"
                  />
                  <span className="text-base font-medium text-gray-800">{card.title}</span>
                </AccordionTrigger>
                <AccordionContent className="text-center px-6 pb-4 text-base text-gray-600">
                  {card.subtitle}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div> */}


      </section>

   
    </div>
  );
};

export default PowerfulFeatures;