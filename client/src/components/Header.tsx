import { useState, useEffect, useRef } from 'react';
import { Search, User, Truck, LogOut, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Navigation } from './Navigation';
import Cart from './Cart';
import { supabase } from '../lib/supabase';

const allProducts = [
  { id: 'HTA-26-AO-001', name: 'Reversed Dog', category: 'Art Originals', price: 1600 },
  { id: 'HTA-26-AO-002', name: 'Krishan Ji!', category: 'Art Originals', price: 1200 },
  { id: 'HTA-26-AO-003', name: 'The Beginning', category: 'Art Originals', price: 6000 },
  { id: 'HTA-26-AO-004', name: '3D Art Whale', category: 'Art Originals', price: 5100 },
  { id: 'HTA-26-AO-005', name: 'Different Circles', category: 'Art Originals', price: 6500 },
  { id: 'HTA-26-AO-006', name: 'Just Keep Swimming', category: 'Art Originals', price: 300 },
  { id: 'HTA-26-AO-007', name: 'Beleaf', category: 'Art Originals', price: 500 },
  { id: 'HTA-26-AO-008', name: 'Black Dots on Rainbow', category: 'Art Originals', price: 800 },
  { id: 'HTA-26-AO-009', name: 'Zodiac - Virgo', category: 'Art Originals', price: 350 },
  { id: 'HTA-26-AO-010', name: 'One Line Rose', category: 'Art Originals', price: 500 },
  { id: 'HTA-26-AO-011', name: 'The Faces We Keep - Men', category: 'Art Originals', price: 2500 },
  { id: 'HTA-26-AO-012', name: 'The Faces We Keep - Women', category: 'Art Originals', price: 2500 },
  { id: 'HTA-26-AP-001', name: 'Zen Art Square Red', category: 'Art Prints', price: 1500 },
  { id: 'HTA-26-AP-002', name: 'Zen Art Square Blue', category: 'Art Prints', price: 1500 },
  { id: 'HTA-26-AP-003', name: 'Zen Art Square Off White', category: 'Art Prints', price: 1500 },
  { id: 'HTA-26-D-001', name: 'Naughty David Diary', category: 'Stationery', price: 390 },
  { id: 'HTA-26-D-002', name: 'Brown Paper Diary', category: 'Stationery', price: 190 },
  { id: 'HTA-26-D-003', name: 'Cat Spiral Diary', category: 'Stationery', price: 300 },
  { id: 'HTA-26-D-004', name: 'Van Gogh Diary', category: 'Stationery', price: 390 },
  { id: 'HTA-26-D-005', name: 'Frida Kahlo Diary', category: 'Stationery', price: 390 },
  { id: 'HTA-26-BM-001', name: 'Wooden Bookmark', category: 'Stationery', price: 80 },
  { id: 'HTA-26-PC-001', name: 'Pardon Me Postcard', category: 'Stationery', price: 60 },
  { id: 'HTA-26-PC-002', name: 'Shadi Kab Karoge Postcard', category: 'Stationery', price: 60 },
  { id: 'HTA-26-PC-003', name: 'Coffee Helps Girl Postcard', category: 'Stationery', price: 60 },
  { id: 'HTA-26-PC-004', name: 'Plan Cancel Girl Postcard', category: 'Stationery', price: 60 },
  { id: 'HTA-26-PC-005', name: 'Confidence Level Postcard', category: 'Stationery', price: 60 },
  { id: 'HTA-26-TB-001', name: 'Tote Bag Red', category: 'Tote Bags', price: 300 },
  { id: 'HTA-26-TB-002', name: 'Tote Bag Black', category: 'Tote Bags', price: 210 },
  { id: 'HTA-26-TB-003', name: 'Tote Bag White', category: 'Tote Bags', price: 300 },
  { id: 'HTA-26-TB-004', name: 'Tote Bag Black Big Dog', category: 'Tote Bags', price: 390 },
  { id: 'HTA-26-DC-001', name: 'Coasters Square Set of 3', category: 'Decor', price: 590 },
  { id: 'HTA-26-DC-002', name: 'Coasters Round Set of 5', category: 'Decor', price: 950 },
  { id: 'HTA-26-DC-003', name: 'Coasters Square Set of 4', category: 'Decor', price: 780 },
  { id: 'HTA-26-DC-004', name: 'Coasters Round Set of 4', category: 'Decor', price: 780 },
  { id: 'HTA-26-DC-005', name: 'Decoupage Magnets Square', category: 'Decor', price: 140 },
  { id: 'HTA-26-DC-006', name: 'Decoupage Magnets Round', category: 'Decor', price: 140 },
  { id: 'HTA-26-DC-007', name: 'Decoupage Magnets Diamond', category: 'Decor', price: 120 },
  { id: 'HTA-26-JW-001', name: 'Square Necklace', category: 'Jewellery', price: 600 },
  { id: 'HTA-26-JW-002', name: 'Necklace Style 1', category: 'Jewellery', price: 1000 },
  { id: 'HTA-26-JW-003', name: 'Necklace Earrings Set 1', category: 'Jewellery', price: 1200 },
  { id: 'HTA-26-JW-004', name: 'Necklace Earrings Set 2', category: 'Jewellery', price: 1500 },
  { id: 'HTA-26-JW-005', name: 'Earrings Style 1', category: 'Jewellery', price: 750 },
  { id: 'HTA-26-JW-006', name: 'Earrings Style 2', category: 'Jewellery', price: 900 },
  { id: 'HTA-26-JW-007', name: 'Pin Earrings', category: 'Jewellery', price: 500 },
  { id: 'HTA-26-JW-008', name: 'Girl Beads Bracelet', category: 'Jewellery', price: 200 },
];

export function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  // Auth
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  // Close search on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setShowUserMenu(false);
    navigate('/');
  };

  const results = query.trim().length > 1
    ? allProducts.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const noResults = query.trim().length > 1 && results.length === 0;

  return (
    <>
      <header className="container mx-auto px-4 py-6 bg-white shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 mb-6 md:mb-8">

          {/* Search */}
          <div className="order-2 md:order-1 md:w-64 w-full" ref={searchRef}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setShowResults(true); }}
                onFocus={() => setShowResults(true)}
                className="w-full pl-10 pr-8 py-3 border-b border-gray-300 focus:border-gray-900 focus:outline-none transition-colors bg-transparent"
              />
              <Search className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              {query && (
                <button
                  onClick={() => { setQuery(''); setShowResults(false); }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={16} />
                </button>
              )}

              {/* Search results dropdown */}
              {showResults && query.trim().length > 1 && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-2xl rounded-2xl mt-2 z-50 overflow-hidden border border-gray-100">
                  {noResults ? (
                    <div className="p-6 text-center">
                      <img
                        src="/images/Joey.gif"
                        alt="Joey"
                        className="w-16 h-16 rounded-full object-cover mx-auto mb-3"
                        style={{ border: '3px solid #FAA300' }}
                      />
                      <p className="font-serif text-base mb-1">Joey looked everywhere...</p>
                      <p className="text-sm text-gray-400">No products found for "<strong>{query}</strong>"</p>
                    </div>
                  ) : (
                    <div className="max-h-72 overflow-y-auto">
                      {results.slice(0, 6).map(product => (
                        <Link
                          key={product.id}
                          to={`/shop?category=${product.category}`}
                          onClick={() => { setShowResults(false); setQuery(''); }}
                          className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                        >
                          <div>
                            <p className="text-sm font-medium text-gray-900">{product.name}</p>
                            <p className="text-xs text-gray-400">{product.category}</p>
                          </div>
                          <p className="text-sm font-bold" style={{ color: '#FAA300' }}>
                            Rs. {product.price}
                          </p>
                        </Link>
                      ))}
                      {results.length > 6 && (
                        <Link
                          to={`/shop`}
                          onClick={() => { setShowResults(false); setQuery(''); }}
                          className="block text-center py-3 text-sm font-medium"
                          style={{ color: '#FF6B35' }}
                        >
                          See all {results.length} results →
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Logo */}
          <div className="order-1 md:order-2 text-center">
            <Link to="/">
              <div className="flex items-center gap-3 justify-center">
                <img
                  src="/images/HTAlogo.png"
                  alt="HTA Logo"
                  className="w-10 h-10 rounded-full logo-spin"
                  style={{ transition: 'all 0.3s' }}
                />
                <h1 className="text-2xl md:text-3xl" style={{ fontFamily: "'MoglanDemo', serif" }}>
                  Happiness Through Art
                </h1>
              </div>
            </Link>
          </div>

          {/* Icons */}
          <div className="order-3 flex items-center justify-end gap-6 md:w-64">

            {/* Account */}
            <div className="relative">
              {user ? (
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="hover:opacity-75 flex items-center"
                  aria-label="Account"
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: '#FAA300' }}
                  >
                    {user.user_metadata?.first_name?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase()}
                  </div>
                </button>
              ) : (
                <Link to="/login" aria-label="Account" className="hover:opacity-75">
                  <User size={24} />
                </Link>
              )}

              {showUserMenu && user && (
                <div className="absolute right-0 mt-2 w-52 bg-white shadow-xl rounded-xl py-2 z-50 border border-gray-100">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">
                      {user.user_metadata?.full_name || 'Welcome!'}
                    </p>
                    <p className="text-xs text-gray-400 truncate">{user.email}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 w-full px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition-colors"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>

            <div className="relative group">
  <button aria-label="Shipping" className="hover:opacity-75">
    <Truck size={24} />
  </button>
  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 rounded-full text-xs font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ backgroundColor: '#FF6B35' }}>
    Shipping tracker — Coming Soon!
  </div>
</div>
            <button
              aria-label="Cart"
              className="relative p-2 hover:opacity-75"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
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

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}