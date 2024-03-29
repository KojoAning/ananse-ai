// ProfileCard.js
import React from 'react';
import { Image } from 'react-bootstrap';
import styles from './styles/Profilecard.module.css'; // Adjust the import based on the actual path
// import image from '../assets/'

function ProfileCard({ name, img, description }) {
  return (
    <div className={styles.cardContainer}>
        <Image src={img} alt="" height="70%" width='100%'/>
      <div className={`${styles.cardContent} text-purple`}>
        <h1 className={styles.cardTitle}>{name}</h1>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
