import React from 'react';

interface ExploreGiftCardProps {
  title: string;
  imageUrl: string;
  link: string;
}

const ExploreGiftCard: React.FC<ExploreGiftCardProps> = ({ title, imageUrl, link }) => {
  return (
    <div className="flex flex-col">
      <a href={link} className="group">
        <div className="aspect-square bg-gray-100 mb-5">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover rounded-sm"
          />
        </div>
        <h3 className="text-2xl font-serif mb-1">{title}</h3>
      </a>
    </div>
  );
}

export default ExploreGiftCard;
