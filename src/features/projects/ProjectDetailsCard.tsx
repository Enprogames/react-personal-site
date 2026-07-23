import type { FC, ReactNode } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import type { Project, ProjectElement } from './projects.types';
import './ProjectDetailsCard.css';

interface ProjectDetailsCardProps {
  project: Project;
}

interface ProjectMediaProps {
  alt: string;
  className?: string;
  src: string;
}

export const ProjectDetailsCard: FC<ProjectDetailsCardProps> = ({ project }) => {
  const hasHighlights = Boolean(project.keyPoints?.length);
  const hasTechnologies = Boolean(project.technologies?.length);
  const hasBody = Boolean(project.elements?.length);

  return (
    <Card
      id={project.id}
      component="article"
      variant="outlined"
      className="project-details-card shadow-md bg-white dark:bg-gray-800"
    >
      <CardContent className="project-details-card__content">
        <div className="project-details-card__overview">
          <div className="project-details-card__header">
            <Typography
              component="h2"
              variant="h4"
              className="project-details-card__title"
            >
              {project.title}
            </Typography>

            {project.description && (
              <Typography className="project-details-card__description">
                {project.description}
              </Typography>
            )}
          </div>

          <ProjectMedia
            className="project-details-card__primary-media"
            src={project.landscapeImage}
            alt={`Screenshot of ${project.title}`}
          />

          {(hasHighlights || hasTechnologies) && (
            <div className="project-details-card__meta">
              {hasHighlights && (
                <section
                  className="project-details-card__section"
                  aria-labelledby={`${project.id}-highlights`}
                >
                  <Typography
                    id={`${project.id}-highlights`}
                    component="h3"
                    variant="subtitle2"
                    className="project-details-card__section-title"
                  >
                    Highlights
                  </Typography>
                  <ul className="project-details-card__list">
                    {project.keyPoints?.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </section>
              )}

              {hasTechnologies && (
                <section
                  className="project-details-card__section"
                  aria-labelledby={`${project.id}-technologies`}
                >
                  <Typography
                    id={`${project.id}-technologies`}
                    component="h3"
                    variant="subtitle2"
                    className="project-details-card__section-title"
                  >
                    Technologies
                  </Typography>
                  <div
                    className="project-details-card__tech-list"
                    aria-label={`Technologies used for ${project.title}`}
                  >
                    {project.technologies?.map((technology) => (
                      <Chip
                        key={technology}
                        label={technology}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </div>
                </section>
              )}
            </div>
          )}
        </div>

        {hasBody && (
          <div className="project-details-card__body">
            {project.elements?.map((element, index) => (
              renderProjectElement(element, index, project.title)
            ))}
          </div>
        )}
      </CardContent>

      {project.repositoryLink && (
        <CardActions className="project-details-card__actions">
          <Button
            variant="contained"
            href={project.repositoryLink}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<GitHubIcon />}
            aria-label={`Open ${project.title} repository`}
          >
            Repository
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

function ProjectMedia({ alt, className, src }: ProjectMediaProps) {
  const mediaClassName = [
    'project-details-card__media',
    className,
  ].filter(Boolean).join(' ');

  return (
    <figure className={mediaClassName}>
      <img src={src} alt={alt} />
    </figure>
  );
}

function renderProjectElement(
  element: ProjectElement,
  index: number,
  projectTitle: string,
): ReactNode {
  switch (element.type) {
    case 'paragraph':
      return (
        <Typography key={index} className="project-details-card__paragraph">
          {element.content}
        </Typography>
      );
    case 'points':
      return (
        <ul
          key={index}
          className="project-details-card__list project-details-card__list--compact"
        >
          {element.content.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      );
    case 'image':
      return (
        <ProjectMedia
          key={index}
          src={element.content}
          alt={element.alt ?? `Screenshot related to ${projectTitle}`}
        />
      );
    case 'code':
      return (
        <pre key={index} className="project-details-card__code-block">
          <code data-language={element.language ?? 'text'}>{element.content}</code>
        </pre>
      );
  }
}

export default ProjectDetailsCard;
