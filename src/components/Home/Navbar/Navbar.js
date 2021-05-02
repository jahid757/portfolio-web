import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Navbar.scss'

const Navbar = () => {
    const menuOpenClose = () => {
        const menu = document.getElementById('ClickMenu')
        menu.classList.toggle('active');
    }
    return (
        <div className="navbar-background">
            <nav className="container d-flex justify-content-between align-items-center">
                <div className="navbar-logo">
                    <h1 className="logo"><Link to='/'>Jahid</Link></h1>
                </div>
                <div className="navbar-menu">
                    <i onClick={menuOpenClose} className="menuIcon fas fa-bars"></i>
                    <ul id="ClickMenu">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/projects'>Project</Link>
                        </li>
                        <li>
                            <Link to='/blogs'>Blog</Link>
                        </li>
                        <li>
                            <Link to='/resume'>Resume</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact Me</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;