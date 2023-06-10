import './HeroImage2Styles.css';
import '../index.css';

import React from 'react'

const HeroImage2 = (props) => {
  return (
    <div className='hero-secondimg'>
        <div className='heading'>
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
        </div>
    </div>
  )
}

export default HeroImage2