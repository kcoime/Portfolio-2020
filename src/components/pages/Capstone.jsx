import React from 'react';
import IntroCap from '../partials/projectPartials/capstone/Intro';
import ScopeCap from '../partials/projectPartials/capstone/Scope';
import ConcluCap from '../partials/projectPartials/capstone/Conclusion';

const Capstone = () => {
    return(
        <div className="wrapper">
            <main>
                <IntroCap/>
                <article className="seperator" id="scope">
                    <h2>The Project Scope</h2>
                    <ScopeCap/>
                </article>
                <article className="seperator" id="process">
                    <h2>Process / Challanges</h2>
                    <h1>Development Case Study coming soon...</h1>
                </article>
                <article className="seperator" id="reflection">
                    <h2>Reflections / Improvements</h2>
                    <ConcluCap/>
                </article>
            </main>
        </div>
    )
};

export default Capstone;