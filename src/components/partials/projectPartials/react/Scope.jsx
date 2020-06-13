import React from 'react';
import MockupImg from '../../../images/project-images/showcase-react.png';

const ScopeRea = () => {
    return (
        <section className='scope'>
            <div className="scope-content">
                <div className="objectives">
                    <h3>Objective:</h3>
                    <p>The purpose of this project was to emulate a movie review site with the help of the Movie Database API. It has to be able to sort 20 films from the following catagories: Popular, Top Rated, Now Playing, and Upcoming. This was also our first real project after the one week break from BCIT. React was challanging to learn, but it's potential absolutly limitless (well, not really, but you get the point, tones of functionality!), being able to pull from an online database with an API and allowing said information to be displayed dynamically was nothing short of amazing to me.</p>
                </div>
                <div className="team">
                    <h3>Team Members:</h3>
                    <ul>
                        <li>Alfred Ko</li>
                        <li>Hans Santos</li>
                        <li>Keyfie Coime</li>
                    </ul>
                </div>
            </div>
            <div className="scope-img">
                <img src={ MockupImg } alt=""/>
                <p className="image-subtext">High Fidelity Mockup of the "CineWatch" app</p>
            </div>
        </section>
    )   
}

export default ScopeRea;