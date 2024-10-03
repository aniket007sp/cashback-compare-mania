import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">Lowest price: ${product.lowestPrice.toFixed(2)}</p>
        <p className="text-blue-600 font-semibold mb-4">From: {product.platform}</p>
        <a 
          href={product.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          <ExternalLink className="mr-2" />
          View on {product.platform}
        </a>
      </div>
    </div>
  );
};

export default ProductCard;