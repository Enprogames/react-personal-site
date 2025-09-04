// components/Navbar/index.tsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';

const pages = [
  { label: 'Resume', to: '/Resume' },
  { label: 'Projects', to: '/Projects' },
  { label: 'Hobbies', to: '/Hobbies' },
  { label: 'About', to: '/About' },
];

export const CustomNavbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        backgroundImage: 'linear-gradient(to right, #0f172a, #1e293b)',
        color: 'white',
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component={NavLink}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 'bold',
              letterSpacing: 1,
              borderRadius: 1,
              px: 1.5,
              py: 0.5,
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.08)',
              },
              '&:focus-visible': {
                outline: '2px solid rgba(255,255,255,0.4)',
                outlineOffset: '2px',
              },
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            Ethan Posner
          </Typography>
          {/* Spacer to push nav items to the right without making the title fill the bar */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.to}
                component={NavLink}
                to={page.to}
                color="inherit"
                sx={{
                  my: 2,
                  mx: 1,
                  '&.active': {
                    borderBottom: '2px solid currentColor',
                  },
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton color="inherit" onClick={handleOpen}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
              {pages.map((page) => (
                <MenuItem
                  key={page.to}
                  component={NavLink}
                  to={page.to}
                  onClick={handleClose}
                  sx={{ '&.active': { fontWeight: 'bold' } }}
                >
                  {page.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default CustomNavbar;
