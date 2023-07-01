// components/Footer/index.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Socialicons } from '../Socialicons';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center text-lg-start bg-body-tertiary">
      <Container className="p-4">
        <Row>
          <Col lg={6} md={12} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Created with React</h5>
            <p>
              This website was built using React, a JavaScript library for building user interfaces.
            </p>
          </Col>
        </Row>
        <Row>
          <Socialicons />
          <div className="text-center p-3 bg-body-tertiary">
            © {year} Ethan Posner
          </div>
        </Row>
      </Container>

    </footer>
  );
};
