"use client";

import React, { useEffect, useState, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const isClickScrolling = useRef(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "How it works", id: "howitworks" },
    { label: "Features", id: "features" },
    { label: "Pricing", id: "pricing" },
    { label: "Success Stories", id: "successstories" },
    { label: "FAQ", id: "faq" },
    { label: "About Us", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  // Highlight active section while scrolling
  useEffect(() => {
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
  }, []);

  // Smooth scroll when clicking
  const handleClick = (e, id) => {
    e.preventDefault();
    setActive(id);
    isClickScrolling.current = true;
    setMobileOpen(false);

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 500);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-screen-lg mx-auto mt-4 px-6 flex justify-between items-center">
        {/* Desktop Nav */}
        <ul className="hidden md:flex bg-gradient-to-r from-white/80 to-transparent/20 backdrop-blur-lg rounded-full border md:h-[72px] lg:h-[80px]  md:px-8 lg:px-10 border-white justify-between items-center shadow-lg font-medium md:text-sm lg:text-base w-full">
          {navItems.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className={`cursor-pointer transition-colors ${
                  active === id
                    ? "text-primary border-b-2 border-primary py-1"
                    : "text-secondary"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-end flex-1">
          {!mobileOpen && (
            <button
              className="text-black z-50"
              onClick={() => setMobileOpen(true)}
            >
              <RxHamburgerMenu size={28} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-60 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end px-6 py-4">
          <button onClick={() => setMobileOpen(false)} className="text-black">
            <IoCloseOutline size={32} />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-6">
          {navItems.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className={`text-base font-semibold ${
                active === id ? "text-primary" : "text-black"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
