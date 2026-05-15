import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavItem {
  label: string;
  path: string;
  dropdown: { label: string; path: string; external?: boolean }[];
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/', dropdown: [] },
  {
    label: 'Art Pieces', path: '/shop', dropdown: [
      { label: 'Art Originals', path: '/shop?category=Art Originals' },
      { label: 'Art Prints', path: '/shop?category=Art Prints' },
    ]
  },
  {
    label: 'Stationery', path: '/shop', dropdown: [
      { label: 'Diaries', path: '/shop?category=Stationery' },
      { label: 'Bookmarks', path: '/shop?category=Stationery' },
      { label: 'Postcards', path: '/shop?category=Stationery' },
    ]
  },
  {
    label: 'Gifts', path: '/shop', dropdown: [
      { label: 'Kavyas Top Picks', path: '/kavya-picks' },
      { label: 'Custom Orders', path: 'https://wa.me/919877591063?text=Hey Kavya! I would love to place a custom order. Can you help me create something special?', external: true },
    ]
  },
  {
    label: 'Resign', path: '/shop', dropdown: [
      { label: 'Coasters', path: '/shop?category=Coasters' },
      { label: 'Decoupage', path: '/shop?category=Decoupage' },
      { label: 'Jewellery', path: '/shop?category=Jewellery' },
    ]
  },
  {
    label: 'Shop', path: '/shop', dropdown: [
      { label: 'All Products', path: '/shop' },
      { label: 'Art Originals', path: '/shop?category=Art Originals' },
      { label: 'Stationery', path: '/shop?category=Stationery' },
      { label: 'Resign', path: '/shop?category=Resign' },
      { label: 'Jewellery', path: '/shop?category=Jewellery' },
    ]
  },
  { label: 'Our Journey', path: '/our-journey', dropdown: [] },
  { label: 'About', path: '/about', dropdown: [] },
  { label: 'Contact', path: '/contact', dropdown: [] },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-20 left-4 z-50"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={`
        fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40
        md:hidden
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="pt-24 px-4 overflow-y-auto h-full pb-8">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.dropdown && item.dropdown.length > 0 ? (
                <>
                  <button
                    onClick={() => setOpenMobile(openMobile === item.label ? null : item.label)}
                    className="w-full flex justify-between items-center text-gray-800 font-medium py-3 border-b border-gray-100"
                  >
                    {item.label}
                    <ChevronDown size={16} className={`transition-transform ${openMobile === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  {openMobile === item.label && (
                    <div className="pl-4 bg-gray-50">
                      {item.dropdown.map((sub) => (
                        sub.external ? (
                          <button
                            key={sub.label}
                            onClick={() => { window.open(sub.path, '_blank'); setIsOpen(false); }}
                            className="block w-full text-left text-gray-600 py-2 text-sm border-b border-gray-100"
                          >
                            {sub.label}
                          </button>
                        ) : (
                          <Link
                            key={sub.label}
                            to={sub.path}
                            className="block text-gray-600 py-2 text-sm border-b border-gray-100"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        )
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path || '/'}
                  className="block text-gray-800 hover:text-gray-600 font-medium py-3 border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>

      <nav className="border-t border-b border-gray-200 py-3 hidden md:block">
        <ul className="flex justify-center space-x-6">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.path || '/'}
                className="relative text-gray-800 font-medium hover:text-black transition-colors flex items-center gap-1 group"
              >
                {item.label}
                {item.dropdown && item.dropdown.length > 0 && (
                  <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                )}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {item.dropdown && item.dropdown.length > 0 && openDropdown === item.label && (
                <div className="absolute top-full left-0 w-52 z-50 bg-white shadow-xl rounded-xl py-2 border border-gray-100">
                  {item.dropdown.map((sub) => (
                    sub.external ? (
                      <button
                        key={sub.label}
                        onClick={() => { window.open(sub.path, '_blank'); setOpenDropdown(null); }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-black transition-colors"
                        style={{borderLeft: '3px solid transparent'}}
                        onMouseEnter={(e) => (e.currentTarget.style.borderLeftColor = '#FF6B35')}
                        onMouseLeave={(e) => (e.currentTarget.style.borderLeftColor = 'transparent')}
                      >
                        {sub.label}
                      </button>
                    ) : (
                      <Link
                        key={sub.label}
                        to={sub.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-black transition-colors"
                        style={{borderLeft: '3px solid transparent'}}
                        onMouseEnter={(e) => (e.currentTarget.style.borderLeftColor = '#FF6B35')}
                        onMouseLeave={(e) => (e.currentTarget.style.borderLeftColor = 'transparent')}
                        onClick={() => setOpenDropdown(null)}
                      >
                        {sub.label}
                      </Link>
                    )
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}