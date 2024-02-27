// RecommendationCard.js
import React from 'react';
import { Image } from 'react-bootstrap';
import styles from './styles/testimonial.module.css'; 


function RecommendationCard({ name, img, description }) {
  return (
    <div className={styles.container}>
        <Image src={img} width={80} height={80} alt={name} />
        <div>
        <p className={styles.description}>" {description} "</p>
        <h1 className={styles.cardTitle}>{name}</h1>
        </div>
        
        
    </div>

  );
}

export default RecommendationCard;
