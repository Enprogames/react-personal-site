// pages/Home.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TypingEffect } from '../components/TypingEffect';
import { FaCircle } from "react-icons/fa";

import ProjectCard from '../components/ProjectCard';

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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae suscipit purus, quis convallis neque.</p>
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
            {/* Insert your portfolio items here */}
            <Col sm={4}>
              <ProjectCard
                title="Project 1"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."
                imgSrc="holder.js/100px180" // Replace with actual image path
              />
            </Col>
            {/* Add more projects here */}
          </Row>
        </Container>
      </section>

    </div>
  );
};

export default Home;
