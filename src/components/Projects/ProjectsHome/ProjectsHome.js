import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Navbar from '../../Home/Navbar/Navbar';
import Projects from '../Projects/Projects';
import '../scss/projectHome.scss'
const ProjectsHome = () => {
    return (
        <div>
            <div className="navbar-wrap">
                <Navbar/>
            </div>
                <h1 className="heading text-center py-5 mt-5">projects</h1>
                <Projects/>
                <Footer/>
        </div>
    );
};

export default ProjectsHome;