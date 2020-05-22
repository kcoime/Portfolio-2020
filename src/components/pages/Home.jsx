import React from 'react';
import Projects from '../partials/Projects';
import About from '../partials/About';
import Tower from '../images/tower.svg';

const Home = () => {
    return (
        <div>
            <div className="welcome-partial">
                <h1>{'<Welcome />'}</h1>
                <p><span>Enjoy</span> your stay</p>   
            </div> {/*  end of welcome partial */}
            <Projects/>
            <About />
            <div className="contact">
                <div className="partial-title"><img className='icons' src={Tower} alt="tower"/><h1>Contact</h1></div>
                <p>Feel free to contact me for anything! Be it small projects (brochure sites, advertisment sites), or large complexed sites with teams, I'm always up for a challange.</p>
                <button>Let's do this together!</button>
            </div>
        </div>
    )
};

export default Home;