import axios from 'axios';

const SHEET_URL = 'https://spreadsheets.google.com/feeds/list/1sZYXLw4mhtoH0P9w9FB4MXwKRYFDrbWU5rZmyBnavQY/1/public/values?alt=json';

export const fetchMerchantData = async () => {
  try {
    const response = await axios.get(SHEET_URL);
    const entries = response.data.feed.entry;
    
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
    console.error('Error fetching merchant data:', error);
    return [];
  }
};

export const getFilteredMerchants = (merchants, category) => {
  return merchants.filter(merchant => merchant.category === category);
};

export const getAllCategories = (merchants) => {
  return [...new Set(merchants.map(merchant => merchant.category))];
};

export const getSubCategories = (merchants, category) => {
  return [...new Set(merchants.filter(m => m.category === category).map(m => m.subCategory))];
};
