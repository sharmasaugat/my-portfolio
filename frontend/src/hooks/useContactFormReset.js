import { useCallback, useEffect } from 'react';
import { CONTACT_DATA } from '../data/ContactData';

export const useContactFormReset = (setFormState) => {
  const resetForm = useCallback(() => {
    setFormState(CONTACT_DATA.formConfig.initialState);
  }, [setFormState]);

  useEffect(() => {
    let timer;

    const handleAutoClose = (state) => {
      if (state.submitted) {
        timer = setTimeout(() => {
          setFormState(prev => ({
            ...CONTACT_DATA.formConfig.initialState,
            showModal: false
          }));
        }, CONTACT_DATA.formConfig.modalCloseDelay);
      }
    };

    setFormState(prev => {
      handleAutoClose(prev);
      return prev;
    });

    return () => clearTimeout(timer);
  }, [setFormState]);

  return { resetForm };
};