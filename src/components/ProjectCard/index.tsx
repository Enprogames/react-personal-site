// components/ProjectCard/index.tsx
import type { FC } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { getProjectAnchorId } from '../../content/projectAnchors';
import './ProjectCard.css';

interface ProjectCardProps {
  title: string;
  description?: string;
  imgSrc: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description, imgSrc }) => {
  return (
    <Link
      to={`/Projects#${getProjectAnchorId(title)}`}
      className="no-underline"
    >
      <Card className="shadow-md h-full transition-transform hover:-translate-y-1 cursor-pointer bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
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
    </Link>
  );
};

export default ProjectCard;
