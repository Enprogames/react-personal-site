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
      <section className="relative">
        <img
          src="/banner-placeholder.svg"
          alt="banner"
          className="w-full h-80 sm:h-96 md:h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
          <Typography variant="h3" component="h1" className="mb-4">
            Ethan Posner
          </Typography>
          <TypingEffect />
        </div>
      </section>

      <section className="py-16">
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            About Me
          </Typography>
          <Typography>
            I am a full-stack developer with a passion for learning. I have experience in building web applications using React,
            and Python. I am also familiar with AWS and have experience in deploying applications to the cloud. I am always
            looking for opportunities to learn and grow as a developer.
          </Typography>
        </Container>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-slate-800">
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Skills
          </Typography>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {skills.map((skill) => (
              <Chip key={skill} label={skill} color="primary" variant="outlined" />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Portfolio
          </Typography>
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
