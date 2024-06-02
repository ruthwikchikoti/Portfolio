import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import CopyRight from './Components/CopyRight';
import Project from './Components/Projects/Project';
import Resume from './Components/Resume/Resume';
import About_home from './Components/About-home';
import About from './Components/About/About';
import nightsky from "./Components/LottieFiles/night-sky.json";
import Lottie from "lottie-react";

function App() {
  return (
    <div className="App">
      <Lottie className="bg" animationData={nightsky} loop={true} />
      <NavBar />
      <Home />
      <About_home />
      <Project />
      <Resume />
      <About />
      <CopyRight />
    </div>
  );
}

export default App;
