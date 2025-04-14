// src/App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import { CustomNavbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DarkModeToggle } from './components/toggledarkmode';
import { ThemeContext } from './ThemeContext';

import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';

import './App.css';


function App() {

  const [theme, setTheme] = useState('light');

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <DarkModeToggle />
        <CustomNavbar />

        <Container fluid className="mb-5">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Resume" element={<Resume />} />
            <Route exact path="/Projects" element={<Projects />} />
            <Route exact path="/Hobbies" element={<Hobbies />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
        <Footer />
      </ThemeContext.Provider>
    </>
  );
}

export default App;