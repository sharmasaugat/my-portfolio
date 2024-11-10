export const validateFormFields = (values) => {
  const required = ['name', 'message'];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[\d\s-]+$/;

  for (const field of required) {
    if (!values[field]?.trim()) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    }
  }

  if (values.email && !emailRegex.test(values.email)) {
    return 'Please enter a valid email address';
  }

  if (values.phone && !phoneRegex.test(values.phone)) {
    return 'Please enter a valid phone number';
  }

  return null;
};