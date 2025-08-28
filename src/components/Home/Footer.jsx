import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaPhone, FaLocationDot, FaCopyright } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const usefulLinks = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "FAQ", href: "/faq" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const otherLinks = [
    { name: "Clinician’s Policy", href: "/clinician-policy" },
    { name: "Customer Policy", href: "/customer-policy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF size={18} />, href: "https://facebook.com" },
    { icon: <FaTwitter size={18} />, href: "https://twitter.com" },
    { icon: <FaInstagram size={18} />, href: "https://instagram.com" },
    { icon: <FaLinkedinIn size={18} />, href: "https://linkedin.com" },
  ];

  return (
    <footer className="max-w-screen mx-auto bg-primary text-white py-20 ">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-14 px-4 md:px-14 lg:px-18">
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-3xl font-semibold font-playfair mb-6">
            NeuroCheckPro
          </h3>
          <p className="text-white  w-sm mb-2">
            NeuroCheckPro is a smart assessment platform that connects parents
            and clinicians, offering structured evaluations and expert feedback
            to support children’s developmental and neurological progress.
          </p>
          <hr className="text-gray-400 w-8 mb-8" />

          <div className="space-y-4 text-white ">
            <span className="flex gap-2 items-center justify-start">
              <FaLocationDot />
              <p className="font-semibold">
                23 High Street, Manchester, United Kingdom
              </p>
            </span>
            <span className="flex gap-2 items-center justify-start">
              <MdEmail />{" "}
              <p className="font-semibold">neurocheckpro.contact@gmail.com</p>
            </span>
            <span className="flex gap-2 items-center justify-start">
              <FaPhone /> <p className="font-semibold">+0400 1999 11 1199</p>
            </span>
          </div>
        </div>

        {/* Useful Links */}
        <div className="md:col-span-2">
          <h4 className="text-xl font-semibold mb-4">Useful Links</h4>
          <hr className="text-gray-400 w-8 mb-6" />
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-3">
              {usefulLinks.slice(0, 4).map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block  hover:text-white transition-colors group relative w-fit"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </div>
            <div className="space-y-3">
              {usefulLinks.slice(4, 8).map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block hover:text-white transition-colors group relative w-fit"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Useful Links</h4>
          <hr className="text-gray-400 w-8 mb-6" />
          <div className="gap-3 grid grid-cols-1 text-sm ">
            {otherLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Follow Us */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="h-px bg-gray-500 mb-6"></div>

      <div className="px-4 md:px-14 lg:px-18 flex flex-col  justify-center items-center gap-4">
        <p className="flex gap-2 items-center text-lg ">
          <FaCopyright /> Copyright by NeuroCheckPro.
        </p>
        <p>
          Developed by{" "}
          <a className="font-semibold" href="https://mpairtech.com/">
            {" "}
            mPair Technologies Ltd.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
