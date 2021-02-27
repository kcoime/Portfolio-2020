import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const About = () => {

    //const [myAge, setMyAge] = useState('');

    // const MyAge = () => {
    //     let currentDay  = new Date().getDate();
    //     let currentMonth = new Date().getMonth();
    //     let currentYear  = new Date().getFullYear();

    //     console.log(currentDay + ' ' + currentMonth + ' ' + currentYear)

    //     if(currentDay, currentMonth, currentYear){
    //         currentDay >= 6;
    //         currentMonth >=3
    //         return currentYear - 2000;
    //     }else {
    //         return currentYear - 1999;
    //     }
    // }



    return (
        <>
            <header className="header-about">
                <div className="cheat-space"></div>
                <Link to={'/'}>Return</Link> 
            </header>
            <main className="main-about">
                <div className="title"><h1 className="page-heading">About <span>Me</span></h1></div>

                <p className="lead">
                    Hello my name is Keyfie Coime, I am a Web Developer/UX Designer from Vancouver BC. A fan of History and Tech, 21 or something...
                </p>
                
                <p>
                    I have always been interested in learning programming, but found the black screen of the command prompt really of boring. Which brings me to where I am today, a lone Web Developer from the port city of Vancouver in British Columbia! Feel free to chat if you want someone to build a clean, responsive website, or if you just want to chill, that's cool too...
                </p>
            </main>
        </>
    )
}

export default About;