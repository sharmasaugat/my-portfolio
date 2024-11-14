// src/utils/errorHandler.js

export const errorHandler = (error) => {
  if (error.response) {
    return error.response.data.message || 'Server error occurred';
  }
  return error.message || 'Something went wrong. Please try again.';
};