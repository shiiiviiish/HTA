import React, { useEffect } from 'react';
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

// Timeline data - UPDATE THESE DATES AND TEXT WITH KAVYA'S REAL STORY
const timeline = [
  {
    year: '2020',
    title: 'The First Brushstroke',
    description: 'Kavya picked up a paintbrush for the first time and discovered her love for art during the pandemic.',
    color: '#F5DD61',
  },
  {
    year: '2021',
    title: 'Art Meets Healing',
    description: 'Kavya discovered Expressive Arts Therapy and realized art could heal not just herself but others too.',
    color: '#59D5E0',
  },
  {
    year: '2022',
    title: 'Happiness Through Art is Born',
    description: 'HTA officially launched — combining original artwork, handcrafted products and therapeutic practices.',
    color: '#FAA300',
  },
  {
    year: '2023',
    title: 'First Exhibition',
    description: 'Kavya held her first public exhibition, bringing her art to the community for the very first time.',
    color: '#F4538A',
  },
  {
    year: '2024+',
    title: 'Growing & Expanding',
    description: 'Workshops, therapy sessions, collaborations and a growing community of art lovers across India.',
    color: '#FF6B35',
  },
];

const OurJourney = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="py-20 px-6 text-center" style={{backgroundColor: '#FAA300'}}>
        <h1 className="text-5xl font-serif mb-4 text-white">Our Journey</h1>
        <p className="text-lg text-white max-w-2xl mx-auto">
          Moments, memories and art that brought happiness to peoples lives.
        </p>
      </div>

      {/* ===== STORY VIDEO SECTION ===== */}
      {/* TO UPDATE: Replace the Instagram reel ID in the src below */}
      {/* Current reel: https://www.instagram.com/reel/DLUR0JxP1bg/ */}
      {/* To change: replace DLUR0JxP1bg with the new reel ID */}
      <div className="py-16 px-6" style={{backgroundColor: '#F5DD61'}}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div>
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{color: '#FF6B35'}}>
                The Story Behind HTA
              </p>
              <h2 className="text-4xl font-serif mb-6">
                How it all began
              </h2>
              {/* TO UPDATE: Replace this placeholder text with Kavya's real story */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                Happiness Through Art was born from a simple but powerful belief — that creativity has the power to heal, connect and bring genuine joy into our lives.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                What started as a personal journey of self-expression grew into a movement — one brushstroke, one workshop, one person at a time.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, HTA is more than a brand. It is a community of people who believe in the magic of art.
              </p>
              {/* TO UPDATE: Add Kavya's real story above when she sends it */}
            </div>

            {/* Instagram Story Video */}
            {/* Instagram Story Video */}
<div className="flex justify-center">
  <div style={{width: '320px', height: '520px', overflow: 'hidden', borderRadius: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.2)'}}>
    <iframe
      src="https://www.instagram.com/reel/DLUR0JxP1bg/embed"
      width="320"
      height="600"
      frameBorder="0"
      scrolling="no"
      allowTransparency={true}
      allowFullScreen={true}
      style={{marginTop: '0px', display: 'block'}}
    />
  </div>
</div>

          </div>
        </div>
      </div>

      {/* ===== BIG QUOTE SECTION ===== */}
      {/* TO UPDATE: Replace this quote with Kavya's real quote */}
      <div className="py-20 px-6 text-center" style={{backgroundColor: '#1a1a1a'}}>
        <p className="text-3xl mb-6" style={{color: '#ffffff', fontFamily: "'MoglanDemo', serif"}}>
  Kavya Atray, Founder
</p>
        <blockquote className="text-3xl md:text-5xl italic text-white max-w-4xl mx-auto leading-relaxed" style={{fontFamily: "'Playfair Display', serif"}}>
          "Art is not what you see, but what you make others feel."
        </blockquote>
        {/* TO UPDATE: Replace the quote above with Kavya's real quote */}
      </div>

      {/* ===== TIMELINE SECTION ===== */}
      <div className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-4">The Story Behind the Art</h2>
        <p className="text-center text-gray-500 mb-12">Documenting the steps, struggles, and milestones that built our community.</p>

        {/* TO UPDATE: Edit the timeline array at the top of this file with real dates and events */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-200" style={{top: 0, bottom: '-80px'}} />
          {timeline.map((item, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="w-1/2 px-8">
                <div className="bg-white rounded-2xl p-6 shadow-sm border">
                  <p className="text-sm font-bold mb-1" style={{color: item.color}}>{item.year}</p>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white" style={{backgroundColor: item.color}} />
              <div className="w-1/2" />
            </div>
          ))}
        </div>

        {/* Bottom arrow and message */}
        <div className="flex flex-col items-center mt-8">
          <div className="w-0.5 h-16 bg-gray-200"></div>
          <div className="w-4 h-4 rounded-full" style={{backgroundColor: '#FF6B35'}}></div>
          <div className="w-0.5 h-8 bg-gray-200"></div>
          <div className="text-center mt-4 px-8 py-6 rounded-2xl" style={{backgroundColor: '#F5DD61'}}>
            <p className="text-2xl font-serif mb-2">And now...</p>
            <p className="text-lg text-gray-700">We are expanding our reach beyond the studio to foster deeper connections through public art showcases and educational creative sessions.

🎨✨</p>
            <p className="text-3xl mt-4"></p>
          </div>
        </div>

      </div>

      {/* Exhibitions */}
      <div className="py-16 px-6 max-w-6xl mx-auto">
       <h2 className="text-3xl font-serif text-center mb-4">Public Showcases & Creative Collaborations</h2>
<p className="text-center text-gray-500 mb-12">Where the heart of HTA meets the energy of our community.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {exhibitions.map((ex) => (
            <div
              key={ex.id}
              onClick={() => navigate('/exhibition/' + ex.id)}
              className="rounded-2xl h-96 cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300 overflow-hidden relative"
              style={{backgroundColor: ex.color}}
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

      {/* Community */}
      <div className="py-16 px-6 text-center" style={{backgroundColor: '#FAA300'}}>
        <h2 className="text-3xl font-serif mb-4 text-white">Join Our Community</h2>
        <p className="text-white mb-8 max-w-xl mx-auto">
          Stay updated with new artwork, workshops, therapy sessions and events.
        </p>
        <a
          href="https://chat.whatsapp.com/D8qg0QhCRucCtESVUs9PTk"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-full font-medium text-white"
          style={{backgroundColor: '#25D366'}}
        >
          Join WhatsApp Community
        </a>
      </div>

    </div>
  );
};

export default OurJourney;
