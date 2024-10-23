import React from 'react'
import { NavLink } from 'react-router-dom'
import "../global.css"

const MyLinks = () => {
  return (
    <div class = "main-nav">
    <div class = "nav">
      <div class = "top-nav">
        <div>
        <NavLink to="/">
        <img class = "logo"
        src = "../logo.png"
        alt = "The owner of the website"
        ></img>
        </NavLink>
        </div>
        <div class="top-nav-contact">
          <div style={{display:"flex",flexDirection:'column',gap:"0.3em"}}>
            <h3>Write me</h3>
            <p>rbeeju20@gmail.com</p>
          </div>
          <div style={{display:"flex",flexDirection:'column',gap:"0.3em"}}>
            <h3>Call me</h3>
            <p>+977 9810980487</p>
          </div>
        </div>
    </div>
      </div>
      <div class="line"></div>
      <div class = "lower-nav">
      <a href="/#about">About Me</a>
      <a href="/#contact">Contact</a>
      <a href="/#skills">Skills</a>
      <a href="/#project">Project</a>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      </div>
      </div>
  )
}
export default MyLinks
