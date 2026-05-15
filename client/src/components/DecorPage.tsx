import React from 'react';
import { useCart } from '../context/CartContext';

const image = 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
}

const decorProducts: Product[] = [
  { id: 'HTA-26-DC-001', name: 'Coasters Square Set of 3', category: 'Coasters', price: 590, quantity: 2 },
  { id: 'HTA-26-DC-002', name: 'Coasters Round Set of 5', category: 'Coasters', price: 950, quantity: 2 },
  { id: 'HTA-26-DC-005', name: 'Decoupage Magnets Square', category: 'Decoupage', price: 140, quantity: 5 },
  { id: 'HTA-26-DC-006', name: 'Decoupage Magnets Round', category: 'Decoupage', price: 140, quantity: 26 },
  { id: 'HTA-26-JW-001', name: 'Square Necklace', category: 'Jewellery', price: 600, quantity: 1 },
  { id: 'HTA-26-JW-003', name: 'Necklace Earrings Set', category: 'Jewellery', price: 1200, quantity: 2 },
  { id: 'HTA-26-JW-005', name: 'Earrings Style 1', category: 'Jewellery', price: 750, quantity: 1 },
];

const categories = ['All', 'Coasters', 'Decoupage', 'Jewellery'];

const DecorPage: React.FC = () => {
  const [selected, setSelected] = React.useState('All');
  const { addToCart } = useCart();

  const filtered = selected === 'All' ? decorProducts : decorProducts.filter(p => p.category === selected);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      type: product.category,
      price: product.price,
      image: image,
      color: { name: 'Default', hex: '#000000' },
      quantity: 1,
      size: 'Standard'
    });
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="py-20 px-6 text-center" style={{ backgroundColor: '#F4538A' }}>
        <p className="text-sm font-medium uppercase tracking-widest mb-3 text-white">For your space</p>
        <h1 className="text-5xl font-serif mb-4 text-white">Decor</h1>
        <p className="text-white text-lg max-w-2xl mx-auto">
          Bring art into your everyday life. Coasters, magnets, jewellery and more — each piece handcrafted with Kavya's signature touch.
        </p>
      </div>

      <div className="py-8 px-4">
        <div className="flex gap-3 justify-center flex-wrap max-w-6xl mx-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                backgroundColor: selected === cat ? '#F4538A' : '#f3f4f6',
                color: selected === cat ? 'white' : '#374151'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-8 max-w-7xl mx-auto">
        <p className="text-gray-500 text-sm mb-6 text-center">{filtered.length} products</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map(product => {
            const isLow = product.quantity <= 2;
            const isOut = product.quantity === 0;
            return (
              <div key={product.id} className="flex flex-col bg-white rounded-2xl p-4 shadow-sm border hover:shadow-lg transition-all">
                <div className="relative aspect-square mb-3 bg-gray-100 overflow-hidden rounded-xl">
                  <img src={image} alt={product.name} className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded-full text-white" style={{ backgroundColor: '#59D5E0' }}>
                    {product.id}
                  </span>
                  {isLow && !isOut && (
                    <span className="absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded-full text-white" style={{ backgroundColor: '#F4538A' }}>
                      Only {product.quantity} left!
                    </span>
                  )}
                  {isOut && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl">
                      <span className="text-white font-bold">Out of Stock</span>
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-400 mb-1">{product.category}</p>
                <h3 className="font-medium text-sm mb-1">{product.name}</h3>
                <p className="font-bold mb-3" style={{ color: '#FAA300' }}>Rs. {product.price}</p>
                {!isOut ? (
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="py-2 rounded-full text-white text-xs font-medium"
                    style={{ backgroundColor: '#F4538A' }}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <button className="py-2 rounded-full text-white text-xs font-medium bg-gray-400">Out of Stock</button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DecorPage;
