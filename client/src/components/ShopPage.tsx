import React, { useState } from 'react';

// Define Product interface for TypeScript
interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
}

const allProducts: Product[] = [
  { id: '26PA001', name: 'Reversed Dog', category: 'Paintings', price: 1600, quantity: 1 },
  { id: '26PA002', name: 'Krishan Ji!', category: 'Paintings', price: 1200, quantity: 1 },
  { id: '26PA003', name: 'The Beginning', category: 'Paintings', price: 6000, quantity: 1 },
  { id: '26PA009', name: '3D Art Whale', category: 'Paintings', price: 5100, quantity: 1 },
  { id: '26PA013', name: 'Different Circles', category: 'Paintings', price: 6500, quantity: 1 },
  { id: '26MP001', name: 'Just Keep Swimming', category: 'Mini Paintings', price: 300, quantity: 1 },
  { id: '26MP007', name: 'Beleaf', category: 'Mini Paintings', price: 500, quantity: 1 },
  { id: '26MP014', name: 'Black Dots on Rainbow', category: 'Mini Paintings', price: 800, quantity: 1 },
  { id: '26MP017', name: 'Zodiac - Virgo', category: 'Mini Paintings', price: 350, quantity: 1 },
  { id: '26MP023', name: 'One Line Rose', category: 'Mini Paintings', price: 500, quantity: 1 },
  { id: '26TF001', name: 'The Faces We Keep - Men', category: 'Paintings', price: 2500, quantity: 2 },
  { id: '26TF003', name: 'The Faces We Keep - Women', category: 'Paintings', price: 2500, quantity: 15 },
  { id: '26DI001', name: 'Naughty David Diary', category: 'Diaries', price: 390, quantity: 13 },
  { id: '26DI003', name: 'Brown Paper Diary', category: 'Diaries', price: 190, quantity: 22 },
  { id: '26DI004', name: 'Cat Spiral Diary', category: 'Diaries', price: 300, quantity: 6 },
  { id: '26DI012', name: 'Van Gogh Diary', category: 'Diaries', price: 390, quantity: 50 },
  { id: '26DI013', name: 'Frida Kahlo Diary', category: 'Diaries', price: 390, quantity: 50 },
  { id: '26BK001', name: 'Wooden Bookmark', category: 'Bookmarks', price: 80, quantity: 28 },
  { id: '26TB001', name: 'Tote Bag Red', category: 'Tote Bags', price: 300, quantity: 10 },
  { id: '26TB002', name: 'Tote Bag Black', category: 'Tote Bags', price: 210, quantity: 9 },
  { id: '26TB003', name: 'Tote Bag White', category: 'Tote Bags', price: 300, quantity: 8 },
  { id: '26ZA001', name: 'Zen Art Square Red', category: 'Art Prints', price: 1500, quantity: 7 },
  { id: '26ZA002', name: 'Zen Art Square Blue', category: 'Art Prints', price: 1500, quantity: 6 },
  { id: '26CO001', name: 'Coasters Square Set of 3', category: 'Coasters', price: 590, quantity: 2 },
  { id: '26CO002', name: 'Coasters Round Set of 5', category: 'Coasters', price: 950, quantity: 2 },
  { id: '26DC002', name: 'Decoupage Magnets Square', category: 'Decoupage', price: 140, quantity: 5 },
  { id: '26DC003', name: 'Decoupage Magnets Round', category: 'Decoupage', price: 140, quantity: 26 },
  { id: '26PC001', name: 'Pardon Me Postcard', category: 'Postcards', price: 60, quantity: 100 },
  { id: '26PC007', name: 'Shadi Kab Karoge Postcard', category: 'Postcards', price: 60, quantity: 100 },
  { id: '26JW001', name: 'Square Necklace', category: 'Jewellery', price: 600, quantity: 1 },
  { id: '26JW004', name: 'Necklace Earrings Set', category: 'Jewellery', price: 1200, quantity: 2 },
  { id: '26JW007', name: 'Earrings Style 1', category: 'Jewellery', price: 750, quantity: 1 },
];

const categories = ['All', 'Paintings', 'Mini Paintings', 'Diaries', 'Bookmarks', 'Tote Bags', 'Art Prints', 'Coasters', 'Decoupage', 'Postcards', 'Jewellery'];

const image = 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80';

const ShopPage: React.FC = () => {
  const [selected, setSelected] = useState('All');

  const filtered = selected === 'All' ? allProducts : allProducts.filter(p => p.category === selected);

  return (
    <div className="min-h-screen bg-white">
      <div className="py-16 px-6 text-center" style={{backgroundColor: '#F5DD61'}}>
        <h1 className="text-5xl md:text-6xl font-serif mb-4 drop-shadow-lg">🖼️ Shop All</h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
          Handcrafted with ❤️ by Kavya Atray
        </p>
      </div>

      <div className="py-8 px-4">
        <div className="flex gap-3 justify-center flex-wrap max-w-6xl mx-auto px-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md ${
                selected === cat 
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-pink-500/25' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-12 max-w-7xl mx-auto">
        <p className="text-gray-500 text-sm md:text-base mb-8 text-center">
          Showing <span className="font-semibold text-gray-900">{filtered.length}</span> products
        </p>
        
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">😢</div>
            <h3 className="text-2xl font-semibold mb-2">No products found</h3>
            <p className="text-gray-500 mb-6">Try selecting a different category</p>
            <button
              onClick={() => setSelected('All')}
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Show All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filtered.map(product => {
              const waLink = `https://wa.me/919877591063?text=Hi Kavya! I want to order: ${product.name} (${product.id}) Price: Rs.${product.price}`;
              const isLowStock = product.quantity <= 2 && product.quantity > 0;
              const isOutOfStock = product.quantity === 0;
              
              return (
                <div key={product.id} className="group flex flex-col bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border hover:border-pink-200">
                  <div className="relative aspect-square mb-4 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden rounded-xl group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300" 
                    />
                    <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full text-white shadow-lg" 
                          style={{backgroundColor: '#59D5E0'}}>
                      {product.id}
                    </span>
                    
                    {isLowStock && (
                      <span className="absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full text-white shadow-lg animate-pulse" 
                            style={{backgroundColor: '#F4538A'}}>
                        Only {product.quantity} left!
                      </span>
                    )}
                    
                    {isOutOfStock && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex items-center justify-center rounded-xl">
                        <span className="text-white font-bold text-lg bg-black/50 px-4 py-2 rounded-full">Sold Out</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{product.category}</p>
                    <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-3 line-clamp-2 leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-2xl font-bold mb-4" style={{color: '#FAA300'}}>
                      ₹{product.price.toLocaleString()}
                    </p>
                  </div>
                  
                  {!isOutOfStock ? (
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-xl text-white text-sm font-semibold text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2"
                      style={{backgroundColor: '#25D366'}}
                    >
                      <span>🛒</span>
                      Buy on WhatsApp
                    </a>
                  ) : (
                    <button 
                      disabled
                      className="py-3 px-4 rounded-xl text-white text-sm font-semibold bg-gray-400 cursor-not-allowed shadow-lg"
                    >
                      Sold Out
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;