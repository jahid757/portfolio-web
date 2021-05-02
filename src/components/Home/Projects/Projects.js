import React from 'react';
import project1 from '../../../images/project1.png'
import project2 from '../../../images/project2.png'
import project3 from '../../../images/project3.png'
import ProjectDetail from '../ProjectDetail/ProjectDetail';

const project = [
    {
        name:'Transporting System Development',
        description:"We have 3 service systems. Please select one or more systems for transporting your things.An authenticated user can use transporting service.Website authenticates by firebase.There are separate dashboards for admin and user...",
        img:project1,
        _id:1,
        isProject:false
    },
    {
        name:'E-Commerce Development',
        description:"Developed using firebase's login system.There is no separate dashboard for users and admin.You can view your ordered products on the dashboard.If the user is logged in, he can place the order, otherwise, he can only see the product...",
        img:project2,
        _id:2,
        isProject:false
    },
    {
        name:'Ride Sharing Development',
        description:"Custom login, Google login, Facebook login system has been used in this website.If you log in, you can be sure that you are logged in to the website by seeing your logged name in the top menu bar.You can see your selected vehicle on the destination...",
        img:project3,
        _id:3,
        isProject:false
    }
]

const Projects = () => {
    return (
        <div className="my-4 py-4" style={{background:'#eee'}}>
            <h2 className="text-center pb-4 text-uppercase heading">Projects</h2>
            <div className="container">
                <div className="row">
                    {
                        project.map(project => <ProjectDetail key={project._id} project={project}></ProjectDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;