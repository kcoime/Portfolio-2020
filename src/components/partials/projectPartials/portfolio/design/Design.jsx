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
                    <p>Red and White. It can be argued that no specific combination of colours, except for these, can accuratly represent the glory, the legacy and the might of the Roman Empire. White being a symbol of Marble meaning the peak of civilisations in antiquity, and Red by how it essentally Roflstomped everything that that stood on it's quest to make the mediterranian it's personal swimming pool (before getting so bored, it started to roflstomp itself to near utter collapse).</p>
                    <p>To reflect this powerful colour scheme, I opted to use #FFF for white. As the historical colour #FFFFF0(Ivory) gave the site an ugly yellow hue. While that may have looked good in the 90s it certainly an eyesore to look at now. For the Red I though it would be appropriate to choose a variant of the Imperial Purpura (a colour only allowed by the Emperor) called "Tyrian Red" #990024, just to add a small hint of it's (mostly) forgotten Eastern Legacy.</p>
                    <p>The development section of the About page is a slight deviation from the massive Roman themes of the site. This came from an idea given to me by an Instructor about incorporating Dev and Design stacks as they were bloating my Project section. I still wanted to incorporate them to the site as I think it is a good reflection of what I learned during the program. So, I turned them into Coat of Arms as a stylised way of listing them without the extra bloat inspired by the English Order of the Garter.</p>
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