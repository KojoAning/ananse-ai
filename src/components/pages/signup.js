// Navbar.js
import React, { useState } from 'react';
import Header from '../Header';
import styles from '../styles/signinpage.module.css'
import image from '../assets/images/group13.png'
import Logincomponents from '../Logincomponents';
import { Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Signupcomponents from '../Signupcomponents';

function Signup() {
  return(
    <div>
        <Header/>
        <div className={styles.container}>
            <div className={styles.leftcontent}><img  src={image} width='100%' height='90%' ></img></div>
            <div className={styles.rightcontent}><Signupcomponents/></div>
          
        
        </div>
        
    </div>
    
    
  )
  
}

export default Signup;
