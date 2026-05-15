import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    rating: 5,
    title: "Absolutely beautiful artwork!",
    review: "Kavya's paintings are stunning. I bought one for my living room and it completely transformed the space. The colours are so vibrant and full of life!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  },
  {
    name: "Ananya Mehta",
    rating: 5,
    title: "Therapy sessions changed my life",
    review: "I was skeptical at first but Kavya's therapy sessions have been truly life changing. She creates such a safe and warm space. Highly recommend!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
  },
  {
    name: "Riya Gupta",
    rating: 5,
    title: "The bookmarks are so cute!",
    review: "I ordered a set of bookmarks and they are the most beautiful things I own. Such attention to detail. Will definitely be ordering more!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">What People Say</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real experiences from people who've connected with Kavya's art and therapy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="rounded-2xl p-6" style={{backgroundColor: index === 0 ? '#F5DD61' : index === 1 ? '#59D5E0' : '#F4538A'}}>
              <div className="flex items-center gap-4 mb-4">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h3 className="font-bold text-gray-900">{t.name}</h3>
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-white text-white" />
                    ))}
                  </div>
                </div>
              </div>
              <h4 className="font-bold mb-2 text-gray-900">{t.title}</h4>
              <p className="text-gray-800 text-sm leading-relaxed">{t.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
