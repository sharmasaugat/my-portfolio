import { memo } from 'react';
import { useContactForm } from '../../hooks/useContactForm';
import EnhancedContactForm from '../Contact/ContactForm';

const ContactSection = () => {
  const { values, loading, submitted, error, successMessage, handleChange, handleSubmit } = useContactForm();

  return (
    <section className="min-h-screen bg-gray-900 pt-16">
      <EnhancedContactForm
        values={values}
        loading={loading}
        submitted={submitted}
        error={error}
        successMessage={successMessage}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </section>
  );
};

export default memo(ContactSection);