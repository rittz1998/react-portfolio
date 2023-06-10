import React from 'react'
import '../index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage2 from '../components/HeroImage2';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImage2 heading="PROJECTS" text="My most recent work for demonstration"></HeroImage2>
      <Work></Work>
      <Footer></Footer>
    </div>
  )
}

export default Project