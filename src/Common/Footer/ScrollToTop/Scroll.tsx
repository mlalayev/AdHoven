import React, { useState, useEffect } from 'react';
import './Scroll.css';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      <button
        onClick={scrollToTop}
        className={`scroll-to-top ${isVisible ? 'visible' : 'hidden'}`}
      >{'>'}</button>
    </div>
  );
};

export default ScrollToTop;
