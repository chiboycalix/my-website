import React from "react";
import { SiReact, SiNodeDotJs, SiTypescript, GrGraphQl } from "react-icons/all";
import "./skills.scss";

const Skills: React.FC = () => {
  return (
    <div className="skills" id="skills">
      <p className="skillsText">SKILLS</p>
      <h2 className="whatIamGreatAt">What I am Great at</h2>
      <p className="skillDescription">
        Below are my Development stacks and the number of years of experience I
        have for each of them
      </p>
      <div className="cardsWrapper">
        <div className="card">
          <SiReact />
          <p>React.JS</p>
        </div>
        <div className="card">
          <SiNodeDotJs />
          <p>Node.JS</p>
        </div>
        <div className="card">
          <SiTypescript />
          <p>TypeScript</p>
        </div>
        <div className="card">
          <GrGraphQl />
          <p>GraphQL</p>
        </div>
      </div>

      <div className="transparentCardWrapper">
        <div className="transparentCard">
          <p className="yearValue">4+</p>
          <p className="yearText">Years of Experience</p>
        </div>
        <div className="transparentCard">
          <p className="yearValue">4+</p>
          <p className="yearText">Years of Experience</p>
        </div>
        <div className="transparentCard">
          <p className="yearValue">2+</p>
          <p className="yearText">Years of Experience</p>
        </div>
        <div className="transparentCard">
          <p className="yearValue">3+</p>
          <p className="yearText">Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
