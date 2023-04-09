import React from 'react'
import About from '../components/About'
import Faq from '../components/Faq'
import Hero from '../components/Hero'
import Reviews from '../components/Reviews'
import Services from '../components/Services'
import { useEffect } from 'react'
import OldAbout from '../components/OldAbout'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <About />
      {/* <NewAbout /> */}
      <Services />
      <Reviews />
      <Faq />
    </>
  )
}

export default Home