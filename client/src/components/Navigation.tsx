import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'New In', path: '/' },
  { label: 'Paintings', path: '/' },
  { label: 'Bookmarks', path: '/' },
  { label: 'Art Prints', path: '/' },
  { label: 'Gifts', path: '/' },
  { label: 'Therapy', path: '/therapy' },
  { label: 'Our Journey', path: '/our-journey' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="pt-24 px-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="block text-gray-800 hover:text-gray-600 font-medium py-3 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      <nav className="border-t border-b border-gray-200 py-3 hidden md:block">
        <ul className="flex justify-center space-x-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className="relative text-gray-800 font-medium hover:text-black transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
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