// components/ProjectCard/index.js
import React from 'react';
import { Card } from 'react-bootstrap';

const ProjectCard = ({ title, description, imgSrc }) => {
    return (
        <Card>
            <Card.Img variant="top" src={imgSrc} /> {/* Replace with actual image path */}
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProjectCard;
