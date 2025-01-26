import React, { useState, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Info } from "lucide-react";
import stores from "@/data/latest/Stores.json";

const ExclusiveStores = () => {
  const [selectedStore, setSelectedStore] = useState(null);
  const scrollContainerRef = useRef(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full px-1 sm:px-2 py-2 sm:py-4 animate-fade-in">
      <h2 className="text-sm sm:text-base md:text-lg text-white font-semibold mb-2 sm:mb-3 bg-[crimson] w-full py-1 sm:py-1.5 text-center animate-scale-in">
        Exclusive Stores
      </h2>

      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-scroll scrollbar-none space-x-2 py-2"
        >
          {stores.map((store, index) => (
            <div
              key={store.COMPANY}
              className="flex-shrink-0 w-30 sm:w-30 md:w-40 flex flex-col items-center p-1 sm:p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              style={{
                animation: `fade-in 0.5s ease-out ${index * 0.1}s`,
                opacity: 0,
                animationFillMode: 'forwards'
              }}
              onClick={() => setSelectedStore(store)}
            >
              <div className="flex items-center justify-center mb-1 sm:mb-2">
                <div className="w-8 h-8 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-xl">
                  <img
                    src={store["LOGO LINK"]}
                    alt={store.COMPANY}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <h3 className="text-[10px] sm:text-xs md:text-sm font-medium text-center mb-0.5 sm:mb-1">
                {store.COMPANY}
              </h3>
              <p className="text-[10px] sm:text-xs text-gray-700 bg-gray-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded-md flex justify-center items-center gap-0.5 sm:gap-1">
                <span className="whitespace-nowrap">Reward:</span>
                <span className="font-semibold truncate">{store.Reward}</span>
              </p>

              <button
                className="mt-1 sm:mt-2 text-[10px] sm:text-xs bg-[crimson] text-white py-0.5 sm:py-1 px-2 sm:px-3 rounded-md hover:bg-gray-400 hover:text-black transition w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(store.LINK, "_blank", "noopener,noreferrer");
                }}
              >
                Go to Store
              </button>

              <button
                className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-blue-600 flex items-center justify-center gap-0.5 sm:gap-1 w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedStore(store);
                }}
              >
                <Info className="w-2 h-2 sm:w-3 sm:h-3" />
                Terms & Conditions
              </button>
            </div>
          ))}
        </div>
        <div
          className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer"
          onClick={scrollRight}
        >
          <div className="w-5 h-5 md:w-10 md:h-10 bg-[crimson] rounded-full flex items-center justify-center animate-blink">
            <div className="text-gray-200 text-xl">&rarr;</div>
          </div>
        </div>
      </div>

      <Dialog open={!!selectedStore} onOpenChange={() => setSelectedStore(null)}>
        <DialogContent className="max-w-lg p-2 sm:p-4 md:p-6">
          <DialogHeader>
            <DialogTitle className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
              {selectedStore?.COMPANY}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-2 sm:mt-4 md:mt-6 space-y-2 sm:space-y-4 md:space-y-6">
            <div className="flex items-center gap-x-2">
              <h4 className="text-xs sm:text-sm text-gray-800">Cash Reward:</h4>
              <p className="text-xs sm:text-sm font-semibold text-gray-800">
                {selectedStore?.Reward}
              </p>
            </div>

            <div className="flex items-center gap-x-2">
              <h4 className="text-xs sm:text-sm text-gray-800">Payout in </h4>
              <p className="text-xs sm:text-sm font-semibold text-gray-800">
                {selectedStore?.["PAYMENT IN"]} days
              </p>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-medium text-gray-800 mb-1 sm:mb-2">Terms & Conditions</h4>
              <div
                className="h-48 overflow-y-auto bg-gray-100 p-3 rounded-md shadow-inner"
                style={{ maxHeight: "12rem" }}
              >
                <p
                  className="text-[10px] sm:text-xs md:text-sm text-gray-700 whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: selectedStore?.["T&C"] }}
                ></p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 md:gap-4">
              <button
                onClick={() => setSelectedStore(null)}
                className="w-full sm:w-1/2 py-1 sm:py-2 text-black hover:bg-gray-400 rounded text-xs sm:text-sm"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setSelectedStore(null);
                  window.open(selectedStore?.LINK, "_blank", "noopener,noreferrer");
                }}
                className="text-white bg-[crimson] w-full sm:w-1/2 py-1 sm:py-2 hover:bg-gray-400 hover:text-black rounded text-xs sm:text-sm"
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
