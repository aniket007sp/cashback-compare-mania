import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ForeignBrandsExplorer = () => {
  const [brands, setBrands] = useState([]);
  const [filteredBrands, setFilteredBrands] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState('All');

  const categories = [
    'All', 'Arms & Ammunition', 'Baby & Kids', 'Electronics', 'Extras', 'Fashion',
    'Flowers & Gift', 'Food & Grocery', 'Health & Beauty', 'Home & Kitchen',
    'Jewellery', 'Pets', 'Services', 'STORE', 'Travel'
  ];

  const countries = ['All', 'UK', 'US', 'Spain', 'France', 'Germany'];

  useEffect(() => {
    fetchBrands();
  }, []);

  useEffect(() => {
    filterBrands();
  }, [selectedCategory, selectedCountry, brands]);

  const fetchBrands = async () => {
    const sheetID = '1n7J-hOmK5CWRGGVmqN-wfK3XRISFIkJ0hqsfwVmrd90';
    const url = `https://docs.google.com/spreadsheets/d/${sheetID}/export?format=csv`;

    try {
      const response = await fetch(url);
      const text = await response.text();
      const rows = text.split('\n').map(row => row.split(','));
      rows.shift(); // Remove header row
      setBrands(rows);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filterBrands = () => {
    const filtered = brands.filter(brand => {
      const matchesCategory = selectedCategory === 'All' || brand[0] === selectedCategory;
      const matchesCountry = selectedCountry === 'All' || brand[1] === selectedCountry;
      return matchesCategory && matchesCountry;
    });
    setFilteredBrands(filtered);
  };

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Explore Foreign Brands</h2>
      <div className="flex space-x-4 mb-4">
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedCountry} onValueChange={setSelectedCountry}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Country" />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country} value={country}>{country}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredBrands.map((brand, index) => (
          <Card key={index} className="flex flex-col">
            <CardContent className="flex-grow">
              <h3 className="text-lg font-semibold mb-2">{brand[2]}</h3>
              <p className="text-sm text-gray-600">Category: {brand[0]}</p>
              <p className="text-sm text-gray-600">Country: {brand[1]}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <a href={brand[3]} target="_blank" rel="noopener noreferrer">Visit Brand</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ForeignBrandsExplorer;