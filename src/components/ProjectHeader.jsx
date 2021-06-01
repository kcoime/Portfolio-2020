import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { Menu } from 'react-feather';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Header = () => {

    // Toggle collapsed Nav bar
    const [isOpen, setIsOpen] = useState(true);
    const toggleNavbar = () => setIsOpen(!isOpen);
    // Set it to collapesed

    return (
        <header className='main-header'>
            <div className="main-header-wrapper">
                <div className="logo">
                    <NavbarBrand href="/" className="logo-link" >
                        Return
                    </NavbarBrand>
                </div>
                <Navbar>
                    <NavbarToggler onClick={toggleNavbar} className="navigation">
                        <Menu  size={30} />
                    </NavbarToggler>
                    <Collapse isOpen={!isOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink to={'#scope'}>Scope</NavLink>    
                            </NavItem>
                            <NavItem>
                                <NavLink to={'#process'}>Process</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={'#reflection'}>Reflection</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </header>
    );
}

export default Header;