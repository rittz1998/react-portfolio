import './HeroImageStyles.css';
import '../index.css';
// import img from '../assets/imageImp.jpeg';
import React from 'react'
import { Link } from 'react-router-dom';

const HeroImage = () => {
  return (
    <div className='hero'>
        <div className='image-mask'>
            {/* <img classname='intro-img' src = {img} alt='Introductory'/> */}
        </div>
        <div className='content'>
            <p>I'm a Developer & Analyst</p>
            <p>Sakura</p>
            <h1> Riddhi Rathod </h1>
            <div>
                <Link to="/project" className='btn' style={{width:"200px" }}>
                Projects      
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImage