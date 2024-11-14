const VALIDATION_RULES = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  phone: {
    pattern: /^\+?1?\s*\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/,
    required: true
  },
  message: {
    required: true,
    minLength: 10
  }
};

export const validateFormFields = (values, activeTab) => {
  const requiredFields = {
    email: ['name', 'email', 'subject', 'message'],
    message: ['name', 'phone', 'message']
  };

  const fields = requiredFields[activeTab];
  for (const field of fields) {
    if (!values[field]?.trim()) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    }

    if (field === 'email' && values[field] && !VALIDATION_RULES.email.pattern.test(values[field])) {
      return 'Please enter a valid email address';
    }

    if (field === 'phone' && values[field] && !VALIDATION_RULES.phone.pattern.test(values[field])) {
      return 'Please enter a valid phone number';
    }

    if (field === 'message' && values[field]?.trim().length < VALIDATION_RULES.message.minLength) {
      return `Message must be at least ${VALIDATION_RULES.message.minLength} characters`;
    }
  }

  return null;
};