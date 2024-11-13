import { useState, useCallback } from 'react';
import { contactService } from '../services/contactService';
import { validateFormFields } from '../utils/formValidation';

const initialState = {
  values: {
    name: '',
    email: '',
    subject: '',
    message: ''
  },
  loading: false,
  submitted: false,
  error: null,
  successMessage: null
};

export const useContactForm = () => {
  const [formState, setFormState] = useState(initialState);

  const resetForm = useCallback(() => {
    setFormState(prev => ({
      ...initialState,
      submitted: false,
      successMessage: null
    }));
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      values: { ...prev.values, [name]: value }
    }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    const validationError = validateFormFields(formState.values);
    if (validationError) {
      setFormState(prev => ({ ...prev, error: validationError }));
      return;
    }

    setFormState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const result = await contactService.sendMessage(formState.values);
      setFormState({
        ...initialState,
        submitted: true,
        successMessage: result.message
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormState(prev => ({
          ...prev,
          successMessage: null,
          submitted: false
        }));
      }, 5000);

    } catch (err) {
      setFormState(prev => ({
        ...prev,
        loading: false,
        error: err.message
      }));
    }
  }, [formState.values]);

  return {
    ...formState,
    handleChange,
    handleSubmit,
    resetForm
  };
};