import React from 'react';
import project1 from '../../../images/project1.png'
import project2 from '../../../images/project2.png'
import project3 from '../../../images/project3.png'
import project4 from '../../../images/project4.png'
import project5 from '../../../images/project5.png'
import project6 from '../../../images/project6.png'
import ProjectDetail from '../../Home/ProjectDetail/ProjectDetail';

const project = [
    {
        name:'Transporting System Development',
        description:"We have 3 service systems. Please select one or more systems for transporting your things.An authenticated user can use transporting service.Website authenticates by firebase.There are separate dashboards for admin and user.The user will be able to view his order list and give reviews.Admin can add new service, new admin, new product, and delete again.",
        img:project1,
        _id:1,
        isProject:true,
        link:'https://transport-a67cd.web.app/',
        code:'https://github.com/jahid757/world-wide-transporting-system'
    },{
        name:'Doctors Portal',
        description:"Doctor Portal Website is an authentic website. If a doctor logs in to this website, he will be able to see his appointment. New doctors will be able to add. See the list of all Patients. Can you check if you have an appointment today? A patient will be able to view his booked appointment list.",
        img:project4,
        _id:4,
        isProject:true,
        link:'https://doctor-portal-773fe.web.app/',
        code:'https://github.com/jahid757/doctor_portal_client'
    },
    {
        name:'E-Commerce Development',
        description:"Developed using firebase's login system.There is no separate dashboard for users and admin.You can view your ordered products on the dashboard.If the user is logged in, he can place the order, otherwise, he can only see the product...",
        img:project2,
        _id:2,
        isProject:true,
        link:'https://electro-1ba9f.web.app/',
        code:'https://github.com/jahid757/electronic-shop'
    },
    {
        name:'Penguin Fashion',
        description:"Penguin Fashion Website is a Responsive Website. Even though this website is a static website with no backend, you will get the flavor of e-commerce by visiting this website. Google Maps is included, you will also get 3 Woman Jackets and 3 Men Jackets, At the bottom, you will also find the contact form.",
        img:project5,
        _id:3,
        isProject:true,
        link:'https://jahid757.github.io/assignment-2/index.html',
        code:'https://github.com/jahid757/assignment-2'
    },
    
    {
        name:'Ride Sharing Development',
        description:"Custom login, Google login, Facebook login system has been used in this website.If you log in, you can be sure that you are logged in to the website by seeing your logged name in the top menu bar.You can see your selected vehicle on the destination.page and you can also see the name of where to go from.",
        img:project3,
        _id:5,
        isProject:true,
        link:'https://bd-riders-86204.web.app/',
        code:'https://github.com/jahid757/bd-raiders'
    },
    {
        name:'Football Sports Leagues',
        description:"On the Football Sports Leagues website, you will find various information about the Football League. When you visit the webpage, you can first see many leagues, and by clicking on any league you want, you see the name of the league and much more info",
        img:project6,
        _id:6,
        isProject:true,
        link:'https://jovial-mestorf-e043cb.netlify.app/',
        code:'https://github.com/jahid757/football-team'
    }
]

const Projects = () => {
    return (
        <div className="my-4 py-4" style={{background:'#eee'}}>
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