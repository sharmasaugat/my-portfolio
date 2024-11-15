import { useCallback, useEffect } from 'react';
import { CONTACT_DATA } from '../data/ContactData';

export const useContactFormReset = (setFormState) => {
  const resetForm = useCallback(() => {
    setFormState(CONTACT_DATA.formConfig.initialState);
  }, [setFormState]); // Added setFormState to dependencies

  useEffect(() => { // Removed const clearSuccess assignment
    let successTimer;
    let modalTimer;

    setFormState(prev => {
      if (prev.successMessage) {
        successTimer = setTimeout(() => {
          setFormState(prev => ({
            ...prev,
            successMessage: null,
            submitted: false
          }));
        }, CONTACT_DATA.formConfig.successMessageDelay);

        modalTimer = setTimeout(() => {
          setFormState(prev => ({
            ...CONTACT_DATA.formConfig.initialState,
            showModal: false
          }));
        }, CONTACT_DATA.formConfig.modalCloseDelay);
      }

      if (prev.submitted) {
        const timer = setTimeout(() => {
          setFormState(CONTACT_DATA.formConfig.initialState);
        }, CONTACT_DATA.formConfig.modalCloseDelay);
        
        return () => clearTimeout(timer);
      }

      return prev;
    });

    return () => {
      clearTimeout(successTimer);
      clearTimeout(modalTimer);
    };
  }, [setFormState]);

  return { resetForm };  // Removed clearSuccess from return
};