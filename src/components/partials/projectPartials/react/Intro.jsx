import React from 'react';
import ReactImg from '../../../images/react.svg';
import Postman from '../../../images/postman.svg';
import CineWatch from '../../../images/project-images/rea-banner.png';

const IntroRea = () => {
    return (
        <article className="welcome-content">
            <div className="header-wrapper">
                <img className="header-img" src={ CineWatch } alt=""/>
                <h1>CineWatch</h1>
            </div>
            <div className="button-wrapper">
                <a href="/cinewatch/" className="button-link live">View Live</a>
                <a href="https://github.com/kcoime/cinewatch" className="button-link">View on Github</a>
            </div>
            <div className="made-with-wrapper">
                <h4>Made With</h4>
                <img className='icons' src={ ReactImg } alt=""/>
                <img className='icons' src={ Postman } alt=""/>
            </div>
    </article>
    );
}

export default IntroRea; 