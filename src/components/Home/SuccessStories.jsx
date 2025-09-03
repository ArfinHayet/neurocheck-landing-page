"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { testimonials } from "../../lib/data";
import { IoIosArrowForward, IoIosArrowBack  } from "react-icons/io";

const UsersCards = ({ testimonial }) => {
  return (
    <div className="group relative bg-white rounded-2xl  overflow-hidden transition-all duration-500 cursor-pointer h-[300px] w-[90%] md:h-[420px] md:w-[410px] flex-shrink-0 mx-2 md:mx-6">
      {/* Background image on hover */}
      <div className="absolute inset-0">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        </div>
     
       </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-between  h-full p-10">
        <div className="flex items-center justify-start gap-4 group-hover:opacity-0 transition-opacity duration-500 ">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={60}
              height={60}
              className=" relative rounded-full w-10 h-10 md:w-16 md:h-16 object-cover mb-4 "
            />
         
          <div className="flex flex-col ">
            <h3 className="font-semibold md:text-xl text-black group-hover:text-white">
              {testimonial.name}
            </h3>
            <p className="md:text-lg text-gray-500 group-hover:text-gray-200 mb-3">
              {testimonial.title}
            </p>
          </div>
        </div>
        <div className="flex flex-col  opacity-0 group-hover:opacity-100 transition-opacity ">
            <h3 className="font-semibold text-xl text-black group-hover:text-white">
              {testimonial.name}
            </h3>
            <p className="text-lg text-gray-500 group-hover:text-gray-200 mb-3">
              {testimonial.title}
            </p>
          </div>
        <p className="text-sm md:text-lg max-w-lg group-hover:text-white leading-relaxed">
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

  //  (410px width + 20px margin)
  const cardWidth = 430;

  const visibleCards = 5;

  const clonedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

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

    const realIndex = index % testimonials.length;
    setCurrentIndex(realIndex);
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;

    if (scrollRef.current) {
      const scrollPos = (testimonials.length + nextIndex) * cardWidth;
      scrollRef.current.scrollTo({
        left: scrollPos,
        behavior: "smooth",
      });
    }

    setCurrentIndex(nextIndex % testimonials.length);
  };

  const handlePrev = () => {
    const prevIndex = currentIndex - 1;
    const newIndex = prevIndex < 0 ? testimonials.length - 1 : prevIndex;

    if (scrollRef.current) {
      const scrollPos = (testimonials.length + newIndex) * cardWidth;
      scrollRef.current.scrollTo({
        left: scrollPos,
        behavior: "smooth",
      });
    }

    setCurrentIndex(newIndex);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth } = scrollRef.current;
    const containerWidth = containerRef.current?.offsetWidth || 0;

    if (scrollLeft < testimonials.length * cardWidth) {
      scrollRef.current.scrollLeft = testimonials.length * 2 * cardWidth;
    } else if (scrollLeft >= testimonials.length * 2 * cardWidth) {
      scrollRef.current.scrollLeft = testimonials.length * cardWidth;
    }
  };

  return (
    <section  id= "successstories" className="relative py-20 bg-[#FFE2F7]/60">
      <div className="text-center mb-10 px-4">
        <h2 className="text-2xl md:text-5xl font-bold">What Our Users Say</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto md:text-lg text-sm">
          Hear from parents, caregivers, and adults who have experienced
          Neurocheckpro firsthand. Their stories highlight how our platform
          provides accurate, easy, and insightful neurological assessments that
          truly make a difference.
        </p>
      </div>

      <div ref={containerRef} className="relative  ">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 z-50 hover:bg-gray-100 mx-10"
        >
          <IoIosArrowBack size={22}/>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md  rounded-full p-3 z-50 hover:bg-gray-100 mx-10"
        >
          <IoIosArrowForward size={22}/>
        </button>

        {/* Cards  */}
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto hide-scrollbar py-4"
            style={{
              scrollSnapType: "x mandatory",
              scrollPadding: "0 40%",
            }}
          >
            {clonedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ scrollSnapAlign: "start" }}
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
