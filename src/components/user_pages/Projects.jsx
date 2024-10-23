import React from "react";
import "../styles/projects.css";
const Projects = () => {
  return (
    <div class="home-div" id="projects">
      <div class="projects-div">
        <div className="images image1">
          <img
            src="/project_images/ams.jpg"
            alt="automated management system"
          ></img>
          {/* <div className="images image1"></div> */}
          <div class="content">
            <div>
              <h2>Attendance Management system</h2>
              <div class="sub-content">
                <div>
                  <h3>Project Description</h3>
                  <p>
                    Developed the machine learning component for a web-based
                    attendance management system. Implemented facial recognition
                    algorithms to automate attendance tracking, ensuring high
                    accuracy in identifying individuals. This system was
                    integrated with the Django backend and React frontend, with
                    the help of my classmates.
                  </p>
                </div>
                <div>
                  <h3>Technologies Used:</h3>
                  <ul>
                    <li>Programming Languages: Python</li>
                    <li>Machine Learning Libraries: PyTorch</li>
                    <li>Facial Recognition: FaceNet</li>
                    <li>Backend: Django</li>
                    <li>Frontend: React</li>
                    <li>Model Training: Supervised</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="images image2">
          <img src="/project_images/blog.jpg" alt="blogging app"></img>
          <div class="content">
            <div>
              <h2>Blogging web-app</h2>
              <div class="sub-content">
                <div>
                  <h3>Project Description</h3>

                  <p>
                    Developed a simple blogging platform using Django for the
                    backend, with HTML and CSS for the frontend. The app allows
                    users to create, edit, and delete blog posts, featuring a
                    clean, responsive design. It includes basic CRUD
                    functionality and is built to be easily expandable for
                    future features like comments or user authentication.
                  </p>
                </div>
                <div>
                  <h3>Technologies Used:</h3>
                  <ul>
                    <li>Programming Languages: Python</li>
                    <li>Web Framework: Django</li>
                    <li>Frontend: HTML, CSS</li>
                    <li>Templating Engine: Django Templating Language (DTL)</li>
                    <li>Database: SQLite</li>
                    <li>Version Control: Git </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="images image3">
          <img src="/project_images/unilens.png" alt="studio website"></img>
          <div class="content">
            <div>
              <h2>Attendance Management system</h2>
              <div class="sub-content">
                <div>
                  <p>
                    Developed the machine learning component for a web-based
                    attendance management system. Implemented facial recognition
                    algorithms to automate attendance tracking, ensuring high
                    accuracy in identifying individuals. This system integrates
                    with the Django backend and React frontend, enhancing the
                    overall efficiency of attendance management.
                  </p>
                </div>
                <div>
                  <h3>Technologies Used:</h3>
                  <ul>
                    <li>Programming Languages: Python</li>
                    <li>Machine Learning Libraries: PyTorch</li>
                    <li>Facial Recognition: FaceNet</li>
                    <li>Backend: Django</li>
                    <li>Frontend: React</li>
                    <li>Model Training: Supervised</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="github_link">
        <h2>View more projects on github</h2>
        <button
        onClick={() => {
          window.open('https://www.github.com')
        }}
        >Open Github</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
