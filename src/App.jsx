import { useState } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EducationTimeline from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 min-h-screen">
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <Hero />
        <About />
        <EducationTimeline />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
