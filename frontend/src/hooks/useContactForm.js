import { useState, useCallback } from 'react';
import { contactService } from '../services/contactService';
import { validateFormFields } from '../utils/formValidation';

const initialState = {
  values: {},
  loading: false,
  submitted: false,
  error: null
};

export const useContactForm = () => {
  const [formState, setFormState] = useState(initialState);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      values: { ...prev.values, [name]: value }
    }));
  }, []);

  const handleSubmit = useCallback(async (e, endpoint) => {
    e.preventDefault();
    
    // Validate form fields
    const validationError = validateFormFields(formState.values);
    if (validationError) {
      setFormState(prev => ({ ...prev, error: validationError }));
      return;
    }

    setFormState(prev => ({ ...prev, loading: true, error: null }));

    try {
      await contactService.sendMessage(formState.values, endpoint);
      setFormState({
        values: {},
        loading: false,
        submitted: true,
        error: null
      });
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
    handleSubmit
  };
};