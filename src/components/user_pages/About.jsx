import React from "react";
import "../styles/about.css"

const About = () => {
  return (
    <div id="about" class="home-div">
      <div className="sub-about">
      <div class="about-left">
        <img id="figma"
        src="/about_images/figma.png"
        ></img>
        <img id="powerbi"
        src="/about_images/powerbi.JPG"></img>
        {/* <img id="positive"
        src="/about_images/positive.png"
        ></img> */}
      </div>
      <div class="about-right">
        <h2>A Few Words<br></br> About Me</h2>
        <h3>
          Driven by desire to learn  and explore
          </h3>
        <p>I’m an undergraduate specializing in model development and training, with skills extending beyond machine learning. My projects demonstrate proficiency in data analysis, UI design, React, and Django. Though I’m continually expanding my knowledge, I’m eager to contribute and grow. If you're seeking a motivated apprentice or dedicated researcher, I’d love to connect!</p>
      <div class="about-button">
      <button class="about-button-projects about-button-1"
      onClick={() => {
        window.open("/#projects","_self")
      }}
      >Projects</button>
      <button class="about-button-resume about-button-1"  
      onClick={() => {
        window.open("/")
      }}
      >Resume</button>
      </div>
      </div>
        </div>
    </div>
  );
};

export default About;
