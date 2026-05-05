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
  'colors-of-healing': {
    title: 'Colors of Healing',
    date: 'March 2024',
    location: 'Delhi Art Gallery, New Delhi',
    color: '#F5DD61',
    description: 'An intimate exhibition exploring how color therapy and expressive painting helped participants process emotions and find inner calm. Over 20 original works were created during live therapy sessions with Kavya Atray. Each piece tells a unique story of healing, hope, and self-discovery through art.',
    photos: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600',
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600',
      'https://images.unsplash.com/photo-1578926288207-a90a5366e123?w=600',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600',
    ],
  },
  'brushstrokes-and-breaths': {
    title: 'Brushstrokes and Breaths',
    date: 'July 2024',
    location: 'The Creative Studio, Gurugram',
    color: '#59D5E0',
    description: 'A weekend workshop where 30 participants learned mindful painting techniques. Each brushstroke was paired with breathing exercises, creating a deeply meditative art experience. Participants left with original artwork and tools to manage stress and anxiety through creativity.',
    photos: [
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600',
      'https://images.unsplash.com/photo-1578926288207-a90a5366e123?w=600',
    ],
  },
  'art-as-medicine': {
    title: 'Art as Medicine',
    date: 'November 2024',
    location: 'Community Center, Sonipat',
    color: '#F4538A',
    description: 'A community-focused event bringing art therapy to local schools and NGOs. Over 100 children participated in guided art sessions designed to boost confidence and emotional expression. This event was a reminder that art is not just beautiful — it is transformative and healing.',
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
        <p className="text-white opacity-80 text-lg">{ex.date} - {ex.location}</p>
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