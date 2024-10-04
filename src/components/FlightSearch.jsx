import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/date-picker";

const FlightSearch = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departDate, setDepartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  const handleSearch = () => {
    console.log('Searching for flights:', { from, to, departDate, returnDate });
    // Implement flight search logic here
  };

  return (
    <div className="bg-white p-4 shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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

export default FlightSearch;