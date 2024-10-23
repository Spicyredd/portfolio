import React from 'react'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Skills from './Skills'
import '../styles/home.css'

const Home = () => {
  return (
    <div class = "home-main-div">
    <div id = "home">
      <div class = "home-sub-div-1">
      <div id = "home-sub-div">
        <h1>Hello, I'm Rishav!</h1>
        <p>An eager learner and machine learning specialist.</p>
        <button>
            Contact Me
        </button>
      </div>
      <img src="/medias/file.png" alt="The owner of the" id="home-picture"/>
      </div>
      </div>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  )
}

export default Home
