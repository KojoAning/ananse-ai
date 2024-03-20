// Navbar.js
import React, { useState } from 'react';
import image from './assets/images/group4.png'
import { NavLink } from 'react-router-dom';
import Button from './Button.js';
import styles from './styles/login.module.css';
import lock from './assets/images/lock.png'
import person from './assets/images/person.png'

function Logincomponents() {
  return(
    <div className={styles.container}>
        <img src={image}></img>
        <h1>Welcome to Robolabs</h1>
        <div className={styles.inputcontent}>
          <div className={styles.input2}><img className={styles.img} src={person}></img><input className={styles.input}  placeholder='Enter your Username'  type='text'></input></div>
          <div className={styles.input2}><img className={styles.img}src={lock}></img><input className={styles.input} placeholder='Enter your Password'  type='password'></input></div>
        </div>

<NavLink to="/dashboard">
            <Button>Sign In </Button>
          </NavLink>
          <div><a>Dont have an account?</a><a href="/signup">Sign up</a></div>
        
    </div>
  )
  
}

export default Logincomponents;
