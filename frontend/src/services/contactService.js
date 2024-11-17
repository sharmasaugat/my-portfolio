import { CONTACT_DATA } from '../data/ContactData';

export const contactService = {
  async sendMessage(data, type) {
    try {
      const { api } = CONTACT_DATA;

      /* ORIGINAL_IMPLEMENTATION - Uncomment when AWS SNS is configured
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
      END_ORIGINAL_IMPLEMENTATION */

      // TEMPORARY_IMPLEMENTATION - Remove when AWS SNS is working
      // This implementation routes SMS requests through email to maintain functionality
      // while AWS phone verification is pending
      const url = `${api.baseUrl}${api.endpoints.email}`;
      const payload = type === 'message' 
        ? {
            name: data.name,
            email: 'notifications@portfolio.com',
            subject: `SMS Contact Request from ${data.name}`,
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

      // Log original intended endpoint for debugging
      console.log(`Original intended endpoint: ${api.baseUrl}${api.endpoints[type]}`);
      console.log('Temporarily routing through email endpoint');

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

      return {
        success: true,
        message: CONTACT_DATA.messages.success
      };
      // END_TEMPORARY_IMPLEMENTATION

    } catch (error) {
      console.error('Contact service error:', error);
      throw new Error(error.response?.data?.message || CONTACT_DATA.api.errors.general);
    }
  }
};