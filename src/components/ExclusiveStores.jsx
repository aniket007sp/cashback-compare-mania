import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Info } from "lucide-react";
import stores from "@/data/stores.json"; // Adjust the path to the location of your JSON file

const ExclusiveStores = () => {
  const [selectedStore, setSelectedStore] = useState(null);

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-xl text-white font-semibold mb-6 sm:text-2xl bg-[crimson] w-full py-2 text-center">
        Exclusive Stores
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {stores.map((store) => (
          <div
            key={store.company}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedStore(store)}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden shadow-sm">
                <img
                  src={store.logo}
                  alt={store.company}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <h3 className="text-sm font-medium text-center mb-2">{store.company}</h3>
            <p className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-md flex justify-center items-center gap-1">
              <span className="font-medium whitespace-nowrap">Reward:</span>
              <span className="font-light truncate">{store.cash_reward}</span>
            </p>
            <button 
              className="mt-2 text-xs text-blue-600 flex items-center gap-1"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedStore(store);
              }}
            >
              <Info className="w-3 h-3" />
              Details
            </button>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedStore} onOpenChange={() => setSelectedStore(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{selectedStore?.company}</DialogTitle>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-semibold text-sm mb-1">Cash Reward</h4>
              <p className="text-sm text-green-600">{selectedStore?.cash_reward}</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-1">Payment Time</h4>
              <p className="text-sm">{selectedStore?.payment_in} days</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-1">Terms & Conditions</h4>
              <p className="text-sm whitespace-pre-wrap">{selectedStore?.terms_and_conditions}</p>
            </div>
            <div className="pt-4">
              <a
                href={selectedStore?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Visit Store
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ExclusiveStores;
