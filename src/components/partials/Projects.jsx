import React from 'react';
import { Link } from 'react-router-dom';
import Sword from '../images/sword.svg';
import ReactLogo from '../images/react.svg';
import Postman from '../images/postman.svg';
import Wordpress from '../images/wordpress.svg';
import Figma from '../images/figma.svg';
import Illustrate from '../images/illustrate.svg';
import Placeholder from '../images/coming-soon.png';

const Projects = () => {
    return  (
    <article className="projects" id="projects">
        <header className="partial-title projects-partial"><img className='icons' src={Sword} alt="Sword"/><h1>Projects and Work</h1></header>
        <section className='project-box react'>
            <div className="content-container react-cont">
                <h2>CineWatch</h2>
                <div className="icon-holder">
                    <img className='icons' src={ReactLogo} alt=""/>
                    <img className='icons' src={Postman} alt=""/>
                </div>
                <p>Cinewatch is a web application created with Reactjs. It aims to create a movie information website using the Movie Database API. Dynamically taking information from the database and displaying them in a custom, handmade website.</p>
                <button><Link to={'React'}>View Project</Link></button>
            </div>
            <img className='react-img' src={Placeholder} alt="place holder"/>
        </section>
        <section className='project-box capstone'>
            <div className="content-container cap-cont">
                <h2>Bellezza Hair Studio</h2>
                <div className="icon-holder">
                    <img className='icons' src={Wordpress} alt=""/>
                    <img className='icons' src={Figma} alt=""/>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quam asperiores officia neque? Voluptas laudantium ex cumque dicta autem quae nostrum officia ipsa officiis dignissimos.</p>
                <button><Link to={'Capstone'}>View Project</Link></button>
            </div>
            <img className='cap-img' src={Placeholder} alt="place holder"/>
        </section>
        <section className='project-box profolio'>
            <div className="content-container port-cont">
                <h2>Portfolio</h2>
                <div className="icon-holder">
                    <img className='icons' src={ReactLogo} alt=""/>
                    <img className='icons' src={Figma} alt=""/>
                    <img className='icons' src={Illustrate} alt=""/>
                </div>
                <p>The site that you are currently viewing right now. Keep in mind that this site was made purely to practice my skills and understanding of React. This is NOT the proper way React is to be used. It is merely an exercise to get me familiar with this extremely powerful framework.</p>
                <button><Link to={'Portfolio'}>View Project</Link></button>
            </div>
            <img className='port-img' src={Placeholder} alt="place holder"/>
        </section>

    </article>
    );
}
export default Projects; 