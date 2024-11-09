import { memo, useEffect } from 'react';
import { motion } from 'framer-motion';
import ContactSidebar from './ContactSidebar';
import ContactFormTabs from './ContactFormTabs';
import { CONTACT_CONFIG } from '../../config/contact';

const ContactForm = ({ messageType, values, loading, submitted, error, onChange, onSubmit }) => {
  // Add resize observer for textarea auto-height
  useEffect(() => {
    const textareas = document.querySelectorAll('textarea');
    
    const resizeTextarea = (textarea) => {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    };

    textareas.forEach(textarea => {
      textarea.addEventListener('input', () => resizeTextarea(textarea));
      resizeTextarea(textarea); // Initial resize
    });

    // Cleanup
    return () => {
      textareas.forEach(textarea => {
        textarea.removeEventListener('input', () => resizeTextarea(textarea));
      });
    };
  }, [values.message]);

  return (
    <div className="contact-container">
      <div className="floating-orbs">
        <div className="orb" />
        <div className="orb" />
      </div>
      <motion.div 
        className="contact-grid"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ContactSidebar config={CONTACT_CONFIG} />
        <ContactFormTabs
          values={values}
          loading={loading}
          submitted={submitted}
          error={error}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </motion.div>
    </div>
  );
};

export default memo(ContactForm);