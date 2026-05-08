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

const stationeryProducts: Product[] = [
  { id: '26DI001', name: 'Naughty David Diary', category: 'Diaries', price: 390, quantity: 13 },
  { id: '26DI003', name: 'Brown Paper Diary', category: 'Diaries', price: 190, quantity: 22 },
  { id: '26DI004', name: 'Cat Spiral Diary', category: 'Diaries', price: 300, quantity: 6 },
  { id: '26DI012', name: 'Van Gogh Diary', category: 'Diaries', price: 390, quantity: 50 },
  { id: '26DI013', name: 'Frida Kahlo Diary', category: 'Diaries', price: 390, quantity: 50 },
  { id: '26BK001', name: 'Wooden Bookmark', category: 'Bookmarks', price: 80, quantity: 28 },
  { id: '26PC001', name: 'Pardon Me Postcard', category: 'Postcards', price: 60, quantity: 100 },
  { id: '26PC007', name: 'Shadi Kab Karoge Postcard', category: 'Postcards', price: 60, quantity: 100 },
  { id: '26TB001', name: 'Tote Bag Red', category: 'Tote Bags', price: 300, quantity: 10 },
  { id: '26TB002', name: 'Tote Bag Black', category: 'Tote Bags', price: 210, quantity: 9 },
  { id: '26TB003', name: 'Tote Bag White', category: 'Tote Bags', price: 300, quantity: 8 },
];

const categories = ['All', 'Diaries', 'Bookmarks', 'Postcards', 'Tote Bags'];

const StationeryPage: React.FC = () => {
  const [selected, setSelected] = React.useState('All');
  const { addToCart } = useCart();

  const filtered = selected === 'All' ? stationeryProducts : stationeryProducts.filter(p => p.category === selected);

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
      <div className="py-20 px-6 text-center" style={{ backgroundColor: '#59D5E0' }}>
        <p className="text-sm font-medium uppercase tracking-widest mb-3 text-white">Write, carry, send</p>
        <h1 className="text-5xl font-serif mb-4 text-white">Stationery</h1>
        <p className="text-white text-lg max-w-2xl mx-auto">
          Diaries to pour your heart into, bookmarks to mark your place, postcards to share love and tote bags to carry it all.
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
                backgroundColor: selected === cat ? '#59D5E0' : '#f3f4f6',
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
                    style={{ backgroundColor: '#59D5E0' }}
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

export default StationeryPage;