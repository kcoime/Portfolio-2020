import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Team404 = () => {
    return(
        <div className="outer-header">
            <Header />
            <div className="wrapper">
                <h1><span>{'<'}</span>404 Not Found<span>{'/>'}</span></h1>
            </div>
            <Footer />
        </div>
    )
};

export default Team404;