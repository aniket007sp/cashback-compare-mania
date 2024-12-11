import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const StoreCard = ({ store, onCardClick, onVisitClick }) => (
  <div
    className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
    onClick={() => onCardClick(store)}
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
        onVisitClick(store.link);
      }}
    >
      Go to Store
    </button>
  </div>
);

const StoreDialog = ({ store, onClose }) => (
  <Dialog open={!!store} onOpenChange={onClose}>
    <DialogContent className="max-w-lg p-6">
      <DialogHeader>
        <DialogTitle className="text-xl font-bold text-gray-800">
          {store?.company}
        </DialogTitle>
      </DialogHeader>
      <div className="mt-6 space-y-6">
        {/* Cash Reward Section */}
        <div className="flex items-center gap-x-2">
          <h4 className="text-sm text-gray-800">Cash Reward:</h4>
          <p className="text-sm font-semibold text-gray-800">
            {store?.cash_reward}
          </p>
        </div>

        {/* Payment Time Section */}
        <div className="flex items-center gap-x-2">
          <h4 className="text-sm text-gray-800">Payout in:</h4>
          <p className="text-sm font-semibold text-gray-800">
            {store?.payment_in} days
          </p>
        </div>

        {/* Terms & Conditions Section */}
        <div>
          <h4 className="text-sm font-medium text-gray-800 mb-2">Terms & Conditions</h4>
          <p className="text-sm text-gray-700 whitespace-pre-wrap">
            {store?.terms_and_conditions}
          </p>
        </div>

        {/* Visit Store Button */}
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="w-1/2 py-2 text-black hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onClose();
              window.open(store?.link, "_blank", "noopener,noreferrer");
            }}
            className="bg-[crimson] text-white w-1/2 py-2 hover:bg-gray-400 hover:text-black"
          >
            Go to Store
          </button>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

const StoresGrid = ({ stores, onStoreClick, onVisitClick }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
    {stores.map((store) => (
      <StoreCard
        key={store.company}
        store={store}
        onCardClick={onStoreClick}
        onVisitClick={onVisitClick}
      />
    ))}
  </div>
);

const ExclusiveStores = ({ stores }) => {
  const [selectedStore, setSelectedStore] = useState(null);

  const handleStoreClick = (store) => setSelectedStore(store);
  const handleVisitClick = (link) => window.open(link, "_blank", "noopener,noreferrer");

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-xl text-white font-semibold mb-6 sm:text-2xl bg-[crimson] w-full py-2 text-center">
        Exclusive Stores
      </h2>

      <StoresGrid
        stores={stores}
        onStoreClick={handleStoreClick}
        onVisitClick={handleVisitClick}
      />

      <StoreDialog store={selectedStore} onClose={() => setSelectedStore(null)} />
    </section>
  );
};

export default ExclusiveStores;
