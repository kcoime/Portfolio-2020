import React from 'react';
import Sword from '../images/sword.svg';
import Placeholder from '../images/coming-soon.png';

const Projects = () => {
    return  (
    <div className="projects" id="projects">
        <div className="partial-title"><img className='icons' src={Sword} alt="Sword"/><h1>About me</h1></div>
        <article className='project-box react'>
            <h2>CineWatch</h2>
            <img src={Placeholder} alt="place holder"/>
            <div className="icon-holder"></div>
        </article>
        <article className='project-box capstone'>
            <h2>Capstone</h2>
            <div className="icon-holder"></div>
        </article>
        <article className='project-box portfolio'>
            <h2>Portfolio</h2>
            <div className="icon-holder"></div>
        </article>
    </div>
    );
}
export default Projects; 