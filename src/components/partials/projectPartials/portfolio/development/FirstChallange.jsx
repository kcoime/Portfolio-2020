import React from 'react';

const FirstChallange = () => {
    return (
        <section className="development-process-inichall">
            <div className="initial-chal">
                <div className="desc">
                    <h5>Initial Challange</h5>
                    <p>The first hurdle I had to overcome when it came to React was to make sure that everything is organised properly. For the sake of my sanity everything that had to do with React partials (found in the partials folder) ended with the React exclusive extension .JSX, whilst everything outside was labled .JS. Both files essentially do the same thing, extension helps me to figure out if I'm working on a Partial or working on something Global.</p>
                </div>
                <div className="img-wrapper">
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                </div>
            </div>
            <div className="first-chal">
                <div className="first-desc">
                    <h5>First Challange</h5>
                    <p>My first big challange was to figure out which parts of my HTML Markup is going to be a partial and which are not. Again similar to the initial challange it's all about how the app is organised and if each partial has the proper Class name for the styling to work properly.</p>
                </div>
                <img src="" alt="First Challange sloved"/>
            </div>
            <div className="code-area">

            </div>
        </section>
    );
}

export default FirstChallange;