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
            {/* Store Logo */}
            <div className="flex items-center justify-center mb-4">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-xl">
                <img
                  src={store.logo}
                  alt={store.company}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Store Name and Reward */}
            <h3 className="text-sm font-medium text-center mb-2">{store.company}</h3>
            <p className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-md flex justify-center items-center gap-1">
              <span className="font-medium whitespace-nowrap">Reward:</span>
              <span className="font-light truncate">{store.cash_reward}</span>
            </p>

            {/* Visit Store Button */}
            <button
              className="mt-2 text-xs bg-[crimson] text-white py-1 px-3 rounded-md hover:bg-gray-400 hover:text-black transition"
              onClick={(e) => {
                e.stopPropagation(); // Prevent card click
                window.open(store.link, "_blank", "noopener,noreferrer");
              }}
            >
              Go to Store
            </button>

            {/* Terms & Conditions */}
            <button
              className="mt-2 text-xs text-blue-600 flex items-center gap-1"
              onClick={(e) => {
                e.stopPropagation(); // Prevent card click
                setSelectedStore(store);
              }}
            >
              <Info className="w-3 h-3" />
              Terms & Conditions
            </button>
          </div>
        ))}
      </div>

      {/* Dialog for Store Details */}
      <Dialog open={!!selectedStore} onOpenChange={() => setSelectedStore(null)}>
        <DialogContent className="max-w-lg p-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-800">
              {selectedStore?.company}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-6 space-y-6">
            {/* Cash Reward Section */}
            <div className="flex items-center gap-x-2">
              <h4 className="text-sm font-medium text-gray-600">Cash Reward:</h4>
              <p className="text-sm font-semibold text-gray-600">
                {selectedStore?.cash_reward}
              </p>
            </div>

      
            {/* Payment Time Section */}
             <div className="flex items-center gap-x-2">
              <h4 className="text-sm font-medium text-gray-600">Payout in </h4>
              <p className="text-sm text-gray-600">
                {selectedStore?.payment_in} days
              </p>
            </div>
      
            {/* Terms & Conditions Section */}
            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-2">Terms & Conditions</h4>
              <p className="text-sm text-gray-700 whitespace-pre-wrap">
                {selectedStore?.terms_and_conditions}
              </p>
            </div>
      
            {/* Visit Store Button */}
            <div className="flex justify-between">
              <button
                onClick={() => setSelectedStore(null)}
                className="w-1/2 mr-2 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setSelectedStore(null);
                  window.open(selectedStore?.link, "_blank", "noopener,noreferrer");
                }}
                className="w-1/2 py-2 bg-[crimson] text-white rounded-md hover:bg-gray-400 hover:text-black"
              >
                Go to Store
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

    </section>
  );
};

export default ExclusiveStores;
