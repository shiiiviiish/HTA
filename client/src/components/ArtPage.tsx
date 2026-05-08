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

const artProducts: Product[] = [
  { id: '26PA001', name: 'Reversed Dog', category: 'Paintings', price: 1600, quantity: 1 },
  { id: '26PA002', name: 'Krishan Ji!', category: 'Paintings', price: 1200, quantity: 1 },
  { id: '26PA003', name: 'The Beginning', category: 'Paintings', price: 6000, quantity: 1 },
  { id: '26PA009', name: '3D Art Whale', category: 'Paintings', price: 5100, quantity: 1 },
  { id: '26PA013', name: 'Different Circles', category: 'Paintings', price: 6500, quantity: 1 },
  { id: '26TF001', name: 'The Faces We Keep - Men', category: 'Paintings', price: 2500, quantity: 2 },
  { id: '26TF003', name: 'The Faces We Keep - Women', category: 'Paintings', price: 2500, quantity: 15 },
  { id: '26MP001', name: 'Just Keep Swimming', category: 'Mini Paintings', price: 300, quantity: 1 },
  { id: '26MP007', name: 'Beleaf', category: 'Mini Paintings', price: 500, quantity: 1 },
  { id: '26MP014', name: 'Black Dots on Rainbow', category: 'Mini Paintings', price: 800, quantity: 1 },
  { id: '26MP017', name: 'Zodiac - Virgo', category: 'Mini Paintings', price: 350, quantity: 1 },
  { id: '26MP023', name: 'One Line Rose', category: 'Mini Paintings', price: 500, quantity: 1 },
  { id: '26ZA001', name: 'Zen Art Square Red', category: 'Art Prints', price: 1500, quantity: 7 },
  { id: '26ZA002', name: 'Zen Art Square Blue', category: 'Art Prints', price: 1500, quantity: 6 },
];

const categories = ['All', 'Paintings', 'Mini Paintings', 'Art Prints'];

const ArtPage: React.FC = () => {
  const [selected, setSelected] = React.useState('All');
  const { addToCart } = useCart();

  const filtered = selected === 'All' ? artProducts : artProducts.filter(p => p.category === selected);

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
      <div className="py-20 px-6 text-center" style={{ backgroundColor: '#F5DD61' }}>
        <p className="text-sm font-medium uppercase tracking-widest mb-3 text-gray-600">Original Works</p>
        <h1 className="text-5xl font-serif mb-4">Art</h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Every piece is painted by hand with love and intention. From large statement paintings to tiny mini canvases — art for every space and soul.
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
                backgroundColor: selected === cat ? '#F5DD61' : '#f3f4f6',
                color: selected === cat ? '#374151' : '#374151'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-8 max-w-7xl mx-auto">
        <p className="text-gray-500 text-sm mb-6 text-center">{filtered.length} pieces</p>
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
                    style={{ backgroundColor: '#F5DD61', color: '#374151' }}
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

export default ArtPage;