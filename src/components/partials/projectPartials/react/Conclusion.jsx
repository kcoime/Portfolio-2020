import React from 'react';
import { Link } from 'react-router-dom';
import GIF from '../../../images/gifs/react.gif';

const ConcluRea = () => {
    return (
        <section className='conclusion'>
            <div className="conclusion-wrapper">
                <div className="desc">
                    <p>This was a good way to “wet our feet” with React. A project that was not too difficult, and yet not too easy, like I said before it was just right. A good way of viewing React is to take a step back, then you will realise that all React is, is JavaScript, just written in a certain way. If you have that outlook than it really is not that bad. The only real challenging part was to write the code in a way that it doesn’t pull too many request from the API (Which will result in you not being able to use it for a certain amount of days).</p>
                    <h5>Improvements</h5>
                    <ul>
                        <li>Add text limiter to tiles</li>
                        <li>Better styling of single movie page</li>
                        <li>Brighten up logo</li>
                    </ul>
                </div>
                <div className="image-wrapper">
                    <img src={ GIF } alt="gif of site"/>
                    <div className="button-wrapper">
                        <a href="/cinewatch/" className="button-link live">View Live</a>
                        <a href="https://github.com/kcoime/cinewatch" className="button-link">View on Github</a>
                    </div>
                </div>
            </div>
            <div className="cta">
                <a href="mailto:bbuyer02@gmail.com" className="button-link cta" >Let's get in touch!</a>
            </div>
        </section>
    )
}
export default ConcluRea;