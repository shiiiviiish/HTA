import React from 'react';

const gifts = [
  {
    title: "Art Prints",
    imageUrl: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80",
    link: "/"
  },
  {
    title: "Handmade Bookmarks",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80",
    link: "/"
  },
  {
    title: "Gift Sets",
    imageUrl: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&q=80",
    link: "/"
  }
];

const GiftsSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-4">
          Explore <span className="italic">meaningful gifts</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Handcrafted with love by Kavya — perfect for every occasion
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {gifts.map((gift, index) => (
          <a href={gift.link} key={index} className="group flex flex-col">
            <div className="aspect-square mb-4 overflow-hidden rounded-2xl">
              <img
                src={gift.imageUrl}
                alt={gift.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-serif mb-1">{gift.title}</h3>
            <p className="text-sm font-medium" style={{color: '#FAA300'}}>Shop Now →</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default GiftsSection;