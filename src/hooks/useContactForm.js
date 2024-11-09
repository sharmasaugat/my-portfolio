import { useState } from 'react';
import { contactService } from '../services/contactService';

const initialState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
};

export const useContactForm = (messageType = 'email') => {
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);
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
      const errors = contactService.validateForm(values, messageType);
      if (errors) {
        throw new Error(Object.values(errors)[0]);
      }

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
    submitted,
    error,
    handleChange,
    handleSubmit
  };
};