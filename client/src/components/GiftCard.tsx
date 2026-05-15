import React from 'react';

interface GiftCardProps {
  imageUrl: string;
  priceRange: string;
  buttonText: string;
}

const GiftCard: React.FC<GiftCardProps> = ({ imageUrl, priceRange, buttonText }) => {
  return (
    <div className="relative group overflow-hidden rounded-xl">
      <div className="aspect-[4/5] w-full">
        <img 
          src={imageUrl} 
          alt={`Gifts ${priceRange}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-full shadow-lg transition-all duration-300 transform group-hover:scale-105">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default GiftCard
