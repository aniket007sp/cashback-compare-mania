import { v4 as uuidv4 } from 'uuid';

// Generate a unique user ID
export const generateUserId = () => {
  return uuidv4();
};

// Save user data to local storage
export const saveUserData = (userData) => {
  localStorage.setItem('userData', JSON.stringify(userData));
};

// Get user data from local storage
export const getUserData = () => {
  const userData = localStorage.getItem('userData');
  return userData ? JSON.parse(userData) : null;
};

// Track product click
export const trackProductClick = (userId, productId, platform) => {
  // In a real application, you would send this data to your backend
  console.log(`User ${userId} clicked on product ${productId} for platform ${platform}`);
  // Here you would typically make an API call to your backend to store this information
};