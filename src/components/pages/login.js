// Navbar.js
import React, { useState } from 'react';
import Header from '../Header';
import styles from '../styles/loginpage.module.css'
import image from '../assets/images/group15.png'
import Logincomponents from '../Logincomponents';
import { Button, Image } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

function Login() {
  return(
    <div>
        <Header/>
        <div className={styles.container}>
            <div className={styles.leftcontent}><Image width='100%' height='90%' className={styles.logo} src={image}></Image></div>
            <div className={styles.rightcontent}><Logincomponents/></div>
          
        
        </div>
        
    </div>
    
    
  )
  
}

export default Login;
