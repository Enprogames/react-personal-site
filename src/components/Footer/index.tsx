// components/Footer/index.tsx
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Socialicons } from '../Socialicons';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <Box component="footer" className="bg-gray-100 dark:bg-gray-800 mt-10">
      <Container className="p-4 text-center">
        <Typography variant="h6" className="mb-2">Created with React</Typography>
        <Typography variant="body2" className="mb-4">
          This website was built using React, a JavaScript library for building user interfaces.
        </Typography>
        <Socialicons />
        <Typography variant="body2" className="pt-4">
          © {year} Ethan Posner
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
