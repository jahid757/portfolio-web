import React from 'react';
import { Link } from 'react-router-dom';

const ProjectDetail = ({project}) => {
    const {name,description,img,isProject,link,code} = project;
    return (
        <div className="col-md-4 mb-5">
            <div className="p-3 project">
                <div className="over">
                    <img className="project-img" src={img} alt=""/>
                </div>
                <h4 className="py-4">{name}</h4>
                <p>{description}</p>
                {
                    isProject === true ? <div className="d-flex justify-content-between"><a target="blank" className="btn btn-success primary-btn" href={link}>Visit</a> <a target="blank" className="btn btn-success primary-btn" href={code}>Code</a></div> : <Link className="btn btn-success primary-btn" to="/projects">Read More</Link>
                }
            </div>
        </div>
    );
};

export default ProjectDetail;