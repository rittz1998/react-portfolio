import './AboutContentStyles.css';
import '../index.css';
import React from 'react'
import AboutSideInfo from './AboutSideInfo';
import { Link } from 'react-router-dom';
import AboutContentData from './AboutContentData';

const AboutContent = () => {
  return (
    <div className='about'>
      <h1>Who am I?</h1>
      {
        AboutContentData.map((val,ind)=>{
          return(<AboutSideInfo
            key={ind}
            info={val.info}
          />
          )
        })
      }
      <Link to='/contact' className='btn-container'>
          <button className='btn' style={{width:"200px" }}>Contact</button>
      </Link>
    </div>
  )
}

export default AboutContent