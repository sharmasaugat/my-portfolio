export const CONTACT_CONFIG = {
  location: 'New York, NY',
  email: 'ssaugat298@gmail.com',  // Replace with your email
  phone: '+1 (845) 209-1185',   // Replace with your phone
  social: {
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourusername'
  },
  api: {
    endpoints: {
      email: 'http://localhost:8080/api/notifications/email',
      sms: 'http://localhost:8080/api/notifications/sms'
    },
    headers: {
      'Content-Type': 'application/json'
    }
  }
};