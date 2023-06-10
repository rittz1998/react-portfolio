import HeroImage from '../components/HeroImage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../index.css';

import React from 'react'

const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <HeroImage></HeroImage>
        <Footer></Footer>
    </div>
  )
}

export default Home
