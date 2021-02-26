import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const About = () => {

    const [myAge, setMyAge] = useState(0);

    // Defins
    const {
        age
    } = myAge

    const calculateAge = () => {
        const birthDate  = new Date();
        const difference = Date.now() - birthDate.getTime();
        const currentAge = new Date(difference);

        return Math.abs(currentAge.getUTCFullYear() - 1970);
    }

    console.log(calculateAge);

    return (
        <>
            <header className="header-about">
                <div className="cheat-space"></div>
                <Link to={'/'}>Return</Link> 
            </header>
            <main className="main-about">
                <div className="title"><h1 className="page-heading">About <span>Me</span></h1></div>

                <p className="lead">
                    Hello my name is Keyfie Coime, I am a Web Developer/UX Designer from Vancouver BC. A fan of History and Tech, {age} or something...
                </p>
                
                <p>
                    I have always been interested in learning programming, but found the black screen of the command prompt really of boring. Which brings me to where I am today, a lone Web Developer from the port city of Vancouver in British Columbia! Feel free to chat if you want someone to build a clean, responsive website, or if you just want to chill, that's cool too...
                </p>
            </main>
        </>
    )
}

export default About;