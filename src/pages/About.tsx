import React, { useEffect, useState } from 'react';
import { Container, Card, CardContent, Typography, Avatar } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { aboutContent } from '../Assets/about';

const About: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>('');

  useEffect(() => {
    fetch(aboutContent.markdownUrl)
      .then((res) => res.text())
      .then(setMarkdown)
      .catch((err) => console.error('Failed to load about markdown', err));
  }, []);

  return (
    <Container maxWidth="md" className="py-6">
      <Card className="shadow">
        <CardContent>
          <div className="flex flex-col items-center mb-4">
            <Avatar
              src={aboutContent.profileImageUrl}
              alt="Profile"
              sx={{ width: 120, height: 120 }}
              className="mb-4"
            />
            <Typography variant="h4" gutterBottom>
              {aboutContent.title}
            </Typography>
          </div>
          <ReactMarkdown
            components={{
              h1: ({node, ...props}) => <Typography variant="h4" gutterBottom {...props} />,
              h2: ({node, ...props}) => <Typography variant="h5" gutterBottom {...props} />,
              h3: ({node, ...props}) => <Typography variant="h6" gutterBottom {...props} />,
              p: ({node, ...props}) => <Typography paragraph {...props} />,
              li: ({node, ...props}) => (
                <li>
                  <Typography component="span" {...props} />
                </li>
              ),
            }}
          >
            {markdown}
          </ReactMarkdown>
        </CardContent>
      </Card>
    </Container>
  );
};

export default About;
