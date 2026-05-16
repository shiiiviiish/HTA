import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import shimlaPhoto from '../assets/shimlaexhibit.jpg';
import sector17Photo from '../assets/sector17.jpg';
import ExhibitionPanel from './ExhibitionPanel';

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

// Hook to detect when element enters viewport
const useInView = (threshold = 0.2) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
};

// Individual animated timeline item
const TimelineItem = ({ item, index }: { item: typeof timeline[0]; index: number }) => {
  const { ref, inView } = useInView(0.2);
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative flex items-center mb-12"
      style={{
        flexDirection: isLeft ? 'row' : 'row-reverse',
      }}
    >
      <div
        className="w-1/2 px-8"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView
            ? 'translateX(0)'
            : isLeft ? 'translateX(-50px)' : 'translateX(50px)',
          transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
        }}
      >
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <p className="text-sm font-bold mb-1" style={{ color: item.color }}>{item.year}</p>
          <h3 className="font-bold text-lg mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
        </div>
      </div>

      <div
        className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white"
        style={{
          backgroundColor: item.color,
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateX(-50%) scale(1)' : 'translateX(-50%) scale(0)',
          transition: `opacity 0.4s ease ${index * 0.15 + 0.3}s, transform 0.4s ease ${index * 0.15 + 0.3}s`,
        }}
      />
      <div className="w-1/2" />
    </div>
  );
};

const OurJourney = () => {
  const navigate = useNavigate();
  const [activeExhibition, setActiveExhibition] = useState<string | null>(null);

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
      <div className="py-20 px-6 text-center" style={{ backgroundColor: '#FAA300' }}>
        <h1 className="text-5xl font-serif mb-4 text-white">Our Journey</h1>
        <p className="text-lg text-white max-w-2xl mx-auto">
          Moments, memories and art that brought happiness to peoples lives.
        </p>
      </div>

      {/* Story Video Section */}
      <div className="py-16 px-6" style={{ backgroundColor: '#F5DD61' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#FF6B35' }}>
                The Story Behind HTA
              </p>
              <h2 className="text-4xl font-serif mb-6">How it all began</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Happiness Through Art was born from a simple but powerful belief — that creativity has the power to heal, connect and bring genuine joy into our lives.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                What started as a personal journey of self-expression grew into a movement — one brushstroke, one workshop, one person at a time.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, HTA is more than a brand. It is a community of people who believe in the magic of art.
              </p>
            </div>

            <div className="flex justify-center">
              <div style={{ width: '320px', height: '520px', overflow: 'hidden', borderRadius: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}>
                <iframe
                  src="https://www.instagram.com/reel/DLUR0JxP1bg/embed"
                  width="320"
                  height="600"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  allowFullScreen={true}
                  style={{ marginTop: '0px', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="py-20 px-6 text-center" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="flex justify-between items-center max-w-4xl mx-auto mb-8 px-4">
          <svg width="28" height="28" viewBox="0 0 100 100" fill="white" opacity="0.4">
            <ellipse cx="20" cy="30" rx="10" ry="13"/><ellipse cx="42" cy="18" rx="10" ry="13"/>
            <ellipse cx="64" cy="18" rx="10" ry="13"/><ellipse cx="82" cy="30" rx="10" ry="13"/>
            <path d="M15 55 Q50 100 85 55 Q70 35 50 40 Q30 35 15 55Z"/>
          </svg>
          <div className="flex-1 border-t border-dashed border-white opacity-20 mx-4" />
          <svg width="28" height="28" viewBox="0 0 100 100" fill="white" opacity="0.4">
            <ellipse cx="20" cy="30" rx="10" ry="13"/><ellipse cx="42" cy="18" rx="10" ry="13"/>
            <ellipse cx="64" cy="18" rx="10" ry="13"/><ellipse cx="82" cy="30" rx="10" ry="13"/>
            <path d="M15 55 Q50 100 85 55 Q70 35 50 40 Q30 35 15 55Z"/>
          </svg>
        </div>

        <p className="text-3xl mb-6 flex items-center justify-center gap-4" style={{ color: '#ffffff', fontFamily: "'MoglanDemo', serif" }}>
          <span className="opacity-40">——</span>
          Kavya Atray, Founder
          <span className="opacity-40">——</span>
        </p>

        <blockquote className="text-3xl md:text-5xl italic text-white max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
          "Art is not what you see, but what you make others feel."
        </blockquote>

        <div className="flex justify-between items-center max-w-4xl mx-auto mt-8 px-4">
          <svg width="28" height="28" viewBox="0 0 100 100" fill="white" opacity="0.4">
            <ellipse cx="20" cy="30" rx="10" ry="13"/><ellipse cx="42" cy="18" rx="10" ry="13"/>
            <ellipse cx="64" cy="18" rx="10" ry="13"/><ellipse cx="82" cy="30" rx="10" ry="13"/>
            <path d="M15 55 Q50 100 85 55 Q70 35 50 40 Q30 35 15 55Z"/>
          </svg>
          <div className="flex-1 border-t border-dashed border-white opacity-20 mx-4" />
          <svg width="28" height="28" viewBox="0 0 100 100" fill="white" opacity="0.4">
            <ellipse cx="20" cy="30" rx="10" ry="13"/><ellipse cx="42" cy="18" rx="10" ry="13"/>
            <ellipse cx="64" cy="18" rx="10" ry="13"/><ellipse cx="82" cy="30" rx="10" ry="13"/>
            <path d="M15 55 Q50 100 85 55 Q70 35 50 40 Q30 35 15 55Z"/>
          </svg>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-4">The Story Behind the Art</h2>
        <p className="text-center text-gray-500 mb-12">Documenting the steps, struggles, and milestones that built our community.</p>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-200" style={{ top: 0, bottom: '-80px' }} />
          {timeline.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>

        <div className="flex flex-col items-center mt-8">
          <div className="w-0.5 h-16 bg-gray-200"></div>
          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#FF6B35' }}></div>
          <div className="w-0.5 h-8 bg-gray-200"></div>
          <div className="text-center mt-4 px-8 py-6 rounded-2xl" style={{ backgroundColor: '#F5DD61' }}>
            <p className="text-2xl font-serif mb-2">And now...</p>
            <p className="text-lg text-gray-700">We are expanding our reach beyond the studio to foster deeper connections through public art showcases and educational creative sessions. 🎨✨</p>
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
              onClick={() => setActiveExhibition(ex.id)}
              className="rounded-2xl h-96 cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300 overflow-hidden relative"
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

      {/* Community */}
      <div className="py-16 px-6 text-center" style={{ backgroundColor: '#FAA300' }}>
        <h2 className="text-3xl font-serif mb-4 text-white">Join Our Community</h2>
        <p className="text-white mb-8 max-w-xl mx-auto">
          Stay updated with new artwork, workshops, therapy sessions and events.
        </p>
        <a
          href="https://chat.whatsapp.com/D8qg0QhCRucCtESVUs9PTk"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-full font-medium text-white"
          style={{ backgroundColor: '#25D366' }}
        >
          Join WhatsApp Community
        </a>
      </div>

      {/* Exhibition Panel */}
      <ExhibitionPanel
        id={activeExhibition}
        onClose={() => setActiveExhibition(null)}
      />

      <style>{`
        @media (max-width: 768px) {
          .timeline-card {
            padding: 12px !important;
          }
        }
      `}</style>

    </div>
  );
};

export default OurJourney;