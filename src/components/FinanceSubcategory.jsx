import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { financeData } from '../data/financeData';

const FinanceSubcategory = ({ category }) => {
  const categoryData = financeData.filter(item => item.CATEGORY === category.name);
  const subcategories = [...new Set(categoryData.map(item => item.COMPANY))];

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">{category.name}</h3>
      {subcategories.map(subcategory => (
        <div key={subcategory} className="mb-6">
          <h4 className="text-xl font-medium mb-3">{subcategory}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryData
              .filter(item => item.COMPANY === subcategory)
              .map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{item.PRODUCT}</CardTitle>
                    <CardDescription>{item.COMPANY}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p><strong>Commission:</strong> {item.COMMISSION}</p>
                    <p><strong>Conditions:</strong> {item.CONDITIONS}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <a href={item.LINK} target="_blank" rel="noopener noreferrer">Apply Now</a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FinanceSubcategory;