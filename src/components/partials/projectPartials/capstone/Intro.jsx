import React from 'react';
import Wordpress from '../../../images/wordpress.svg';
import Figma from '../../../images/figma.svg';
import KCoime from '../../../images/project-images/port-banner.png';

const IntroCap = () => {
    return (
        <article className="welcome-content">
            <div className="header-wrapper">
                <img className="header-img" src={ KCoime } alt=""/>
                <h1>Bellezza</h1>
            </div>
            <div className="button-wrapper">
                <a href="https://bellezza.bcitwebdeveloper.ca/" className="button-link live">View Live</a>
                <a href="https://github.com/htpwebdesign/bellezza" className="button-link">View on Github</a>
            </div>
            <div className="made-with-wrapper">
                <h4>Made With</h4>
                <img className='icons' src={ Wordpress } alt=""/>
                <img className='icons' src={ Figma } alt=""/>
            </div>
    </article>
    );
}

export default IntroCap; 