import { useCallback } from 'react';
import { contactService } from '../services/contactService';
import { validateFormFields } from '../utils/formValidation';
import { errorHandler } from '../utils/errorHandler';
import { CONTACT_DATA } from '../data/ContactData';

export const useContactFormSubmit = (formState, setFormState) => {
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    try {
      const validationError = validateFormFields(formState.values, formState.activeTab);
      if (validationError) {
        throw new Error(validationError);
      }

      setFormState(prev => ({ ...prev, loading: true, error: null }));

      const result = await contactService.sendMessage(
        formState.values,
        formState.activeTab
      );

      setFormState(prev => ({
        ...prev,
        values: CONTACT_DATA.formConfig.initialState.values,
        loading: false,
        submitted: true,
        successMessage: result.message || CONTACT_DATA.messages.success
      }));

    } catch (err) {
      const errorMessage = errorHandler(err);
      setFormState(prev => ({
        ...prev,
        loading: false,
        error: errorMessage
      }));
    }
  }, [formState.values, formState.activeTab, setFormState]);

  return { handleSubmit };
};