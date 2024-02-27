// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/images/logo.png'
import { click } from '@testing-library/user-event/dist/click';

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closedMobileMenu = () => setClick(false)
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
        <img src={image} alt="logo"/> 
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
        <ul className={click ? 'van-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to="/" className='nav-links' onClick={closedMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/about" className='nav-links' onClick={closedMobileMenu}>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/features" className='nav-links' onClick={closedMobileMenu}>
              Features
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/login" className='nav-links' onClick={closedMobileMenu}>
              Login
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
