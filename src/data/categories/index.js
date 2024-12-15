import fashion from './fashion.json';
import electronics from './electronics.json';
import health from './health.json';
import home from './home.json';
import financial from './financial.json';
import travel from './travel.json';
import kids from './kids.json';
import media from './media.json';

export const categories = [
  fashion,
  electronics,
  health,
  home,
  financial,
  travel,
  kids,
  media
];

export const getCategoryByName = (categoryName) => {
  return categories.find(cat => cat.category.toLowerCase() === categoryName.toLowerCase());
};

export const getSubcategoryByName = (categoryName, subcategoryName) => {
  const category = getCategoryByName(categoryName);
  if (!category) return null;
  
  const subcategories = category.subcategories;
  return Object.entries(subcategories).find(([name]) => 
    name.toLowerCase() === subcategoryName.toLowerCase()
  );
};