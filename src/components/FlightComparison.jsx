import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/date-picker";

const FlightComparison = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departDate, setDepartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  const handleSearch = () => {
    // TODO: Implement flight search functionality
    console.log('Searching for flights:', { from, to, departDate, returnDate });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-semibold mb-4">Flight Comparison</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Input
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <Input
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <DatePicker
          placeholder="Depart Date"
          selected={departDate}
          onSelect={setDepartDate}
        />
        <DatePicker
          placeholder="Return Date"
          selected={returnDate}
          onSelect={setReturnDate}
        />
      </div>
      <Button className="mt-4 w-full" onClick={handleSearch}>
        Search Flights
      </Button>
    </div>
  );
};

export default FlightComparison;