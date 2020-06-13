import React from 'react';
import { Link } from 'react-router-dom';
import ReactImg from '../../../images/react.svg';
import Postman from '../../../images/postman.svg';
import KCoime from '../../../images/project-images/port-banner.png';

const IntroRea = () => {
    return (
        <article className="welcome-content">
            <div className="header-wrapper">
                <img className="header-img" src={ KCoime } alt=""/>
                <h1>CineWatch</h1>
            </div>
            <div className="button-wrapper">
                <Link to={'/'} className="button-link live">View Live</Link>
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