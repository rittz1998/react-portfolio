import '../index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import React from 'react'
import HeroImage2 from '../components/HeroImage2';
import ContactMe from '../components/ContactMe';

const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImage2 heading="Contact Me" text="Links where I can be contacted upon"></HeroImage2>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  )
}

export default Contact