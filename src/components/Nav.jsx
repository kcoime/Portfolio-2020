import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <nav>
        <li><NavLink to={'#projects'}>Work</NavLink></li>
        <li><NavLink to={'#about'}>About</NavLink></li>
        <li><NavLink to={'#contact'}>Contact</NavLink></li>
    </nav>
);
export default Nav;