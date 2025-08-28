import AboutUs from '@/components/Home/AboutUs'
import FAQ from '@/components/Home/FAQ'
import FlexiblePricing from '@/components/Home/FlexiblePricing'
import Footer from '@/components/Home/Footer'
import GetInTouch from '@/components/Home/GetInTouch'
import Hero from '@/components/Home/Hero'
import HowItWorks from '@/components/Home/HowItWorks'
import PowerfulFeatures from '@/components/Home/PowefulFeatures'
import React from 'react'

const page = () => {
  return (
    <>
    <Hero/>
    <HowItWorks />
    <PowerfulFeatures />
    <FlexiblePricing />
    <AboutUs />
    <GetInTouch />
    <FAQ />
    <Footer />
    </>
  )
}

export default page