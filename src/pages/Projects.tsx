// pages/Projects.tsx
import { useEffect, type FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import { ProjectDetailsCard, projects } from '../features/projects';

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
    <Container component="main" maxWidth="lg" className="py-8 md:py-10">
      <Typography component="h1" variant="h3" className="mb-6 md:mb-8">
        Projects
      </Typography>

      <div className="grid gap-8 md:gap-10">
        {projects.map((project) => (
          <ProjectDetailsCard key={project.id} project={project} />
        ))}
      </div>
    </Container>
  );
};

export default Projects;
