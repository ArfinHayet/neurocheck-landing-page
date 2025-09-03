"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

// Expandable animation for descriptions
const Expandable = ({ isOpen, children }) => {
  const ref = useRef(null);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: ref.current ? ref.current.scrollHeight : "auto",
            opacity: 1,
          }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <div ref={ref}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FlexiblePricing = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      id="pricing"
      className="pt-12 md:pt-20 pb-12 md:pb-20 gap-8 md:gap-10 max-w-screen mx-auto px-4 md:px-18 bg-[#E7EDEE] min-h-screen"
    >
      <div className="flex flex-col justify-center text-center">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
          Flexible <span className="text-gray-500">Pricing Options</span>
        </h2>
        <div className="flex justify-center mt-3 md:mt-6">
          <p className="text-secondary mb-6 text-sm md:text-lg md:max-w-4xl">
            Explore our flexible pricing plans designed to suit different needs.
            Choose the right plan for you and start using Neurocheckpro to
            streamline neurological assessments effectively.
          </p>
        </div>
      </div>
      
      {/* Mobile layout */}
      <div className="flex flex-col gap-8 lg:hidden">
        {/* Image first */}
        <div className="flex justify-center">
          <Image
            src={pricingImg}
            alt="Pricing illustration"
            width={300}
            height={300}
            className="object-cover rounded-lg w-full max-w-md"
          />
        </div>

        {/* Pricing cards with expandable functionality */}
        <div className="flex flex-col gap-4 w-full">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className="border rounded-xl px-4 py-3 cursor-pointer transition-all duration-300 bg-white"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-sm md:text-base">{plan.title}</h3>
                <span className="font-semibold text-xl md:text-2xl text-primary flex items-center">
                  <span className="text-primary text-base md:text-lg">£</span>
                  {plan.price}
                </span>
              </div>
              
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-500 mt-2 text-sm md:text-base">
                      {plan.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:flex flex-col lg:flex-row items-center justify-between">
        {/* Left side animated cards */}
        <div className="flex flex-col gap-4 w-full lg:w-[40%]">
          {pricingPlans.map((plan, index) => {
            // Use useInView for each individual card
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
              rootMargin: "-50px 0px",
            });
            
            return (
              <motion.div
                key={index}
                ref={ref}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, boxShadow: "0px 4px 15px rgba(0,0,0,0.1)" }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`h-full border rounded-xl cursor-pointer transition-all duration-300 ${
                  hoveredIndex === index
                    ? "border-2 border-b-8 h-fit px-10 py-4"
                    : "px-8 py-4"
                }`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">{plan.title}</h3>
                  <span className="font-semibold text-4xl text-primary">
                    <span className="text-primary text-xl">£</span>
                    {plan.price}
                  </span>
                </div>
                <Expandable isOpen={hoveredIndex === index && plan.description}>
                  <p className="text-gray-500 mt-2 py-2">{plan.description}</p>
                </Expandable>
              </motion.div>
            );
          })}
        </div>

        {/* Right side image */}
        <div className="mt-10 flex flex-col justify-center">
          <Image
            src={c2}
            height={800}
            width={800}
            className="h-[100px] w-[100px] md:h-[160px] md:w-[160px] bg-transparent md:-ml-[18%]"
            alt="curve"
          />
          <div className="-mt-[20%] rounded-lg">
            {(() => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.1,
              });
              
              return (
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Image
                    src={pricingImg}
                    alt="Pricing illustration"
                    width={600}
                    height={600}
                    className="object-cover rounded-lg"
                  />
                </motion.div>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexiblePricing;