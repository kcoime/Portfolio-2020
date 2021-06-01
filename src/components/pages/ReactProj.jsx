import React from 'react';
import Header from '../ProjectHeader';
import Footer from '../Footer';
import IntroRea from '../partials/projectPartials/react/Intro';
import ScopeRea from '../partials/projectPartials/react/Scope';
import ConcluRea from '../partials/projectPartials/react/Conclusion';
import FirstChallangeCine from '../partials/projectPartials/react/development/FirstChallange';

const ReactProj = () => {
    return(
        <div className="outer-wrapper">
            <Header />
            <div className="wrapper">
                <main>
                    <IntroRea/>
                    <article className="seperator" id="scope">
                        <h2>The Project Scope</h2>
                        <ScopeRea/>
                    </article>
                    <article className="seperator" id="process">
                        <h2>Process / Challanges</h2>
                        <FirstChallangeCine />
                    </article>
                    <article className="seperator" id="reflection">
                        <h2>Reflections / Improvements</h2>
                        <ConcluRea/>
                    </article>
                </main>
            </div>
            <Footer />
        </div>
    )
};

export default ReactProj;