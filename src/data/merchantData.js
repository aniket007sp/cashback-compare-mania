import axios from 'axios';

const SHEET_ID = '1sZYXLw4mhtoH0P9w9FB4MXwKRYFDrbWU5rZmyBnavQY';
const SHEET_NAME = 'Sheet1'; // Update this if your sheet name is different
const API_KEY = 'YOUR_GOOGLE_SHEETS_API_KEY'; // Replace with your actual API key

const SHEET_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;

export const fetchMerchantData = async () => {
  try {
    console.log('Fetching data from:', SHEET_URL);
    const response = await axios.get(SHEET_URL);
    console.log('Response received:', response);
    
    if (!response.data || !response.data.values) {
      throw new Error('Invalid response structure');
    }
    
    const [headers, ...entries] = response.data.values;
    console.log('Number of entries:', entries.length);
    
    if (entries.length === 0) {
      throw new Error('No data entries found');
    }
    
    return entries.map(entry => ({
      type: entry[headers.indexOf('type')] || '',
      category: entry[headers.indexOf('category')] || '',
      subCategory: entry[headers.indexOf('subcategory')] || '',
      brand: entry[headers.indexOf('brand')] || '',
      earning: entry[headers.indexOf('earning')] || '',
      link: entry[headers.indexOf('link')] || '',
      condition: entry[headers.indexOf('condition')] || '',
      image: entry[headers.indexOf('image')] || '/placeholder.svg'
    }));
  } catch (error) {
    console.error('Error fetching merchant data:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
    throw new Error(`Failed to fetch merchant data: ${error.message}`);
  }
};

export const getFilteredMerchants = (merchants, category) => {
  if (!merchants || !Array.isArray(merchants)) {
    console.warn('Invalid merchants data:', merchants);
    return [];
  }
  return merchants.filter(merchant => merchant.category === category);
};

export const getAllCategories = (merchants) => {
  if (!merchants || !Array.isArray(merchants)) {
    console.warn('Invalid merchants data:', merchants);
    return [];
  }
  return [...new Set(merchants.map(merchant => merchant.category))];
};

export const getSubCategories = (merchants, category) => {
  if (!merchants || !Array.isArray(merchants)) {
    console.warn('Invalid merchants data:', merchants);
    return [];
  }
  return [...new Set(merchants.filter(m => m.category === category).map(m => m.subCategory))];
};