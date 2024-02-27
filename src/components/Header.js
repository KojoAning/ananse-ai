// Header.js

import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './styles/header.module.css'
import logo from '../assets/images/logo.png'

const links = ["home", "about", "features", "pricing",];

const Header = () => {
  return (
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
  );
};

export default Header;
