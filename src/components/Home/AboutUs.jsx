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
    <section className="bg-[#F0F0F5] py-20 px-4 md:px-16 max-w-screen mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Left Column */}
        <div className="flex flex-col gap-6 h-full">
          <div className="bg-[#E7EDEE] rounded-2xl p-8 relative flex-1 overflow-hidden">
            <h2 className="text-5xl font-bold">About Us.</h2>
            <Image
              src={icon1}
              height={300}
              width={300}
              className="h-[200px] w-[200px] absolute -bottom-11 -right-8"
              alt="icon"
            />
          </div>
          <div className="bg-white rounded-xl py-6 flex flex-col justify-start relative flex-1">
            <span className="mx-6 mb-4 bg-primary text-white px-6 py-3 rounded-full text-center w-fit text-lg">
              Who We Are
            </span>
            <div className="px-4">
              <Image src={icon3} alt="Icon" width={40} height={40} />
            </div>
            <p className="text-gray-600 px-6 text-lg">
              Helping children and adults receive accurate autism and ADHD evaluations.
            </p>
            <div className="flex justify-end px-4 text-lg">
              <Image src={icon2} alt="Icon" width={40} height={40} />
            </div>
            <p className="text-gray-600 px-6 text-lg">
              Introducing Neurocheckpro as a trusted platform for neurological assessment.
            </p>
          </div>
        </div>

        {/* Center Column */}
        <div className="bg-[#FFE2F7] rounded-xl py-6 px-6 flex flex-col col-span-2 gap-8 h-full">
          <span className="mt-4 border border-black bg-primary text-white px-6 py-3 rounded-full text-center w-fit text-lg">
            What We Do
          </span>
          <div className="px-2 flex flex-col gap-8">
            <p className="text-gray-700 text-lg">
              Neurocheckpro provides reliable and clinically validated tools to assess autism and ADHD in both children and adults. Our platform makes it easy for families and professionals to understand neurological development quickly and accurately.
            </p>
            <p className="text-gray-700 text-lg">
              We offer specialized assessments for individual conditions or combined evaluations, delivering clear, actionable insights. Our goal is to support early detection, informed decision-making, and better care for every user.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 w-full">
            <Image
              src={aboutImg1}
              alt="Person 1"
              className="rounded-lg w-full h-full"
              width={800}
              height={600}
            />
            <Image
              src={aboutImg2}
              alt="Person 2"
              className="rounded-lg w-full h-full"
              width={800}
              height={600}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 h-full">
          <div className="flex-1">
            <Image
              src={aboutImg3}
              alt="Happy people"
              className="h-full rounded-xl object-cover"
              width={800}
              height={400}
            />
          </div>
          <div className="bg-white rounded-xl p-6 flex flex-col gap-2 relative flex-1">
            <span className="mb-4 bg-primary text-white px-6 py-3 rounded-full text-center w-fit text-lg">
              Our Mission
            </span>
            <p className="text-gray-600 text-lg">
              Our mission is to make neurological assessments accessible, accurate, and easy to use for everyone. We aim to empower families, individuals, and clinicians with trusted insights that support early detection, informed decisions, and better care for autism and ADHD.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
