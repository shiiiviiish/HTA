import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const exhibitionData: Record<string, {
  title: string;
  date: string;
  location: string;
  description: string;
  color: string;
  photos: string[];
}> = {
  'the-shimla-exhibit': {
    title: 'The Shimla Exhibit',
    date: '2026',
    location: 'Shimla',
    color: '#F5DD61',
    description: 'A beautiful exhibition held in the hills of Shimla, bringing art and healing to the mountains. Kavya Atray showcased original works inspired by nature, peace, and the journey of self-discovery. Visitors experienced art in its most raw and honest form.',
    photos: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600',
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600',
      'https://images.unsplash.com/photo-1578926288207-a90a5366e123?w=600',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600',
    ],
  },
  'sector-17-unfiltered': {
    title: 'Sector 17: Unfiltered',
    date: '',
    location: 'Sector 17, Chandigarh',
    color: '#59D5E0',
    description: 'An open and unapologetic showcase of art at the heart of Chandigarh. Sector 17: Unfiltered was about breaking boundaries and expressing what is real. Art that does not ask for permission — it simply speaks.',
    photos: [
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600',
      'https://images.unsplash.com/photo-1578926288207-a90a5366e123?w=600',
    ],
  },
  'creative-hub-chitkara': {
    title: 'Creative Hub (Chitkara)',
    date: '',
    location: 'Chitkara University',
    color: '#F4538A',
    description: 'A vibrant workshop and exhibition at Chitkara University where students discovered the healing power of art. Creative Hub was a celebration of young minds, bold ideas, and the belief that creativity can change how we feel from the inside out.',
    photos: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600',
      'https://images.unsplash.com/photo-1578926288207-a90a5366e123?w=600',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600',
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600',
    ],
  },
};

const ExhibitionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const ex = id ? exhibitionData[id] : null;

  if (!ex) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif mb-4">Exhibition not found</h1>
          <button onClick={() => navigate('/our-journey')} className="px-6 py-3 rounded-full text-white" style={{ backgroundColor: '#FAA300' }}>
            Back to Our Journey
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      <div className="py-20 px-6 text-center" style={{ backgroundColor: ex.color }}>
        <button
          onClick={() => navigate('/our-journey')}
          className="mb-6 text-sm font-medium opacity-70 hover:opacity-100 transition-opacity block mx-auto"
        >
          Back to Our Journey
        </button>
        <h1 className="text-5xl font-serif mb-4 text-white">{ex.title}</h1>
        <p className="text-white opacity-80 text-lg">{ex.date} {ex.location}</p>
      </div>

      <div className="py-16 px-6 max-w-4xl mx-auto">
        <p className="text-gray-600 text-lg leading-relaxed text-center mb-16">{ex.description}</p>
        <h2 className="text-3xl font-serif text-center mb-8">Photos</h2>
        <div className="grid grid-cols-2 gap-4">
          {ex.photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={'Photo ' + (index + 1)}
              className="rounded-2xl w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>

      <div className="py-12 px-6 text-center">
        <button
          onClick={() => navigate('/our-journey')}
          className="px-8 py-3 rounded-full text-white font-medium"
          style={{ backgroundColor: '#FAA300' }}
        >
          Back to Our Journey
        </button>
      </div>

    </div>
  );
};

export default ExhibitionPage;
