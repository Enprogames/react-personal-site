// components/Footer/index.tsx
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Socialicons } from '../Socialicons';
import { useColorModeValue } from '../../hooks/useColorModeValue';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const bg = useColorModeValue('grey.100', 'grey.800');

  return (
    <Box component="footer" sx={{ mt: 10, bgcolor: bg }}>
      <Container sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Created with React
        </Typography>
        <Typography variant="body2" sx={{ mb: 4 }}>
          This website was built using React, a JavaScript library for building user interfaces.
        </Typography>
        <Socialicons />
        <Typography variant="body2" sx={{ pt: 4 }}>
          © {year} Ethan Posner
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
