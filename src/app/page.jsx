import AboutUs from "@/components/Home/AboutUs";
import ExpertClinicians from "@/components/Home/ExpertClinicians";
import FAQ from "@/components/Home/FAQ";
import FlexiblePricing from "@/components/Home/FlexiblePricing";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import HowItWorks from "@/components/Home/HowItWorks";
import PowerfulFeatures from "@/components/Home/PowefulFeatures";
import SuccessStories from "@/components/Home/SuccessStories";
import React from "react";
import Contact from "@/components/Home/Contact";
import Team from "@/components/Home/Team";
import { ComingSoon } from "@/components/Home/ComingSoon";

export default function page() {
  return (
    <>
      <Hero />
      <Team />
      <ComingSoon />
      {/* <HowItWorks />
      <PowerfulFeatures />
      <FlexiblePricing />
      <SuccessStories />
      <FAQ />
      <ExpertClinicians />
      <AboutUs />
      <Contact />
      <Footer /> */}
    </>
  );
};

 
