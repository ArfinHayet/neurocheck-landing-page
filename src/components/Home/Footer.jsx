"use client";
import Link from "next/link";
import { FaPhone, FaLocationDot, FaCopyright } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Playfair_Display } from "next/font/google";

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

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '800'],
});

const otherLinks = [
  { name: "Clinician's Policy", href: "/clinician-policy" },
  { name: "Customer Policy", href: "/customer-policy" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
];

const socialLinks = [
  { icon: <FaFacebookSquare size={28} />, href: "https://facebook.com" },
  { icon: <AiFillInstagram size={30} />, href: "https://instagram.com" },
  { icon: <FaYoutube size={28} />, href: "https://youtube.com" },
];

const Footer = () => {
  const firstColumn = navItems.slice(0, 4);
  const secondColumn = navItems.slice(4);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="max-w-screen mx-auto bg-primary text-white py-12 md:pt-24 md:pb-18">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-10 px-4 md:px-14 lg:px-18">
        <div className="md:col-span-2 space-y-4">
          <h3 className={`text-2xl md:text-3xl font-semibold mb-3 md:mb-6 ${playfairDisplay.className}`}>
            NeuroCheckPro
          </h3>
          <p className="text-white mb-4 max-w-md text-sm md:text-lg">
            NeuroCheckPro is a smart assessment platform that connects parents
            and clinicians, offering structured evaluations and expert feedback
            to support children's developmental and neurological progress.
          </p>
          <hr className="border-gray-400 w-12 mb-6" />

          <div className="space-y-3 text-white text-sm md:text-lg">
            <div className="flex gap-3 items-center">
              <FaLocationDot className="flex-shrink-0" />
              <p className="font-medium">23 High Street, Manchester, United Kingdom</p>
            </div>
            <div className="flex gap-3 items-center">
              <MdEmail className="flex-shrink-0" />
              <p className="font-medium">neurocheckpro.contact@gmail.com</p>
            </div>
            <div className="flex gap-3 items-center">
              <FaPhone className="flex-shrink-0" />
              <p className="font-medium">+0400 1999 11 1199</p>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div className="md:col-span-2">
          <h4 className="text-base md:text-xl font-semibold ">Useful Links</h4>
          <hr className="border-gray-400 w-12 my-3  md:my-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            <div className="space-y-3 text-xs md:text-base">
              {firstColumn.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="hover:underline block transition-colors text-left w-full"
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="space-y-3 ext-xs md:text-base">
              {secondColumn.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="hover:underline block transition-colors text-left w-full"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Other Links */}
        <div>
          <h4 className="text-base md:text-xl font-semibold ">Other Links</h4>
          <hr className="border-gray-400 w-12 my-3 md:mb-6" />
          <div className="space-y-3 ext-xs md:text-base">
            {otherLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="hover:underline block transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="text-base md:text-xl font-semibold ">Follow Us</h4>
          <hr className="border-gray-400 w-12 my-3 md:my-6" />
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="h-px bg-gray-500 mb-6 "></div>

      <div className="px-4 md:px-14 lg:px-18 flex flex-col  justify-center items-center gap-3  text-center">
        <p className="flex gap-2 items-center text-sm">
          <FaCopyright /> Copyright by NeuroCheckPro.
        </p>
        <p className="text-sm">
          Developed by
          <a 
            className="font-semibold hover:underline" 
            href="https://mpairtech.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            mPair Technologies Ltd.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;