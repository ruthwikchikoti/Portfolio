import React from 'react';
import Typeeffect from './Typeeffect';
import './Home.css';
import  HomeMain from '../Assets/home-main.svg';

function Home() {
  const textArray = [
    "MERN Stack Developer",
    "Web Enthusiast",
    "Tech Enthusiast"
  ];

  return (
    <div>
      <section className="home">
        <div className='type'>
          <h1 className='handwave'>Hi There! <span role="img" className="hand-shake" aria-labelledby="wave">👋🏻</span></h1>
          <h1><span className='txt-color'>I'M</span> <span className='main-name'>Ruthwik Chikoti</span></h1>
          <div className='type-effect'><Typeeffect text={textArray} /></div>

        </div>
        <div className='home_img'>
          <img src={HomeMain} alt="home-main" />
        </div>
      </section>
    </div>
  );
}

export default Home;
