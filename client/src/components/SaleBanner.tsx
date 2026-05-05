import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function SaleBanner() {
  const [saleIndex, setSaleIndex] = useState(0);

  const messages = [
    { text: "Art that heals — explore Kavya's original works!", link: "/" },
    { text: "Paintings, bookmarks and more — shop now!", link: "/" },
    { text: "Book a therapy session with Kavya Atray", link: "https://wa.me/919877591063" },
    { text: "Join our WhatsApp Community!", link: "https://chat.whatsapp.com/D8qg0QhCRucCtESVUs9PTk" }
  ];

  const next = () => setSaleIndex((prev) => (prev + 1) % messages.length);
  const prev = () => setSaleIndex((prev) => (prev - 1 + messages.length) % messages.length);

  return (
    <div style={{backgroundColor: '#F4538A'}} className="py-2 px-4 flex items-center justify-center relative">
      <button onClick={prev} className="absolute left-4 text-white">
        <ChevronLeft size={20} />
      </button>
      <a href={messages[saleIndex].link} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:underline text-center">
        {messages[saleIndex].text}
      </a>
      <button onClick={next} className="absolute right-4 text-white">
        <ChevronRight size={20} />
      </button>
    </div>
  );
}