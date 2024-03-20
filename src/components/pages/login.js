// Navbar.js
import React, { useState } from 'react';
import Header from '../Header';
import styles from '../styles/loginpage.module.css'
import image from '../assets/images/group15.png'
import Logincomponents from '../Logincomponents';
import { Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

function Login() {
  return(
    <div>
        <Header/>
        <div className={styles.container}>
            <div className={styles.leftcontent}><img className={styles.image} src={image}></img></div>
            <div className={styles.rightcontent}><Logincomponents/></div>
          
        
        </div>
        
    </div>
    
    
  )
  
}

export default Login;
