import React from 'react';
import './CopyRight.css';

function CopyRight() {
    return (
        <div className="copyright-container">
            <div>
            <p>Designed  and Developed by Ruthwik Chikoti</p>
            </div>
            <div>
                <p className="copyright-text"> Copyright © 2024 RC </p>
            </div>
            <div className="social-icons-copy">
                <i className="fab fa-github"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-instagram"></i>
            </div>
        </div>
    );
}

export default CopyRight;
