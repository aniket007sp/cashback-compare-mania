import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

const sheetID = '1n7J-hOmK5CWRGGVmqN-wfK3XRISFIkJ0hqsfwVmrd90';
const apiKey = 'AIzaSyC6qgdIotlNPmCnoJvgHl_M4IYJ4ymAZk4';
const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/Sheet1?key=${apiKey}`;

const fetchBrands = async () => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.values.slice(1); // Remove header row
};

const ForeignBrandsExplorer = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [filteredBrands, setFilteredBrands] = useState([]);

  const { data: brands, isLoading, error } = useQuery({
    queryKey: ['brands'],
    queryFn: fetchBrands,
  });

  useEffect(() => {
    if (brands) {
      filterBrands();
    }
  }, [brands, selectedCategory, selectedCountry]);

  const filterBrands = () => {
    const filtered = brands.filter(brand => {
      const matchesCategory = selectedCategory === 'All' || brand[0] === selectedCategory;
      const matchesCountry = selectedCountry === 'All' || brand[1] === selectedCountry;
      return matchesCategory && matchesCountry;
    });
    setFilteredBrands(filtered);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const categories = ['All', 'Arms & Ammunition', 'Baby & Kids', 'Electronics', 'Extras', 'Fashion', 'Flowers & Gift', 'Food & Grocery', 'Health & Beauty', 'Home & Kitchen', 'Jewellery', 'Pets', 'Services', 'STORE', 'Travel'];
  const countries = ['All', 'UK', 'US', 'Spain', 'France', 'Germany'];

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Explore Foreign Brands</h2>
      <div className="flex flex-wrap gap-4 mb-4">
        <Select
          value={selectedCategory}
          onValueChange={setSelectedCategory}
        >
          <Select.Trigger className="w-[180px]">
            <Select.Value placeholder="Select Category" />
          </Select.Trigger>
          <Select.Content>
            {categories.map((category) => (
              <Select.Item key={category} value={category}>
                {category}
              </Select.Item>
            ))}
          </Select.Content>
        </Select>

        <Select
          value={selectedCountry}
          onValueChange={setSelectedCountry}
        >
          <Select.Trigger className="w-[180px]">
            <Select.Value placeholder="Select Country" />
          </Select.Trigger>
          <Select.Content>
            {countries.map((country) => (
              <Select.Item key={country} value={country}>
                {country}
              </Select.Item>
            ))}
          </Select.Content>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredBrands.map((brand, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 flex flex-col">
            <h3 className="text-lg font-semibold mb-2">{brand[2]}</h3>
            <p className="text-sm text-gray-600 mb-1">Category: {brand[0]}</p>
            <p className="text-sm text-gray-600 mb-2">Country: {brand[1]}</p>
            <Button
              variant="outline"
              className="mt-auto"
              asChild
            >
              <a href={brand[3]} target="_blank" rel="noopener noreferrer">Visit Brand</a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForeignBrandsExplorer;