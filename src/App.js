import './App.css'; 
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';
import {Link, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/Resume" element={<Resume />}/>
        <Route exact path="/Projects" element={<Projects />}/>
        <Route exact path="/Hobbies" element={<Hobbies />}/>
        <Route exact path="/Contact" element={<Contact />}/>
        <Route exact path="/about" element={<About />}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}
  
export default App;