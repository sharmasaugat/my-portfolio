import { CONTACT_CONFIG } from '../config/contact';

class ContactService {
  async sendMessage(data, endpoint = CONTACT_CONFIG.api.endpoints.email) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: CONTACT_CONFIG.api.headers,
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to send message');
      }

      return await response.json();
    } catch (error) {
      console.error('Contact service error:', error);
      throw error;
    }
  }

  validateForm(data, type = 'email') {
    const errors = {};

    if (!data.name?.trim()) {
      errors.name = 'Name is required';
    }

    if (!data.message?.trim()) {
      errors.message = 'Message is required';
    }

    if (type === 'email') {
      if (!data.email?.trim()) {
        errors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = 'Invalid email format';
      }
    } else {
      if (!data.phone?.trim()) {
        errors.phone = 'Phone number is required';
      } else if (!/^\+?[\d\s-]{10,}$/.test(data.phone)) {
        errors.phone = 'Invalid phone number format';
      }
    }

    return Object.keys(errors).length ? errors : null;
  }
}

export const contactService = new ContactService();