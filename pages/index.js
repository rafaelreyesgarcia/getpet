import Head from 'next/head'
import Hero from '@/components/Hero'
import Header from '@/components/Header'
import Services from '@/components/Services'
import Reviews from '@/components/Reviews'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import About from '@/components/About'

const initial = {
  opacity: 0
};

export default function Home() {
  return (
    <main
      className='
        h-screen
        text-white
        bg-gradient-to-r from-indigo-500 to-blue-500
        snap-y snap-mandatory
        overflow-scroll overflow-x-hidden
        z-0'
    >
      <Head>
        <title>Get Pet</title>
        <meta name="description" content="pet services in Chicago" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Header initial={initial} />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Faq />
      <Footer />
    </main>
  )
}
