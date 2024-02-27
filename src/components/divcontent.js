import React from 'react';
import styles from './styles/divcontent.module.css'
import { Link } from 'react-router-dom';

function Divcontent({ title ,link1 , link2 }) {
  return (
    <div className={styles.divgrid}>
        <div className={styles.divcontentgrid}>
        <p className={styles.titlelink}>{title}</p>
        <div className={styles.linkcontainer}>
        <Link className={styles.links} to='/'>{link1}</Link>
        <Link className={styles.links} to='/'>{link2}</Link>
        </div>
        
        </div>
        
    </div>
  );
}

export default Divcontent;
