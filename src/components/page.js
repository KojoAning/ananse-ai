import React from 'react';
import Navbar from './Navbar';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from './Button';
import Header from './Header';
import styles from '../components/styles/pagestyles.module.css'
import imag1 from '../assets/images/img1.png'
import silverrobot from '../assets/images/silverrobot.png'
// import { profiles } from './profile';
import RecommendationCard from './Recommendationcard.js';
import { profiles } from './profiles.ts';
import ProfileCard from './ProfileCard.js';
import footer from './footer.js';
import { recommendations } from './recommendations.ts';

import Pagefooter from './footer.js';

function Mainpage() {
  return (
    <main className="text-white m-auto">
        <section id="home" className=" max-h-[1440px] bg-purple bg-[url('/flower.svg')] bg-contain bg-right bg-no-repeat ">
        <Header/>
        <div className={styles.gridcontent}>
        <div  className={styles.landingContent} >
          <Image width={700} height={320} src={imag1} alt="landing page image"/>
         <div className={styles.subtitle}>
            <h1 className={styles.ltext}>
            Join the Robotics Revolution.
            <br />
            Learn, Create, Innovate with Us!
          </h1>
          <p className={styles.my6}>
            Unlock Your Potential in Robotics with Personalized Tutoring
          </p>
          <Link href="/login">
            <Button>Get Started</Button>
          </Link>
         </div> 
        </div>
        <div className={styles.silverrobot}>
          <Image width={480} height={640} src={silverrobot} alt="silver robot"/>
        </div>
        </div>
        </section>
        <section id="about" className={styles.about} >

  <div className="flex flex-col items-center text-center">
    <h1 className="text-4xl font-bold">Who are we ?</h1>
    <p className="w-2/3 min-w-[500px] text-3xl">
    RoboLabs is an innovative online learning platform committed to inspiring individuals with 
the skills and knowledge necessary to thrive in the exciting world of robotics programming. 
Our mission is to make learning hands-on and fun, and we provide a holistic curriculum 
that delves into various facets, from the art of robot design to the intricacies of programming 
and control.
    </p>
  </div>
  <div >
    <h1 >Mission Statement</h1>
    <p>
    At RoboLabs, our primary mission is to ensure that robotics education is accessible to everyone. We've created a user-friendly platform that's easy to navigate, even if you don't have much experience with programming. Our courses are thoughtfully designed to be engaging, interactive, and enjoyable. They include a mix of video tutorials, hands-on exercises, and quizzes to help reinforce what you've learned. We're dedicated to making the process of learning about robotics both accessible and enjoyable for all.
    </p>
  </div>
  <div>
    <h1>Robolabs Training Tracks</h1>
    <div className={styles.profilegrid}>
          {profiles.map((profile, index) => (
            <ProfileCard key={index} {...profile} />
          ))}
        </div>
    
  </div>
  </section>
  <section className={styles.testimonial}>
  <div>
    <h1>What Parents and Kids Say</h1>  
    <div className={styles.testcontainer}>
    <div className={styles.Testimonialgrid}>
            {recommendations.map((recommendation, index) => {
              return <RecommendationCard key={index} {...recommendation} />;
            })}
          </div>       
    </div> 
    
  </div>
</section>


    </main>
  );
}

export default Mainpage;
