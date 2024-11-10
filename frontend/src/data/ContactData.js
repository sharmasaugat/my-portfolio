import { Mail, MessageSquare } from 'lucide-react';

export const CONTACT_DATA = {
  title: "Let's Work Together",
  subtitle: "Get in touch with me",
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername"
  },
  contactInfo: {
    email: "hello@example.com",
    phone: "+1 (123) 456-7890",
    location: "New York, USA"
  },
  formTabs: {
    email: {
      icon: Mail,
      title: 'Email Me',
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
      title: 'Send Message',
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
          validation: { required: true, pattern: /^\+?[\d\s-]+$/ }
        },
        {
          name: 'message',
          label: 'Your Message',
          type: 'textarea',
          placeholder: 'How can I help you?',
          validation: { required: true }
        }
      ]
    }
  },
  messages: {
    success: 'Message sent successfully!',
    error: 'Something went wrong. Please try again.',
    sending: 'Sending...'
  }
};