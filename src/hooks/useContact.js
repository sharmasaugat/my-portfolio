import { useState } from 'react';

export const useContact = () => {
  const [messageType, setMessageType] = useState('email');
  const [copied, setCopied] = useState(false);

  return {
    messageType,
    setMessageType,
    copied,
    setCopied
  };
};