import axios from 'axios';

const SHEET_ID = '2PACX-1vS6EMTrMrFBQmv5vH5zhkplUiz5Zs1iDIgTzsvRWI8kIzMeGMefVt37EEzeuySHn5DP-pf4bu64n8ls';
const SHEET_URL = `https://docs.google.com/spreadsheets/d/e/${SHEET_ID}/pub?output=csv`;

export const fetchMerchantData = async () => {
  try {
    console.log('Fetching data from:', SHEET_URL);
    const response = await axios.get(SHEET_URL, { timeout: 10000 }); // 10 second timeout
    console.log('Response received:', response);
    
    if (!response.data) {
      throw new Error('Invalid response structure');
    }
    
    // Parse CSV data
    const rows = response.data.split('\n');
    const headers = rows[0].split(',');
    const entries = rows.slice(1).map(row => {
      const values = row.split(',');
      return headers.reduce((obj, header, index) => {
        obj[header.trim()] = values[index];
        return obj;
      }, {});
    });
    
    console.log('Number of entries:', entries.length);
    
    if (entries.length === 0) {
      throw new Error('No data entries found');
    }
    
    return entries.map(entry => ({
      type: entry.type || '',
      category: entry.category || '',
      subCategory: entry.subcategory || '',
      brand: entry.brand || '',
      earning: entry.earning || '',
      link: entry.link || '',
      condition: entry.condition || '',
      image: entry.image || '/placeholder.svg'
    }));
  } catch (error) {
    console.error('Error fetching merchant data:', error.message);
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error('Response status:', error.response.status);
        console.error('Response data:', error.response.data);
      } else if (error.request) {
        console.error('No response received');
        console.error('Request details:', error.request);
      } else {
        console.error('Error details:', error.message);
      }
      if (error.code === 'ECONNABORTED') {
        throw new Error('Request timed out. Please check your internet connection and try again.');
      }
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