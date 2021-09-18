import React from "react";
import "./hero.scss";
import Nonso from "../../assets/nonso-removebg-preview.png";

const Hero = () => {
  return (
    <div className="heroWrapper" id="hero">
      <div className="nameWrapper">
        <h1>Igwe</h1>
        <h1>
          Chinonso <span>.</span>
        </h1>
      </div>
      <div className="imageWrapper">
        <img src={Nonso} alt="Nonso" />
      </div>

      <div className="introductionWrapper">
        <p className="introduction">Introduction</p>
        <h1>Frontend Developer,</h1>
        <h1>Fullstack Developer,</h1>
        <h1>Team Player</h1>
        <h1>Javascript Developer</h1>
        <p>
          I'm a Fullstack Javascript Developer with over 4 years of experience
          building large scale web applications for both small and medium sized
          companies.
        </p>
      </div>
    </div>
  );
};

export default Hero;
