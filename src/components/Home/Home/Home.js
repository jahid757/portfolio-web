import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
// import Scrollbar from 'smooth-scrollbar';

const Home = () => {
    // Scrollbar.init(document.getElementById('scroll'));
    return (
        <div id="scroll">
            <Header/>
            <About/>
            <Skills/>
            <Projects/>
            <Blog/>
            <Footer/>
        </div>
    );
};

export default Home;