import './WorkCardStyles.css';
import '../index.css';
import React from 'react'
import { NavLink } from 'react-router-dom';

const WorkCard = (props) => {
  return (
    <div className='project-card'>
                <img src={props.imagesource} alt="project1"/>
                <h2 className='project-title'>{props.title}</h2>
                <div className='pro-details'>
                    <p>{props.text}</p>
                </div>
                <div className='pro-btns'>
                    <NavLink to={props.view} className='btn'>
                        View
                    </NavLink>
                    <NavLink to={props.source} target='blank' className='btn'>
                        Source
                    </NavLink>
                </div>
            </div>

  )
}

export default WorkCard