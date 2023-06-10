import './ContactMeStyles.css';
import '../index.css';
import { Link } from 'react-router-dom';
import React from 'react'

const ContactMe = () => {
  return (
    <div className='contact-container'>
        <Link to="https://www.linkedin.com/in/riddhi-rathod-64582b168/"
        target='blank' className='btn' style={{width:"200px" }}>
                My LinkedIn     
        </Link>

        <Link to="https://github.com/rittz1998" target='blank'
        className='btn' style={{width:"200px" }}>
                My Github     
        </Link>
        <Link to="mailto:riddhir158@gmail.com?subject=The%20subject%20of%20the%20mail%20is" 
        target='blank' className='btn' style={{width:"200px" }}>
                Mail Me    
        </Link>
        <Link to="https://www.instagram.com/littleflowerbud/" target='blank'
        className='btn' style={{width:"200px" }}>
                My Instagram     
        </Link>
    </div>
  )
}

export default ContactMe