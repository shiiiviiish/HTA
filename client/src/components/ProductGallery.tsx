import React from 'react';
import { useCart } from '../context/CartContext';

const products = [
  { id: 'HTA-26-AO-001', name: 'Reversed Dog', type: 'Original Painting', price: 1600, inStock: true, quantity: 1, featured: true },
  { id: 'HTA-26-AO-031', name: 'Just Keep Swimming', type: 'Mini Painting', price: 300, inStock: true, quantity: 1, featured: false },
  { id: 'HTA-26-D-004', name: 'Van Gogh Diary', type: 'Diary', price: 390, inStock: true, quantity: 50, featured: false },
  { id: 'HTA-26-BM-001', name: 'Wooden Bookmark', type: 'Bookmark', price: 80, inStock: true, quantity: 28, featured: false },
  { id: 'HTA-26-JW-003', name: 'Necklace and Earrings Set', type: 'Jewellery', price: 1200, inStock: true, quantity: 2, featured: false },
];

const image = 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80';

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      type: product.type,
      price: product.price,
      image: image,
      color: { name: 'Default', hex: '#000000' },
      quantity: 1,
      size: 'Standard'
    });
    alert(`${product.name} added to cart!`);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/919877591063?text=Hi Kavya! I want to order: ${product.name} (${product.id}) Price: Rs.${product.price}`, '_blank');
  };

  return (
    <div className="flex flex-col">
      <div className="relative aspect-square mb-4 bg-gray-100 overflow-hidden rounded-xl">
        <img src={image} alt={product.name} className="w-full h-full object-cover" />
        <span className="absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full text-white" style={{backgroundColor: '#59D5E0'}}>
          {product.id}
        </span>
        {product.quantity <= 2 && (
          <span className="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-full text-white" style={{backgroundColor: '#F4538A'}}>
            Only {product.quantity} left!
          </span>
        )}
      </div>
      <h3 className="text-lg font-medium">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-1">{product.type}</p>
      <p className="font-bold mb-3" style={{color: '#FAA300'}}>Rs. {product.price}</p>
      <div className="flex flex-col gap-2">
        <button
          onClick={handleAddToCart}
          className="py-2 rounded-full text-white text-sm font-medium text-center"
          style={{backgroundColor: '#FAA300'}}
        >
          Add to Cart
        </button>
       
      </div>
    </div>
  );
};

export function ProductGallery() {
  const featured = products.find(p => p.featured);
  const rest = products.filter(p => !p.featured).slice(0, 4);
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-serif mb-8">Art that speaks to you</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {featured && (
          <div className="md:w-1/2">
            <ProductCard product={featured} />
          </div>
        )}
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          {rest.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
}
