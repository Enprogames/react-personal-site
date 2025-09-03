// components/toggledarkmode/index.tsx
import React, { useContext } from 'react';
import Fab from '@mui/material/Fab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../ThemeContext';

export const DarkModeToggle: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext)!;

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Fab
      color="primary"
      onClick={toggleTheme}
      sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: (t) => t.zIndex.tooltip }}
    >
      {theme === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
    </Fab>
  );
};

export default DarkModeToggle;
