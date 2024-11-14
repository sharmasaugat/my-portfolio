import { CONTACT_DATA } from '../data/ContactData';

export const contactService = {
  async sendMessage(values, type) {
    const endpoint = CONTACT_DATA.formTabs[type].endpoint;
    
    try {
      // Get endpoint and create payload based on form type
      const payload = type === 'email' ? {
        name: values.name,
        email: values.email,
        subject: values.subject || 'Portfolio Contact',
        message: values.message
      } : {
        name: values.name,
        phone: values.phone,
        message: values.message
      };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || CONTACT_DATA.messages.error);
      }

      return {
        message: data.message || CONTACT_DATA.messages.success
      };

    } catch (error) {
      throw new Error(error.message || CONTACT_DATA.messages.error);
    }
  }
};