import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const animations = {
  terminal: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7 }
  },
  summary: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, delay: 0.2 }
  }
};

// Animated Value Component
const AnimatedValue = ({ value, suffix = '', duration = 2000 }) => {
    const [current, setCurrent] = useState(0);
    
    useEffect(() => {
      let startTime;
      let animationFrame;
      
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;
        
        if (progress < 1) {
          setCurrent(Math.floor(value * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCurrent(value);
        }
      };
      
      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }, [value, duration]);
    
    return <span>{current}{suffix}</span>;
  };

AnimatedValue.propTypes = {
  value: PropTypes.number.isRequired,
  suffix: PropTypes.string,
  duration: PropTypes.number
};

export default AnimatedValue;
