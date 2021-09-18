import React from "react";
import "./header.scss";

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo">
        <p>
          CH <span>.</span>
        </p>
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#hero">Hero</a>
        </li>
        <li>
          <a href="#contact" id="#contact">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
