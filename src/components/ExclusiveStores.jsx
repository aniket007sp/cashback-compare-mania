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
          className="flex overflow-x-auto scrollbar-none gap-4 py-3 px-2"
        >
          {stores.map((store, index) => (
            <div
              key={store.COMPANY}
              className="flex-shrink-0 w-44 sm:w-48 md:w-56 flex flex-col items-center p-4 bg-white rounded-xl shadow-lg hover:shadow-[0_0_10px_4px_rgba(200,156,217,0.6)] transition-transform duration-300 hover:scale-105"
              style={{
                animation: `fade-in 0.5s ease-out ${index * 0.1}s`,
                opacity: 0,
                animationFillMode: "forwards",
              }}
              onClick={() => setSelectedStore(store)}
            >
              <div className="flex items-center justify-center mb-3">
                <div className="w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-md">
                  <img
                    src={store["LOGO LINK"]}
                    alt={store.COMPANY}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <h3 className="text-sm sm:text-base font-semibold text-center mb-2 truncate w-full">
                {store.COMPANY}
              </h3>

              <p className="text-xs sm:text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-md flex justify-center items-center gap-2 w-full truncate">
                <span className="whitespace-nowrap">Cash Reward:</span>
                <span className="font-semibold">{store.Reward}</span>
              </p>

              <button
                className="mt-3 text-sm bg-[crimson] text-white py-2 px-4 rounded-md hover:bg-gray-500 hover:text-white transition w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(store.LINK, "_blank", "noopener,noreferrer");
                }}
              >
                Go to Store
              </button>

              <button
                className="mt-2 text-sm text-blue-600 flex items-center justify-center gap-1 w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedStore(store);
                }}
              >
                <Info className="w-5 h-5" />
                Terms & Conditions
              </button>
            </div>
          ))}
        </div>

        <div
          className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer"
          onClick={scrollRight}
        >
          <div className="w-10 h-10 bg-[crimson] rounded-full flex items-center justify-center animate-blink shadow-lg">
            <div className="text-gray-200 text-2xl">&rarr;</div>
          </div>
        </div>
      </div>

      <Dialog open={!!selectedStore} onOpenChange={() => setSelectedStore(null)}>
        <DialogContent className="max-w-lg p-5 rounded-xl shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl font-bold text-gray-800">
              {selectedStore?.COMPANY}
            </DialogTitle>
          </DialogHeader>

          <div className="mt-4 space-y-5">
            <div className="flex items-center gap-x-3">
              <h4 className="text-sm text-gray-800">Cash Reward:</h4>
              <p className="text-sm font-semibold text-gray-800">{selectedStore?.Reward}</p>
            </div>

            <div className="flex items-center gap-x-3">
              <h4 className="text-sm text-gray-800">Payout in </h4>
              <p className="text-sm font-semibold text-gray-800">
                {selectedStore?.["PAYMENT IN"]} days
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-800 mb-3">Terms & Conditions</h4>
              <div className="h-48 overflow-y-auto bg-gray-100 p-4 rounded-md shadow-inner">
                <p
                  className="text-sm text-gray-700 whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: selectedStore?.["T&C"] }}
                ></p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setSelectedStore(null)}
                className="w-full sm:w-1/2 py-2 text-black bg-gray-200 hover:bg-gray-400 rounded-md text-sm"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setSelectedStore(null);
                  window.open(selectedStore?.LINK, "_blank", "noopener,noreferrer");
                }}
                className="text-white bg-[crimson] w-full sm:w-1/2 py-2 hover:bg-gray-500 hover:text-white rounded-md text-sm"
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
