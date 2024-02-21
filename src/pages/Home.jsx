// pages/Home.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TypingEffect } from '../components/TypingEffect';
import { FaCircle } from "react-icons/fa";
import ProjectCard from '../components/ProjectCard';
import { projects } from '../Assets/projects';

const Home = () => {
  return (
    <div>
      <header className="hero bg-primary text-white text-center p-5">
        <Container>
          <h1>Welcome to My Portfolio</h1>
          <TypingEffect />
        </Container>
      </header>

      <section className="about mt-5">
        <Container>
          <h2 className="text-center mb-4">About Me</h2>
          <p>
            I am a full-stack developer with a passion for learning. I have experience in building web applications using React, and Python. I am also familiar with AWS and have experience in deploying applications to the cloud. I am always looking for opportunities to learn and grow as a developer.
          </p>
        </Container>
      </section>

      <section className="skills mt-5">
      <Container>
          <h2 className="text-center mb-4">Skills</h2>
          <Row className="text-center mb-4">
            <Col sm={4}><FaCircle /> React</Col>
            <Col sm={4}><FaCircle /> Node.js</Col>
            <Col sm={4}><FaCircle /> Python</Col>
          </Row>
          <Row className="text-center mb-4">
            <Col sm={4}><FaCircle /> AWS</Col>
            <Col sm={4}><FaCircle /> Django</Col>
            <Col sm={4}><FaCircle /> C++</Col>
          </Row>
        </Container>
      </section>

      <section className="portfolio mt-5">
        <Container>
          <h2 className="text-center mb-4">Portfolio</h2>
          <Row>
            {projects.map((project, index) => (
              <Col sm={4} key={index}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imgSrc={project.thumbnail}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

    </div>
  );
};

export default Home;
