import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const OfferDialog = ({ selectedStore, setSelectedStore }) => {
  return (
    <Dialog open={!!selectedStore} onOpenChange={() => setSelectedStore(null)}>
      <DialogContent className="max-w-lg p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-800">
            {selectedStore?.COMPANY}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6 space-y-6">
          {/* Reward Section */}
          <div className="space-y-2 flex-1">
            <div className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-md">
              <span className="text-sm text-gray-800">Reward: </span>
              <span className="text-sm font-semibold text-gray-800">{selectedStore?.Reward}</span>
            </div>
          </div>

          {/* Payout Section */}
          <div className="flex items-center gap-x-2">
            <h4 className="text-sm text-gray-800">Payout in</h4>
            <p className="text-sm font-semibold text-gray-800">
              {selectedStore?.["PAYMENT IN"]} days
            </p>
          </div>

          {/* Terms & Conditions Section */}
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

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              onClick={() => setSelectedStore(null)}
              className="w-1/2 py-2 text-black hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setSelectedStore(null);
                window.open(selectedStore?.LINK, "_blank", "noopener,noreferrer");
              }}
              className="bg-[crimson] text-white w-1/2 py-2 hover:bg-gray-400 hover:text-black"
            >
              Visit Store
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OfferDialog;
