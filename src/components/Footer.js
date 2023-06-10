import { FaHome, FaMailBulk, FaPhone } from 'react-icons/fa';
import '../index.css';
import './FooterStyles.css';

import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={30} style={{
                        color:"#000", marginRight:"3rem"
                    }}/> 
                    <div>
                    <p>University of Regina</p>
                    <p>Regina, Saskatchewan, Canada</p>
                    </div>
                </div>    

                <div className='phone'>
                    <h4>
                    <FaPhone size={30} style={{
                        color:"#000", marginRight:"3rem"
                    }}/> 
                    (639)590-6136
                    </h4>
                </div>

                <div className='email'>
                    <h4>
                    <FaMailBulk size={30} style={{
                        color:"#000", marginRight:"3rem"
                    }}/> 
                    riddhir158@gmail.com || 
                    rrg642@uregina.ca
                    </h4>
                </div>                
            </div>

            <div className='right'>
                <h4>Background Information</h4>
                <p>
                    I am a multifaceted individual with a keen interest in computer science,
                    web development, data analytics, and a deep passion for music through
                    singing and playing the piano. In addition, I find joy in expressing 
                    myself through dance and staying active by engaging in the invigorating
                    sport of swimming.
                </p>
            </div>
        </div>

    </div>
  )
}

export default Footer