import React from 'react';
import { Heart, ArrowRight, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-20 pb-8 px-4 md:px-8" style={{backgroundColor: '#f9f9f9'}}>
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-8 h-8 fill-current" style={{color: '#F4538A'}} />
              <h2 className="text-2xl font-lobster" style={{fontFamily: "'Dancing Script', cursive"}}>
                Happiness Through Art
              </h2>
            </div>
            <p className="text-gray-600 mb-2">Unleash Your Inner Light: From the Heart to the Canvas.</p>
            <p className="text-gray-500 text-sm">Founder – Happiness Through Art<br/>
An artist from CHANDIGARH</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">STAY IN THE LOOP</h3>
            <p className="text-gray-600 mb-6">
              Get updates on new artwork, therapy sessions, launches and events. Unsubscribe anytime.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your e-mail"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none"
              />
              <button className="p-3 text-white rounded-lg transition-colors" style={{backgroundColor: '#FAA300'}}>
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="font-bold mb-4">ABOUT</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-gray-600 hover:text-black">About Kavya</a></li>
              <li><a href="/therapy" className="text-gray-600 hover:text-black">Therapy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Collaborations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">SHOP</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-black">Paintings</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Bookmarks</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Art Prints</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Gifts</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">HELP</h3>
            <ul className="space-y-3">
              <li><a href="/contact" className="text-gray-600 hover:text-black">Contact us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Shipping</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Returns</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">MORE</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-black">Privacy policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Terms of service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Refund policy</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4 md:mb-0">
            © {currentYear} Happiness Through Art by Kavya Atray. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/happinessthroughart" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;