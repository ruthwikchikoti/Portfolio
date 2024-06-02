import React from 'react';
import './Resume.css';

function Resume() {
    const pdfLink = "https://drive.google.com/uc?export=download&id=1Jy6KKB5yQGWSB-tl3Ux-mSjXzd-Ici7N";
    const embedLink = "https://drive.google.com/file/d/1Jy6KKB5yQGWSB-tl3Ux-mSjXzd-Ici7N/preview";

    return (
        <div className="resume-container" id='resume'>
            <h1 className='h1-res'>Resume</h1>
            <div className="pdf-viewer">
                <embed src={embedLink} type="application/pdf" className="pdf-embed" />
            </div>
            <button className="download-button">
                <a href={pdfLink} download="Profile.pdf">Download Resume</a>
            </button>
        </div>
    );
}

export default Resume;
