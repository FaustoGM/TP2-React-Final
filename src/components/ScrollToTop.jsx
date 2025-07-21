import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import '../styles/css/scrollToTop.css';

const ScrollToTop = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      aria-label="Volver arriba"
      className={`scroll-to-top ${isVisible ? 'visible' : ''} ${darkMode ? 'dark' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;