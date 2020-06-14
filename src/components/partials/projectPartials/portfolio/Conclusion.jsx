import React from 'react';
import { Link } from 'react-router-dom';
import GIF from '../../../images/gifs/portfolio.gif';

const PortfoConclu = () => {
    return (
        <section className='conclusion'>
            <div className="conclusion-wrapper">
                <div className="desc">
                    <p>As I continue in the field I would like to keep updating this site to be the best it can be (well, better than it is now, let's get real here).The main thing I learned from this project was that organisation is key. In the initial stages of the site I had (mostly) everything dumped into sub folders, it was only until later I realised that creating more folders and, actually keeping things organised, while tedious, made development much easier.</p>
                    <p> Also, when installing via npm, do not skip on the documentation. If needed take a day to read and understanding it. Trust me, it will save you and your computer from the abuse of wanting to take that $500, custom KAT keyboard to smash against your RGB Water-cooled desktop.</p>
                    <h5>Improvements</h5>
                    <ul>
                        <li>Better file organisation</li>
                        <li>Applying a REST API (for content managment)</li>
                        <li>Better / more fluid Animations</li>
                    </ul>
                </div>
                <div className="image-wrapper">
                    <img src={ GIF } alt="gif of site"/>
                    <div className="button-wrapper">
                        <Link to={'/'} className="button-link live">View Live</Link>
                        <a href="https://github.com/kcoime/Portfolio-2020" className="button-link">View on Github</a>
                    </div>
                </div>
            </div>
            <div className="cta">
                <a href="mailto:bbuyer02@gmail.com" className="button-link cta" >Let's get in touch!</a>
            </div>
        </section>
    )
}
export default PortfoConclu;