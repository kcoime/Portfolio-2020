import React from 'react';
import {Link} from 'react-router-dom';

const About = () => {

    return (
        <>
        <header className="header-about">
            <div className="cheat-space"></div>
            <Link to={'/'}>Return</Link> 
        </header>
        <main className="main-about">
            <div className="title"><h1>About <span className="colour-change">Me</span></h1></div>
            
            <p>Hello my name is Keyfie Coime, I am a Web Developer / UX Designer from Vancouver BC (or in otherwords really, REALLY far West). A fan of History (any Byzantine lovers out there?) and Tech, I have always been interested in learning programming, but found the black screen of the terminal / command prompt really of boring. Which brings me to where I am today, a lone Web Developer from the port city of Vancouver in Beautiful British Columbia! If you ever need someone to build a clean, responsive website, or if you just want to talk about some Eastern Roman history (or history in general), I'm more than welcome to lend a helping hand.</p>
        </main>
        </>
    )
}

export default About;