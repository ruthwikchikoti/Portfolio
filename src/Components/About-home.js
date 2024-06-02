import React from 'react';
import './About-home.css';

function About_home() {
    return (
        <div className='about'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            
            <div className="tile">
                <div className="intro">
                    <h1>LET ME <span className='color-text'>INTRODUCE</span> MYSELF</h1>
                    <p>
                        I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️<br /><br />
                        I am fluent in classics like <span className='color-text'>C++, Javascript and Go.</span><br /><br />
                        My field of Interest's are building new <span className='color-text'>Web Technologies and Products</span> and also in areas related to<span className='color-text'> Blockchain</span>.<br /><br />
                        Whenever possible, I also apply my passion for developing products with Node.js and <span className='color-text'>Modern Javascript<br></br> Library and Frameworks </span>like <span className='color-text'>React.js and Next.js</span>
                    </p>
                </div>

                <div className="avatar">
                    <img src="https://soumyajit.vercel.app/static/media/avatar.5852f40fbb38aa284829fa3fb7722225.svg" alt="Avatar" />
                </div>
            </div>

            <div className="container">
                <h1>FIND ME ON</h1>
                <p>Feel free to <span className='color-text'>connect</span> with me</p>
                <div className="social-icons">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                </div>

            </div>
        </div>
    );
}

export default About_home;
