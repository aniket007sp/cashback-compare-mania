import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const confirmOrder = ({ isOpen, onClose }) => {
  const googleFormLink = "https://forms.gle/Ag57FdWGnsuWAsP56"; // Replace with your actual form link

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Order Confirmation</DialogTitle>
        </DialogHeader>
        <div className="text-center">
          <p className="mb-4 text-gray-700">
            Click the button below to submit your order confirmation through our Google Form.
          </p>
          <Button
            as="a"
            href={googleFormLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Open Order Confirmation Form
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default confirmOrder;
