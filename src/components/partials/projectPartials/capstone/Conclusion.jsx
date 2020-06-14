import React from 'react';
import { Link } from 'react-router-dom';
import GIF from '../../../images/gifs/coming-soon-gif.png';

const ConcluCap = () => {
    return (
        <section className='conclusion'>
            <div className="conclusion-wrapper">
                <div className="desc">
                    <p>If you are reading this message right now expecting a conclusion, I am sorry to disappoint you. As of right now this project is currently under development. Don’t worry though! Once it’s finished, I will definitely write my thoughts and any improvements I find. For now, stay tuned!</p>
                    <h5>Improvements</h5>
                    <ul>
                        <li>Acctually finish the site :)</li>
                    </ul>
                </div>
                <div className="image-wrapper">
                    <img src={ GIF } alt="gif of site"/>
                    <div className="button-wrapper">
                        <a href="https://bellezza.bcitwebdeveloper.ca/" className="button-link live">View Live</a>
                        <a href="https://github.com/htpwebdesign/bellezza" className="button-link">View on Github</a>
                    </div>
                </div>
            </div>
            <div className="cta">
                <a href="mailto:bbuyer02@gmail.com" className="button-link cta" >Let's get in touch!</a>
            </div>
        </section>
    )
}
export default ConcluCap;