import './WorkCardStyles.css';
import '../index.css';
import './WorkCard.js';
import WorkCardData from'./WorkCardData';
import React from 'react'
import WorkCard from './WorkCard';

const Work = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
            {
            WorkCardData.map((val,ind) => {
                return(
                    <WorkCard
                    key={ind}
                    imagesource={val.imagesource}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    source={val.source}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work