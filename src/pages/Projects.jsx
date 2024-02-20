// pages/Projects.jsx
import React from 'react';
import { ProjectPane } from '../components/ProjectPane';
import { projects } from '../Assets/projects';

const Projects = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectPane key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
