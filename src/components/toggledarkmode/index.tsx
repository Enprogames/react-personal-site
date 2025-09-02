// components/toggledarkmode/index.tsx
import React, { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../ThemeContext';

export const DarkModeToggle: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext)!;

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <IconButton color="inherit" onClick={toggleTheme} sx={{ ml: 1 }}>
      {theme === 'light' ? (
        <FontAwesomeIcon icon={faMoon} />
      ) : (
        <FontAwesomeIcon icon={faSun} />
      )}
    </IconButton>
  );
};

export default DarkModeToggle;
