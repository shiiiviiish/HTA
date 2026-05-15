import React from 'react';
import { useCart } from '../context/CartContext';

const image = 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  kavyaNote: string;
}

const giftProducts: Product[] = [
  { id: 'HTA-26-D-004', name: 'Van Gogh Diary', category: 'Diaries', price: 390, quantity: 50, kavyaNote: 'Perfect for the friend who loves to journal and appreciates art!' },
  { id: 'HTA-26-D-005', name: 'Frida Kahlo Diary', category: 'Diaries', price: 390, quantity: 50, kavyaNote: 'For the bold, expressive soul in your life.' },
  { id: 'HTA-26-BM-001', name: 'Wooden Bookmark', category: 'Bookmarks', price: 80, quantity: 28, kavyaNote: 'A small but meaningful gift for every book lover.' },
  { id: 'HTA-26-TB-001', name: 'Tote Bag Red', category: 'Tote Bags', price: 300, quantity: 10,  kavyaNote: 'A bold statement piece for the friend who isn’t afraid to stand out!.'  },
  { id: 'HTA-26-TB-002', name: 'Tote Bag Black', category: 'Tote Bags', price: 210, quantity: 9,  kavyaNote: 'A timeless classic that stays chic, no matter where the day takes you!.'  },
  { id: 'HTA-26-TB-003', name: 'Tote Bag White', category: 'Tote Bags', price: 300, quantity: 8, kavyaNote: 'A clean, minimalist canvas for your brightest ideas and daily essentials!.' },
  { id: 'HTA-26-DC-001', name: 'Coasters Square Set of 3', category: 'Coasters', price: 590, quantity: 2, kavyaNote: 'A practical gift with an artistic touch for any home.' },
  { id: 'HTA-26-DC-006', name: 'Decoupage Magnets Round', category: 'Decoupage', price: 140, quantity: 26, kavyaNote: 'Tiny art pieces that bring joy every time you open the fridge!' },
  { id: 'HTA-26-PC-001', name: 'Pardon Me Postcard', category: 'Postcards', price: 60, quantity: 100, kavyaNote: 'Say it with art. The perfect little note to send someone you love.' },
  { id: 'HTA-26-AO-031', name: 'Just Keep Swimming', category: 'Mini Paintings', price: 300, quantity: 1, kavyaNote: 'A reminder to keep going — gift this to someone who needs a little push.' },
];

const GiftsPage: React.FC = () => {
  const { addToCart } = useCart();

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

      <div className="py-20 px-6 text-center" style={{ backgroundColor: '#FAA300' }}>
        <p className="text-sm font-medium uppercase tracking-widest mb-3 text-white">Curated with love</p>
        <h1 className="text-5xl font-serif mb-4 text-white">If Kavya could gift you anything...</h1>
        <p className="text-white text-lg max-w-2xl mx-auto">
          These are the pieces closest to my heart. Each one comes with a little note from me on why I think it would make the perfect gift.
        </p>
      </div>

      <div className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {giftProducts.map(product => {
            const isOut = product.quantity === 0;
            return (
              <div key={product.id} className="flex flex-col bg-white rounded-2xl shadow-sm border hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-56 bg-gray-100">
                  <img src={image} alt={product.name} className="w-full h-full object-cover" />
                  {isOut && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-bold">Out of Stock</span>
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs text-gray-400 mb-1">{product.category}</p>
                  <h3 className="font-semibold text-base mb-2">{product.name}</h3>
                  <div className="bg-yellow-50 rounded-xl p-3 mb-4 flex gap-2">
                    <span className="text-lg">💛</span>
                    <p className="text-sm text-gray-600 italic">{product.kavyaNote}</p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <p className="font-bold text-lg" style={{ color: '#FAA300' }}>Rs. {product.price}</p>
                    {!isOut ? (
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="py-2 px-5 rounded-full text-white text-sm font-medium"
                        style={{ backgroundColor: '#FAA300' }}
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <button className="py-2 px-5 rounded-full text-white text-sm font-medium bg-gray-400">Out of Stock</button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="py-16 px-6 text-center" style={{ backgroundColor: '#F4538A' }}>
        <h2 className="text-3xl font-serif mb-4 text-white">Want something custom?</h2>
        <p className="text-white mb-8 max-w-xl mx-auto">
          Kavya can create personalised gift sets and custom orders for birthdays, anniversaries and special occasions!
        </p>
        <a
          href="https://wa.me/919877591063?text=Heyyyyyyy Kavvyaaaaaa! I want to order a custom gift!"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-full font-medium text-white"
          style={{ backgroundColor: '#25D366' }}
        >
          Message Kavya on WhatsApp
        </a>
      </div>

    </div>
  );
};

export default GiftsPage;
