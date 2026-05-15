import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useSearchParams } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
}

const allProducts: Product[] = [
  { id: 'HTA-26-AO-001', name: 'Reversed Dog', category: 'Art Originals', price: 1600, quantity: 1 },
  { id: 'HTA-26-AO-002', name: 'Krishan Ji!', category: 'Art Originals', price: 1200, quantity: 1 },
  { id: 'HTA-26-AO-003', name: 'The Beginning', category: 'Art Originals', price: 6000, quantity: 1 },
  { id: 'HTA-26-AO-004', name: '3D Art Whale', category: 'Art Originals', price: 5100, quantity: 1 },
  { id: 'HTA-26-AO-005', name: 'Different Circles', category: 'Art Originals', price: 6500, quantity: 1 },
  { id: 'HTA-26-AO-006', name: 'Just Keep Swimming', category: 'Art Originals', price: 300, quantity: 1 },
  { id: 'HTA-26-AO-007', name: 'Beleaf', category: 'Art Originals', price: 500, quantity: 1 },
  { id: 'HTA-26-AO-008', name: 'Black Dots on Rainbow', category: 'Art Originals', price: 800, quantity: 1 },
  { id: 'HTA-26-AO-009', name: 'Zodiac - Virgo', category: 'Art Originals', price: 350, quantity: 1 },
  { id: 'HTA-26-AO-010', name: 'One Line Rose', category: 'Art Originals', price: 500, quantity: 1 },
  { id: 'HTA-26-AO-011', name: 'The Faces We Keep - Men', category: 'Art Originals', price: 2500, quantity: 2 },
  { id: 'HTA-26-AO-012', name: 'The Faces We Keep - Women', category: 'Art Originals', price: 2500, quantity: 15 },
  { id: 'HTA-26-AP-001', name: 'Zen Art Square Red', category: 'Art Prints', price: 1500, quantity: 7 },
  { id: 'HTA-26-AP-002', name: 'Zen Art Square Blue', category: 'Art Prints', price: 1500, quantity: 6 },
  { id: 'HTA-26-AP-003', name: 'Zen Art Square Off White', category: 'Art Prints', price: 1500, quantity: 11 },
  { id: 'HTA-26-D-001', name: 'Naughty David Diary', category: 'Stationery', price: 390, quantity: 13 },
  { id: 'HTA-26-D-002', name: 'Brown Paper Diary', category: 'Stationery', price: 190, quantity: 22 },
  { id: 'HTA-26-D-003', name: 'Cat Spiral Diary', category: 'Stationery', price: 300, quantity: 6 },
  { id: 'HTA-26-D-004', name: 'Van Gogh Diary', category: 'Stationery', price: 390, quantity: 50 },
  { id: 'HTA-26-D-005', name: 'Frida Kahlo Diary', category: 'Stationery', price: 390, quantity: 50 },
  { id: 'HTA-26-BM-001', name: 'Wooden Bookmark', category: 'Stationery', price: 80, quantity: 28 },
  { id: 'HTA-26-PC-001', name: 'Pardon Me Postcard', category: 'Stationery', price: 60, quantity: 100 },
  { id: 'HTA-26-PC-002', name: 'Shadi Kab Karoge Postcard', category: 'Stationery', price: 60, quantity: 100 },
  { id: 'HTA-26-PC-003', name: 'Coffee Helps Girl Postcard', category: 'Stationery', price: 60, quantity: 100 },
  { id: 'HTA-26-PC-004', name: 'Plan Cancel Girl Postcard', category: 'Stationery', price: 60, quantity: 100 },
  { id: 'HTA-26-PC-005', name: 'Confidence Level Postcard', category: 'Stationery', price: 60, quantity: 100 },
  { id: 'HTA-26-TB-001', name: 'Tote Bag Red', category: 'Tote Bags', price: 300, quantity: 10 },
  { id: 'HTA-26-TB-002', name: 'Tote Bag Black', category: 'Tote Bags', price: 210, quantity: 9 },
  { id: 'HTA-26-TB-003', name: 'Tote Bag White', category: 'Tote Bags', price: 300, quantity: 8 },
  { id: 'HTA-26-TB-004', name: 'Tote Bag Black Big Dog', category: 'Tote Bags', price: 390, quantity: 2 },
  { id: 'HTA-26-DC-001', name: 'Coasters Square Set of 3', category: 'Decor', price: 590, quantity: 2 },
  { id: 'HTA-26-DC-002', name: 'Coasters Round Set of 5', category: 'Decor', price: 950, quantity: 2 },
  { id: 'HTA-26-DC-003', name: 'Coasters Square Set of 4', category: 'Decor', price: 780, quantity: 2 },
  { id: 'HTA-26-DC-004', name: 'Coasters Round Set of 4', category: 'Decor', price: 780, quantity: 7 },
  { id: 'HTA-26-DC-005', name: 'Decoupage Magnets Square', category: 'Decor', price: 140, quantity: 5 },
  { id: 'HTA-26-DC-006', name: 'Decoupage Magnets Round', category: 'Decor', price: 140, quantity: 26 },
  { id: 'HTA-26-DC-007', name: 'Decoupage Magnets Diamond', category: 'Decor', price: 120, quantity: 2 },
  { id: 'HTA-26-JW-001', name: 'Square Necklace', category: 'Jewellery', price: 600, quantity: 1 },
  { id: 'HTA-26-JW-002', name: 'Necklace Style 1', category: 'Jewellery', price: 1000, quantity: 2 },
  { id: 'HTA-26-JW-003', name: 'Necklace Earrings Set 1', category: 'Jewellery', price: 1200, quantity: 2 },
  { id: 'HTA-26-JW-004', name: 'Necklace Earrings Set 2', category: 'Jewellery', price: 1500, quantity: 1 },
  { id: 'HTA-26-JW-005', name: 'Earrings Style 1', category: 'Jewellery', price: 750, quantity: 1 },
  { id: 'HTA-26-JW-006', name: 'Earrings Style 2', category: 'Jewellery', price: 900, quantity: 1 },
  { id: 'HTA-26-JW-007', name: 'Pin Earrings', category: 'Jewellery', price: 500, quantity: 1 },
  { id: 'HTA-26-JW-008', name: 'Girl Beads Bracelet', category: 'Jewellery', price: 200, quantity: 1 },
];

const categories = ['All', 'Art Originals', 'Art Prints', 'Stationery', 'Tote Bags', 'Decor', 'Jewellery'];

const image = 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80';

const ShopPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [selected, setSelected] = useState(searchParams.get('category') || 'All');
  const { addToCart } = useCart();

  const filtered = selected === 'All' ? allProducts : allProducts.filter(p => p.category === selected);

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

  const openWhatsApp = (product: Product) => {
    window.open(`https://wa.me/919877591063?text=Hi Kavya! I want to order ${product.name} (${product.id}) Price: Rs.${product.price}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="py-16 px-6 text-center" style={{backgroundColor: '#F5DD61'}}>
        <h1 className="text-5xl font-serif mb-4">Shop All</h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Handcrafted with love by Kavya Atray
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
                backgroundColor: selected === cat ? '#FF6B35' : '#f3f4f6',
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
              <div key={product.id} className="flex flex-col bg-white rounded-2xl p-4 shadow-sm border">
                <div className="relative aspect-square mb-3 bg-gray-100 overflow-hidden rounded-xl">
                  <img src={image} alt={product.name} className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded-full text-white" style={{backgroundColor: '#59D5E0'}}>
                    {product.id}
                  </span>
                  {isLow && !isOut && (
                    <span className="absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded-full text-white" style={{backgroundColor: '#FF6B35'}}>
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
                <p className="font-bold mb-3" style={{color: '#FAA300'}}>Rs. {product.price}</p>
                {!isOut ? (
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="py-2 rounded-full text-white text-xs font-medium"
                      style={{backgroundColor: '#FAA300'}}
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => openWhatsApp(product)}
                      className="py-2 rounded-full text-white text-xs font-medium"
                      style={{backgroundColor: '#25D366'}}
                    >
                      Buy on WhatsApp
                    </button>
                  </div>
                ) : (
                  <button className="py-2 rounded-full text-white text-xs font-medium bg-gray-400">
                    Out of Stock
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
