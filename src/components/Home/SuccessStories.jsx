"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { testimonials } from "../../lib/data";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const UsersCards = ({ testimonial }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer h-[300px] w-[80vw] md:w-[300px] lg:h-[420px] lg:w-[400px] flex-shrink-0 mx-2 lg:mx-4">
      {/* image on hover */}
      <div className="absolute inset-0">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="relative z-10 flex flex-col items-start justify-between h-full p-6 md:p-8 lg:p-10">
        <div className="flex items-center justify-start gap-3 md:gap-4 group-hover:opacity-0 transition-opacity duration-500">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={50}
            height={50}
            className="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-cover"
          />
          <div className="flex flex-col">
            <h3 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-black group-hover:text-white">
              {testimonial.name}
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg group-hover:text-gray-200">
              {testimonial.title}
            </p>
          </div>
        </div>
        <div className="flex flex-col opacity-0 group-hover:opacity-100 transition-opacity">
          <h3 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-black group-hover:text-white">
            {testimonial.name}
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 group-hover:text-gray-200 mb-2 md:mb-3">
            {testimonial.title}
          </p>
        </div>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg max-w-xs md:max-w-md lg:max-w-lg group-hover:text-white leading-relaxed">
          "{testimonial.quote}"
        </p>
      </div>
    </div>
  );
};

const SuccessStories = () => {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPadding, setScrollPadding] = useState("0 40%");
  const [windowWidth, setWindowWidth] = useState(0); // NEW: track window width

  const cardWidth = 430;
  const clonedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  // Client-only window width
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 768) {
        const gap = (window.innerWidth - window.innerWidth * 0.8) / 2;
        setScrollPadding(`${gap}px`);
      } else {
        setScrollPadding("0 40%");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initial scroll position
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = testimonials.length * cardWidth;
    }
  }, []);

  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setCurrentIndex(index % testimonials.length);
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (scrollRef.current) {
      const scrollPos = (testimonials.length + nextIndex) * cardWidth;
      scrollRef.current.scrollTo({ left: scrollPos, behavior: "smooth" });
    }
    setCurrentIndex(nextIndex % testimonials.length);
  };

  const handlePrev = () => {
    const prevIndex = currentIndex - 1;
    const newIndex = prevIndex < 0 ? testimonials.length - 1 : prevIndex;
    if (scrollRef.current) {
      const scrollPos = (testimonials.length + newIndex) * cardWidth;
      scrollRef.current.scrollTo({ left: scrollPos, behavior: "smooth" });
    }
    setCurrentIndex(newIndex);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft } = scrollRef.current;

    if (scrollLeft < testimonials.length * cardWidth) {
      scrollRef.current.scrollLeft = testimonials.length * 2 * cardWidth;
    } else if (scrollLeft >= testimonials.length * 2 * cardWidth) {
      scrollRef.current.scrollLeft = testimonials.length * cardWidth;
    }
  };

  return (
    <section id="successstories" className="relative py-20 bg-[#FFE2F7]/60">
      <div className="text-center mb-10 px-4">
        <h2 className="text-2xl md:text-5xl font-bold">What Our Users Say</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto md:text-lg text-sm">
          Hear from parents, caregivers, and adults who have experienced
          Neurocheckpro firsthand. Their stories highlight how our platform
          provides accurate, easy, and insightful neurological assessments that
          truly make a difference.
        </p>
      </div>

      <div ref={containerRef} className="relative">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 z-50 hover:bg-gray-100 mx-2 md:mx-10"
        >
          <IoIosArrowBack size={22} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 z-50 hover:bg-gray-100 mx-2 md:mx-10"
        >
          <IoIosArrowForward size={22} />
        </button>

        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto hide-scrollbar py-4 gap-4 md:gap-0"
            style={{
              scrollSnapType: "x mandatory",
              scrollPaddingLeft: scrollPadding,
            }}
          >
            {clonedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{
                  scrollSnapAlign: "center",
                  width: windowWidth && windowWidth < 768 ? "80vw" : undefined,
                }}
              >
                <UsersCards testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
