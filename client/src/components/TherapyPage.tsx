import React from 'react';

const TherapyPage = () => {
  return (
    <div className="min-h-screen bg-white">

      <div className="py-20 px-6 md:px-12 text-center" style={{backgroundColor: '#59D5E0'}}>
        <p className="text-sm font-medium uppercase tracking-widest mb-3 text-white">Heal through art</p>
        <h1 className="text-4xl md:text-6xl font-serif mb-6 text-white">Therapy with Kavya</h1>
        <p className="text-lg text-white max-w-2xl mx-auto">
          A safe, compassionate space where art and healing come together.
          Kavya Atray combines her passion for art with therapeutic practice
          to help you find clarity, peace, and joy.
        </p>
      </div>

      <div className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12">What I Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl" style={{backgroundColor: '#F5DD61'}}>
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-3">Art Therapy</h3>
            <p className="text-gray-700">Express emotions through creative art in a guided therapeutic setting. No art experience needed.</p>
          </div>
          <div className="text-center p-8 rounded-2xl" style={{backgroundColor: '#F4538A'}}>
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-3 text-white">Talk Therapy</h3>
            <p className="text-white">One-on-one sessions to help you process emotions and find your path forward.</p>
          </div>
          <div className="text-center p-8 rounded-2xl" style={{backgroundColor: '#FAA300'}}>
            <div className="text-4xl mb-4">🌿</div>
            <h3 className="text-xl font-bold mb-3">Mindfulness</h3>
            <p className="text-gray-700">Guided mindfulness techniques to bring calm and balance into your everyday life.</p>
          </div>
        </div>
      </div>

      <div className="py-16 px-6 md:px-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4" style={{backgroundColor: '#59D5E0'}}>1</div>
            <h3 className="font-bold mb-2">Book a Session</h3>
            <p className="text-gray-600 text-sm">Reach out via WhatsApp or email to schedule your first session.</p>
          </div>
          <div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4" style={{backgroundColor: '#FAA300'}}>2</div>
            <h3 className="font-bold mb-2">Initial Consultation</h3>
            <p className="text-gray-600 text-sm">A free 15-minute call to understand your needs and goals.</p>
          </div>
          <div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4" style={{backgroundColor: '#F4538A'}}>3</div>
            <h3 className="font-bold mb-2">Begin Your Journey</h3>
            <p className="text-gray-600 text-sm">Start your healing journey with personalised therapy sessions.</p>
          </div>
        </div>
      </div>

      <div className="py-16 px-6 md:px-12 text-center" style={{backgroundColor: '#F5DD61'}}>
        <h2 className="text-3xl font-serif mb-4">Ready to Begin?</h2>
        <p className="text-gray-700 mb-8 max-w-xl mx-auto">
          Take the first step towards healing. Reach out to Kavya today and book your first session.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full text-white font-medium" style={{backgroundColor: '#25D366'}}>
            WhatsApp Kavya
          </a>
          <a href="mailto:kavya@happinessthroughart.com" className="px-8 py-3 rounded-full font-medium border-2 border-black">
            Send an Email
          </a>
        </div>
      </div>

    </div>
  );
};

export default TherapyPage;