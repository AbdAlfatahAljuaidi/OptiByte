import React from 'react'
import NavBar from './NabBar'
import Hero from '../components/Hero/Hero'
import About from './About'
import Services from '../components/Services/Services'
import WorkProcess from '../components/WorkProcess/WorkProcess'
import Call from '../components/Call To Action/Call'
import Portfolio from '../components/Portfolio/Portfolio'
import Team from '../components/Team/Team'
import Pricing from '../components/Pricing/Pricing'
import Testimonials from '../components/Testimonials/Testimonials'
import FAQ from '../components/FAQ/FAQA'
import Newsletter from '../components/Newsletter/Newsletter'
import BlogPosts from '../components/BlogPosts/BlogPosts'
import ContactSection from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <NavBar />
        <Hero />
      <About />
      <Services />
      <WorkProcess />
      <Call />
      <Portfolio />
      <Team />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <BlogPosts />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Home