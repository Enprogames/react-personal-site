// components/ProjectPane/index.tsx
import type { FC } from 'react';
import { Container, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaGithub as FaGithubIcon } from 'react-icons/fa';
import type { ProjectElement } from '../../types/projects';
import { getProjectAnchorId } from '../../utils/projectAnchors';
import './ProjectPane.css';

interface ProjectPaneProps {
  title: string;
  description?: string;
  keyPoints?: string[];
  technologies?: string[];
  image?: string;
  elements?: ProjectElement[];
  repositoryLink?: string;
}

export const ProjectPane: FC<ProjectPaneProps> = ({
  title,
  description,
  keyPoints,
  technologies,
  image,
  elements,
  repositoryLink,
}) => {
  const id = getProjectAnchorId(title);
  const FaGithub = FaGithubIcon as unknown as FC;

  return (
    <Container id={id} className="my-6">
      <Card className="shadow-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <CardContent className="space-y-4">
          <Typography variant="h4" gutterBottom>{title}</Typography>
          {description && <Typography>{description}</Typography>}
          {keyPoints && (
            <ul className="list-disc ml-6 space-y-3">
              {keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}
          {technologies && (
            <Typography variant="body2" component="div" className="space-y-2">
              <span className="font-semibold">Technologies used:</span>
              <ul className="list-disc ml-6 space-y-2">
                {technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </Typography>
          )}
          {image && (
            <img
              src={image}
              alt={title}
              className="project-image shadow max-w-full h-auto mb-3 block"
            />
          )}
          {elements &&
            elements.map((element, index) => {
              switch (element.type) {
                case 'image':
                  return (
                    <img
                      key={index}
                      src={element.content}
                      alt={element.alt ?? title}
                      className="project-image shadow max-w-full h-auto block"
                    />
                  );
                case 'points':
                  return (
                    <ul key={index} className="list-disc ml-6 space-y-1">
                      {element.content.map((point: string, i: number) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  );
                case 'paragraph':
                  return (
                    <Typography key={index}>
                      {element.content}
                    </Typography>
                  );
                case 'code':
                  return (
                    <Box key={index} className="my-4">
                      <SyntaxHighlighter language={element.language ?? 'text'} style={dracula}>
                        {element.content}
                      </SyntaxHighlighter>
                    </Box>
                  );
                default:
                  return null;
              }
            })}
          {repositoryLink && (
            <Button
              variant="contained"
              href={repositoryLink}
              target="_blank"
              startIcon={<FaGithub />}
            >
              Repository
            </Button>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProjectPane;
