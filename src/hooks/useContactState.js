import { useState, useCallback } from 'react';
import { useContact } from './useContact';
import { useForm } from './useForm';

export const useContactState = () => {
  const [loading, setLoading] = useState(false);
  const {
    messageType,
    setMessageType,
    copied,
    setCopied,
    sendEmail,
    sendSMS
  } = useContact();

  const { values, handleChange, reset } = useForm({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleCopyPhone = useCallback(() => {
    navigator.clipboard.writeText('+1945-209-1185');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [setCopied]);

  const handleSubmit = useCallback(async (formData) => {
    setLoading(true);
    try {
      const success = messageType === 'email' 
        ? await sendEmail(formData)
        : await sendSMS(formData);
      
      if (success) reset();
      return success;
    } finally {
      setLoading(false);
    }
  }, [messageType, sendEmail, sendSMS, reset]);

  return {
    formState: {
      values,
      loading,
      messageType,
      copied,
    },
    handlers: {
      handleChange,
      handleSubmit,
      setMessageType,
      handleCopyPhone
    }
  };
};