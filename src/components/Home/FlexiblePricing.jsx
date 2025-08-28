"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import pricingImg from "../../../public/png/pricing.png";
import c2 from "../../../public/png/curve1.png";

const pricingPlans = [
  {
    title: "Child Autism Diagnosis",
    price: "1250",
    description:
      "Quickly assess your child for autism with our reliable and easy-to-use diagnostic tools for accurate early detection.",
  },
  {
    title: "Child ADHD Diagnosis",
    price: "1250",
    description:
      "Identify attention and hyperactivity challenges in children with our comprehensive ADHD assessment.",
  },
  {
    title: "Child Autism + ADHD Diagnosis",
    price: "1250",
    description:
      "A combined evaluation to detect both autism and ADHD in children for a complete understanding of their needs.",
  },
  {
    title: "Adult Autism Diagnosis",
    price: "1250",
    description:
      "Evaluate adults for autism with our professional tools designed for accurate and insightful assessments.",
  },
  {
    title: "Adult ADHD Diagnosis",
    price: "1250",
    description:
      "Assess adult attention and hyperactivity traits to help understand behavioral patterns and improve daily functioning.",
  },
  {
    title: "Adult Autism + ADHD Diagnosis",
    price: "1250",
    description:
      "Comprehensive adult assessment to identify both autism and ADHD, offering clarity and guidance for support strategies.",
  },
];
const Expandable = ({ isOpen, children }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [children, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <div ref={ref} className="h-full ">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const FlexiblePricing = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="pt-20 pb-8 gap-10 max-w-screen mx-auto px-4 md:px-18 bg-[#E7EDEE] min-h-screen">
      <div className="flex flex-col justify-center text-center mb-4">
        <h2 className="text-5xl font-semibold">
          Flexible <span className="text-gray-500">Pricing Options</span>
        </h2>
        <div className="flex justify-center mt-6">
          <p className="text-secondary mb-6  max-w-[800px]">
            Explore our flexible pricing plans designed to suit different needs.
            Choose the right plan for you and start using Neurocheckpro to
            streamline neurological assessments effectively.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col gap-4 w-full lg:w-[40%]">
          <div className="flex flex-col gap-3 lg:max-w-xl">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`h-full border rounded-xl   cursor-pointer transition-all duration-300 ${
                  hoveredIndex === index
                    ? "border-2 border-b-8 h-fit px-10 py-4"
                    : "px-8 py-4"
                }`}
              >
                <div className="flex justify-between  items-center ">
                  <h3 className="font-semibold">{plan.title}</h3>
                  <span className="font-semibold text-4xl text-primary">
                    <span className="text-primary text-xl">£</span>
                    {plan.price}
                  </span>
                </div>

                <Expandable isOpen={hoveredIndex === index && plan.description}>
                  <p className="text-gray-500 mt-2 py-2">{plan.description}</p>
                </Expandable>
              </div>
            ))}
          </div>
        </div>
        {/* Right side - Image */}
        <div className=" flex flex-col justify-center">
       <div className="pt-20">
           <Image
          src={c2}
          height={400}
          width={400}
          className="h-[160px] w-[160px] " />
</div>
          <div className=" -mt-10 rounded-lg">
            <Image
              src={pricingImg}
              alt="Pricing illustration"
              width={600}
              height={600}
              className="object-cover rounded-lg"
            />
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default FlexiblePricing;
