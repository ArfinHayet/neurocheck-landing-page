"use client";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { FiPlus } from "react-icons/fi";
import Image from "next/image";
import { motion } from "framer-motion";
import { faqData } from "../../lib/data";
import f1 from "../../../public/png/faqicon.png";

const FAQ = () => {
  return (
    <section
      id="faq"
      className="relative py-12 md:py-20 mt-4 max-w-screen mx-auto px-4 md:px-8 lg:px-14 overflow-x-hidden"
    >
      {/* Mobile image */}
      <div className="absolute inset-0 z-0 md:hidden mt-[40%] -ml-[20%]">
        <Image
          src={f1}
          alt="FAQ Background"
          className="object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 items-start gap-6 md:gap-16 lg:gap-20">
        {/* Left column  */}
        <motion.div
          className="relative md:col-span-2 flex flex-col justify-start items-start"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 70, damping: 20 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center w-full md:w-auto md:text-left mb-4 md:mb-0">
            Your{" "}
            <span className="text-secondary">
              Questions
              <br />
              Answered
            </span>{" "}
            About Us
          </h1>

          {/*  desktop only */}
          <div className="hidden md:block relative w-full h-64 md:h-80 lg:h-96 xl:h-[28rem] -ml-10 md:-ml-16 lg:-ml-[34%]">
            <Image
              src={f1}
              alt="FAQ Illustration"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </motion.div>

        {/* accordion */}
        <motion.div
          className="md:col-span-3 order-2 md:order-2"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 70, damping: 20 }}
        >
          <Accordion
            transition
            transitionTimeout={600}
            className="space-y-4 md:w-full w-[90vw]"
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
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
