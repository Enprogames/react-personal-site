// src/pages/Home.tsx
import React from 'react';
import { Container, Typography, Chip } from '@mui/material';
import { TypingEffect } from '../components/TypingEffect';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../Assets/projects';

const skills = ['React', 'Node.js', 'Python', 'AWS', 'Django', 'C++'];

const Home: React.FC = () => {
  return (
    <div>
      <header className="bg-slate-700 dark:bg-slate-800 text-white text-center py-16">
        <Container>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to My Portfolio
          </Typography>
          <TypingEffect />
        </Container>
      </header>

      <section className="mt-10">
        <Container>
          <Typography variant="h4" align="center" gutterBottom>About Me</Typography>
          <Typography>
            I am a full-stack developer with a passion for learning. I have experience in building web applications using React,
            and Python. I am also familiar with AWS and have experience in deploying applications to the cloud. I am always
            looking for opportunities to learn and grow as a developer.
          </Typography>
        </Container>
      </section>

      <section className="mt-10">
        <Container>
          <Typography variant="h4" align="center" gutterBottom>Skills</Typography>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {skills.map((skill) => (
              <Chip key={skill} label={skill} color="primary" variant="outlined" />
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-10">
        <Container>
          <Typography variant="h4" align="center" gutterBottom>Portfolio</Typography>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <div key={index}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imgSrc={project.thumbnail}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
