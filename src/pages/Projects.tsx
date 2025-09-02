// pages/Projects.tsx
import React from 'react';
import { ProjectPane } from '../components/ProjectPane';
import { projects } from '../Assets/projects';

const Projects: React.FC = () => {
  return (
    <>
        {projects.map((project, index) => (
            <ProjectPane
              key={index}
              title={project.title}
              description={project.description}
              keyPoints={project.keyPoints}
              technologies={project.technologies}
              image={project.landscapeImage}
              elements={project.elements}
              repositoryLink={project.repositoryLink} />

        ))}
      </>
  );
};

export default Projects;
