import { memo, useState, useEffect } from 'react';
import { GREETING_TEXT, TYPING_SPEED } from '../../data/ContactData';

export const TypingGreeting = memo(() => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentTextIndex < GREETING_TEXT.length) {
      const timer = setTimeout(() => {
        setCurrentTextIndex(prev => prev + 1);
      }, TYPING_SPEED);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [currentTextIndex]);

  return (
    <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
      {GREETING_TEXT.substring(0, currentTextIndex)}
      {isTyping && <span className="animate-pulse">|</span>}
    </h2>
  );
});