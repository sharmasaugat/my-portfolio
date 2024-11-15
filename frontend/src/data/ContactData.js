import { Mail, MessageSquare, MapPin, Phone } from 'lucide-react';

export const CONTACT_ICONS = {
  location: MapPin,
  email: Mail,
  phone: Phone
};

export const GREETING_TEXT = "Software Engineer specializing in Full-Stack Development. Let's build something extraordinary together! 🚀";
export const TYPING_SPEED = 40;

export const CONTACT_DATA = {
  title: "Let's Work Together",
  subtitle: "Get in touch with me",
  socials: {
    github: "https://github.com/sharmasaugat",
    linkedin: "www.linkedin.com/in/saugat-sharma",
    twitter: "https://twitter.com/yourusername"
  },
  contactInfo: {
    email: "ssaugat298@gmail.com",
    phone: "+1 (945) 209-1185",
    location: "Dallas TX, USA"
  },
  formTabs: {
    email: {
      icon: Mail,
      title: 'Send an Email',
      endpoint: '/api/contact/email',
      inputs: [
        { 
          name: 'name',
          label: 'Full Name',
          type: 'text',
          placeholder: 'John Doe',
          validation: { required: true, minLength: 2 }
        },
        {
          name: 'email',
          label: 'Email Address',
          type: 'email',
          placeholder: 'john@example.com',
          validation: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }
        },
        {
          name: 'subject',
          label: 'Subject',
          type: 'text',
          placeholder: 'Project Discussion',
          validation: { required: true }
        },
        {
          name: 'message',
          label: 'Your Message',
          type: 'textarea',
          placeholder: 'Tell me about your project...',
          validation: { required: true, minLength: 10 }
        }
      ]
    },
    message: {
      icon: MessageSquare,
      title: "Lets Chat",
      endpoint: '/api/contact/sms',
      inputs: [
        {
          name: 'name',
          label: 'Full Name',
          type: 'text',
          placeholder: 'John Doe',
          validation: { required: true }
        },
        {
          name: 'phone',
          label: 'Phone Number',
          type: 'tel',
          placeholder: '+1 (123) 456-7890',
          validation: { 
            required: true, 
            pattern: /^\+?1?\s*\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/ 
          }
        },
        {
          name: 'message',
          label: 'Your Message',
          type: 'textarea',
          placeholder: 'Type your message here...',
          validation: { required: true, minLength: 5 }
        }
      ]
    }
  },
  api: {
    baseUrl: process.env.REACT_APP_API_URL || 'http://localhost:8080',
    endpoints: {
      email: '/api/notifications/email',
      sms: '/api/notifications/sms'
    },
    errors: {
      notFound: 'API endpoint not found. Please check your server configuration.',
      server: 'Server error: Please try again later',
      general: 'Unable to send message. Please try again later.'
    }
  },
  messages: {
    success: 'Message sent successfully!',
    error: 'Something went wrong. Please try again.',
    sending: 'Sending...'
  }
};