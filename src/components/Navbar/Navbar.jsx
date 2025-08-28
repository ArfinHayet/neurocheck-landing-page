"use client";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState();

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
    <div className="fixed top-0 left-0 w-full z-50 bg-transparent ">
      <div className="max-w-screen-lg mx-auto mt-4 px-10">
        <ul className="bg-gradient-to-r from-white/80 to-transparent/20 backdrop-blur-lg  rounded-full border h-[80px] px-10  border-white flex justify-between items-center shadow-lg font-medium text-base">
          {navItems.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className={`cursor-pointer ${
                  active === id
                    ? " decoration-primary decoration-2 text-primary border-b-2 border-primary w-1/3 py-1"
                    : "text-secondary"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
