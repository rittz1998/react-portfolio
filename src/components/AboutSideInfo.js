import React from 'react'
import './AboutContentStyles.css';
import '../index.css';

const AboutSideInfo = (props) => {
  return (
    <div>
        <div className='new'>
        <p>{props.info}</p> 
      </div>
    </div>
  )
}

export default AboutSideInfo