import React, { useState, useEffect, useRef } from 'react';

const useInView = (threshold = 0.2) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
};

const AnimatedStep = ({ item, index }: { item: any; index: number }) => {
  const { ref, inView } = useInView(0.2);
  return (
    <div
      ref={ref}
      className="text-center"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`,
      }}
    >
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-4"
        style={{ backgroundColor: '#FF6B35' }}
      >
        {item.step}
      </div>
      <h3 className="font-serif text-lg mb-2">{item.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
    </div>
  );
};

const steps = [
  { step: '01', title: 'Share Your Vision', desc: 'Tell Kavya about your space, the mood you want, and any ideas you have.' },
  { step: '02', title: 'Design & Plan', desc: 'Kavya creates a concept design and discusses colours, size and timeline.' },
  { step: '03', title: 'The Painting', desc: 'Kavya visits your space and brings the mural to life — live, in front of you.' },
  { step: '04', title: 'Your Space, Transformed', desc: 'A one-of-a-kind piece of art that is permanently yours.' },
];

const projects = [
  {
    id: 1,
    title: 'Café Mural',
    location: 'Chandigarh',
    description: 'A vibrant wall mural bringing warmth and colour to a local café space.',
    image: '/images/liveart/1.jpg',
    tag: 'Commercial',
  },
  {
    id: 2,
    title: 'Home Feature Wall',
    location: 'Mohali',
    description: 'A personalised floral mural for a living room feature wall.',
    image: '/images/liveart/2.jpg',
    tag: 'Residential',
  },
  {
    id: 3,
    title: 'School Corridor',
    location: 'Chandigarh',
    description: 'A colourful, playful mural designed to inspire young minds every day.',
    image: '/images/liveart/3.jpg',
    tag: 'Educational',
  },
  {
    id: 4,
    title: 'Office Space',
    location: 'Panchkula',
    description: 'A motivational mural transforming a plain office wall into an inspiring canvas.',
    image: '/images/liveart/4.jpg',
    tag: 'Commercial',
  },
  {
    id: 5,
    title: 'Nursery Wall Art',
    location: 'Zirakpur',
    description: 'A dreamy, soft mural created for a baby nursery — full of love and whimsy.',
    image: '/images/liveart/5.jpg',
    tag: 'Residential',
  },
  {
    id: 6,
    title: 'Community Space',
    location: 'Sector 17, Chandigarh',
    description: 'A large-scale mural celebrating the community and culture of the city.',
    image: '/images/liveart/6.jpg',
    tag: 'Public',
  },
];

const tags = ['All', 'Commercial', 'Residential', 'Educational', 'Public'];

const LiveArtPage = () => {
  const [activeTag, setActiveTag] = useState('All');
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  const filtered = activeTag === 'All' ? projects : projects.filter(p => p.tag === activeTag);

  const handleEnquire = () => {
    window.open(
      'https://wa.me/919877591063?text=Hey Kavya! I am interested in a mural/wall art project. Can we discuss?',
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="py-24 px-6 text-center" style={{ backgroundColor: '#FF6B35' }}>
        <p className="text-sm font-bold uppercase tracking-widest mb-3 text-white opacity-80">
          Kavya Atray
        </p>
        <h1 className="text-5xl font-serif text-white mb-4">Live Art</h1>
        <p className="text-white text-lg max-w-2xl mx-auto opacity-90 mb-8">
          Transforming blank walls into living stories. Murals, feature walls, and large-scale art — crafted with intention for homes, cafés, offices and beyond.
        </p>
        <button
          onClick={handleEnquire}
          className="px-8 py-3 rounded-full font-medium text-white transition-opacity hover:opacity-80"
          style={{ backgroundColor: '#1a1a1a' }}
        >
          Enquire for Your Space →
        </button>
      </div>

      {/* How it works */}
      <div className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-4">How It Works</h2>
        <p className="text-center text-gray-500 mb-12">From idea to wall — here's what the process looks like.</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <AnimatedStep key={i} item={item} index={i} />
          ))}
        </div>
      </div>

      {/* Filter tags */}
      <div className="px-6 max-w-6xl mx-auto mb-8">
        <h2 className="text-3xl font-serif text-center mb-8">Past Projects</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: activeTag === tag ? '#FF6B35' : '#f5f5f5',
                color: activeTag === tag ? 'white' : '#555',
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {filtered.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelected(project)}
              className="cursor-pointer group rounded-2xl overflow-hidden shadow-sm border hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden" style={{ height: '240px', backgroundColor: '#f9f9f9' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute top-3 left-3">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: '#FF6B35' }}
                  >
                    {project.tag}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg mb-1">{project.title}</h3>
                <p className="text-xs text-gray-400 mb-2">📍 {project.location}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 px-6 text-center" style={{ backgroundColor: '#1a1a1a' }}>
        <h2 className="text-3xl font-serif text-white mb-4">Ready to transform your space?</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Whether it's a cosy corner or an entire wall — Kavya brings your vision to life with colour, care and creativity.
        </p>
        <button
          onClick={handleEnquire}
          className="px-10 py-4 rounded-full font-medium text-white transition-opacity hover:opacity-80"
          style={{ backgroundColor: '#FF6B35' }}
        >
          Book a Mural with Kavya →
        </button>
      </div>

      {/* Project detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-white rounded-3xl overflow-hidden shadow-2xl"
            style={{ maxWidth: '680px', width: '92%', maxHeight: '90vh', overflowY: 'auto' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-800"
              style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
            >
              ✕
            </button>

            <div style={{ height: '300px', backgroundColor: '#f9f9f9' }}>
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-8">
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full text-white mb-4 inline-block"
                style={{ backgroundColor: '#FF6B35' }}
              >
                {selected.tag}
              </span>
              <h2 className="text-2xl font-serif mb-1">{selected.title}</h2>
              <p className="text-sm text-gray-400 mb-4">📍 {selected.location}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{selected.description}</p>

              <button
                onClick={handleEnquire}
                className="w-full py-3 rounded-full text-white font-medium transition-opacity hover:opacity-80"
                style={{ backgroundColor: '#FF6B35' }}
              >
                Enquire for a Similar Project →
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default LiveArtPage;
