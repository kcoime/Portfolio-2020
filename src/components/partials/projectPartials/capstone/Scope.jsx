import React from 'react';
import MockupImg from '../../../images/project-images/coming-soon-mockup.png';

const ScopeCap = () => {
    return (
        <section className='scope'>
            <div className="scope-content">
                <div className="objectives">
                    <h3>Objective:</h3>
                    <p>To create a fully functional, professional website, with a custom hand-coded custom theme on WordPress. This puts everything we have learned within TWD to the test. Agreeing to a Memo of Understanding, planning the content, creating Wireframes, and eventually coding the site with both the backend of WordPress and PHP to create a website that can suit the client’s needs.</p>
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
                <p className="image-subtext">High Fidelity Mockup of Bellezza</p>
            </div>
        </section>
    )   
}

export default ScopeCap;