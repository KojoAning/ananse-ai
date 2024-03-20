// Navbar.js
import React, { useState } from 'react';
import Header from '../Header';
import styles from '../styles/dashboard.module.css'
import image from '../assets/images/Rectangle139.png'
import Logincomponents from '../Logincomponents';
import { Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import logo from '../assets/images/logo.png'
import image2 from '../assets/images/Rectangle129.png'


const links = ["home", "about", "features", "pricing",];

function Dashboard() {
  return(
    <div>
       <div className={styles.topcontent} >
        
        <div className={styles.topdecoration}>
        <header className={styles.header}>
      <Image className={styles.logo} src={logo} alt="logo" width={200} height={20} />
      <nav className={styles.nav}>
        <ul>
          {links.map((link, index) => (
            <Link key={index} to={`#${link}`} className={styles.link}>
              <li className={`${styles.capitalize} ${styles.hoverTextWhite}`}>{link}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  <div className={styles.subcontent}>
      <div className={styles.leftcontent}>
        <img className={styles.img} src={image}></img>
      </div>
      <div className={styles.rightcontent}>
        <Image src={image2}></Image>
        <h1>Hello Michael</h1>
        <p>Welcome to your Dashboard</p>
        <div className={styles.test}>hello ghana
          <div>activity</div>
          <div>streak</div>
          <div>achievement</div>
        </div>

    </div>
    
    </div>
    
   
            
        </div>
        
       </div>
      <div className={styles.bottom}>ghghhshs</div>
        
    </div>
    
    
  )
  
}

export default Dashboard;
