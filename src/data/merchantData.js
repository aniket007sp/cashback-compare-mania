import axios from 'axios';

const SHEET_URL = 'https://spreadsheets.google.com/feeds/list/1sZYXLw4mhtoH0P9w9FB4MXwKRYFDrbWU5rZmyBnavQY/1/public/values?alt=json';

export const fetchMerchantData = async () => {
  try {
    console.log('Fetching data from:', SHEET_URL);
    const response = await axios.get(SHEET_URL);
    console.log('Response received:', response);
    
    if (!response.data || !response.data.feed || !response.data.feed.entry) {
      throw new Error('Invalid response structure');
    }
    
    const entries = response.data.feed.entry;
    console.log('Number of entries:', entries.length);
    
    if (entries.length === 0) {
      throw new Error('No data entries found');
    }
    
    return entries.map(entry => ({
      type: entry.gsx$type.$t,
      category: entry.gsx$category.$t,
      subCategory: entry.gsx$subcategory.$t,
      brand: entry.gsx$brand.$t,
      earning: entry.gsx$earning.$t,
      link: entry.gsx$link.$t,
      condition: entry.gsx$condition.$t,
      image: entry.gsx$image.$t || '/placeholder.svg'
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