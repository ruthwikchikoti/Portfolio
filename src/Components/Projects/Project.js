import React, { useEffect } from 'react';
import './Project.css';
function Project() {
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.project-item');
            const windowHeight = window.innerHeight;

            elements.forEach(element => {
                const position = element.getBoundingClientRect().top;
                if (position < windowHeight - 100) {
                    element.classList.add('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="project-container" id='Projects'>
            <h1 className="project-title">My Recent <span className='colred-text'>Works</span></h1>
            <p className="project-description">Here are a few projects I've worked on recently. Want to see more projects?</p>
            <div className="project">
                <div className="project-item">
                    <img src='https://soumyajit.vercel.app/static/media/chatify.7206044e0b5cdad44726.png' alt="chatify" className="project-item-image" />
                    <h2 className="project-item-title">Image Editor</h2>
                    <p className="project-item-description">"Java Image Editor: Empowers basic image editing tasks through Java's BufferedImage and ImageIO classes. Allows easy adjustment of brightness, rotation, and inversion via console input."</p>
                    <div class="github-link">
                        <a href="https://github.com/example" class="github-logo"></a>
                    </div>                </div>
                <div className="project-item">
                    <img src='https://soumyajit.vercel.app/static/media/chatify.7206044e0b5cdad44726.png' alt="chatify" className="project-item-image" />
                    <h2 className="project-item-title">Web Scrapper</h2>
                    <p className="project-item-description">"Dynamic Python web scraper extracts product prices from major e-commerce platforms—Flipkart, Snapdeal, and Amazon. Enables seamless comparison, empowering users to discover the most cost-effective options effortlessly."</p>
                    <div class="github-link">
                        <a href="https://github.com/example" class="github-logo"></a>
                    </div>                </div>
                <div className="project-item">
                    <img src='https://soumyajit.vercel.app/static/media/chatify.7206044e0b5cdad44726.png' alt="chatify" className="project-item-image" />
                    <h2 className="project-item-title">Kanban Board</h2>
                    <p className="project-item-description">"Developed a dynamic Kanban Board application utilizing JavaScript, HTML, and CSS. Offers intuitive task management and visual workflow tracking, enhancing productivity and organization effortlessly."</p>
                    <div class="github-link">
                        <a href="https://github.com/example" class="github-logo"></a>
                    </div>                </div>
                <div className="project-item">
                    <img src='https://soumyajit.vercel.app/static/media/chatify.7206044e0b5cdad44726.png' alt="chatify" className="project-item-image" />
                    <h2 className="project-item-title">Product Service</h2>
                    <p className="project-item-description">"Product Service is a Java Spring Boot project leveraging the Fakestore API. It provides seamless access to a range of product data, enabling efficient development and testing of e-commerce applications."</p>
                    <div class="github-link">
                        <a href="https://github.com/example" class="github-logo"></a>
                    </div>                </div>
                <div className="project-item">
                    <img src='https://soumyajit.vercel.app/static/media/chatify.7206044e0b5cdad44726.png' alt="chatify" className="project-item-image" />
                    <h2 className="project-item-title">Vehicle Service Management</h2>
                    <p className="project-item-description">"The Vehicle Service Management System efficiently tracks and organizes vehicle service records, simplifying scheduling and maintenance tasks with Java Spring Boot and MySQL."</p>
                    <div class="github-link">
                        <a href="https://github.com/example" class="github-logo"></a>
                    </div>                </div>
                <div className="project-item">
                    <img src='https://soumyajit.vercel.app/static/media/chatify.7206044e0b5cdad44726.png' alt="chatify" className="project-item-image" />
                    <h2 className="project-item-title">Tic Tac Toe</h2>
                    <p className="project-item-description">"Crafted a Java-based Tic Tac Toe game, offering players an interactive experience with intuitive gameplay mechanics. Implemented in Java, this project demonstrates proficiency in object-oriented programming and user interface design."</p>
                    <div class="github-link">
                        <a href="https://github.com/example" class="github-logo"></a>
                    </div>                </div>
                <div className="project-item">
                    <img src='https://soumyajit.vercel.app/static/media/chatify.7206044e0b5cdad44726.png' alt="chatify" className="project-item-image" />
                    <h2 className="project-item-title">Travel Assistance</h2>
                    <p className="project-item-description">"Developed a robust Travel Assistance platform with AI-powered chat support, empowering users to explore islands, estimate living expenses, and check ticket prices effortlessly. Seamlessly combining exploration features with personalized chat assistance, the platform ensures users have all the necessary details for an unforgettable journey."</p>
                    <div class="github-link">
                        <a href="https://github.com/example" class="github-logo"></a>
                    </div>                </div>
                <div className="project-item">
                    <img src='https://soumyajit.vercel.app/static/media/chatify.7206044e0b5cdad44726.png' alt="chatify" className="project-item-image" />
                    <h2 className="project-item-title">Snake Game</h2>
                    <p className="project-item-description">"Crafted a classic Snake Game using JavaScript, HTML, and CSS, providing users with an addictive gaming experience directly in the browser. Leveraging the power of web technologies, this project showcases interactive gameplay and sleek design for nostalgic fun."</p>
                    <div class="github-link">
                        <a href="https://github.com/example" class="github-logo"></a>
                    </div>                </div>
                <div className="project-item">
                    <img src='https://soumyajit.vercel.app/static/media/chatify.7206044e0b5cdad44726.png' alt="chatify" className="project-item-image" />
                    <h2 className="project-item-title">Tweeter</h2>
                    <p className="project-item-description">"Developed a Twitter-inspired website allowing users to post updates, engage with others through likes and comments, and maintain control over their content with the ability to delete posts. Implemented using modern web technologies, the platform fosters seamless interaction and user-generated content in a familiar social media setting."</p>
                    <div class="github-link">
                        <a href="https://github.com/example" class="github-logo"></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
