import React from 'react';

const ProductFeatures: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1: Thoughtful, personal, lasting */}
        <div className="text-center">
          <div className="mb-8">
            <img 
              src="https://www.oddgiraffe.com/cdn/shop/files/tiny-1.jpg?v=1714194661" 
              alt="Photobook with 'LOVE YOU MUM' text" 
              className="mx-auto w-full rounded-md"
            />
          </div>
          <h3 className="text-xl font-medium mb-4">Thoughtful, personal, lasting</h3>
          <p className="text-gray-600">
            Each journal is made with premium 100gsm paper with highest quality 3mm thick hardback cover along with 170gsm silk-paper finish
          </p>
        </div>

        {/* Column 2: Sustainable products & delivery */}
        <div className="text-center">
          <div className="mb-8">
            <img 
              src="https://www.oddgiraffe.com/cdn/shop/files/tinyy-12.jpg?v=1714212739" 
              alt="People exchanging a yellow package" 
              className="mx-auto w-full rounded-md"
            />
          </div>
          <h3 className="text-xl font-medium mb-4">Sustainable products & delivery</h3>
          <p className="text-gray-600">
            All our products & packaging materials are made specially for you upon order to avoid wastage with wood-free or FSC Certified paper
          </p>
        </div>

        {/* Column 3: Perfect size */}
        <div className="text-center">
          <div className="mb-8">
            <img 
              src="https://www.oddgiraffe.com/cdn/shop/files/w4.webp?v=1689049488" 
              alt="Person holding a product on stairs" 
              className="mx-auto w-full rounded-md"
            />
          </div>
          <h3 className="text-xl font-medium mb-4">Perfect size</h3>
          <p className="text-gray-600">
            Our planners are sized perfectly to be comfortable for carrying around while having enough space for all your plans and thoughts
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
