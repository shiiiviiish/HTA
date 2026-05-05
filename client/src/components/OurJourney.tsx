import React from 'react';

const OurJourney = () => {
  return (
    <div className="min-h-screen bg-white">

      <div className="py-20 px-6 text-center" style={{backgroundColor: '#FAA300'}}>
        <h1 className="text-5xl font-serif mb-4 text-white">Our Journey</h1>
        <p className="text-lg text-white max-w-2xl mx-auto">
          Moments, memories and art that brought happiness to people's lives.
        </p>
      </div>

      <div className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12">Exhibitions and Workshops</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-2xl h-72 flex items-center justify-center" style={{backgroundColor: '#F5DD61'}}>
            <p className="text-gray-700 font-medium">Photo coming soon</p>
          </div>
          <div className="rounded-2xl h-72 flex items-center justify-center" style={{backgroundColor: '#59D5E0'}}>
            <p className="text-white font-medium">Photo coming soon</p>
          </div>
          <div className="rounded-2xl h-72 flex items-center justify-center" style={{backgroundColor: '#F4538A'}}>
            <p className="text-white font-medium">Photo coming soon</p>
          </div>
        </div>
      </div>

      <div className="py-16 px-6 text-center" style={{backgroundColor: '#59D5E0'}}>
        <h2 className="text-3xl font-serif mb-4 text-white">Join Our Community</h2>
        <p className="text-white mb-8 max-w-xl mx-auto">
          Stay updated with new artwork, workshops, therapy sessions and events.
        </p>
        <a href="https://chat.whatsapp.com/D8qg0QhCRucCtESVUs9PTk" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full font-medium text-white" style={{backgroundColor: '#25D366'}}>
          Join WhatsApp Community
        </a>
      </div>

    </div>
  );
};

export default OurJourney;