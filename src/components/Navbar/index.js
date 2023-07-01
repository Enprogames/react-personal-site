// components/Navbar/index.js
import React, { useState } from 'react';

import { Nav, Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export const CustomNavbar = () => {
    const [expanded, setExpanded] = useState(false);
    return (
        <Navbar expand="lg" className="bg-body-tertiary" fixed="top" expanded={expanded}>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>Ethan Posner</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/" onClick={() => setExpanded(false)}>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Resume" onClick={() => setExpanded(false)}>
                            <Nav.Link>Resume</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Projects" onClick={() => setExpanded(false)}>
                            <Nav.Link>Projects</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Hobbies" onClick={() => setExpanded(false)}>
                            <Nav.Link>Hobbies</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/About" onClick={() => setExpanded(false)}>
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
