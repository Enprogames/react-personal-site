// components/ProjectCard/index.js
import React from 'react';
import { Card } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './ProjectCard.css';

const ProjectCard = ({ title, description, imgSrc }) => {

    return (
        <HashLink
            to={`/projects#${encodeURIComponent(title.toLowerCase().replace(/ /g, '-'))}`}
            scroll={(el) => {
                const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
                const yOffset = -60; // Adjust this value based on your navbar's height
                window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
            }}
            className="text-decoration-none">
            <Card
                className="shadow h-100 card-lift"
                style={{ cursor: 'pointer' }}>
                <Card.Img variant="top" src={imgSrc} /> {/* Replace with actual image path */}
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{title}</Card.Title>
                    {description &&
                        <Card.Text>
                            {description.length > 300
                                ? description.substring(0, 300) + "..."
                                : description}
                        </Card.Text>
                    }
                </Card.Body>
            </Card>
        </HashLink>
    );
};

export default ProjectCard;
