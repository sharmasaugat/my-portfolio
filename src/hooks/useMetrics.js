
import { useState, useCallback, useEffect } from 'react';

export const useMetrics = (initialValue, duration = 2000) => {
  const [current, setCurrent] = useState(0);

  const animate = useCallback((value) => {
    let startTime;
    let animationFrame;

    const step = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCurrent(Math.floor(value * progress));
        animationFrame = requestAnimationFrame(step);
      } else {
        setCurrent(value);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [duration]);

  useEffect(() => {
    return animate(initialValue);
  }, [initialValue, animate]);

  return current;
};