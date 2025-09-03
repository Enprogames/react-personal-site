// src/App.tsx
import React, { useState, useMemo, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import type { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import { CustomNavbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ThemeContext } from './ThemeContext';
import { DarkModeToggle } from './components/toggledarkmode';

import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';

import './App.css';


function App() {
  const [theme, setTheme] = useState<PaletteMode>('light');
  const muiTheme = useMemo(() => createTheme({ palette: { mode: theme } }), [theme]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <CustomNavbar />

        <Container maxWidth={false} className="mb-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Hobbies" element={<Hobbies />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
        <Footer />
        <DarkModeToggle />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
