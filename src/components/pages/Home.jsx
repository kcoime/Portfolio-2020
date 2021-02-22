import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Welcome from '../partials/Welcome';
import Projects from '../partials/Projects';
import About from '../partials/About';
import Tower from '../images/tower.svg';

const Home = () => {
    return (
        <div className="outer-wrapper">
            {/* <div className="skew"></div> */}
            <div className="wrapper" id="page-wrap">
                <main className="main-home">
                    <div className="screen-wrapper">
                        <div className="screen about-screen"></div>
                        <div className="screen project-screen"></div>
                        <h1 className="title">Keyfie Coime</h1>
                    </div>
                </main>
            </div>
        </div>
    )
};

export default Home;