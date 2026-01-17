import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Eligibility from '../components/Eligibility'
import WhyChooseUs from '../components/WhyChooseUs'
import Stats from '../components/Stats'
import BlogList from '../components/BlogList'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'

export default function Home(){
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Eligibility />
      <WhyChooseUs />
      <Stats />
      <BlogList />
      <Testimonials />
      <Newsletter />
    </>
  )
}
