import React from 'react';

const collaborations = [
  {
    title: "Art × Healing",
    imageUrl: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80",
    description: "Kavya combines her artistic talent with therapeutic practice to create pieces that don't just look beautiful — they heal."
  },
  {
    title: "Custom Commissions",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80",
    description: "Want something personal and unique? Kavya takes custom art commissions — a perfect personalised gift for someone special."
  }
];

const CollaborationSection = () => {
  return (
    <section className="py-20 px-4 md:px-8" style={{backgroundColor: '#59D5E0'}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-white">What Makes Us Special</h2>
          <p className="text-white max-w-2xl mx-auto">
            Every piece tells a story. Every session makes a difference.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {collaborations.map((collab, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src={collab.imageUrl}
                  alt={collab.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif mb-3">{collab.title}</h3>
                <p className="text-gray-600 leading-relaxed">{collab.description}</p>
                <button className="mt-6 px-6 py-2 rounded-full text-white text-sm font-medium" style={{backgroundColor: '#F4538A'}}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
