import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const funFacts = [
  "Chief Art Inspector at HTA 🎨",
  "Approves every painting before it leaves the studio ✅",
  "Favourite hobby: stealing Kavya's paintbrushes 🖌️",
  "Has never met a biscuit he didn't like 🍪",
  "Official taste tester of art vibes 🐾",
  "Can smell a new canvas from 3 rooms away 👃",
];

const joeyReviews = [
  {
    painting: "The Blue Daisy Series",
    rating: "🐾🐾🐾🐾🐾",
    review: "5/5 paws. Smells like paint AND love. Sat next to it for 2 hours. Would recommend.",
  },
  {
    painting: "The Shimla Exhibit",
    rating: "🐾🐾🐾🐾",
    review: "4/5 paws. Very pretty. But Kavya wouldn't let me touch it. Still bitter.",
  },
  {
    painting: "The Wall Mural (Sector 17)",
    rating: "🐾🐾🐾🐾🐾",
    review: "5/5 paws. Big art. Very impressive. I barked at it for 10 minutes out of respect.",
  },
];

const moods = [
  "Currently: Napping near Kavya's easel 😴",
  "Currently: Judging your art taste 🧐",
  "Currently: Stealing paintbrushes 🖌️",
  "Currently: Being the goodest boy 🐶",
  "Currently: Demanding belly rubs 🐾",
];

const JoeyPage = () => {
  const navigate = useNavigate();
  const [mood] = useState(moods[Math.floor(Math.random() * moods.length)]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="py-20 px-6 text-center" style={{ backgroundColor: '#F5DD61' }}>
        <button
          onClick={() => navigate('/')}
          className="mb-6 text-sm font-medium opacity-60 hover:opacity-100 block mx-auto transition-opacity"
          style={{ color: '#1a1a1a' }}
        >
          ← Back to Home
        </button>
        <img
          src="/images/Joey.gif"
          alt="Joey"
          className="w-36 h-36 rounded-full object-cover mx-auto mb-6 shadow-2xl"
          style={{ border: '5px solid #FAA300' }}
        />
        <h1 className="text-5xl font-serif mb-3" style={{ color: '#1a1a1a' }}>
          Hey, I'm Joey! 🐾
        </h1>
        <p className="text-lg text-gray-700 mb-4 max-w-xl mx-auto">
          Chief Art Inspector at Happiness Through Art. Kavya's best friend. The goodest boy.
        </p>
        <div
          className="inline-block px-5 py-2 rounded-full text-sm font-medium"
          style={{ backgroundColor: '#FAA300', color: 'white' }}
        >
          {mood}
        </div>
      </div>

      {/* Fun Facts */}
      <div className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-4">Things You Should Know About Me</h2>
        <p className="text-center text-gray-500 mb-10">Important facts. Very serious. Please read carefully.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {funFacts.map((fact, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 rounded-2xl"
              style={{ backgroundColor: i % 2 === 0 ? '#FFF8F0' : '#F0FFF8' }}
            >
              <span className="text-2xl">🐾</span>
              <p className="text-gray-700 text-sm font-medium">{fact}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Joey's Reels */}
      <div className="py-16 px-6" style={{ backgroundColor: '#F5DD61' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-4">Joey on Instagram 📸</h2>
          <p className="text-center text-gray-600 mb-10">Catch me being adorable on Kavya's Instagram!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">

            {/* Reel 1 */}
            <div style={{ width: '280px', height: '480px', overflow: 'hidden', borderRadius: '20px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
              <iframe
                src="https://www.instagram.com/reel/DOXuUVhD6jj/embed"
                width="280"
                height="520"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                allowFullScreen={true}
                style={{ marginTop: '0px', display: 'block' }}
              />
            </div>

            {/* Reel 2 */}
            <div style={{ width: '280px', height: '480px', overflow: 'hidden', borderRadius: '20px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
              <iframe
                src="https://www.instagram.com/reel/DNfam8Sv02V/embed"
                width="280"
                height="520"
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

      {/* Joey's Art Reviews */}
      <div className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-4">Joey's Art Reviews 🎨</h2>
        <p className="text-center text-gray-500 mb-10">Official reviews by the Chief Art Inspector. Very credible. Very professional.</p>
        <div className="flex flex-col gap-6">
          {joeyReviews.map((review, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border"
              style={{ backgroundColor: 'white', borderColor: '#f0f0f0' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="/images/Joey.gif"
                  alt="Joey"
                  className="w-10 h-10 rounded-full object-cover"
                  style={{ border: '2px solid #FAA300' }}
                />
                <div>
                  <p className="font-semibold text-sm" style={{ color: '#1a1a1a' }}>Joey</p>
                  <p className="text-xs text-gray-400">Chief Art Inspector · Verified Good Boy ✓</p>
                </div>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#FAA300' }}>
                {review.painting}
              </p>
              <p className="text-lg mb-2">{review.rating}</p>
              <p className="text-gray-600 text-sm leading-relaxed italic">"{review.review}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Photo placeholders */}
      <div className="py-16 px-6" style={{ backgroundColor: '#FFF0F5' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-4">Joey's Gallery 📷</h2>
          <p className="text-center text-gray-500 mb-10">Behind the scenes with the Chief Art Inspector</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: '📸 Joey sitting near a painting', file: '/images/joey/1.jpg' },
              { label: '🎨 Joey inspecting a canvas', file: '/images/joey/2.jpg' },
              { label: '🖌️ Joey stealing a paintbrush', file: '/images/joey/3.jpg' },
              { label: '😴 Joey napping in the studio', file: '/images/joey/4.jpg' },
              { label: '🐾 Joey with Kavya', file: '/images/joey/5.jpg' },
              { label: '✨ Joey being adorable', file: '/images/joey/6.jpg' },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{ aspectRatio: '1', backgroundColor: '#f9f9f9', position: 'relative' }}
              >
                <img
                  src={item.file}
                  alt={item.label}
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                {/* Placeholder comment — remove once real photo is added */}
                <div
                  className="absolute inset-0 flex items-center justify-center text-center p-4"
                  style={{ backgroundColor: '#FFF0F5' }}
                >
                  <p className="text-xs text-gray-400 font-medium">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            📁 Add Joey's photos to <code>public/images/joey/</code> named 1.jpg, 2.jpg... and they'll appear here automatically!
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 text-center" style={{ backgroundColor: '#1a1a1a' }}>
        <img
          src="/images/Joey.gif"
          alt="Joey"
          className="w-20 h-20 rounded-full object-cover mx-auto mb-4 shadow-xl"
          style={{ border: '3px solid #FAA300' }}
        />
        <h3 className="text-2xl font-serif text-white mb-3">Want to see more of Joey?</h3>
        <p className="text-gray-400 mb-6 text-sm">Follow Kavya on Instagram for daily doses of art and Joey!</p>
        <a
          href="https://www.instagram.com/happinessthroughart"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-full text-white font-medium transition-opacity hover:opacity-80"
          style={{ backgroundColor: '#F4538A' }}
        >
          Follow on Instagram 📸
        </a>
      </div>

    </div>
  );
};

export default JoeyPage;