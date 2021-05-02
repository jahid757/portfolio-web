import React from 'react';

const Footer = () => {
    return (
        <div className="content-wrapper">
            <div className="icon text-center">
                <a target="blank" href="https://facebook.com/jahid757">
                    <i className="social-icon fab fa-facebook-f"></i>
                </a>
                <a href="https://linkedin.com/in/developerjahidhasan/">
                    <i className="social-icon fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/jahid757">
                    <i className="social-icon fab fa-github"></i>
                </a>
            </div>
            <p className="text-center text-secondary mb-0">&copy; {new Date().getFullYear()} All Rights Reserved <span className="text-white">Jahid Hasan</span></p>
        </div>
    );
};

export default Footer;