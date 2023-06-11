import { Link } from 'react-router-dom';
import './NavbarStyles.css';
import {FaBars, FaTimes} from 'react-icons/fa';

import React, { useState } from 'react';

const Navbar = () => {

  const[click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const[color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100){
      setColor(true);
    }
    else{
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg": "header"}>
        <Link to="/">
            <h1 style={{color: color ? '#fff' : "#000"}}> Portfolio </h1>
        </Link>
        <div className='navigation'>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
            <Link to="/" style={{color: color ? '#fff' : "#000", border: color ? '2px solid white': '2px solid black'}}>
            Home</Link>
            </li>

            <li>
            <Link to="/about" style={{color: color ? '#fff' : "#000", border: color ? '2px solid white': '2px solid black'}}>
            About</Link>
            </li>

            <li>
            <Link to="/Project" style={{color: color ? '#fff' : "#000", border: color ? '2px solid white': '2px solid black'}}>
            Project</Link>
            </li>

            <li>
            <Link to="/Contact" style={{color: color ? '#fff' : "#000", border: color ? '2px solid white': '2px solid black'}}>
            Contact</Link>
            </li>
        </ul>
        </div>  

        <div className="side-icon" onClick={handleClick}>
            {click ? 
            (<FaTimes size={30} style={{color: color ? '#fff' : "#000"}} />)
            : 
            (<FaBars size={30} style={{color: color ? '#fff' : "#000"}} />)
            }
        </div>

    </div>
  )
}

export default Navbar