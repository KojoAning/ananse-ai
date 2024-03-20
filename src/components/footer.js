import React from 'react';
import styles from "./styles/footer.module.css"
import { Image } from 'react-bootstrap';
import image from './assets/images/logo.png'
import Divcontent from './divcontent';
import { divcontents } from './divcontents.ts';

function Pagefooter() {
  return (
    <div className={styles.container}>
        <div className={styles.footerlogo}>
            <Image src={image}></Image>
        </div>
        <div className={styles.testimonialgrid}>
            {divcontents.map((recommendation, index) => {
              return <Divcontent key={index} {...recommendation} />;
            })}
          </div>    
        
      
    </div>
  );
}

export default Pagefooter;
