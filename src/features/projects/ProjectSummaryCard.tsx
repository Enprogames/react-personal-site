import type { FC } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import type { Project } from './projects.types';
import './ProjectSummaryCard.css';

interface ProjectSummaryCardProps {
  project: Project;
}

const descriptionPreviewLength = 300;

export const ProjectSummaryCard: FC<ProjectSummaryCardProps> = ({ project }) => {
  const description = project.description && project.description.length > descriptionPreviewLength
    ? `${project.description.substring(0, descriptionPreviewLength)}...`
    : project.description;

  return (
    <Link
      to={`/Projects#${project.id}`}
      className="project-summary-card__link"
    >
      <Card className="project-summary-card shadow-md h-full transition-transform hover:-translate-y-1 cursor-pointer bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <CardMedia
          className="project-summary-card__media"
          component="img"
          image={project.thumbnail}
          alt={`Preview of ${project.title}`}
        />
        <CardContent className="flex flex-col flex-grow space-y-2">
          <Typography variant="h6">{project.title}</Typography>
          {description && <Typography variant="body2">{description}</Typography>}
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectSummaryCard;
