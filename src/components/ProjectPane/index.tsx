// components/ProjectPane/index.tsx
import React from 'react';
import { Container, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { CodeBlock } from 'react-code-blocks';
import { FaGithub as FaGithubIcon } from 'react-icons/fa';
import './ProjectPane.css';

interface ProjectPaneProps {
  title: string;
  description?: string;
  keyPoints?: string[];
  technologies?: string[];
  image?: string;
  elements?: Array<{ type: string; content: any; language?: string; theme?: string }>;
  repositoryLink?: string;
}

export const ProjectPane: React.FC<ProjectPaneProps> = ({
  title,
  description,
  keyPoints,
  technologies,
  image,
  elements,
  repositoryLink,
}) => {
  const id = encodeURIComponent(title.toLowerCase().replace(/ /g, '-'));
  const FaGithub = FaGithubIcon as unknown as React.FC;

  return (
    <Container id={id} className="my-6">
      <Card className="shadow">
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
                      alt={title}
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
                      <CodeBlock
                        text={element.content}
                        language={element.language || 'text'}
                        showLineNumbers={false}
                        theme={element.theme || 'dracula'}
                      />
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
