import React, { useState, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Info } from "lucide-react";
import stores from "@/data/latest/Stores.json";

const ExclusiveStores = () => {
  const [selectedStore, setSelectedStore] = useState(null);
  const scrollContainerRef = useRef(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full px-4 py-5 animate-fade-in">
      <h2 className="text-lg sm:text-xl md:text-2xl text-white font-semibold mb-4 bg-[crimson] w-full py-3 text-center rounded-lg shadow-md">
        Exclusive Stores
      </h2>

      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-none gap-3 py-3 px-2"
        >
          {stores.map((store, index) => (
            <div
              key={store.COMPANY}
              className="flex-shrink-0 w-36 sm:w-40 md:w-48 flex flex-col items-center p-3 bg-white rounded-xl shadow-lg hover:shadow-[0_0_10px_4px_rgba(200,156,217,0.6)] transition-transform duration-300 hover:scale-105"
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
                    className="w-full h-full object-contain p-1"
                  />
                </div>
              </div>

              <h3 className="text-xs sm:text-sm font-semibold text-center mb-2 truncate w-full px-1">
                {store.COMPANY}
              </h3>

              <div className="w-full bg-gray-200 grid grid-cols-2 gap-1 items-center mb-2">
                <p className="text-xs text-gray-700 text-right pr-1">Cash Reward:</p>
                <p className="text-xs font-semibold text-gray-800 truncate">{store.Reward}</p>
              </div>

              <button
                className="mt-2 text-xs sm:text-sm bg-[crimson] text-white py-1.5 px-3 rounded-md hover:bg-gray-500 hover:text-white transition w-full truncate"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(store.LINK, "_blank", "noopener,noreferrer");
                }}
              >
                Go to Store
              </button>

              <button
                className="mt-1.5 text-xs text-blue-600 flex items-center justify-center gap-1 w-full hover:text-blue-800"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedStore(store);
                }}
              >
                <Info className="w-4 h-4" />
                <span className="truncate">Terms & Conditions</span>
              </button>
            </div>
          ))}
        </div>

        <div
          className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer"
          onClick={scrollRight}
        >
          <div className="w-8 h-8 bg-[crimson] rounded-full flex items-center justify-center animate-blink shadow-lg">
            <div className="text-gray-200 text-xl">&rarr;</div>
          </div>
        </div>
      </div>

      <Dialog open={!!selectedStore} onOpenChange={() => setSelectedStore(null)}>
        <DialogContent className="max-w-md p-4 rounded-xl shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-base sm:text-lg font-bold text-gray-800">
              {selectedStore?.COMPANY}
            </DialogTitle>
          </DialogHeader>

          <div className="mt-3 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-x-2">
                <h4 className="text-xs sm:text-sm text-gray-800">Cash Reward:</h4>
                <p className="text-xs sm:text-sm font-semibold text-gray-800">{selectedStore?.Reward}</p>
              </div>
              
              <div className="flex items-center gap-x-2">
                <h4 className="text-xs sm:text-sm text-gray-800">Payout in:</h4>
                <p className="text-xs sm:text-sm font-semibold text-gray-800">
                  {selectedStore?.["PAYMENT IN"]} days
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-medium text-gray-800 mb-2">Terms & Conditions</h4>
              <div className="h-40 overflow-y-auto bg-gray-100 p-3 rounded-md shadow-inner text-xs sm:text-sm">
                <p
                  className="text-gray-700 whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: selectedStore?.["T&C"] }}
                ></p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => setSelectedStore(null)}
                className="w-full sm:w-1/2 py-1.5 text-black bg-gray-200 hover:bg-gray-400 rounded-md text-xs sm:text-sm"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setSelectedStore(null);
                  window.open(selectedStore?.LINK, "_blank", "noopener,noreferrer");
                }}
                className="text-white bg-[crimson] w-full sm:w-1/2 py-1.5 hover:bg-gray-500 rounded-md text-xs sm:text-sm"
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
