import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-2">Lowest price: ${product.lowestPrice.toFixed(2)}</p>
          <Badge className="mb-2" variant="secondary">
            {product.cashback}% Cashback
          </Badge>
          <p className="text-gray-500 text-sm mt-2">Category: {product.category}</p>
        </div>
        <div className="mt-4 space-y-2">
          {product.links.map((link, index) => (
            <a 
              key={index}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <ExternalLink className="mr-2" size={16} />
              View on {link.platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;