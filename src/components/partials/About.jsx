import React from 'react';
import Rose from '../images/Rose.svg';

const About = () => {
    return (
    <div className="about">
        <div className="col-desc">
            <div className="partial-title">
                <img className='icons' src={Rose} alt="Rose"/>
                <h1>About me</h1>
            </div>    
            <p>
            Hello my name is Keyfie Coime, I am a web developer from Vancouver British Columbia! (or in otherwords really, REALLY far west). I have always been interested in learning programming, but found the black screen of the terminal / command prompt really of boring. Which brings me to where I am today, if you ever need someone to build a site for you I'm willing to lend a helping hand.
            </p>        
        </div>
        <div className="col-stack">
            <div className="col-dev"></div>
            <div className="col-des"></div>
        </div>
    </div>
    );
}
export default About; 
