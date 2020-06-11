import React from 'react';
import { Link } from 'react-router-dom';
import ReactImg from '../../../images/react.svg';
import Illustrate from '../../../images/illustrate.svg';
import Figma from '../../../images/figma.svg';

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
            <img className='icons' src={ ReactImg } alt=""/>
            <img className='icons' src={ Illustrate } alt=""/>
            <img className='icons' src={ Figma } alt=""/>
        </div>
    </article>
    );
}

export default IntroPort; 