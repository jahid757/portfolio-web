import React from 'react';
import '../scss/Header.scss'
import Navbar from '../Navbar/Navbar';
import Type from './Type/Type';

const Header = () => {
    return (
        <div className="header-background">
            <Navbar/>
            <Type/>
        </div>
    );
};

export default Header;