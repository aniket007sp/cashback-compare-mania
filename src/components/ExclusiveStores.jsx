import React, { useState, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Info } from "lucide-react";
import stores from "@/data/latest/Stores.json";

const ExclusiveStores = () => {
  const [selectedStore, setSelectedStore] = useState(null);
  const scrollContainerRef = useRef(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full px-2 py-4 animate-fade-in">
      <h2 className="text-base sm:text-lg md:text-xl text-white font-semibold mb-3 bg-[crimson] w-full py-2 text-center animate-scale-in">
        Exclusive Stores
      </h2>

      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-scroll scrollbar-none space-x-3 py-2"
        >
          {stores.map((store, index) => (
            <div
              key={store.COMPANY}
              className="flex-shrink-0 w-40 sm:w-45 md:w-50 flex flex-col items-center p-3 bg-white rounded-lg shadow-lg hover:shadow-[0_0_8px_5px_rgba(200,156,217,0.6)] transition-transform duration-300 hover:scale-105"
              style={{
                animation: `fade-in 0.5s ease-out ${index * 0.1}s`,
                opacity: 0,
                animationFillMode: "forwards",
              }}
              onClick={() => setSelectedStore(store)}
            >
              <div className="flex items-center justify-center mb-2">
                <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-md">
                  <img
                    src={store["LOGO LINK"]}
                    alt={store.COMPANY}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <h3 className="text-xs sm:text-sm font-medium text-center mb-1 truncate w-full">
                {store.COMPANY}
              </h3>

              <p className="text-xs sm:text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded-md flex justify-center items-center gap-1 w-full truncate">
                <span className="whitespace-nowrap">Cash Reward:</span>
                <span className="font-semibold truncate">{store.Reward}</span>
              </p>

              <button
                className="mt-2 text-xs sm:text-sm bg-[crimson] text-white py-1 px-3 rounded-md hover:bg-gray-400 hover:text-black transition w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(store.LINK, "_blank", "noopener,noreferrer");
                }}
              >
                Go to Store
              </button>

              <button
                className="mt-1 text-xs sm:text-sm text-blue-600 flex items-center justify-center gap-1 w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedStore(store);
                }}
              >
                <Info className="w-4 h-4 sm:w-5 sm:h-5" />
                Terms & Conditions
              </button>
            </div>
          ))}
        </div>

        <div
          className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer"
          onClick={scrollRight}
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[crimson] rounded-full flex items-center justify-center animate-blink">
            <div className="text-gray-200 text-xl">&rarr;</div>
          </div>
        </div>
      </div>

      <Dialog open={!!selectedStore} onOpenChange={() => setSelectedStore(null)}>
        <DialogContent className="max-w-lg p-4">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl font-bold text-gray-800">
              {selectedStore?.COMPANY}
            </DialogTitle>
          </DialogHeader>

          <div className="mt-4 space-y-4">
            <div className="flex items-center gap-x-2">
              <h4 className="text-sm text-gray-800">Cash Reward:</h4>
              <p className="text-sm font-semibold text-gray-800">{selectedStore?.Reward}</p>
            </div>

            <div className="flex items-center gap-x-2">
              <h4 className="text-sm text-gray-800">Payout in </h4>
              <p className="text-sm font-semibold text-gray-800">
                {selectedStore?.["PAYMENT IN"]} days
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-800 mb-2">Terms & Conditions</h4>
              <div className="h-48 overflow-y-auto bg-gray-100 p-3 rounded-md shadow-inner">
                <p
                  className="text-sm text-gray-700 whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: selectedStore?.["T&C"] }}
                ></p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => setSelectedStore(null)}
                className="w-full sm:w-1/2 py-2 text-black hover:bg-gray-400 rounded text-sm"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setSelectedStore(null);
                  window.open(selectedStore?.LINK, "_blank", "noopener,noreferrer");
                }}
                className="text-white bg-[crimson] w-full sm:w-1/2 py-2 hover:bg-gray-400 hover:text-black rounded text-sm"
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
