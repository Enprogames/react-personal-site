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
  { label: 'Home', to: '/' },
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
    <AppBar position="fixed" color="primary">
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component={NavLink}
            to="/"
            sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
          >
            Ethan Posner
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.to}
                component={NavLink}
                to={page.to}
                color="inherit"
                sx={{ my: 2 }}
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
