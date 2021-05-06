import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const About = () => {

    const MyAge = () => {
        const currentCalendar   = new Date()
        const currentYear       = currentCalendar.getFullYear();

        const currentAge = currentYear - 1999        

        return (
            <span>{currentAge}</span>
        )
    }


    return (
        <>
            <main className="main-about">
                <div className="title">
                    <h1 className="page-heading">About <span>Me</span></h1>
                    <Link to={'/'}>Return</Link>
                </div>

                <p className="lead">
                    Hello my name is Keyfie Coime, I am a Web Developer/UX Designer from Vancouver BC. A fan of History and Tech, {MyAge()} or something...
                </p>
                
                <p>
                    I have always been interested in learning programming, but found the black screen of the command prompt really of boring. Which brings me to where I am today, a lone Web Developer from the port city of Vancouver in British Columbia! Feel free to chat if you want someone to build a clean, responsive website, or if you just want to chill, that's cool too...
                </p>
            </main>
        </>
    )
}

export default About;