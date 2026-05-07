import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

// ✅ Product type
type Product = {
  id: string;
  name: string;
  type: string;
  price: number;
  stock: number;
  inStock: boolean;
  description: string;
  image: string;
  color: {
    name: string;
    hex: string;
  };
  size?: string;
};

const ProductPage: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // ✅ Product object
 const product: Product = {
  id: 'PA001',
  name: 'Reversed Dog',
  type: 'Original Painting',
  price: 1600,
  stock: 5,
  inStock: true,
  description: 'A beautiful original painting...',
  image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80',
  color: {
    name: 'Default',
    hex: '#000000',
  },
  size: 'Standard',
};

  // ✅ Properly encoded WhatsApp link
  const waLink = `https://wa.me/919877591063?text=${encodeURIComponent(
    `Hi Kavya! I want to order: ${product.name} (${product.id}) Price: Rs.${product.price}`
  )}`;

const handleAddToCart = () => {
  if (product.inStock && quantity > 0) {
    addToCart({
      ...product,
      quantity,
      size: 'Standard',
      color: {
        name: 'Default',
        hex: '#000000',
      },
    });
  }
};

  const handleWhatsAppOrder = () => {
    window.open(waLink, '_blank');
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-gray-500">{product.type}</p>
            <p className="text-4xl font-bold text-indigo-600 mt-4">
              ₹{product.price}
            </p>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="font-semibold mb-2">Quantity</h3>
            <div className="flex items-center gap-3">
              <button
                onClick={decrementQuantity}
                className="w-10 h-10 bg-gray-200 rounded-full"
              >
                -
              </button>

              <span className="text-lg font-semibold">{quantity}</span>

              <button
                onClick={incrementQuantity}
                disabled={quantity >= product.stock}
                className="w-10 h-10 bg-gray-200 rounded-full disabled:opacity-50"
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 disabled:bg-gray-400"
            >
              Add to Cart
            </button>

            
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-gray-700">{product.description}</p>
          </div>

          {/* Out of stock */}
          {!product.inStock && (
            <div className="bg-yellow-100 text-yellow-800 p-3 rounded">
              Out of stock
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;