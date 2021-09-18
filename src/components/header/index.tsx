import React from 'react';
import './header.scss';

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo">
        <p>CH <span>.</span></p>
      </div>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li><a href="/home">Portfolio</a></li>
        <li><a href="/home">Skills</a></li>
        <li><a href="/home">Hero</a></li>
        <li><a href="/home">Contact</a></li>
      </ul>
    </header>
  )
}

export default Header
