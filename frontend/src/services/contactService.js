class ContactService {
  async sendMessage(data, endpoint) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      return await response.json();
    } catch (error) {
      console.error('Contact service error:', error);
      throw error;
    }
  }
}

export const contactService = new ContactService();