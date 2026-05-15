import React from 'react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-20 px-6 text-center" style={{backgroundColor: '#FAA300'}}>
        <h1 className="text-5xl font-serif mb-4 text-white">Terms of Service</h1>
        <p className="text-white text-lg max-w-2xl mx-auto">
          Please read these terms carefully before using our services.
        </p>
      </div>

      <div className="py-16 px-6 max-w-3xl mx-auto">
        {/* TO UPDATE: Replace all placeholder text with real terms from Kavya */}

        <div className="mb-8">
          <h2 className="text-2xl font-serif mb-4" style={{color: '#FF6B35'}}>1. Introduction</h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to Happiness Through Art. By accessing or using our website and services, you agree to be bound by these Terms of Service. These terms apply to all visitors, customers and users of our services.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-serif mb-4" style={{color: '#FF6B35'}}>2. Products & Orders</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            All products listed on our website are handcrafted by Kavya Atray. Product availability is subject to stock. We reserve the right to cancel any order if a product becomes unavailable.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Orders are confirmed only after payment is received. Kavya will contact you via WhatsApp to confirm your order and share payment details.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-serif mb-4" style={{color: '#FF6B35'}}>3. Therapy Services</h2>
          <p className="text-gray-600 leading-relaxed">
            Therapy sessions are provided by Kavya Atray who is trained in Expressive Arts Therapy. Sessions are for personal growth and wellbeing and are not a substitute for professional medical or psychiatric treatment.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-serif mb-4" style={{color: '#FF6B35'}}>4. Intellectual Property</h2>
          <p className="text-gray-600 leading-relaxed">
            All artwork, designs, photos and content on this website are the intellectual property of Kavya Atray and Happiness Through Art. Reproduction or use without permission is strictly prohibited.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-serif mb-4" style={{color: '#FF6B35'}}>5. Privacy</h2>
          <p className="text-gray-600 leading-relaxed">
            We respect your privacy. Any personal information shared with us is used only to process your orders and communicate with you. We do not share your information with third parties.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-serif mb-4" style={{color: '#FF6B35'}}>6. Changes to Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to update these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.
          </p>
        </div>

        <div className="p-4 rounded-2xl text-sm text-gray-500" style={{backgroundColor: '#f9f9f9'}}>
          Last updated: May 2026 · For questions contact us at happinessthroughart@gmail.com
          {/* TO UPDATE: Add Kavya's real email above */}
        </div>
      </div>
    </div>
  );
};

export default TermsPage;