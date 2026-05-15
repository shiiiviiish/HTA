import React from 'react';

const categories = [
  {
    title: "Original Paintings",
    subtitle: "Shop Paintings",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80",
    link: "/"
  },
  {
    title: "Handmade Bookmarks",
    subtitle: "Shop Bookmarks",
    imageUrl: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&q=80",
    link: "/"
  },
  {
    title: "Art Prints & More",
    subtitle: "Shop All",
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80",
    link: "/"
  }
];

const CategoryCard = ({ title, subtitle, imageUrl, link }: {title: string, subtitle: string, imageUrl: string, link: string}) => (
  <div className="flex flex-col">
    <a href={link} className="group">
      <div className="aspect-square mb-5 overflow-hidden rounded-2xl">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="text-2xl font-serif mb-1">{title}</h3>
      <p className="text-sm font-medium" style={{color: '#FAA300'}}>{subtitle} →</p>
    </a>
  </div>
);

const CategoriesSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-6">
          Art to <span className="italic">treasure, heal & inspire</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
