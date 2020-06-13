import React from 'react';
import { Link } from 'react-router-dom';
import GIF from '../../../images/gifs/portfolio.gif';

const ConcluRea = () => {
    return (
        <section className='conclusion'>
            <div className="conclusion-wrapper">
                <div className="desc">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non soluta consequuntur explicabo dolorem obcaecati repudiandae? Quaerat recusandae rerum sapiente, totam voluptate animi quisquam ipsum dolor inventore doloribus nobis aut dicta modi repudiandae, corrupti quibusdam nam natus eum quidem quia, fuga dolore accusamus cumque optio? At laudantium fuga odio, sequi dolores fugiat expedita nesciunt possimus quidem.</p>
                    <h5>Improvements</h5>
                    <ul>
                        <li>Lorem</li>
                        <li>Ipsum</li>
                        <li>Dolor</li>
                        <li>Sit</li>
                        <li>Amet</li>
                    </ul>
                </div>
                <div className="image-wrapper">
                    <img src={ GIF } alt="gif of site"/>
                    <div className="button-wrapper">
                        <Link to={'/'} className="button-link live">View Live</Link>
                        <a className="button-link">View on Github</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ConcluRea;