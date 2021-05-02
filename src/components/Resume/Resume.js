import React from "react";
import Footer from "../Home/Footer/Footer";
import Navbar from "../Home/Navbar/Navbar";
import resume from "../../images/Resume.pdf"

const Resume = () => {
  return (
    <div>
      <div className="navbar-wrap">
        <Navbar />
      </div>
      <h2 className="heading text-center mt-5 py-5">My CV <a download href={resume}><small><i className="fas fa-download"></i></small></a></h2>
      <div className="container pb-5">
        <div className="cv">
          <div className="row">
            <div className="col-md-6 me-5 cv_border_bottom">
              <h1 className="mb-0">Jahid Hasan</h1>
              <p>A Junior Web Developer</p>
            </div>
            <div className="col-md-5 static_info">
              <p className="mb-0">
                <a href="tel:+880 1794067954">+880 1794067954</a>
              </p>
              <p className="mb-0">
                <a href="mailto:jahidhasan.developer@gmail.com">
                  jahidhasan.developer@gmail.com
                </a>
              </p>
              <p className="mb-0">
                <a href="http://github.com/jahid757">GitHub</a>
              </p>
              <p className="mb-0">
                <a href="http://linkedin.com/in/developerjahidhasan">
                  Linked In
                </a>
              </p>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-md-6 me-5">
              <h3 className="cv-head">Personal Info</h3>
              <small className="cv-subHead">Hi! I'm Jahid Hasan</small>
              <p className="cv-text">
                I'm a junior web developer/front-end developer.I have been in
                the world of web development since 2020. I have a clear idea
                about web development. I can develop anything from a small web
                application to a medium level web application.Below are some
                work samples
              </p>

              <h3 className="cv-head mt-4">EXPERIENCE</h3>
              <ul>
                <li className="cv-subHead">Web Development</li>
                <li className="cv-subHead">Front End Development</li>
                <li className="cv-subHead">
                  HTML5, CSS3, Javascript, React, ES6, Scss
                </li>
              </ul>
            </div>
            <div className="col-md-5 ">
              <h3 className="cv-head">SKILLS</h3>
              <h5>Expert:</h5>
              <p className="cv-subHead">HTML5, CSS3, Javascript, ES6, React</p>
              <h5>Intermediate:</h5>
              <p className="cv-subHead">NodeJs, Mongo DB, Express, Scss</p>
              <h5>Tools & Technology:</h5>
              <p className="cv-subHead">Git, Chrome Dev Tool, VS Code</p>
              <p className="cv-subHead">
                Heroku, Firebase, Bootstrap, Material Ui
              </p>
            </div>
          </div>
          <div className="cv-project pt-4">
            <h3 className="cv-head mb-3">Project</h3>

            <div className="cv-single-project mb-4">
              <h4 className="cv-subHead">Transporting System Development</h4>
              <p className="m-0">
                <small>15 ‎April ‎2021- 20 ‎April ‎2021</small>
              </p>
              <ul>
                <li>
                  We have 3 service systems. Please select one or more systems
                  for transporting your things.
                </li>
                <li>An authenticated user can use transporting service.</li>
                <li>Website authenticates by firebase.</li>
                <li>
                  There are separate dashboards for admin and user. The user
                  will be able to view his order list and give reviews.
                </li>
                <li>
                  Admin can add new service, new admin, new product, and delete
                  again
                </li>
              </ul>
              <a target="blank" href="https://transport-a67cd.web.app/">Visit Website</a>
            </div>

            <div className="cv-single-project mb-4">
              <h4 className="cv-subHead">E-Commerce Development</h4>
              <p className="m-0">
                <small>‎4 ‎April ‎2021 - ‎7 ‎April ‎2021</small>
              </p>
              <ul>
                <li>Developed using firebase's login system.</li>
                <li>There is no separate dashboard for users and admin.</li>
                <li>You can view your ordered products on the dashboard.</li>
                <li>
                  If the user is logged in, he can place the order, otherwise,
                  he can only see the product
                </li>
              </ul>
              <a target="blank" href="https://electro-1ba9f.web.app/">Visit Website</a>
            </div>

            <div className="cv-single-project mb-4">
              <h4 className="cv-subHead">Ride Sharing Development</h4>
              <p className="m-0">
                <small>‎ ‎19 ‎March ‎2021 - 22 ‎March ‎2021</small>
              </p>
              <ul>
                <li>Custom login, Google login, Facebook login system has been used in this website.</li>
                <li>If you log in, you can be sure that you are logged in to the website by seeing your logged name in the top menu bar.</li>
                <li>You can see your selected vehicle on the destination page and you can also see the name of where to go from.</li>
              </ul>
              <a target="blank" href="https://bd-riders-86204.web.app/">Visit Website</a>
            </div>

          </div>

        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Resume;
