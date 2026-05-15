import React from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}
      
      {/* Cart sidebar */}
      <div 
        className={`fixed top-0 right-0 w-full sm:w-96 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
      >
        {/* Cart header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-medium">Your Cart ({totalItems} items)</h2>
          <button 
            onClick={onClose}
            className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-sm"
          >
            Close
          </button>
        </div>
        
        {/* Cart content */}
        <div className="flex-grow overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-gray-500 mb-8">Your cart is empty</p>
              <Link 
                to="/"
                onClick={onClose}
                className="bg-black text-white px-6 py-4 hover:bg-gray-800 transition-colors"
              >
                Start shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div key={index} className="flex border-b border-gray-200 pb-4">
                  <div className="w-20 h-20 bg-gray-100 mr-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{item.name}</h3>
                      <button 
                        onClick={() => removeFromCart(item.id, item.color.hex, item.size || '')}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <p className="text-gray-500 text-sm">{item.type}</p>
                    <p className="text-sm">Size: {item.size}</p>
                    <div className="flex items-center mt-2">
                      <div 
                        className="w-4 h-4 rounded-full mr-2"
                        style={{ backgroundColor: item.color.hex }}
                      />
                      <span className="text-sm">{item.color.name}</span>
                    </div>
                    
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex items-center border border-gray-300">
                        <button 
                          className="px-2 py-1"
                          onClick={() => updateQuantity(
                            item.id, 
                            item.color.hex, 
                            item.size || '', 
                            Math.max(1, item.quantity - 1)
                          )}
                        >
                          -
                        </button>
                        <span className="px-3">{item.quantity}</span>
                        <button 
                          className="px-2 py-1"
                          onClick={() => updateQuantity(
                            item.id, 
                            item.color.hex, 
                            item.size || '', 
                            item.quantity + 1
                          )}
                        >
                          +
                        </button>
                      </div>
                      <span className="font-medium">Rs. {(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Cart footer with checkout */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t border-gray-200">
            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span className="font-medium">Rs. {totalPrice.toLocaleString()}</span>
            </div>
            <Link 
              to="/checkout"
              onClick={onClose}
              className="block w-full bg-black text-white text-center py-4 hover:bg-gray-800 transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
