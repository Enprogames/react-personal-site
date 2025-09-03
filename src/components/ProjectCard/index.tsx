// components/ProjectCard/index.tsx
import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { HashLink } from 'react-router-hash-link';
import './ProjectCard.css';

interface ProjectCardProps {
  title: string;
  description?: string;
  imgSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imgSrc }) => {
  return (
    <HashLink
      to={`/projects#${encodeURIComponent(title.toLowerCase().replace(/ /g, '-'))}`}
      scroll={(el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
        const yOffset = -60; // Adjust this value based on your navbar's height
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
      }}
      className="no-underline"
    >
      <Card className="shadow-md h-full transition-transform hover:-translate-y-1 cursor-pointer">
        <CardMedia component="img" image={imgSrc} alt={title} />
        <CardContent className="flex flex-col flex-grow space-y-2">
          <Typography variant="h6">{title}</Typography>
          {description && (
            <Typography variant="body2">
              {description.length > 300
                ? description.substring(0, 300) + '...'
                : description}
            </Typography>
          )}
        </CardContent>
      </Card>
    </HashLink>
  );
};

export default ProjectCard;
