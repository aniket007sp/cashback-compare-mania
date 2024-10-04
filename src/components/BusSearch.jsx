import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/date-picker";

const BusSearch = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState(null);

  const handleSearch = () => {
    console.log('Searching for buses:', { from, to, date });
    // Implement bus search logic here
  };

  return (
    <div className="bg-white p-4 shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
          placeholder="Travel Date"
          selected={date}
          onSelect={setDate}
        />
      </div>
      <Button className="mt-4 w-full" onClick={handleSearch}>
        Search Buses
      </Button>
    </div>
  );
};

export default BusSearch;