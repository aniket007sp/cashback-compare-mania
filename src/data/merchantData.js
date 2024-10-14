export const merchantData = [
  {
    type: "CPC",
    category: "Service",
    brand: "Shopify",
    earning: "Rs 0.11",
    link: "https://clnk.in/vq9e",
    condition: "-",
    image: "https://cdn0.cuelinks.com/merchant/6213/medium/New_Project_-_2024-04-16T110916.693.png?1713246009"
  },
  {
    type: "CPC",
    category: "Service",
    brand: "Edrawsoft",
    earning: "Rs 0.12",
    link: "https://clnk.in/vq9q",
    condition: "-",
    image: ""
  },
  {
    type: "CPI - Android",
    category: "Demat",
    brand: "Appreciate Wealth",
    earning: "Rs 262.5",
    link: "https://clnk.in/vrD9",
    condition: "Download + Install + Account_Open + Investment",
    image: "https://cdn0.cuelinks.com/merchant/5215/medium/New_Project_-_2023-09-06T134744.768.png?1693988304"
  },
  // ... Add all other merchant data here
];

export const getFilteredMerchants = (category) => {
  return merchantData.filter(merchant => merchant.category === category);
};

export const getAllCategories = () => {
  return [...new Set(merchantData.map(merchant => merchant.category))];
};