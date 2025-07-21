import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/SobreMi';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotaExtra from './components/NotaExtra';
import ScrollToTop from './components/ScrollToTop';

import './styles/index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleAnchorClick = function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    document.body.classList.toggle('dark', darkMode);

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, [darkMode]);

  return (
    <div className={`app-container ${darkMode ? 'dark' : ''}`}>
      <Navbar 
        toggleDarkMode={() => setDarkMode(!darkMode)} 
        currentTheme={darkMode ? 'dark' : 'light'}
      />

      <main className="main-content">
        <section id="home" className="section">
          <Home 
            titulo="Hola, soy Fausto Giordano"
            subtitulo="Desarrollador Web Front-End"
            imagen="/assets/images/perfil.jpg"
            darkMode={darkMode}
          />
        </section>

        <section id="about" className="section">
          <About darkMode={darkMode} />
        </section>

        <section id="tech" className="section">
          <Technologies darkMode={darkMode} />
        </section>

        <section id="experience" className="section">
          <Experience darkMode={darkMode} />
        </section>

        <section id="portfolio" className="section">
          <Projects darkMode={darkMode} />
        </section>

        <section id="contact" className="section">
          <Contact darkMode={darkMode} />
        </section>

        <NotaExtra darkMode={darkMode} />
      </main>

      <ScrollToTop darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
