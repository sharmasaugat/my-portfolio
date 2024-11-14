import { CONTACT_DATA } from '../data/ContactData';

export const contactService = {
  async sendMessage(data, type) {
    try {
      const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';
      
      // Format payload based on message type
      const payload = type === 'email' 
        ? {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message
          }
        : {
            name: data.name,
            number: data.phone, // Map phone to number for SMS
            message: data.message
          };

      const response = await fetch(`${API_BASE_URL}/api/notifications/${type}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        // Better error handling
        if (response.status === 404) {
          throw new Error('API endpoint not found. Please check your server configuration.');
        }
        const errorText = await response.text();
        throw new Error('Server error: Please try again later');
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Contact service error:', error);
      throw new Error(error.response?.data?.message || 'Unable to send message. Please try again later.');
    }
  }
};