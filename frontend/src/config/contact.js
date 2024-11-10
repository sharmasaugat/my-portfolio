export const CONTACT_CONFIG = {
  email: 'ssaugat298.com',  // Replace with your email
  phone: '+1 (845) 209-1185',   // Replace with your phone
  social: {
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourusername'
  },
  api: {
    endpoints: {
      email: '/api/contact/email',
      sms: '/api/contact/sms'
    },
    headers: {
      'Content-Type': 'application/json'
    }
  }
};