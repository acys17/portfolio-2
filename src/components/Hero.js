// src/components/Header.js
import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <header>
      <nav>
        <h1>Alice Scott</h1>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Hero;
