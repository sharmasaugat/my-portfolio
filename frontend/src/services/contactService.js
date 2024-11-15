import { CONTACT_DATA } from '../data/ContactData';

export const contactService = {
  async sendMessage(data, type) {
    try {
      const { api } = CONTACT_DATA;
      const payload = type === 'email' 
        ? {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message
          }
        : {
            name: data.name,
            number: data.phone,
            message: data.message
          };

      const response = await fetch(`${api.baseUrl}${api.endpoints[type]}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(api.errors.notFound);
        }
        throw new Error(api.errors.server);
      }

      return await response.json();
    } catch (error) {
      console.error('Contact service error:', error);
      throw new Error(error.response?.data?.message || CONTACT_DATA.api.errors.general);
    }
  }
};