import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function SaleBanner() {
  const [saleIndex, setSaleIndex] = useState(0);

  const saleMessages = [
    "Art that heals — explore Kavya's original works!",
    "Paintings, bookmarks and more — shop now!",
    "Book a therapy session with Kavya Atray",
    "Join our WhatsApp Community for latest updates!"
  ];

  const nextSale = () => {
    setSaleIndex((prev) => (prev + 1) % saleMessages.length);
  };

  const prevSale = () => {
    setSaleIndex((prev) => (prev - 1 + saleMessages.length) % saleMessages.length);
  };

  return (
    <div style={{backgroundColor: '#F4538A'}} className="py-2 px-4 flex items-center justify-center relative">
      <button onClick={prevSale} className="absolute left-4 text-white hover:opacity-75">
        <ChevronLeft size={20} />
      </button>
      <p className="text-center font-medium text-white">
        {saleMessages[saleIndex]}
      </p>
      <button onClick={nextSale} className="absolute right-4 text-white hover:opacity-75">
        <ChevronRight size={20} />
      </button>
    </div>
  );
}