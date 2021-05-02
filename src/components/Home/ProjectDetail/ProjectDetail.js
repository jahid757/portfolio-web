import React from 'react';
import { Link } from 'react-router-dom';

const ProjectDetail = ({project}) => {
    const {name,description,img,isProject,link} = project;
    return (
        <div className="col-md-4 mb-5">
            <div className="p-3 project">
                <div className="over">
                    <img className="project-img" src={img} alt=""/>
                </div>
                <h4 className="py-4">{name}</h4>
                <p>{description}</p>
                {
                    isProject === true ? <a target="blank" className="btn btn-success primary-btn" href={link}>Visit</a> : <Link className="btn btn-success primary-btn" to="/projects">Read More</Link>
                }
            </div>
        </div>
    );
};

export default ProjectDetail;