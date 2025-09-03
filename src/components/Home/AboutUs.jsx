"use client";
import Image from "next/image";
import icon1 from "../../../public/png/abouticon1.png";
import icon2 from "../../../public/png/abouticon2.png";
import icon3 from "../../../public/png/abouticon3.png";
import aboutImg1 from "../../../public/png/aboutus1.png";
import aboutImg2 from "../../../public/png/aboutus2.png";
import aboutImg3 from "../../../public/png/aboutus3.png";

const AboutUs = () => {
  return (
    <section id="about" className="bg-[#F0F0F5] py-10 md:py-20 px-4 md:px-16 max-w-screen mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6 md:gap-8">
        
        {/* Left Column - Becomes first column in tablet, full width on mobile */}
        <div className="flex flex-col gap-6 h-full md:col-span-1">
          <div className="bg-[#E7EDEE] rounded-2xl p-6 md:p-8 relative flex-1 overflow-hidden">
            <h2 className="text-3xl md:text-5xl font-bold">About Us.</h2>
            <Image
              src={icon1}
              height={300}
              width={300}
              className="h-[120px] w-[120px] md:h-[200px] md:w-[200px] absolute -bottom-6 md:-bottom-11 -right-5 md:-right-8"
              alt="icon"
            />
          </div>
          <div className="bg-white rounded-xl py-4 md:py-6 flex flex-col justify-start relative flex-1">
            <span className="mx-4 md:mx-6 mb-3 md:mb-4 bg-primary text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-center w-fit text-base md:text-lg">
              Who We Are
            </span>
            <div className="px-3 md:px-4">
              <Image src={icon3} alt="Icon" width={30} height={30} className="w-6 h-6 md:w-10 md:h-10" />
            </div>
            <p className="text-gray-600 px-4 md:px-6 text-base md:text-lg mt-2 md:mt-0">
              Helping children and adults receive accurate autism and ADHD evaluations.
            </p>
            <div className="flex justify-end px-3 md:px-4 text-base md:text-lg mt-2 md:mt-0">
              <Image src={icon2} alt="Icon" width={30} height={30} className="w-6 h-6 md:w-10 md:h-10" />
            </div>
            <p className="text-gray-600 px-4 md:px-6 text-base md:text-lg mt-2 md:mt-0">
              Introducing Neurocheckpro as a trusted platform for neurological assessment.
            </p>
          </div>
        </div>

        {/* Center Column - Becomes second column in tablet, full width on mobile */}
        <div className="bg-[#FFE2F7] rounded-xl py-4 md:py-6 px-4 md:px-6 flex flex-col md:col-span-2 lg:col-span-2 gap-4 md:gap-8 h-full">
          <span className="mt-2 md:mt-4 border border-black bg-primary text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-center w-fit text-base md:text-lg">
            What We Do
          </span>
          <div className="px-1 md:px-2 flex flex-col gap-4 md:gap-8">
            <p className="text-gray-700 text-base md:text-lg">
              Neurocheckpro provides reliable and clinically validated tools to assess autism and ADHD in both children and adults. Our platform makes it easy for families and professionals to understand neurological development quickly and accurately.
            </p>
            <p className="text-gray-700 text-base md:text-lg">
              We offer specialized assessments for individual conditions or combined evaluations, delivering clear, actionable insights. Our goal is to support early detection, informed decision-making, and better care for every user.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-8 w-full">
            <Image
              src={aboutImg1}
              alt="Person 1"
              className="rounded-lg w-full h-full object-cover"
              width={800}
              height={600}
            />
            <Image
              src={aboutImg2}
              alt="Person 2"
              className="rounded-lg w-full h-full object-cover"
              width={800}
              height={600}
            />
          </div>
        </div>

        {/* Right Column - Becomes third column in tablet, full width on mobile */}
        <div className="flex flex-col gap-6 h-full md:col-span-1">
          <div className="flex-1">
            <Image
              src={aboutImg3}
              alt="Happy people"
              className="h-full rounded-xl object-cover w-full"
              width={800}
              height={400}
            />
          </div>
          <div className="bg-white rounded-xl p-4 md:p-6 flex flex-col gap-2 relative flex-1">
            <span className="mb-3 md:mb-4 bg-primary text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-center w-fit text-base md:text-lg">
              Our Mission
            </span>
            <p className="text-gray-600 text-base md:text-lg">
              Our mission is to make neurological assessments accessible, accurate, and easy to use for everyone. We aim to empower families, individuals, and clinicians with trusted insights that support early detection, informed decisions, and better care for autism and ADHD.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;