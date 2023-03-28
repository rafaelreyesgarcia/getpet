import React from 'react'
import About from '../components/About'
import Faq from '../components/Faq'
import Hero from '../components/Hero'
import Reviews from '../components/Reviews'
import Services from '../components/Services'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Faq />
    </>
  )
}

export default Home