import React from 'react';
import { Link } from 'react-router-dom';

const IntroPort = () => {
    return (
        <article className="welcome-content">
        <div className="header-wrapper">
            <h1>Portfolio</h1>
        </div>
        <div className="button-wrapper">
            <Link to={'/'} className="button-link">View Live</Link>
            <a className="button-link">View on Github</a>
        </div>
        <div className="made-with-wrapper">

        </div>
    </article>
    );
}

export default IntroPort; 