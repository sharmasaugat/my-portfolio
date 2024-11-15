import { useState, useCallback } from 'react';
import { useContactFormSubmit } from './useContactFormSubmit';
import { useContactFormReset } from './useContactFormReset';
import { CONTACT_DATA } from '../data/ContactData';

export const useContactForm = () => {
  const [formState, setFormState] = useState(CONTACT_DATA.formConfig.initialState);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      values: { ...prev.values, [name]: value },
      error: null
    }));
  }, []);

  const { handleSubmit } = useContactFormSubmit(formState, setFormState);
  const { resetForm } = useContactFormReset(setFormState); // Removed clearSuccess

  const actions = {
    handleChange,
    handleSubmit,
    resetForm,
    toggleModal: (show = false, tab = null) => setFormState(prev => ({
      ...CONTACT_DATA.formConfig.initialState,
      showModal: show,
      activeTab: tab || prev.activeTab
    })),
    setActiveTab: (tab) => setFormState(prev => ({
      ...prev,
      activeTab: tab,
      error: null
    }))
  };

  return {
    ...formState,
    ...actions
  };
};