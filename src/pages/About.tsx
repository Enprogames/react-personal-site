import React from 'react';
import { Container, Card, CardContent, Typography } from '@mui/material';
import { aboutContent } from '../Assets/about';

const About: React.FC = () => {
  return (
    <Container maxWidth="md" className="py-6">
      <Card className="shadow">
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {aboutContent.title}
          </Typography>
          {aboutContent.paragraphs.map((text, idx) => (
            <Typography key={idx} paragraph>
              {text}
            </Typography>
          ))}
        </CardContent>
      </Card>
    </Container>
  );
};

export default About;
