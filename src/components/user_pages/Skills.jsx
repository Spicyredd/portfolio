import React from "react";
import "../styles/skills.css";
const Skills = () => {
  return (
    <div id="skills" class="home-div">
      <div class="skills-sub">
        <h2>I Am Proficient At</h2>
        <p>The skills are relevant to projects which I have done which can be found at <a href="https://www.github.com/spicyredd">Github</a>.</p>
        <div class="line"></div>
        <div class="sub-skills">
          <div class="sub-skills1">
            <div id="python">
            </div>
            <div id="html">
            </div>
          </div>
          <div class="sub-skills1">
            <div id="css">
            </div>
            <div id="react">
            </div>
          </div>
          <div class="sub-skills1">
            <div id="git">
            </div>
            <div id="django">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
