import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Reasons from '../components/Reasons/Reasons';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';
import Pillars from '../components/Pillars/Pillars';
import Help from '../components/Help/Help';
import Steps from '../components/Steps/Steps';


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Reasons />
      <Features />
      <Pillars/>
      <Help/>
      <Steps/>
      <Footer />
    </div>
  )
}

export default Home
