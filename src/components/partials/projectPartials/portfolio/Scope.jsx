import React from 'react';
import MockupImg from '../../../images/project-images/showcase-portfo.png';

const ScopePort = () => {
    return (
        <section className='scope'>
            <div className="scope-content">
                <div className="objectives">
                    <h3>Objective:</h3>
                    <p>To create our personal website that will act as a place where we can place not only our projects from TWD, but also any future projects down the road. I wanted to focus on the powerful framework of React for this website, due in part to its extreme versatility. As it does not limit itself to a browser but can also be used in as an app (Slack, Netflix, Discord are just a few examples of ‘webapps’ that can be used on a mobile device).</p>
                    <p>The purpose of this site is to challenge myself and to develop my understanding of this extremely powerful framework. This is NOT how React is supposed to be used at all, in fact I would consider the use of this framework for a static site like this to be “overkill”.</p>
                    <p>TLDR: React is supposed to be used for “Dynamic” sites, NOT “Static” ones (This site is what one would consider “Static”)</p>
                </div>
                <div className="team">
                    <h3>Team Members:</h3>
                    <ul>
                        <li>Keyfie Coime (Team lead, Designer, Developer)</li>
                    </ul>
                </div>
            </div>
            <div className="scope-img">
                <img src={ MockupImg } alt=""/>
                <p className="image-subtext">High Fidelity Mockup of the "Kcoime" app</p>
            </div>
        </section>
    )   
}

export default ScopePort;