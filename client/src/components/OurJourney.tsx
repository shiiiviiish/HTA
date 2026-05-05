import React from 'react';

const OurJourney = () => {
  return (
    <div className="min-h-screen bg-white">

      <div className="py-20 px-6 text-center" style={{ backgroundColor: '#FAA300' }}>
        <h1 className="text-5xl font-serif mb-4 text-white">Our Journey</h1>
        <p className="text-lg text-white max-w-2xl mx-auto">
          Moments, memories and art that brought happiness to peoples lives.
        </p>
      </div>

      <div className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12">Exhibitions and Workshops</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="rounded-2xl h-72 flex flex-col items-center justify-center p-6 text-center" style={{ backgroundColor: '#F5DD61' }}>
            <p className="font-semibold text-lg mb-1 text-gray-700">Colors of Healing</p>
            <p className="text-sm text-gray-600">March 2024</p>
            <p className="text-xs mt-2 text-gray-500">Delhi Art Gallery</p>
          </div>

          <div className="rounded-2xl h-72 flex flex-col items-center justify-center p-6 text-center" style={{ backgroundColor: '#59D5E0' }}>
            <p className="font-semibold text-lg mb-1 text-white">Brushstrokes and Breaths</p>
            <p className="text-sm text-white opacity-80">July 2024</p>
            <p className="text-xs mt-2 text-white opacity-60">The Creative Studio</p>
          </div>

          <div className="rounded-2xl h-72 flex flex-col items-center justify-center p-6 text-center" style={{ backgroundColor: '#F4538A' }}>
            <p className="font-semibold text-lg mb-1 text-white">Art as Medicine</p>
            <p className="text-sm text-white opacity-80">November 2024</p>
            <p className="text-xs mt-2 text-white opacity-60">Community Center, Sonipat</p>
          </div>

        </div>
      </div>

      <div className="py-16 px-6 text-center" style={{ backgroundColor: '#59D5E0' }}>
        <h2 className="text-3xl font-serif mb-4 text-white">Join Our Community</h2>
        <p className="text-white mb-8 max-w-xl mx-auto">
          Stay updated with new artwork, workshops, therapy sessions and events.
        </p>
        
          <a href="https://chat.whatsapp.com/D8qg0QhCRucCtESVUs9PTk"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-full font-medium text-white"
          style={{ backgroundColor: '#25D366' }}
        >
          Join WhatsApp Community
        </a>
      </div>

    </div>
  );
};

export default OurJourney;