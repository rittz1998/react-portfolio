import '../index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import React from 'react'
import HeroImage2 from '../components/HeroImage2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImage2 heading="About Myself" text="I'm an avid computer science afficiando
      who is passionate about technology but also a vivid dancer and vocalist."></HeroImage2>
      <AboutContent></AboutContent>
      <Footer></Footer>
    </div>
  )
}

export default About