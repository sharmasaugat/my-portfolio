import { memo } from 'react';
import ContactForm from '../Contact/ContactForm';
import { useContactForm } from '../../hooks/useContactForm';

const ContactSection = () => {
  const { values, loading, submitted, error, successMessage, handleChange, handleSubmit } = useContactForm();

  return (
    <section className="min-h-screen bg-[#0A192F] pt-16">
      <ContactForm
        messageType="email"
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