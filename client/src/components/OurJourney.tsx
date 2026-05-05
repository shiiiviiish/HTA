import React from 'react';
import { useNavigate } from 'react-router-dom';
import shimlaPhoto from '../assets/shimlaexhibit.jpg';
import sector17Photo from '../assets/sector17.jpg';

const exhibitions = [
  {
    id: 'the-shimla-exhibit',
    title: 'The Shimla Exhibit',
    date: '2026',
    location: 'Shimla',
    color: '#F5DD61',
    photo: shimlaPhoto,
  },
  {
    id: 'sector-17-unfiltered',
    title: 'Sector 17: Unfiltered',
    date: '',
    location: 'Sector 17, Chandigarh',
    color: '#59D5E0',
    photo: sector17Photo,
  },
  {
    id: 'creative-hub-chitkara',
    title: 'Creative Hub (Chitkara)',
    date: '',
    location: 'Chitkara University',
    color: '#F4538A',
    photo: null,
  },
];

const OurJourney = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">

      <div className="py-20 px-6 text-center" style={{ backgroundColor: '#FAA300' }}>
        <h1 className="text-5xl font-serif mb-4 text-white">Our Journey</h1>
        <p className="text-lg text-white max-w-2xl mx-auto">
          Moments, memories and art that brought happiness to peoples lives.
        </p>
      </div>

      <div className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-4">Exhibitions and Workshops</h2>
        <p className="text-center text-gray-500 mb-12">Click on any card to learn more</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {exhibitions.map((ex) => (
            <div
              key={ex.id}
              onClick={() => navigate('/exhibition/' + ex.id)}
              className="rounded-2xl h-72 cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300 overflow-hidden relative"
              style={{ backgroundColor: ex.color }}
            >
              {ex.photo && (
                <img src={ex.photo} alt={ex.title} className="absolute inset-0 w-full h-full object-cover" />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl" />
              <div className="relative z-10 h-full flex flex-col items-center justify-end p-6 text-center">
                <p className="font-semibold text-lg mb-1 text-white">{ex.title}</p>
                <p className="text-sm text-white opacity-80">{ex.date}</p>
                <p className="text-sm font-bold text-white">{ex.location}</p>
                <p className="text-xs mt-2 font-semibold text-white">Tap to explore</p>
              </div>
            </div>
          ))}
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