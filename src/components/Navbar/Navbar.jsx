"use client";

import React, { useEffect, useState, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import logo from "../../../public/png/NeuroChPro_20250926_191549_0000.png";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const isClickScrolling = useRef(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contact, setContact] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "How it works", id: "howitworks" },
    // { label: "Features", id: "features" },
    // { label: "Pricing", id: "pricing" },
    // { label: "Success Stories", id: "successstories" },
    // { label: "FAQ", id: "faq" },
    { label: "About Us", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  // Highlight active section while scrolling
  useEffect(() => {
    if (typeof window === "undefined") return; // SSR-safe

    const handleScroll = () => {
      if (isClickScrolling.current) return;

      let current = "home";
      navItems.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            current = id;
          }
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  // Smooth scroll when clicking
  const handleClick = (e, id) => {
    e.preventDefault();
    setActive(id);
    isClickScrolling.current = true;
    setMobileOpen(false);

    if (typeof window === "undefined") return; // SSR-safe
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 500);
  };
  return (
    <div className="fixed top-2 flex items-center justify-center w-full z-50 bg-transparent ">
      {/* desktop */}
      <div className="hidden  px-3 md:flex justify-between items-center  backdrop-blur-lg rounded-lg border w-[95vw] h-[72px] border-white  shadow-md font-medium bg-white">
        <div className="">
          <Image
            src={logo}
            height={400}
            width={400}
            className="h-8 md:h-14 w-auto"
            alt="logo"
          />
        </div>
        <div className="">
          <button
            onClick={() => setContact(true)}
            className="bg-primary xl:text-base text-sm text-white  px-4 py-2 rounded-xl "
          >
            Contact us
          </button>
        </div>
      </div>

      {/* mobile */}
      <div className="flex md:hidden justify-between items-center backdrop-blur-lg rounded-lg border w-[95vw] h-[8vh] border-white shadow-md font-medium bg-white">
        <div>
          <Image
            src={logo}
            height={400}
            width={400}
            className="h-11 md:h-14 w-auto"
            alt="logo"
          />
        </div>
        <div className="pr-3">
          <button
            onClick={() => setContact(true)}
            className="bg-primary text-sm text-white p-2 md:px-4 md:py-1.5 rounded-sm"
          >
            <FaPhone />
          </button>
        </div>
      </div>

      {contact && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-10 flex justify-center items-center z-50 ">
          <div className="lg:w-1/3 bg-primary bg-opacity-40 p-6 md:p-8 text-white rounded-xl relative md:w-full w-[92%]">
            <button
              onClick={() => setContact(false)}
              className="absolute top-3 right-4 md:right-6 text-white text-lg font-bold"
            >
              ✕
            </button>

            <div className=" text-center  mb-4 ">
              
              <p className="mb-1 text-lg font-semibold">
                Contact us{" "}
              </p>
              <p className="text-xs text-balance">
                A trusted digital platform connecting children, families, and
                clinicians to deliver structured assessments, expert guidance,
                and supportive care for neuro developmental health.
              </p>
             
             
            </div>
            <div className="md:pl-1  mb-4 ">

              <div className="flex gap-2 items-center mb-1  text-sm md:text-base">
                <FaPhone /> <h3 className="font-semibold">Phone</h3>
              </div>
              
              <p className="font-medium text-xs md:text-sm">
                +44 7451 248601{" "}
                {/* <span className="font-normal">(Whatsapp available)</span> */}
              </p>
            </div>

            <div className="md:pl-1  mb-4">
              <div className="flex gap-2 items-center mb-1  text-sm md:text-base">
                <MdEmail size={18} />
                <h3 className="font-semibold">Email</h3>
              </div>
              <p className="text-xs md:text-sm font-medium">
                tanha@neurocheckpro.com
              </p>
            </div>

            <div className="md:pl-1">
              <div className=" flex gap-2 items-center mb-1  text-sm md:text-base">
                <FaLocationDot />
                <h3 className="font-semibold">Location</h3>
              </div>
              <p className="text-xs md:text-sm">
                3rd Floor, 86-90 Paul Street, London, England, United Kingdom,
                EC2A 4NE
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
 
};
 

export default Navbar;

 // return (
  //  <div className="fixed top-0 left-0 w-full z-50 bg-transparent">
  //     <div className="flex items-center justify-start md:justify-between px-6 md:px-12 py-3">
        
  //       {/* <div className="flex-1 flex justify-center ms-[30%] md:-ms-2 md:justify-start">
  //         <Image
  //           src={logo}
  //           height={400}
  //           width={400}
  //           className="h-8 md:h-16 w-auto"
  //           alt="logo"
  //         />
  //       </div> */}

  //       {/* Desktop Nav  */}
  //       {/* <div className="hidden md:flex flex-2 justify-start">
  //         <ul className="flex bg-gradient-to-r from-white/80 to-transparent/20 backdrop-blur-lg rounded-full border h-[68px] px-8 border-white items-center shadow-lg font-medium text-sm lg:text-base gap-8">
  //           {navItems.map(({ label, id }) => (
  //             <li key={id}>
  //               <a
  //                 href={`#${id}`}
  //                 onClick={(e) => handleClick(e, id)}
  //                 className={`cursor-pointer transition-colors ${
  //                   active === id
  //                     ? "text-primary border-b-2 border-primary py-1"
  //                     : "text-secondary"
  //                 }`}
  //               >
  //                 {label}
  //               </a>
  //             </li>
  //           ))}
  //         </ul>
  //       </div> */}

  //       {/* Mobile Menu Button */}
  //       {/* <div className="flex-1 flex justify-end md:hidden">
  //         {!mobileOpen && (
  //           <button
  //             className="text-black z-50"
  //             onClick={() => setMobileOpen(true)}
  //           >
  //             <RxHamburgerMenu size={26} />
  //           </button>
  //         )}
  //       </div> */}
  //     </div>

  //     {/* Mobile Slide-in Menu */}
  //     {/* <div
  //       className={`fixed top-0 right-0 h-full w-60 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
  //         mobileOpen ? "translate-x-0" : "translate-x-full"
  //       }`}
  //     >
  //       <div className="flex justify-end px-6 py-4">
  //         <button onClick={() => setMobileOpen(false)} className="text-black">
  //           <IoCloseOutline size={32} />
  //         </button>
  //       </div>

  //       <div className="p-6 flex flex-col gap-6">
  //         {navItems.map(({ label, id }) => (
  //           <a
  //             key={id}
  //             href={`#${id}`}
  //             onClick={(e) => handleClick(e, id)}
  //             className={`text-base font-semibold ${
  //               active === id ? "text-primary" : "text-black"
  //             }`}
  //           >
  //             {label}
  //           </a>
  //         ))}
  //       </div>
  //     </div> */}
  //   </div>
  // );