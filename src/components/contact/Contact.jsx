
import React from 'react';
import { Mail, Phone, GitHub, Linkedin } from 'lucide-react';
import { useContactForm } from '../../hooks/useContactForm';

const Contact = () => {
  const { values, loading, submitted, error, handleChange, handleSubmit } = useContactForm();

  const onSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit();
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-grid">
        {/* Contact Info */}
        <div className="contact-info">
          <h2 className="text-3xl font-bold mb-8 text-[#E2E8F0]">
            Let's Connect
          </h2>
          
          <div className="space-y-6">
            <div className="info-card">
              <Mail className="info-icon" />
              <h3 className="text-[#64FFDA] font-medium mb-2">Email</h3>
              <a href="mailto:sharma.saugat123@gmail.com" className="text-gray-300 hover:text-[#64FFDA]">
                sharma.saugat123@gmail.com
              </a>
            </div>

            <div className="info-card">
              <Phone className="info-icon" />
              <h3 className="text-[#64FFDA] font-medium mb-2">Phone</h3>
              <p className="text-gray-300">+1 945-209-1185</p>
            </div>

            <div className="info-card">
              <div className="social-links">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                  <GitHub size={20} />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={onSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={values.subject}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              value={values.message}
              onChange={handleChange}
              className="form-textarea"
              required
            />
          </div>

          {error && <div className="status-message error">{error}</div>}
          {submitted && <div className="status-message success">Message sent successfully!</div>}

          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;