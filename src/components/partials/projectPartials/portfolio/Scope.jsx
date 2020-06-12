import React from 'react';
import MockupImg from '../../../images/project-images/portfo-mockup.PNG';

const ScopePort = () => {
    return (
        <section className='scope'>
            <div className="scope-content">
                <div className="objectives">
                    <h3>Objective:</h3>
                    <p>Although we had only touched on a small portion of the potential of the library during the "JavaScript Frameworks" module, it was Reacts versatility which hooked my interest from the beginning. Unlike WordPress, React is used to create Web Applications allowing it to be rendered as an app. You can see it work it is magic on apps such as Discord, Slack, and Netflix to name a few which all can be accessed via Web Browser or an individual Application.</p>
                    <p>The objective of the site was to challenge myself and my understanding of the React Framework by creating a site using its base features. As mentioned before this is NOT at all the correct way this framework is to be used, in fact React may be "overkill" if one where to use it this way.</p>
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