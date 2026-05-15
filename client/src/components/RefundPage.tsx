import React from 'react';

const RefundPage = () => {
  return (
    <div className="min-h-screen bg-white">

      <div className="py-20 px-6 text-center" style={{backgroundColor: '#F4538A'}}>
        <h1 className="text-5xl font-serif mb-4 text-white">Refund and Return Policy</h1>
        <p className="text-white text-lg max-w-2xl mx-auto">
          Your satisfaction is our priority!
        </p>
      </div>

      <div className="py-16 px-6 max-w-3xl mx-auto">

        <div className="mb-8 p-6 rounded-2xl" style={{backgroundColor: '#F5DD61'}}>
          <h2 className="text-2xl font-serif mb-3">Our Promise</h2>
          <p className="text-gray-700 leading-relaxed">
            Every product at Happiness Through Art is handcrafted with love and care. If you are not satisfied with your purchase, we will do our best to make it right!
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-serif mb-4" style={{color: '#FF6B35'}}>Returns</h2>
          <ul className="text-gray-600 leading-relaxed space-y-3">
            <li className="flex gap-3"><span style={{color: '#FAA300'}}>→</span>Returns accepted within 7 days of delivery</li>
            <li className="flex gap-3"><span style={{color: '#FAA300'}}>→</span>Product must be unused and in original condition</li>
            <li className="flex gap-3"><span style={{color: '#FAA300'}}>→</span>Contact us on WhatsApp with photos of the product</li>
            <li className="flex gap-3"><span style={{color: '#FAA300'}}>→</span>Return shipping costs are borne by the customer</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-serif mb-4" style={{color: '#FF6B35'}}>Refunds</h2>
          <ul className="text-gray-600 leading-relaxed space-y-3">
            <li className="flex gap-3"><span style={{color: '#FAA300'}}>→</span>Refunds processed within 5-7 business days</li>
            <li className="flex gap-3"><span style={{color: '#FAA300'}}>→</span>Refund issued to original payment method</li>
            <li className="flex gap-3"><span style={{color: '#FAA300'}}>→</span>Damaged or defective items eligible for full refund</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-serif mb-4" style={{color: '#FF6B35'}}>Non-Refundable Items</h2>
          <ul className="text-gray-600 leading-relaxed space-y-3">
            <li className="flex gap-3"><span style={{color: '#F4538A'}}>✗</span>Custom commissioned artwork</li>
            <li className="flex gap-3"><span style={{color: '#F4538A'}}>✗</span>Therapy sessions once conducted</li>
            <li className="flex gap-3"><span style={{color: '#F4538A'}}>✗</span>Digital products</li>
            <li className="flex gap-3"><span style={{color: '#F4538A'}}>✗</span>Sale or discounted items</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-serif mb-4" style={{color: '#FF6B35'}}>Damaged Orders</h2>
          <p className="text-gray-600 leading-relaxed">
            If your order arrives damaged, please send photos to Kavya on WhatsApp within 48 hours of delivery. We will arrange a replacement or full refund at no extra cost!
          </p>
        </div>

        <div className="py-8 px-6 text-center rounded-2xl" style={{backgroundColor: '#59D5E0'}}>
          <p className="text-white font-medium mb-4">Have a question about your order?</p>
          <button
            onClick={() => window.open('https://wa.me/919877591063', '_blank')}
            className="px-8 py-3 rounded-full text-white font-medium"
            style={{backgroundColor: '#25D366'}}
          >
            Contact Kavya on WhatsApp
          </button>
        </div>

      </div>
    </div>
  );
};

export default RefundPage;