// src/pages/Home.tsx
import React from 'react';
import { Container, Typography } from '@mui/material';
import { TypingEffect } from '../components/TypingEffect';
import { FaCircle as FaCircleIcon } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../Assets/projects';

const FaCircle = FaCircleIcon as unknown as React.FC;

const Home: React.FC = () => {
  return (
    <div>
      <header className="bg-blue-600 text-white text-center p-5">
        <Container>
          <Typography variant="h3">Welcome to My Portfolio</Typography>
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
          <div className="grid grid-cols-3 text-center mb-4 gap-2">
            <div><FaCircle /> React</div>
            <div><FaCircle /> Node.js</div>
            <div><FaCircle /> Python</div>
            <div><FaCircle /> AWS</div>
            <div><FaCircle /> Django</div>
            <div><FaCircle /> C++</div>
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
