import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const MallList = () => {
  const [city, setCity] = useState('');
  const [malls, setMalls] = useState([]);

  // This is a mock function to simulate fetching malls data
  const fetchMalls = (city) => {
    // In a real application, this would be an API call
    const mockMalls = [
      { id: 1, name: "City Center Mall", address: "123 Main St", rating: 4.5 },
      { id: 2, name: "Riverside Shopping Complex", address: "456 River Rd", rating: 4.2 },
      { id: 3, name: "Downtown Plaza", address: "789 Central Ave", rating: 4.7 },
      { id: 4, name: "Suburban Galleria", address: "101 Outer Ring Rd", rating: 4.0 },
    ];
    
    // Simulate API delay
    setTimeout(() => {
      setMalls(mockMalls);
    }, 500);
  };

  const handleSearch = () => {
    if (city.trim()) {
      fetchMalls(city);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Find Malls in Your City</h1>
      <div className="flex space-x-2 mb-8">
        <Input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-grow"
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      {malls.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {malls.map((mall) => (
            <Card key={mall.id}>
              <CardHeader>
                <CardTitle>{mall.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">{mall.address}</p>
                <p className="text-sm font-semibold">Rating: {mall.rating}/5</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No malls found. Try searching for a city.</p>
      )}
    </div>
  );
};

export default MallList;