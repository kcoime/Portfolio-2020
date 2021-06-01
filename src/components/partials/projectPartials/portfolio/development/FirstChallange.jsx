import React from 'react';

// Images
import PartialsImg from '../../../../images/project-images/partials.PNG'
import CursedPartial from '../../../../images/project-images/cursedImg.PNG'

// Gist
import Gist from 'react-gist';

const FirstChallangePort = () => {

    const gistData = {
        id: "96469a04f64f9a69bb5195ab20baaaa3",
        file: null
    }

    return (
        <section className="development-process-inichall">
            <div className="initial-chal">
                <div className="desc">
                    <h5>Initial Challange</h5>
                    <p>The first hurdle I had to overcome when it came to React was to make sure that everything is organised properly. For the sake of my sanity everything that had to do with React partials (found in the partials folder) ended with the React exclusive extension <code>.JSX</code>, whilst everything outside was labled .JS. Both files essentially do the same thing, extension helps me to figure out if I'm working on a Partial or working on something Global.</p>
                </div>
                <div className="img-wrapper">
                    <img src={PartialsImg} alt=""/>
                    <img src={CursedPartial} alt=""/>
                </div>
            </div>
            <div className="first-chal">
                <div className="first-desc">
                    <h5>First Challange</h5>
                    <p>My first big challange was to figure out which parts of my HTML Markup is going to be a partial and which are not. Again similar to the initial challange it's all about how the app is organised and if each partial has the proper Class name for the styling to work properly.</p>

                    <p>Unfortualy I lost the image of my HTML markup but you can use your imagination on how it went... (spoiler alert: It looked like the site)
                    </p>

                    <p>Now I would love to show the entire site to everyone, but it's rather messy with it's many layers and folders, so here is the basic skeleton (Router) of the site itself.
                    </p>
                </div>
            </div>
            <div className="code-area">
                <Gist id={gistData.id} />
            </div>
        </section>
    );
}

export default FirstChallangePort;