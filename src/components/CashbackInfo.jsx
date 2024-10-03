import React from 'react';
import { Percent } from 'lucide-react';

const CashbackInfo = () => {
  return (
    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-8 rounded">
      <div className="flex items-center">
        <Percent className="mr-2" />
        <p className="font-semibold">Earn Cashback on Every Purchase!</p>
      </div>
      <p className="mt-2">Shop through our platform and get up to 10% cashback on your purchases. Terms and conditions apply.</p>
    </div>
  );
};

export default CashbackInfo;