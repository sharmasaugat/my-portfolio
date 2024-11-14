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
  },
  sidebar: {
    container: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5 }
    },
    item: {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 }
    }
  },
  avatar: {
    avatar: {
      initial: { scale: 0.9, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { duration: 0.5 }
    },
    statusBadge: {
      initial: { y: 10, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { delay: 0.3 }
    }
  },
  modal: {
    overlay: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    },
    content: {
      initial: { scale: 0.95, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 0.95, opacity: 0 }
    }
  }
};

/**
 * AnimatedValue component
 * 
 * @param {object} props
 * @param {number} props.value - The value to animate
 * @param {string} [props.suffix=''] - The suffix to append to the value
 * @param {number} [props.duration=2000] - The duration of the animation
 * @returns {JSX.Element}
  */
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
