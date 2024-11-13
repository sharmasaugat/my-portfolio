class ContactService {
  async sendMessage(data) {
    const endpoint = 'http://localhost:8080/api/notifications/email';
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || `HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      return {
        success: true,
        message: `Email has been sent to Saugat Sharma and will be responding asap.`,
        ...result
      };
    } catch (error) {
      console.error('Contact service error:', error);
      throw error;
    }
  }
}

export const contactService = new ContactService();