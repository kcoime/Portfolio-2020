import React from 'react';
import Nav from './Nav';
import Coa from './images/coa.svg';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <Link to={"/"}><img className='coa' src={Coa} alt="coat of arms"/></Link>
        <Nav />
    </header>
);

export default Header;