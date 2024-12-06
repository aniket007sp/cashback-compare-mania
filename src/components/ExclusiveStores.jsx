import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ShoppingBag, Info } from 'lucide-react';

const stores = [
  {
    company: "Croma",
    link: "https://clnk.in/vGfr",
    cash_reward: "1.5 - 3.25%",
    terms_and_conditions: "Home/Kitchen Appliances-3.25%\nLaptops/desktop, Tablets/e-readers, Audio, Accessories (Computer), Accessories (Mobile), Personal Care/Grooming, Wearable & Home/Kitchen Accessories-2.25%\nLarge Appliances (AC, REF, WM etc..), TV/LED, Camera & Gaming-1.5%\nMobile phones (Oneplus, Realme, Redmi & Samsung)-Rs30.0\nMobile phones (Oppo, Vivo & Nokia)-Rs70.00\nMobile phones (Apple iPhones & Other phones)-Rs0.00\nOrders placed through Tata Neu will not be considered for Cash Rewards",
    payment_in: 65
  },
  {
    company: "Daily Objects",
    link: "https://clnk.in/vGfB",
    cash_reward: "Rs 135",
    terms_and_conditions: "On order of Rs.1200 and above\nPayout Not applicable on gift cards/vouchers.\nOrders cancelled before dispatch, customer returns, orders returned to origin and payment pending orders will not be considered as valid purchase.",
    payment_in: 95
  },
  {
    company: "Myntra",
    link: "https://clnk.in/vGry",
    cash_reward: "3.5 - 7%",
    terms_and_conditions: "Payout on New User-7.0%\nPayout on Existing User-3.5%\nPayout on Exchanged Orders-0.00%\n\nNo Cash Reward will be payable when the transaction is done from Internet Explorer.\nCash Reward is not applicable if you pay with Myntra Credits and Gift Cards.\nCash Reward is calculated on order amount excluding what is paid via wallets credits or gift vouchers.",
    payment_in: 65
  },
  {
    company: "Nykaa Beauty",
    link: "https://clnk.in/vGrD",
    cash_reward: "2.5 - 5%",
    terms_and_conditions: "New User-5.00%\nExisting User-2.50%\n\nBulk Buying is not allowed.\nCash Reward only on successfully delivered purchases.\nCash Reward is not applicable if you pay with Nykaa Credits and Gift Cards.\nCash Reward is applicable Thrice per month.",
    payment_in: 65
  },
  {
    company: "Nykaa Fashion",
    link: "https://clnk.in/vGui",
    cash_reward: "2.5 - 5.75%",
    terms_and_conditions: "New User-5.75%\nExisting User-2.50%\nCash Rewards only on successfully delivered purchases.\nCash Reward is not applicable if you pay with Nykaa Credits and Gift Cards.\nCash Rewards on Nykaa App Orders is Not Applicable\nCash Reward is applicable Thrice per unique user per month\nNo Cash Reward for Bulk Transaction",
    payment_in: 95
  },
  {
    company: "Tata Cliq",
    link: "https://clnk.in/vGuC",
    cash_reward: "0 - 2.7%",
    terms_and_conditions: "Apparel, Footwear, Watches, Accessories, HOME, Others-2.70%\nFashion Jewellery-1.50%\nHealth & Grooming, Home Theatre Systems, Sound Bars, Headphones and headsets, Speakers, Health Care, Health Care Devices, Personal Care-1.00%\nFads & Gadgets, Mobile Accessories, Activity Tracker-0.75%\nFine Jewellery-0.10%\nAll Other Electronics, Beauty-0.00%\n\nBulk orders are not allowed.\nNo Cash Rewards on all purchases where user has used Citi bank coupon code.\nWe will not be paying any Cash Reward on coupon code- VICLIQ5.\nWe will not be paying any Cash Reward on coupon code- VICLIQ10.",
    payment_in: 95
  },
  {
    company: "BuyKaro",
    link: "https://clnk.in/vGuW",
    cash_reward: "5.50%",
    terms_and_conditions: "Bulk buying is not allowed.",
    payment_in: 80
  }
];

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
            <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-3">
              <ShoppingBag className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="text-sm font-medium text-center mb-2">{store.company}</h3>
            <p className="text-xs text-green-600 font-semibold">{store.cash_reward}</p>
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