// components/Navbar/index.tsx
import React, { useState } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const CustomNavbar: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleNavLinkClick = () => setExpanded(false);

  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top" expanded={expanded}>
      <Container>
        <Navbar.Brand as={NavLink} to="/" onClick={handleNavLinkClick}>
          Ethan Posner
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded((prev) => !prev)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" onClick={handleNavLinkClick}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Resume" onClick={handleNavLinkClick}>
              Resume
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Projects" onClick={handleNavLinkClick}>
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Hobbies" onClick={handleNavLinkClick}>
              Hobbies
            </Nav.Link>
            <Nav.Link as={NavLink} to="/About" onClick={handleNavLinkClick}>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

