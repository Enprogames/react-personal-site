// pages/Projects.jsx
import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
