import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavItem {
  label: string;
  path: string;
  dropdown: { label: string; path: string }[];
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/', dropdown: [] },
  { label: 'Art', path: '/art', dropdown: [] },
  { label: 'Stationery', path: '/stationery', dropdown: [] },
  { label: 'Gifts', path: '/gifts', dropdown: [] },
  { label: 'Decor', path: '/decor', dropdown: [] },
  { label: 'Therapy', path: '/therapy', dropdown: [] },
  { label: 'Shop', path: '/shop', dropdown: [] },
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
                        <Link
                          key={sub.label}
                          to={sub.path}
                          className="block text-gray-600 py-2 text-sm border-b border-gray-100"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.label}
                        </Link>
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
        <ul className="flex justify-center space-x-8">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && item.dropdown.length > 0 && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.path || '/'}
                className="relative text-gray-800 font-medium hover:text-black transition-colors flex items-center gap-1"
              >
                {item.label}
                {item.dropdown && item.dropdown.length > 0 && <ChevronDown size={14} />}
              </Link>

              {item.dropdown && item.dropdown.length > 0 && openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-xl py-2 z-50 border border-gray-100">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.label}
                      to={sub.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {sub.label}
                    </Link>
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