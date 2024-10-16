// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Project 1: </h3>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <a href="https://github.com/acys17" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
      
      <div className="project">
        <h3>Project 2: </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a href="https://github.com/acys17" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
