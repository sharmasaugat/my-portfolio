import { useState, useCallback } from 'react';
import { contactService } from '../services/contactService';
import { validateFormFields } from '../utils/formValidation';

const initialState = {
  values: {},
  loading: false,
  submitted: false,
  error: null,
  successMessage: null
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

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    // Validate form fields
    const validationError = validateFormFields(formState.values);
    if (validationError) {
      setFormState(prev => ({ ...prev, error: validationError }));
      return;
    }

    setFormState(prev => ({ ...prev, loading: true, error: null, successMessage: null }));

    try {
      const result = await contactService.sendMessage(formState.values);
      setFormState({
        values: {},
        loading: false,
        submitted: true,
        error: null,
        successMessage: result.message
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