import { useState } from 'react';
import { Search, User, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Navigation } from './Navigation';
import Cart from './Cart';

// Add font import in your index.css or directly here if needed:
// @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

export function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [isSpinning, setIsSpinning] = useState(false);

  const { totalItems } = useCart();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <header className="container mx-auto px-4 py-6 bg-white shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 mb-6 md:mb-8">
          {/* Search */}
          <div className="order-2 md:order-1 md:w-64 w-full">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-3 border-b border-gray-300 focus:border-gray-900 focus:outline-none transition-colors bg-transparent"
              />
              <Search 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400" 
                size={20} 
              />
            </div>
          </div>

          {/* Logo - Updated with cursive font */}
          <div className="order-1 md:order-2 text-center">
            <Link to="/">
             <div className="flex items-center gap-3 justify-center">
  <img
    src="/images/HTAlogo.png"
    alt="HTA Logo"
    className="w-10 h-10 rounded-full logo-spin"
    style={{transition: 'all 0.3s'}}
  />
  <h1 className="text-2xl md:text-3xl" style={{fontFamily: "'MoglanDemo', serif"}}>
    Happiness Through Art
  </h1>
</div>
            </Link>
          </div>

          {/* Icons - Updated to make the user icon clickable */}
          <div className="order-3 flex items-center justify-end gap-6 md:w-64">
            {/* Replace with direct Link component instead of the dropdown */}
            <Link to="/login" aria-label="Account" className="hover:opacity-75 relative group">
              <User size={24} />
              {/* <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-sm py-2 z-50 hidden group-hover:block pointer-events-auto">
                <Link to="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Login</Link>
                <Link to="/register" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Register</Link>
              </div> */}
            </Link>
            <button aria-label="Shipping" className="hover:opacity-75">
              <Truck size={24} />
            </button>
            <button 
              aria-label="Cart" 
              className="relative p-2 hover:opacity-75"
              onClick={toggleCart}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        <Navigation />
      </header>
      
      {/* Cart Sidebar */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
