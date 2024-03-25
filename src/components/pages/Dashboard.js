// Navbar.js
import React, { useState } from 'react';
import Header from '../Header';
import styles from '../styles/dashboard.module.css'
import image from '../assets/images/Rectangle139.png'
import Logincomponents from '../Logincomponents';
import Button from '../Button.js';
import { Link, NavLink } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import logo from '../assets/images/logo.png'
import image2 from '../assets/images/Rectangle129.png'
import '../styles/tabs.css'
import image3 from '../assets/images/group12.png'


const links = ["home", "about", "features", "pricing",];

function Dashboard() {
  const [activeTab, setActiveTab] = useState('Featured');
  const data = ['Introductory Lesson','hi','byebye']
  let num_cards = data.length

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return(
    <div>
      <div className={styles.topcontent} >
        
        <div className={styles.topdecoration}>

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
    
  <div className={styles.subcontent}>
      <div className={styles.leftcontent}>
        <img className={styles.img} src={image}></img>
        {/* <Image src={image2} width="25%" height='50%'></Image> */}
      </div>

      <div className={styles.rightcontent}>
        <Image src={image2} width="25%" height='50%'></Image>
        <h1>Hello Michael</h1>
        <p>Welcome to your Dashboard</p>
        <div className={styles.test}>
          <div className={styles.activitybox}></div>
          <div className={styles.activitybox}></div>
          <div className={styles.activitybox}></div>
        </div>

    </div>
    
    </div>
    
   
            
        </div>
        
       </div>
    <div className={styles.bottom}>
      <div>
          <div className="tab">
            <button className={activeTab === 'Featured' ? 'active' : ''} onClick={() => handleTabClick('Featured')}>Featured</button>
            <button className={activeTab === 'In Progress' ? 'active' : ''} onClick={() => handleTabClick('In Progress')}>In Progress</button>
            <button className={activeTab === 'Completed' ? 'active' : ''} onClick={() => handleTabClick('Completed')}>Completed</button>
          </div>

          <div id="Featured" className="tabcontent" style={{ display: activeTab === 'Featured' ? 'block' : 'none' }}>
            <h3>Section 1</h3>
            <p>This is the content of section 1.</p>
            <div>
            {data.length > 0 ? ( 
                <div>
                  
                    {data.map((item, index) => (
                      <div className={styles.lessoncontainer}>
                          <div className={styles.lessoncard} key={index}>
                            <div className={styles.lessoncardleft}>
                           
                              
                              <div className={styles.title}><h2>{item} </h2>Introdction to Coding in Robolabs</div>
                              <div>Percentage complete</div>
                              <Button>GO TO COURSE</Button>
                            </div>
                           
                            <div className={styles.lessoncardright}> <Image src={image3} width="80%" height='100%' style={{ position: 'relative', top: '35%', transform: 'translateX(35%)' }}></Image></div>
                          
                          </div>
                      </div>
                        // <p key={index}>{item}</p> 
                        
                    ))}
                </div>
            ) : (
                <p>No data available</p> 
            )}
            
        </div>
          </div>

          <div id="In Progress" className="tabcontent" style={{ display: activeTab === 'In Progress' ? 'block' : 'none' }}>
            <h3>Section 2</h3>
            <p>This is the content of section 2.</p>
          </div>

          <div id="Completed" className="tabcontent" style={{ display: activeTab === 'Completed' ? 'block' : 'none' }}>
            <h3>Section 3</h3>
            <p>This is the content of section 3.</p>
          </div>
        </div>
      </div>
        
    </div>
    
    
  )
  
}

export default Dashboard;
