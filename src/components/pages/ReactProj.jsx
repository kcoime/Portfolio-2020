import React from 'react';
import IntroRea from '../partials/projectPartials/react/Intro';
import ScopeRea from '../partials/projectPartials/react/Scope';
import ConcluRea from '../partials/projectPartials/react/Conclusion';

const ReactProj = () => {
    return(
        <div className="wrapper">
            <main>
                <IntroRea/>
                <article className="seperator" id="scope">
                    <h2>The Project Scope</h2>
                    <ScopeRea/>
                </article>
                <article className="seperator" id="process">
                    <h2>Process / Challanges</h2>
                    <h1>Development Case Study coming soon...</h1>
                </article>
                <article className="seperator" id="reflection">
                    <h2>Reflections / Improvements</h2>
                    <ConcluRea/>
                </article>
            </main>
        </div>
    )
};

export default ReactProj;