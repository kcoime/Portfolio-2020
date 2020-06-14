import React from 'react';
import Augustus from '../../../../images/project-images/augustus.jpg';
import DukeOfLancaster from '../../../../images/project-images/henry-lancaster.jpg';
import ContentPlan from '../../../../images/project-images/portfo-content-plan.PNG';
import InfoArchitecure from '../../../../images/project-images/portfo-info-archi.PNG';
import Wireframe from '../../../../images/project-images/portfo-full-wireframe.PNG';

const DesignPort = () => {
    return (
        <section className="design-process">
            <h3>Design Process</h3>
            <div className="themes">
                <div className="themes-desc">
                    <h4>Insperations and Themes</h4>
                    <p>I wanted to go for a simple colour scheme: black, white, and an accent colour. The challenge was to find an accent colour that worked well with what I was feeling would be a good fit for the site. So, I choose a colour that was very important to one of my favourite civilisations, one that managed to live for over 1000 years: The Roman Empire. Tyrian red (#990024), a natural variant of the Roman / Byzantine Imperial Colour Tyrian Purple (#66023C) is one of my favourite colours. Technically it as a purple with some hues of Red but that ambiguity, along with it's importance in European history is what gives it it's charm.</p>
                    <p>The colour scheme was not the only inspiration of I received from my love for history. When deciding how to implement the languages and tools for the site an Instructor gave me some suggestions to implement them without the site looking bloated. This “Skill Stack” was the answer to my problem with bloat, the only problem was me being afraid of my About Section looking too “wordy”.</p>
                    <p> The solution was the image of the Duke of Lancaster, holding some of the Arms of the Knights of the Garter. By turning these “Stack” into handmade images representing Coat of Arms, I was able to keep the relative information of the skills and languages I had developed during the program, whilst keeping a simple design that, I think is pleasing to look at. </p>
                    <div className="colour-swatches">
                        <div className="colour-wrapper">
                            <div className="colour white"></div>
                            <p className="image-subtext">#FFFFFF</p>
                        </div>
                        <div className="colour-wrapper">
                            <div className="colour dark"></div>
                            <p className="image-subtext">#292929</p>
                        </div>
                        <div className="colour-wrapper">
                            <div className="colour red"></div>
                            <p className="image-subtext">#990024</p>
                        </div>
                    </div>
                </div>
                <div className="process-img">
                    <img src={ Augustus } alt="Imperator Augustus as 'Pontifix Maximus'"/>
                    <img className="float" src={ DukeOfLancaster } alt="Henry Duke of Lancaster with the Order of the Garter"/>
                    <p className="image-subtext">Augustus and Henry, Duke of Lancaster (with the Arms of the Knights of the Garter)</p>
                </div>
            </div>
            <div className="steps">
                <h4 className="step-title">Step by Step</h4>
                <div className="grid-wrapper">
                    <div className="content-map">
                        <h5>Content Map</h5>
                        <p>Creating a plan for the site was probably one of the more time consuming part of the project. Having to figure out which projects I wanted to display and which ones to leave out. As for the ones I decided to share with you another problem was presented: How much should I share without getting people bored? The image of my content map shows which topics I thought would make for interesting, worth while content.</p>
                    </div>
                    <img className="content-img" src={ ContentPlan } alt="Content Map Image"/>
                    <div className="info-arc">
                        <h5>Information Architecture</h5>
                        <p>Information Architecture is simply the layout of the site, how each page is linked together and where each page takes you. This site is an extreamly simple site. Everything links back to the homepage one way or another, with the only exception being the external link to Github.</p>
                    </div>
                    <img className="info-img" src={ InfoArchitecure } alt="Information Architecture Image"/>
                    <div className="wireframe">
                        <h5>Wireframe / Design Mockup</h5>
                        <p>Probably the most time I spent durring the design process. Using figma I wanted to try my hand at making High Fidelity Wireframes (if you haven't used Figma yet, I highly recommend it). Wireframes are important as they allow for clients and developers to change anything they want on the site before it goes into development. That is extreamly important for avoding scope creep and allows for the client to have an expectation of what the site will look like when presented with the final product.</p>
                    </div>
                    <img className="wireframe-img" src={ Wireframe } alt="Wireframe / Mockup"/>
                </div>
            </div>
        </section>
    );
}

export default DesignPort;