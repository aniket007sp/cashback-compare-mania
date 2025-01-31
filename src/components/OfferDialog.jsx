import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const cleanData = (text) => {
  if (!text) return "";
  return text
    .replace(/\\u[\dA-F]{4}/gi, '')
    .replace(/[\r\n]+/g, ' ')
    .replace(/\t+/g, ' ')
    .replace(/[^a-zA-Z0-9\s.,:;%&()/-]/g, '')
    .trim();
};

const formatRange = (action) => {
  if (!action) return '';
  if (action.max_percentage_rate && parseFloat(action.max_percentage_rate) > 0) {
    if (action.min_percentage_rate === action.max_percentage_rate) {
      return `${action.max_percentage_rate}%`;
    }
    return `${action.min_percentage_rate}% - ${action.max_percentage_rate}% off`;
  }
  if (action.max_fixed_rate) {
    return `₹${action.max_fixed_rate}`;
  }
  return '';
};

const OfferDialog = ({ selectedStore, setSelectedStore, termsConditions }) => {
  return (
    <Dialog open={!!selectedStore} onOpenChange={() => setSelectedStore(null)}>
      <DialogContent className="max-w-lg p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-800">
            {selectedStore?.name}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6 space-y-6">
          <div className="space-y-2 flex-1">
            {(selectedStore?.action_ranges || []).map((action, index) => (
              <div key={index} className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-md">
                <span className="text-sm text-gray-800">CashBack: </span>
                <span className="text-sm font-semibold text-gray-800">{action.reward}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-x-2">
            <h4 className="text-sm text-gray-800">Payout in</h4>
            <p className="text-sm font-semibold text-gray-800">
              {selectedStore?.avg_money_transfer_time} days
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
                dangerouslySetInnerHTML={{ __html: selectedStore?.termsConditions }}
              ></p>
            </div>
          </div>

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
                window.open(selectedStore?.gotolink, "_blank", "noopener,noreferrer");
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
};

export default OfferDialog;
