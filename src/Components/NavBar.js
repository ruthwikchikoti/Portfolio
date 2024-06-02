import React from "react";
import './NavBar.css';
import UseScroll from "./UseScroll";
const NavBar = () => {
  const scrolled = UseScroll();
  return (
    <div className={`navbar ${scrolled ? 'navbar-scroll ' : ''}`}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

      <div className="logo">RC.</div>
      <nav>
        <div>
          <div className="nav-item">
            <a href="/">
              <i className="fas fa-home"></i> Home
            </a>
          </div>


          <div className="nav-item">
            <a href="#about">
              <i className="fas fa-user"></i> About
            </a>
          </div>



          <div className="nav-item">
            <a href="#Projects">
              <i className="fas fa-desktop"></i> Projects
            </a>
          </div>


          <div className="nav-item">
            <a href="#resume" >
              <i className="fas fa-file"></i> Resume
            </a>
          </div>

          

          <div className="nav-item">
            <a href='https://media1.tenor.com/m/gr5slpH3yyUAAAAC/penguin-pudgy.gif' >
              <i className="fas fa-pen-nib"></i> Blogs
            </a>
          </div>

        </div>

        <a href="https://github.com/ruthwikchikoti" className="github-btn">
          <i class="fas fa-code-branch"></i>
          <span>☆</span>
        </a>

      </nav>
    </div>
  );
};

export default NavBar;
