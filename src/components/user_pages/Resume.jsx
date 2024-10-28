import React from "react";
import "../styles/resume.css";
import { usePDF } from "react-to-pdf";
const Resume = () => {
const {toPDF, targetRef} = usePDF({filename:"resume.pdf"})  
  return (
    <div id="resume">
      <div id="resume-top" ref={targetRef}>
        <div id="resume-left" class="resume-sub-top">
          <h2>Rishav Beejukchhen</h2>
          <p>Software Engineer</p>
          <p>Email: rbeeju20@gmail.com</p>
          <p>Phone: +9779810980487</p>
          <h3>Education</h3>
          <ul>
            <li>
              <strong>Birmingham City University</strong>
              <p>Bachelor of Science in Computer Science, 2023-2027</p>
            </li>
            <li>
              <strong>Loyola Secondary School</strong>
              <p>+2 Science, 2020-2022</p>
            </li>
          </ul>
    
          <h3>Skills</h3>
          <ul>
            <li>JavaScript, React</li>
            <li>Python, Django</li>
            <li>HTML, CSS</li>
            <li>Git, GitHub</li>
          </ul>
        </div>
        <div id="resume-right" class = "resume-sub-top">
          <h3 id="resume-projects">Projects</h3>
          <ul>
          <li>
            <strong>Attendance Management System</strong>
            <p>Developed the machine learning algorithm for a web-based
            attendance management system.</p>
            <ul>
            <li>Used technologies: React, Django, Pytorch</li>
            </ul>
          </li>
          <li>
            <strong>Blogging Web App</strong>
            <p> Developed a simple blogging platform using Django for the
            backend, with HTML and CSS for the frontend.</p>
            <ul>
            <li>Used technologies: Python, Django</li>
            </ul>
          </li>
          </ul>
          <h3>Certifications</h3>
          <ul>
          <li>Certified Python Programmer</li>
          <li>Introduction to machine learning</li>
          <li>Intermediate machine learning</li>
          </ul>
          <h3>Languages</h3>
          <ul>
          <li>Nepali (Native)</li>
          <li>English (Fluent)</li>
          <li>Hindi (Fluent)</li>
          <li>Japanese (Basic)</li>
          </ul>
        </div>
      </div>
      <p></p>
      <button class="home_resume_button resume_button"
      onClick={() => toPDF()}
      >
        Download
      </button>
    </div>
  );
};

export default Resume;
