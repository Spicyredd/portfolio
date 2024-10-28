import React from "react";
import "../styles/projects.css";
const Projects = () => {
  return (
    <div class="home-div" id="projects">
      <div class="projects-div">
        <h2>Featured Projects</h2>
        <p>
          Each of the projects displayed here are done within my college years.
        </p>
        <div class="line"></div>
        <div className="projects-sub-div">
          <div className="projects-contents">
            <img
              src="/project_images/ams.jpg"
              alt="attendance management system"
            />
            <div class="projects-image1"></div>
            <div className="projects-sub-div-1">
              <div className="projects-sub-div-2">
                <p className="date">June 30, 2024</p>
                <h3>Attendance Management System</h3>
                <p>
                  Developed the machine learning algorithm for a web-based
                  attendance management system. Implemented facial recognition
                  algorithms to automate attendance tracking, ensuring high
                  accuracy in identifying individuals. This system was
                  integrated with the Django backend and React frontend, with
                  the help of my classmates.
                </p>
                <div class="tech_link">
                  <ul>
                    <li>Python</li>
                    <li>Mathematics</li>
                    <li>Pytorch</li>
                  </ul>
                  <div class="github">
                    <p>Visit The Github Page</p>
                    <button onClick={() => {
                      window.open("https://github.com/ToniBirat7/AMS_CV")
                    }}>Open GITHUB </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="projects-contents">
            <img
              src="/project_images/blog.jpg"
              alt="blogging web app"
              style={{ order: 1 }}
            />
            <div className="projects-sub-div-1">
              <div className="projects-sub-div-2">
                <p className="date">September 5, 2024</p>
                <h3>Blogging Web App</h3>
                <p>
                  Developed a simple blogging platform using Django for the
                  backend, with HTML and CSS for the frontend. The app allows
                  users to create, edit, and delete blog posts, featuring a
                  clean, responsive design. It includes basic CRUD functionality
                  and is built to be easily expandable for future features like
                  comments or user authentication.
                </p>
                <div class="tech_link">
                  <ul>
                    <li>Django</li>
                    <li>Sqlite</li>
                    <li>Python</li>
                  </ul>
                  <div class="github">
                    <p>Visit The Github Page</p>
                    <button onClick={() => {
                      window.open("https://github.com/Spicyredd/Blog-django")
                    }}>Open GITHUB </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="projects-contents">
            <img src="/project_images/unilens.png" alt="studio website" />
            <div className="projects-sub-div-1">
              <div className="projects-sub-div-2">
                <p className="date">April 24, 2024</p>
                <h3>Unilens Website</h3>
                <p>
                  Designed and developed a simple, responsive website for a
                  wedding photo studio. Built with a focus on showcasing
                  photography portfolios, the website adapts seamlessly across
                  devices, providing an optimal user experience. The site
                  features a clean and elegant layout, with smooth navigation
                  and visually appealing photo galleries to highlight the
                  studio's work.
                </p>
                <div class="tech_link">
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Media Queries</li>
                  </ul>
                  <div class="github">
                    <p>Visit The Github Page</p>
                    <button onClick={() => {
                      window.open("https://github.com/Spicyredd/Unilens")
                    }}>Open GITHUB </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
