import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function SaleBanner() {
  const [saleIndex, setSaleIndex] = useState(0);
  const saleMessages = [
    "✨ Art that heals — explore Kavya's original works!",
    "🎨 Paintings, bookmarks & more — shop now!",
    "💆 Book a therapy session with Kavya Atray"
  ];
  const nextSale = () => {
    setSaleIndex((prev) => (prev + 1) % saleMessages.length);
  };
  const prevSale = () => {
    setSaleIndex((prev) => (prev - 1 + saleMessages.length) % saleMessages.length);
  };
  return (
    <div className="py-2 px-4 flex items-center justify-center relative" style={{backgroundColor: '#F4538A'}}>
      <button 
        onClick={prevSale}
        className="absolute left-4 hover:opacity-75 text-white"
        aria-label="Previous message"
      >
        <ChevronLeft size={20} />
      </button>
      <p className="text-center font-medium text-white">{saleMessages[saleIndex]}</p>
      <button 
        onClick={nextSale}
        className="absolute right-4 hover:opacity-75 text-white"
        aria-label="Next message"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}