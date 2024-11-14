import { useState, useCallback, useMemo, useEffect } from 'react';
import { contactService } from '../services/contactService';
import { validateFormFields } from '../utils/formValidation';

const MESSAGES = {
  success: 'Message sent successfully!',
  error: 'Something went wrong. Please try again.'
};

const initialState = {
  values: {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  },
  loading: false,
  submitted: false,
  error: null,
  successMessage: null,
  showModal: false,
  activeTab: 'message' // Change default to message
};

const MODAL_CLOSE_DELAY = 3000; // Reduced to 3 seconds
const SUCCESS_MESSAGE_DELAY = 2000; // Reduced to 2 seconds

export const useContactForm = () => {
  const [formState, setFormState] = useState(initialState);

  // Clear form and reset state
  const resetForm = useCallback(() => {
    setFormState(initialState);
  }, []);

  // Clear success message and close modal after delays
  useEffect(() => {
    let successTimer;
    let modalTimer;

    if (formState.successMessage) {
      successTimer = setTimeout(() => {
        setFormState(prev => ({
          ...prev,
          successMessage: null,
          submitted: false
        }));
      }, SUCCESS_MESSAGE_DELAY);

      modalTimer = setTimeout(() => {
        setFormState(prev => ({
          ...initialState,
          showModal: false
        })); // Fixed extra parenthesis here
      }, MODAL_CLOSE_DELAY);
    }

    return () => {
      clearTimeout(successTimer);
      clearTimeout(modalTimer);
    };
  }, [formState.successMessage]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      values: { ...prev.values, [name]: value },
      error: null
    }));
  }, []);

  // Memoize form actions
  const actions = useMemo(() => ({
    handleChange,
    handleSubmit: async (e) => {
      e.preventDefault();
      
      const validationError = validateFormFields(formState.values, formState.activeTab);
      if (validationError) {
        setFormState(prev => ({ ...prev, error: validationError }));
        return;
      }

      setFormState(prev => ({ ...prev, loading: true, error: null }));

      try {
        const result = await contactService.sendMessage(
          formState.values,
          formState.activeTab
        );

        setFormState(prev => ({
          ...prev,
          values: initialState.values,
          loading: false,
          submitted: true,
          successMessage: result.message || MESSAGES.success
        }));

      } catch (err) {
        setFormState(prev => ({
          ...prev,
          loading: false,
          error: err.message || MESSAGES.error
        }));
      }
    },
    resetForm,
    toggleModal: (show = false) => setFormState(prev => ({
      ...initialState,
      showModal: show,
      activeTab: show ? prev.activeTab : 'email'
    })),
    setActiveTab: (tab) => setFormState(prev => ({
      ...prev,
      activeTab: tab,
      error: null
    }))
  }), [handleChange, resetForm, formState.activeTab, formState.values]);

  // Clear form on success
  useEffect(() => {
    if (formState.submitted) {
      const timer = setTimeout(() => {
        setFormState(initialState);
      }, MODAL_CLOSE_DELAY);
      
      return () => clearTimeout(timer);
    }
  }, [formState.submitted]);

  return {
    ...formState,
    ...actions
  };
};