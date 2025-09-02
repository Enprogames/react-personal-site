// components/toggledarkmode/index.tsx
import React, { useContext, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './darkModeToggle.css';
import { ThemeContext } from '../../ThemeContext';

export const DarkModeToggle: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext)!;

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <IconButton
      className="dark-mode-toggle fixed top-4 right-4 border border-current"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
    </IconButton>
  );
};

export default DarkModeToggle;
