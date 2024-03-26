// Navbar.js
import React, { useState } from 'react';
import image from './assets/images/group4.png'
import { NavLink } from 'react-router-dom';
import Button from './Button.js';
import styles from './styles/login.module.css';
import lock from './assets/images/lock.png'
import person from './assets/images/person.png';
import { Image } from 'react-bootstrap';
import Button2 from './button2.js';

function Logincomponents() {
  return(
    <div className={styles.container}>
   
        <Image className={styles.logo} src={image} alt="logo" width='25%' height='25%' />
        <h1>Welcome to Robolabs</h1>
        <div className={styles.inputcontent}>
          <div className={styles.input2}><img className={styles.img} src={person}></img><input className={styles.input}  placeholder='Enter your Username'  type='text'></input></div>
          <div className={styles.input2}><img className={styles.img}src={lock}></img><input className={styles.input} placeholder='Enter your Password'  type='password'></input></div>
        </div>

<NavLink to="/dashboard">
            <Button2>Sign In </Button2>
          </NavLink>
          <div className={styles.alt}><a>Dont have an account?</a><a href="/signup">Sign up</a></div>
        
    </div>
  )
  
}

export default Logincomponents;
