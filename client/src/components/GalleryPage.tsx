import React, { useState } from 'react';

interface Painting {
  id: number;
  title: string;
  medium: string;
  year: string;
  image: string;
  kavyaMessage: string;
}

const paintings: Painting[] = [
  {
    id: 1,
    title: 'Painting Title 1',
    medium: 'Acrylic on Canvas',
    year: '2024',
    image: '/images/gallery/1.jpg',
    kavyaMessage: "This piece was born during a quiet evening when I just let the brush move freely. No plan, no pressure — just pure expression. I hope it brings the same calm to your space.",
  },
  {
    id: 2,
    title: 'Painting Title 2',
    medium: 'Watercolour',
    year: '2024',
    image: '/images/gallery/2.jpg',
    kavyaMessage: "I painted this while thinking about the mountains in Shimla. Every stroke carries the memory of that cool breeze and the feeling of being completely at peace.",
  },
  {
    id: 3,
    title: 'Painting Title 3',
    medium: 'Mixed Media',
    year: '2023',
    image: '/images/gallery/3.jpg',
    kavyaMessage: "Art therapy taught me that creativity doesn't need to be perfect — it needs to be honest. This painting is one of my most honest pieces.",
  },
  {
    id: 4,
    title: 'Painting Title 4',
    medium: 'Acrylic on Canvas',
    year: '2023',
    image: '/images/gallery/4.jpg',
    kavyaMessage: "Colours have always spoken to me louder than words. This one started as chaos and became something I deeply love — much like most healing journeys.",
  },
  {
    id: 5,
    title: 'Painting Title 5',
    medium: 'Gouache',
    year: '2024',
    image: '/images/gallery/5.jpg',
    kavyaMessage: "I created this during a workshop where I asked participants to paint their emotions. I painted mine alongside them — this is what came out.",
  },
  {
    id: 6,
    title: 'Painting Title 6',
    medium: 'Pen and Ink',
    year: '2022',
    image: '/images/gallery/6.jpg',
    kavyaMessage: "Sometimes the simplest strokes carry the deepest meaning. This was my very first serious piece — it will always hold a special place in my heart.",
  },
];

const GalleryPage = () => {
  const [selected, setSelected] = useState<Painting | null>(null);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="py-20 px-6 text-center" style={{ backgroundColor: '#FAA300' }}>
        <p className="text-sm font-bold uppercase tracking-widest mb-3 text-white opacity-80">
          Kavya Atray
        </p>
        <h1 className="text-5xl font-serif text-white mb-4">Gallery</h1>
        <p className="text-white text-lg max-w-xl mx-auto opacity-90">
          Original works — each piece carrying a story, an emotion, and a little piece of my heart.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="py-16 px-6 max-w-6xl mx-auto">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6">
          {paintings.map((painting) => (
            <div
              key={painting.id}
              onClick={() => setSelected(painting)}
              className="break-inside-avoid mb-6 cursor-pointer group relative overflow-hidden rounded-2xl"
              style={{ breakInside: 'avoid' }}
            >
              <img
                src={painting.image}
                alt={painting.title}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.7))' }}
              >
                <p className="text-white font-serif text-lg">{painting.title}</p>
                <p className="text-white text-xs opacity-70">{painting.medium} · {painting.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full screen modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl"
            style={{ maxWidth: '900px', width: '92%', maxHeight: '90vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-800"
              style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
            >
              ✕
            </button>

            {/* Painting */}
            <div className="md:w-3/5 overflow-hidden" style={{ minHeight: '300px' }}>
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-full object-contain"
                style={{ backgroundColor: '#f9f9f9' }}
              />
            </div>

            {/* Info + Kavya message */}
            <div className="md:w-2/5 p-8 flex flex-col justify-between" style={{ overflowY: 'auto' }}>
              <div>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#FAA300' }}>
                  Original Artwork
                </p>
                <h2 className="text-2xl font-serif mb-1" style={{ color: '#1a1a1a' }}>
                  {selected.title}
                </h2>
                <p className="text-sm text-gray-400 mb-6">
                  {selected.medium} · {selected.year}
                </p>

                {/* Kavya's message */}
                <div
                  className="rounded-2xl p-5"
                  style={{ backgroundColor: '#FFF8F0' }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                      style={{ backgroundColor: '#FAA300' }}
                    >
                      K
                    </div>
                    <p className="text-sm font-medium" style={{ color: '#1a1a1a' }}>
                      A note from Kavya
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed italic">
                    "{selected.kavyaMessage}"
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="mt-6 px-6 py-3 rounded-full text-white text-sm font-medium transition-opacity hover:opacity-80"
                style={{ backgroundColor: '#FAA300' }}
              >
                Back to Gallery
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default GalleryPage;