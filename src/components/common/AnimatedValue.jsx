import React, { useState, useEffect } from 'react';
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

export default AnimatedValue;
