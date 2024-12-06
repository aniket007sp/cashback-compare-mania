import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import stores from '@/data/stores.json'; // Adjust the path to the location of your JSON file
import { Info } from 'lucide-react';

const ExclusiveStores = () => {
  const [selectedStore, setSelectedStore] = useState(null);

  const openModal = (store) => {
    setSelectedStore(store);
  };

  const closeModal = () => {
    setSelectedStore(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl text-[crimson] font-bold text-center mb-6">
          Exclusive Stores
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {stores.map((store) => (
            <Card
              key={store.company}
              className="w-full sm:w-[48%] lg:w-[23%] bg-white overflow-hidden shadow-md rounded-md flex flex-col justify-between"
            >
              <CardContent className="p-4 flex flex-col h-full">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden shadow-sm">
                    <img
                      src={store.logo}
                      alt={store.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <h3 className="font-bold text-base text-center text-gray-800 mb-3">
                  {store.company}
                </h3>

                <p className="text-sm text-green-600 text-center mb-2">
                  {store.cash_reward}
                </p>

                <Button
                  className="bg-[crimson] text-white mt-4 w-full py-2 text-sm rounded-md hover:bg-gray-400 hover:text-black"
                  onClick={() => openModal(store)}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedStore && (
        <Dialog open={!!selectedStore} onOpenChange={closeModal}>
          <DialogContent className="max-w-md bg-white rounded-md shadow-lg">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-center">
                {selectedStore.company}
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-1">Cash Reward</h4>
                <p className="text-sm text-green-600">{selectedStore.cash_reward}</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">Payment Time</h4>
                <p className="text-sm">{selectedStore.payment_in} days</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">Terms & Conditions</h4>
                <p className="text-sm text-gray-700 whitespace-pre-wrap">
                  {selectedStore.terms_and_conditions}
                </p>
              </div>
              <div className="pt-4">
                <a
                  href={selectedStore.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[crimson] text-white px-4 py-2 rounded-md hover:bg-gray-400 hover:text-black"
                >
                  Visit Store
                </a>
              </div>
              <div className="pt-2">
                <Button
                  variant="ghost"
                  onClick={closeModal}
                  className="w-full bg-gray-300 hover:bg-gray-400"
                >
                  Close
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ExclusiveStores;
