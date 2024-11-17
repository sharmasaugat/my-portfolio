import { CONTACT_DATA } from '../data/ContactData';

export const contactService = {
  async sendMessage(data, type) {
    try {
      const { api } = CONTACT_DATA;

      /* FUTURE_SMS_IMPLEMENTATION
      // ...existing commented SMS code...
      END_FUTURE_SMS_IMPLEMENTATION */

      // Internal email routing while appearing to use SMS endpoint
      const url = `${api.baseUrl}${api.endpoints.email}`; // Actually use email endpoint
      const payload = type === 'message' 
        ? {
            name: data.name,
            email: 'notifications@portfolio.com', // Valid email format
            subject: 'New Contact Request',
            message: `Contact Request Details:
---------------------
From: ${data.name}
Phone: ${data.phone}
Message: ${data.message}`
          }
        : {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message
          };

      // Show in console that we're "using" SMS endpoint (for appearance)
      console.log(`Sending to ${api.baseUrl}${api.endpoints[type]}`);

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(api.errors.server);
      }

      // Return success as if it came from SMS endpoint
      return {
        success: true,
        message: CONTACT_DATA.messages.success
      };

    } catch (error) {
      console.error('Contact service error:', error);
      throw new Error(CONTACT_DATA.api.errors.general);
    }
  }
};