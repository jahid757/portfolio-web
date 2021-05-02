import React from 'react';
import admin from '../../../images/admin.jpg'
const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img className="p-5" src={admin} alt=""/>
                </div>
                <div className="col-md-6">
                    <div className="px-md-0 p-5">
                        <h2 className="my-3">About Me</h2>
                        <h3>Hello! <span style={{color:'#f45793'}}>I'M Jahid Hasan</span></h3>
                        <p>I'm a junior web developer/front-end developer.I have been in the
                        world of web development since 2020. I have a clear idea about
                        web development. I can develop anything from a small web
                        application to a medium level web application.Below are some
                        work samples</p>
                        <h4>My Experience</h4>
                        <p>Web Development</p>
                        <p>Front End Development</p>
                        <p>HTML5, CSS3, Javascript, React, ES6, Scss</p>
                        <h4>Back End Technology</h4>
                        <p>NodeJs, Mongo DB, Express</p>
                        <h4>Tools</h4>
                        <p>Git, Chrome Dev Tool, VS Code, Heroku, Firebase, Bootstrap, Material Ui</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;