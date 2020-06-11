import React from 'react';
import IntroPort from '../partials/projectPartials/portfolio/Intro';
import ScopePort from '../partials/projectPartials/portfolio/Scope';
import DesignPort from '../partials/projectPartials/portfolio/design/Design';
import FirstChallange from '../partials/projectPartials/portfolio/development/FirstChallange';
import SecondChallange from '../partials/projectPartials/portfolio/development/SecondChallange';
import PortfoConclu from '../partials/projectPartials/portfolio/Conclusion';

const Portfolio = () => {
    return(
        <div className="wrapper">
            <main>
                <IntroPort />
                <article className="seperator" id="scope">
                    <h2>The Project Scope</h2>
                    <ScopePort />
                </article>
                <article className="seperator" id="process">
                    <h2>Process / Challanges</h2>
                    <DesignPort />
                    <FirstChallange />
                    <SecondChallange />
                </article>
                <article className="seperator" id="reflection">
                    <h2>Reflections / Improvements</h2>
                    <PortfoConclu />
                </article>
            </main>
        </div>
    )
};

export default Portfolio;