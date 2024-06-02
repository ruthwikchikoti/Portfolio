import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import CopyRight from './Components/CopyRight';
import Project from './Components/Projects/Project';
import Resume from './Components/Resume/Resume';
import About_home from './Components/About/About';
import About from './Components/About/About';
import nightsky from "./Components/LottieFiles/night-sky.json";
import Lottie from "lottie-react";

function App() {
  return (
    <div className="App">
      {/* <Lottie className="bg" animationData={nightsky} loop={true} /> */}
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About_home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about-details" element={<About />} />
        </Routes>
      </Router>
      <CopyRight />
    </div>
  );
}

export default App;
