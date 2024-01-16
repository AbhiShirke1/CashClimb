import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Reasons from '../components/Reasons/Reasons';
import Features from '../components/Features/Features';


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Reasons />
      <Features />
    </div>
  )
}

export default Home
