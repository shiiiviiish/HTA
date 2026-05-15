import React, { useState } from 'react';

interface Category {
  id: string;
  name: string;
  image: string;
}

const categories: Category[] = [
  {
    id: 'family',
    name: 'Family & friends',
    image: 'https://www.oddgiraffe.com/cdn/shop/files/1_e8179ff3-154d-4ce6-b912-eab03f8d21e3.jpg?v=1700823851'
  },
  {
    id: 'special',
    name: 'Special ones',
    image: 'https://www.oddgiraffe.com/cdn/shop/files/2_33887223-3348-4db9-ac77-e24d19930274.jpg?v=1700823851'
  },
  {
    id: 'wedding',
    name: 'Wedding day',
    image: 'https://www.oddgiraffe.com/cdn/shop/files/3_61886839-a73a-41c4-bcf6-b723d30789ec.jpg?v=1700823851'
  },
  {
    id: 'travel',
    name: 'Travel & adventure',
    image: 'https://www.oddgiraffe.com/cdn/shop/files/3_61886839-a73a-41c4-bcf6-b723d30789ec.jpg?v=1700823851'
  },
  {
    id: 'memories',
    name: 'Memories',
    image: 'https://www.oddgiraffe.com/cdn/shop/files/5_74bda9f0-1ddf-4f3b-809c-8d726685aff3.jpg?v=1700823851'
  }
];

const PhotoBookCategories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].id);

  // Get the currently selected category image
  const selectedImage = categories.find(cat => cat.id === selectedCategory)?.image || categories[0].image;

  return (
    <div className="bg-blue-50 py-16">
      <div className="text-center mb-10">
        <p className="text-sm text-gray-600 mb-3">Preserve precious memories with</p>
        <h2 className="text-4xl md:text-5xl font-serif">Mini Photobook</h2>
      </div>

      {/* Categories with connecting line */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="flex justify-between items-center relative">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-300 -z-10"></div>
          
          {/* Category buttons */}
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center">
              <button
                className={`w-3 h-3 rounded-full ${
                  selectedCategory === category.id ? 'bg-black' : 'bg-gray-300'
                } mb-4 relative z-10`}
                onClick={() => setSelectedCategory(category.id)}
                aria-label={category.name}
              />
              <span 
                className={`text-xs md:text-sm ${
                  selectedCategory === category.id ? 'font-medium text-black' : 'text-gray-500'
                } text-center`}
              >
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Image display */}
      <div className="max-w-5xl mx-auto p-4">
        <div className="bg-white p-4 md:p-8 shadow-md">
          <img 
            src={selectedImage} 
            alt={`${categories.find(cat => cat.id === selectedCategory)?.name} photo example`}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoBookCategories;
