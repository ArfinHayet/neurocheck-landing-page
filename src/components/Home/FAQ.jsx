"use client";

import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { FiPlus } from "react-icons/fi";
import f1 from "../../../public/png/faqicon.png";
import Image from "next/image";

const faqData = [
  {
    q: "How accurate are Neurocheckpro assessments?",
    a: "Neurocheckpro assessments are designed by experts and use validated diagnostic methods, providing reliable results to help identify autism and ADHD in both children and adults.",
  },
  {
    q: "Can I use Neurocheckpro for multiple family members?",
    a: "Yes, Neurocheckpro allows you to create separate profiles for each family member, making it easy to manage and track multiple assessments.",
  },
  {
    q: "How long does each assessment take?",
    a: "Each assessment typically takes 15–30 minutes, depending on the type of evaluation and the individual's responses.",
  },
  {
    q: "Is Neurocheckpro suitable for adults as well as children?",
    a: "Absolutely. Neurocheckpro offers specialized assessments for both children and adults, ensuring accurate identification of autism, ADHD, or both conditions across age groups.",
  },
  {
    q: "Do I need any prior medical knowledge to use the platform?",
    a: "No prior medical knowledge is required. The platform is user-friendly and guides you step-by-step through each assessment.",
  },
  {
    q: "Can I access my results anytime online?",
    a: "Yes, once an assessment is complete, your results are securely stored online and can be accessed anytime through your Neurocheckpro account.",
  },
  {
    q: "Are the assessments confidential and secure?",
    a: "Yes, all data is encrypted and stored securely. Your personal and assessment information remains confidential at all times.",
  },
  {
    q: "How often should assessments be repeated?",
    a: "It is recommended to repeat assessments periodically, especially if there are changes in behavior or developmental progress, to ensure accurate monitoring over time.",
  },
  {
    q: "Can Neurocheckpro replace a professional medical diagnosis?",
    a: "Neurocheckpro is a reliable screening and diagnostic support tool, but it does not replace a full medical evaluation by a qualified healthcare professional.",
  },
];

const FAQ = () => {
  return (
    <section
      id="faq"
      className="relative py-12 md:py-20 mt-4 max-w-screen mx-auto px-4 md:px-8 lg:px-14"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 items-start gap-12 md:gap-16 lg:gap-20">
        {/* Left side */}
        <div className="relative order-1 md:order-1 md:col-span-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Your <span className="text-secondary">Questions<br />Answered</span> About Us
          </h1>
      
          <div className="mt-8 md:mt-12 lg:mt-16 relative w-full h-48 md:h-56 lg:h-72">
            <Image
              src={f1}
              alt="FAQ Illustration"
              fill
              className="object-contain md:-ml-20 lg:-ml-32"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="md:col-span-3 order-2 md:order-2">
          <Accordion
            transition
            transitionTimeout={600}
            className="space-y-4 w-full"
          >
            {faqData.map((item, i) => (
              <AccordionItem
                key={i}
                header={({ state }) => (
                  <div className="bg-gray-100 flex w-full items-center justify-between p-4 text-left text-base md:text-lg font-medium transition">
                    {item.q}
                    <FiPlus
                      className={`h-5 w-5 md:h-6 md:w-6 text-gray-600 transform transition-transform duration-300 ${
                        state.isEnter ? "rotate-45" : "rotate-0"
                      }`}
                    />
                  </div>
                )}
                className="border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden"
                buttonProps={{
                  className: "w-full text-left",
                }}
              >
                <div className="ps-4 pe-10 md:pe-14 pb-4 text-secondary bg-gray-100 text-sm md:text-base">
                  {item.a}
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;