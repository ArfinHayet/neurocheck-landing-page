"use client";
import React, { useRef, useEffect, useState } from "react";
import c1 from "../../../public/png/curve.png";
import Image from "next/image";

const HowItWorks = () => {
  const listItems = [
    {
      id: 1,
      title: "Initial Assessment",
      desc: "Start with a short set of simple questions designed for parents. You share your child's basic concerns quickly and allows the system to understand where support may be needed.",
    },
    {
      id: 2,
      title: "Detailed Assessment",
      desc: "Move on to a structured full assessment divided into easy categories. It gives a clearer picture of your child's behaviors, helping clinicians identify specific areas that need attention.",
    },
    {
      id: 3,
      title: "AI-Powered Summary",
      desc: "Our AI instantly generates a clear and clinician-friendly summary from the answers. This summary highlights patterns, making it easy for clinician to understand your child's development.",
    },
    {
      id: 4,
      title: "Clinician Feedback",
      desc: "A qualified clinician carefully reviews the summary. They add personalized notes, professional insights, and recommendations, ensuring that the findings are tailored specifically to your child's situation.",
    },
    {
      id: 5,
      title: "Get Recommendations",
      desc: "Parents receive practical advice and actionable recommendations directly from the clinician. This could include strategies to support your child's growth and wellbeing.",
    },
  ];

  const listContainerRef = useRef(null);
  const [showFade, setShowFade] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (listContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = listContainerRef.current;
        // Show fade if not scrolled to the bottom
        setShowFade(scrollTop + clientHeight < scrollHeight - 10);
      }
    };

    const listContainer = listContainerRef.current;
    if (listContainer) {
      listContainer.addEventListener('scroll', checkScroll);
      // Check initially
      checkScroll();
      
      return () => {
        listContainer.removeEventListener('scroll', checkScroll);
      };
    }
  }, []);

  return (
    <section className="max-w-screen mx-auto py-20 px-4 md:px-14 lg:px-18">
      <div className="mb-16 flex flex-col items-center justify-center">
        <h2 className="font-bold text-5xl mb-6">
          How <span className="text-gray-500 ">Neurocheckpro Works</span>
        </h2>
        <p className="max-w-4xl text-center text-secondary text-lg">
          A simple step-by-step process that combines smart technology with
          expert care to guide parents in supporting their child's development
          effectively.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="flex justify-between gap-14">
        {/* Left  */}
        <div className="flex-1 sticky md:top-20 bg-[#FFE2F7] rounded-xl  w-full">
         <div className="flex justify-between ">
           <div className="rounded-full border border-[#849DAE] m-8 py-2 px-8 w-fit h-fit mb-6">
            <p className="text-lg font-medium">5 Quick Steps</p>
          </div> 
          <Image 
            src={c1}
            height={400}
            width={400}
            className=" h-[340px] w-[320px]"
            alt="Curve "
          />
         
          </div>
          <p className="text-5xl leading-snug  p-8">
            Your path <br /> to
            <span className="font-semibold italic">Wellness</span>
          </p>
        </div>

        {/* Right (Scrollable list) - 2/3 width */}
        <div className=" relative ">
          <div 
            ref={listContainerRef}
            className="max-h-[500px] overflow-y-auto pr-4 space-y-12 pt-10 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
          >
            {listItems.map((item) => (
              <div key={item.id} className="flex items-center gap-8">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-500 text-white flex items-center justify-center text-3xl font-semibold">
                  {item.id}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600 max-w-3xl">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* White blurry fade effect at the bottom */}
          {showFade && (
            <div className="absolute bottom-0 left-0 right-4 h-50 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;