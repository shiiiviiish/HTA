import React from 'react';

interface CollaborationCardProps {
  title: string;
  imageUrl: string;
  description: string;
}

const CollaborationCard: React.FC<CollaborationCardProps> = ({ title, imageUrl, description }) => {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-2xl aspect-[4/3] mb-6">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <h3 className="text-3xl font-serif mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default CollaborationCard
