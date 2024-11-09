import { useState } from 'react';
import { contactService } from '../services/contactService';

const initialState = {
  name: '',
  email: '',
  phone: '',
  message: ''
};

export const useContactForm = () => {
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [messageType, setMessageType] = useState('email');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e, endpoint) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await contactService.sendMessage(values, endpoint);
      setSubmitted(true);
      setValues(initialState);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    values,
    loading,
    messageType,
    submitted,
    error,
    handleChange,
    handleSubmit,
    setMessageType
  };
};