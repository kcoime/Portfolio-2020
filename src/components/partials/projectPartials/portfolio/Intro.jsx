import React from 'react';
import { Link } from 'react-router-dom';
import ReactImg from '../../../images/react.svg';
import Illustrate from '../../../images/illustrate.svg';
import Figma from '../../../images/figma.svg';
import KCoime from '../../../images/project-images/port-banner.png';

const IntroPort = () => {
    return (
        <article className="welcome-content">
            <div className="header-wrapper">
                <img className="header-img" src={ KCoime } alt=""/>
                <h1>VerCIllus</h1>
            </div>
            <div className="button-wrapper">
                <Link to={'/'} className="button-link live">View Live</Link>
                <a className="button-link">View on Github</a>
            </div>
            <div className="made-with-wrapper">
                <h4>Made With</h4>
                <img className='icons' src={ ReactImg } alt=""/>
                <img className='icons' src={ Illustrate } alt=""/>
                <img className='icons' src={ Figma } alt=""/>
            </div>
    </article>
    );
}

export default IntroPort; 