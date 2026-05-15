import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface Product {
  id: string;
  name: string;
  type: string;
  price: number;
  inStock: boolean;
  quantity: number;
}

const products: Product[] = [
  { id: 'HTA-26-AO-002', name: 'Krishan Ji!', type: 'Original Painting', price: 1200, inStock: true, quantity: 1 },
  { id: 'HTA-26-AO-064', name: 'The Faces We Keep', type: 'Women Series', price: 2500, inStock: true, quantity: 15 },
  { id: 'HTA-26-AP-001', name: 'Zen Art Square', type: 'Art Print', price: 1500, inStock: true, quantity: 7 },
  { id: 'HTA-26-DC-002', name: 'Round Coasters', type: 'Set of 5', price: 950, inStock: true, quantity: 2 },
];

const image = 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&q=80';

const ProductCard = ({ product }: { product: Product }) => {
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
      <Link to={`/product/${product.id}`}>
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
        <h3 className="text-lg font-medium text-center">{product.name}</h3>
        <p className="text-gray-500 text-sm text-center mb-1">{product.type}</p>
        <p className="font-bold text-center mb-3" style={{color: '#FAA300'}}>Rs. {product.price}</p>
      </Link>
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

export function ProductRow() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}

export default ProductRow;
