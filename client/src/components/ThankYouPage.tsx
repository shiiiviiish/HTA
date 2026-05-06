import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/919877591063', '_blank');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-lg">
        <div className="text-6xl mb-6">🎨</div>
        <h1 className="text-4xl font-serif mb-4" style={{color: '#F4538A'}}>
          Thank You!
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          Your order has been sent to Kavya on WhatsApp!
        </p>
        <p className="text-gray-500 mb-8">
          Kavya will confirm your order and share payment details shortly. Please keep WhatsApp notifications on!
        </p>
        <div className="p-6 rounded-2xl mb-8" style={{backgroundColor: '#F5DD61'}}>
          <p className="font-medium text-gray-800">
            For any queries reach out directly on WhatsApp
          </p>
          <button
            onClick={openWhatsApp}
            className="inline-block mt-3 px-6 py-2 rounded-full text-white font-medium"
            style={{backgroundColor: '#25D366'}}
          >
            Chat with Kavya
          </button>
        </div>
        <Link
          to="/"
          className="inline-block px-8 py-3 rounded-full text-white font-medium"
          style={{backgroundColor: '#FAA300'}}
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;