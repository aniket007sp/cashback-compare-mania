import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const ProductCard = ({ product }) => {
  if (!product) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-2">Lowest price: ${product.lowestPrice.toFixed(2)}</p>
          {product.category && (
            <p className="text-gray-500 text-sm mt-2">Category: {product.category}</p>
          )}
        </div>
        {product.links && product.links.length > 0 && (
          <div className="mt-4 space-y-2">
            {product.links.map((link, index) => (
              <div key={index} className="flex flex-col items-center">
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <img src={`/images/logos/${link.platform.toLowerCase()}.svg`} alt={link.platform} className="w-4 h-4 mr-2" />
                  View on {link.platform}
                </a>
                {link.cashback && (
                  <Badge className="mt-1" variant="secondary">
                    {link.cashback}% Cashback
                  </Badge>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;