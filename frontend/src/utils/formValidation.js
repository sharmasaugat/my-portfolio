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
    pattern: /^\+?[\d\s-]+$/
  },
  message: {
    required: true,
    minLength: 10
  }
};

export const validateFormFields = (values, activeTab) => {
  for (const [field, rules] of Object.entries(VALIDATION_RULES)) {
    if (rules.required && !values[field]?.trim()) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    }

    if (field === 'email' && values[field] && !rules.pattern.test(values[field])) {
      return 'Please enter a valid email address';
    }

    if (field === 'phone' && values[field] && !rules.pattern.test(values[field])) {
      return 'Please enter a valid phone number';
    }

    if (rules.minLength && values[field]?.trim().length < rules.minLength) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} must be at least ${rules.minLength} characters`;
    }

    if (rules.maxLength && values[field]?.trim().length > rules.maxLength) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} must be less than ${rules.maxLength} characters`;
    }
  }

  return null;
};