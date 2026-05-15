import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <div className="relative h-[400px] w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-200 mb-4">{description}</p>
          <a
            href={link}
            className="inline-flex items-center text-sm font-medium text-white hover:underline"
          >
            Shop Now <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard
