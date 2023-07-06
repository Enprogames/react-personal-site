// components/toggledarkmode/index.js
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './darkModeToggle.css'; // assuming you have this css file in the same directory
import { ThemeContext } from '../../ThemeContext';

export const DarkModeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  React.useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  return (
    <button className={`dark-mode-toggle btn btn-lg ${theme === 'light' ? 'btn-outline-dark' : 'btn-outline-light'}`}
        onClick={toggleTheme}>
      {theme === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
    </button>
  );
};
