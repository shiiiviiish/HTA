import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    rating: 5,
    title: "Absolutely beautiful artwork!",
    review: "Kavya's paintings are stunning. I bought one for my living room and it completely transformed the space. The colours are so vibrant and full of life!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    color: '#F5DD61'
  },
  {
    name: "Ayush Burman",
    rating: 5,
    title: "Absolutely beautiful artwork! It completely changed the energy of my room!.",
    review: "The art piece you gave me, with a diya glowing before it, feels like the most spiritual combination I have ever encountered!.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    color: '#59D5E0'
  },
  {
    name: "Riya Gupta",
    rating: 5,
    title: "The bookmarks are so cute!",
    review: "I ordered a set of bookmarks and they are the most beautiful things I own. Such attention to detail. Will definitely be ordering more!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
    color: '#F4538A'
  },
  {
    name: "Sneha Kapoor",
    rating: 5,
    title: "Best gift I ever gave!",
    review: "Bought a painting as a birthday gift for my mom and she absolutely loved it. Kavya's art has such warmth and emotion in every piece!",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80",
    color: '#FAA300'
  },
  {
    name: "Divya Nair",
    rating: 5,
    title: "The diary is gorgeous!",
    review: "I got the Van Gogh diary and I cannot stop staring at it. The quality is amazing and makes journaling feel so special every day!",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80",
    color: '#FF6B35'
  },
  {
    name: "Meera Joshi",
    rating: 5,
    title: "A beautiful space where you can just be yourself without any judgment",
    review: "I attended one of Kavya's art therapy workshops and it was one of the most healing experiences of my life. Truly gifted at what she does!",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80",
    color: '#59D5E0'
  },
  {
    name: "Aisha Khan",
    rating: 5,
    title: "Postcards made my day!",
     review: "Yes! Your art pieces are an Art Therapy! A beautiful mind making the world a happier place, one artwork at a time!",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80",
    color: '#F5DD61'
  },
  {
    name: "Tanvi Singh",
    rating: 5,
    title: "Tote bag gets compliments everywhere!",
    review: "I carry my HTA tote bag everywhere and people always stop to ask where I got it. So unique and beautifully made. Love it!",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80",
    color: '#F4538A'
  },
];

const TestimonialCard = ({ t }: { t: typeof testimonials[0] }) => (
  <div
    className="rounded-2xl p-6 mx-4 flex-shrink-0 hover:scale-105 transition-transform duration-300"
    style={{backgroundColor: t.color, width: '320px'}}
  >
    <div className="flex items-center gap-4 mb-4">
      <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <h3 className="font-bold text-gray-900 text-sm">{t.name}</h3>
        <div className="flex gap-1">
          {[...Array(t.rating)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-white text-white" />
          ))}
        </div>
      </div>
    </div>
    <h4 className="font-bold mb-2 text-gray-900 text-sm">{t.title}</h4>
    <p className="text-gray-800 text-xs leading-relaxed">{t.review}</p>
  </div>
);

const TestimonialsSection = () => {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">The HTA Experience</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Shared moments from those who have created and connected with us.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          animation: ticker 30s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative">
        <div className="flex ticker-track" style={{width: 'max-content'}}>
          {doubled.map((t, index) => (
            <TestimonialCard key={index} t={t} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default TestimonialsSection;
