import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Info } from "lucide-react";
import stores from "@/data/stores.json";

const ExclusiveStores = () => {
  const [selectedStore, setSelectedStore] = useState(null);

  return (
    <section className="w-full px-2 py-4">
      <h2 className="text-base sm:text-lg text-white font-semibold mb-3 bg-[crimson] w-full py-1.5 sm:py-2 text-center">
        Exclusive Stores
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3">
        {stores.map((store) => (
          <div
            key={store.company}
            className="flex flex-col items-center p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedStore(store)}
          >
            <div className="flex items-center justify-center mb-2">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-xl">
                <img
                  src={store.logo}
                  alt={store.company}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <h3 className="text-xs sm:text-sm font-medium text-center mb-1">{store.company}</h3>
            <p className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-md flex justify-center items-center gap-1">
              <span className="whitespace-nowrap">Reward:</span>
              <span className="font-semibold truncate">{store.cash_reward}</span>
            </p>

            <button
              className="mt-2 text-xs bg-[crimson] text-white py-1 px-3 rounded-md hover:bg-gray-400 hover:text-black transition w-full"
              onClick={(e) => {
                e.stopPropagation();
                window.open(store.link, "_blank", "noopener,noreferrer");
              }}
            >
              Go to Store
            </button>

            <button
              className="mt-1 text-xs text-blue-600 flex items-center justify-center gap-1 w-full"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedStore(store);
              }}
            >
              <Info className="w-3 h-3" />
              Terms & Conditions
            </button>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedStore} onOpenChange={() => setSelectedStore(null)}>
        <DialogContent className="max-w-lg p-4 sm:p-6">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl font-bold text-gray-800">
              {selectedStore?.company}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-x-2">
              <h4 className="text-sm text-gray-800">Cash Reward:</h4>
              <p className="text-sm font-semibold text-gray-800">
                {selectedStore?.cash_reward}
              </p>
            </div>

            <div className="flex items-center gap-x-2">
              <h4 className="text-sm text-gray-800">Payout in </h4>
              <p className="text-sm font-semibold text-gray-800">
                {selectedStore?.payment_in} days
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-800 mb-2">Terms & Conditions</h4>
              <p className="text-sm text-gray-700 whitespace-pre-wrap">
                {selectedStore?.terms_and_conditions}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <button
                onClick={() => setSelectedStore(null)}
                className="w-full sm:w-1/2 py-2 text-black hover:bg-gray-400 rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setSelectedStore(null);
                  window.open(selectedStore?.link, "_blank", "noopener,noreferrer");
                }}
                className="bg-[crimson] text-white w-full sm:w-1/2 py-2 hover:bg-gray-400 hover:text-black rounded"
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