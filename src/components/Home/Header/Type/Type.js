import React, { Component } from 'react'
import { init } from 'ityped'
import resume from '../../../../images/Resume.pdf'
export default class Type extends Component {
    componentDidMount(){
        const typeText = document.querySelector('#typing')
        init(typeText, { showCursor: false, strings: ['Jahid Hasan', 'A Front End Developer','A React Developer' ] })
      }
    render() {
        return (
            <div className="container">
                <div className="title">
                    <h3 className="heading">Hello!</h3>
                    <h1 className="my-3">I'm <span id="typing"></span></h1>
                    <p style={{color:'#acb3b3'}}>I'm a junior web developer/front-end developer.I have been in the
                        world of web development since 2020. I have a clear idea about
                        web development. I can develop anything from a small web
                        application to a medium level web application.Below are some
                        work samples</p>
                    <a className="btn btn-success px-3 py-2 fw-bold" style={{background:'#f45793',color:'#fff', borderColor:'#000'}} download href={resume} >Download CV <i className="fas fa-download"></i></a>
                </div>
            </div>
        )
    }
}
