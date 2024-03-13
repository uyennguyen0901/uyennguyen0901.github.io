import React, { useState } from 'react';
import './App.css';
import yensao from './imgs/Yensao.png';
import foxipe from './imgs/Foxipe.png';
import earth from './imgs/Earth.png';
import animation from './imgs/animationgame.png';
import survey from './imgs/Living.png';
import hole from './imgs/holeinground.png';
const Project = ({ name, link, imageUrl, description, tech }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseOver = () => setIsExpanded(true);
  const handleMouseOut = () => setIsExpanded(false);

  return (
    <div className="project" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div className="project-left">
        <a href={link}>
          <img src={imageUrl} alt={name} />
        </a>
      </div>
      <div className="project-right">
        <a href={link}>
          <span className="link" style={{ transform: "translate(0px, 0px)" }}>{name}</span>
              {isExpanded && (
                <div className="overlay">
                  <p>{description}</p>
                  <p>Technologies used: {tech.join(', ')}</p>
                </div>
              )}
        </a>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      name: 'Foxipe',
      link: 'https://project-1-airfox.onrender.com/',
      imageUrl: foxipe,
      description: 'A recipe sharing platform.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'Jinja', 'Flask', 'Postgres', 'Render', 'Azure Blob Storage', 'Reportlab', 'Github'],
    },
    {
      name: 'Earthquake Visualization',
      link: 'https://csci-4611-spring-2024.github.io/assignment-3-uyennguyen0901/',
      imageUrl: earth,
      description: 'Visualization of earthquakes around the globe.',
      tech: ['TypeScript', 'GopherGfx', 'Github'],
    },
    {
      name: 'Hole in the Ground',
      link: 'https://csci-4611-spring-2024.github.io/assignment-2-uyennguyen0901/',
      imageUrl: hole,
      description: 'An interactive 3D representation of a hole.',
      tech: ['TypeScript', 'GopherGfx', 'Github'],
    },
    {
      name: 'Living Survey',
      link: 'https://csci5117.onrender.com/',
      imageUrl: survey,
      description: 'A dynamic survey application.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'Jinja', 'Flask', 'Postgres', 'Render', 'Github'],
    },
    {
      name: 'Animation in Game',
      link: 'https://minhuyen.fun/',
      imageUrl: animation,
      description: 'An exploration of animation techniques in game development.',
      tech: ['C(Unity)', 'Java(Processing', 'HTML', 'CSS', 'JavaScript', 'Blender', 'Github'],
    },
    {
      name: 'Yen Sao Phuong Dinh',
      link: 'https://yensaophuongdinh.com/',
      imageUrl: yensao,
      description: 'E-commerce site for Yen Sao products.',
      tech: ['React', 'Github'],
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="section-title">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
