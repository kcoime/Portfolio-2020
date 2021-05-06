import React from 'react';
import {Link} from 'react-router-dom';

const Projects = () => {
    return (
        <>
            {/* <header className="header-pro">
                <div className="cheat-space page-header"></div>
                <Link to={'/'}>Return</Link> 
            </header> */}
            <main className="main-pro">
                <div className="title">
                    <h1 className="page-heading">My <span>Work</span></h1>
                    <Link to={'/'}>Return</Link> 
                </div>
            </main>
        </>
    )
}

export default Projects;