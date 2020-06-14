import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const Team404 = () => {
    return(
        <div className="outer-header">
            <Header />
            <div className="wrapper">
                <div className="article" className="page404">
                    <h1 className="fourofour"><Link to={'/'} className="return">404</Link></h1>
                    <p className="error-text">Unfortunately the page you where looking for does not exist (yet).</p>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Team404;