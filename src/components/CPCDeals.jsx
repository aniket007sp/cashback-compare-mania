import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CPCDeals = () => {
  const [deals, setDeals] = useState({});

  useEffect(() => {
    fetchSheetData();
  }, []);

  async function fetchSheetData() {
    const sheetID = '1n7J-hOmK5CWRGGVmqN-wfK3XRISFIkJ0hqsfwVmrd90';
    const url = `https://docs.google.com/spreadsheets/d/${sheetID}/export?format=csv&gid=1`;
    try {
      const response = await fetch(url);
      const text = await response.text();
      const rows = text.split('\n').map(row => row.split(','));
      rows.shift(); // Remove header row
      const processedDeals = processDeals(rows);
      setDeals(processedDeals);
    } catch (error) {
      console.error('Error fetching sheet data:', error);
    }
  }

  function processDeals(rows) {
    const processedDeals = {};
    rows.forEach(row => {
      const [category, brand, offer, link] = row;
      if (!processedDeals[category]) {
        processedDeals[category] = [];
      }
      processedDeals[category].push({ brand, offer, link });
    });
    return processedDeals;
  }

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">CPC Deals</h2>
      <Accordion type="single" collapsible className="w-full">
        {Object.entries(deals).map(([category, categoryDeals]) => (
          <AccordionItem key={category} value={category}>
            <AccordionTrigger>{category}</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryDeals.map((deal, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <h3 className="font-semibold">{deal.brand}</h3>
                      <p className="text-sm mt-2">{deal.offer}</p>
                      <a 
                        href={deal.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline mt-2 inline-block"
                      >
                        View Deal
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default CPCDeals;