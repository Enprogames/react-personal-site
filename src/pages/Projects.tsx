// pages/Projects.tsx
import { useEffect, type FC } from 'react';
import { useLocation } from 'react-router-dom';
import { ProjectPane } from '../components/ProjectPane';
import { projects } from '../content/projects';

const Projects: FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      return;
    }

    const element = document.getElementById(hash.slice(1));
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [hash]);

  return (
    <>
      {projects.map((project) => (
        <ProjectPane
          key={project.title}
          title={project.title}
          description={project.description}
          keyPoints={project.keyPoints}
          technologies={project.technologies}
          image={project.landscapeImage}
          elements={project.elements}
          repositoryLink={project.repositoryLink}
        />
      ))}
    </>
  );
};

export default Projects;
