import React from 'react';

const exhibitionData: Record<string, {
  title: string;
  date: string;
  location: string;
  description: string;
  color: string;
  photos: string[];
  stories?: { tag: string; title: string; text: string; photo: string }[];
  stats?: { num: string; label: string }[];
  quote?: string;
}> = {
  'the-shimla-exhibit': {
    title: 'The Shimla Exhibit',
    date: '2026',
    location: 'Shimla, Himachal Pradesh',
    color: '#F5DD61',
    description: 'An exhibition held in the hills of Shimla, bringing art and healing to the mountains. Kavya Atray showcased original works inspired by nature, peace, and the journey of self-discovery.',
    quote: 'Every stroke is a heartbeat of joy.',
    photos: [
      '/images/exhibitions/shimla/1.jpg',
      '/images/exhibitions/shimla/2.jpg',
      '/images/exhibitions/shimla/3.jpg',
      '/images/exhibitions/shimla/4.jpg',
      '/images/exhibitions/shimla/5.jpg',
      '/images/exhibitions/shimla/6.jpg',
    ],
  },

  'sector-17-unfiltered': {
    title: 'Sector 17: Unfiltered',
    date: '',
    location: 'Sector 17, Chandigarh',
    color: '#59D5E0',
    description: 'An open and unapologetic showcase of art at the heart of Chandigarh. Art that does not ask for permission — it simply speaks.',
    photos: [
      '/images/exhibitions/sector17/1.jpg',
      '/images/exhibitions/sector17/2.jpg',
      '/images/exhibitions/sector17/3.jpg',
      '/images/exhibitions/sector17/4.jpg',
      '/images/exhibitions/sector17/5.jpg',
      '/images/exhibitions/sector17/6.jpg',
    ],
    stories: [
      {
        tag: 'The Venue',
        title: 'Heart of the city',
        text: "Sector 17 — Chandigarh's beating cultural heart — became the canvas for an unfiltered expression of art and identity.",
        photo: '/images/exhibitions/sector17/1.jpg',
      },
      {
        tag: 'The Art',
        title: 'Breaking boundaries',
        text: 'No filters, no pretense. Just raw creative energy that spoke directly to anyone who stopped to look.',
        photo: '/images/exhibitions/sector17/2.jpg',
      },
      {
        tag: 'The People',
        title: 'A community gathers',
        text: 'Strangers became part of the same story — connected by colour, emotion, and the shared experience of art.',
        photo: '/images/exhibitions/sector17/3.jpg',
      },
    ],
  },

  'creative-hub-chitkara': {
    title: 'Creative Hub',
    date: '',
    location: 'Chitkara University',
    color: '#F4538A',
    description: 'A vibrant workshop and exhibition at Chitkara University where students discovered the healing power of art. Bold ideas, young energy, and the belief that creativity changes how we feel from the inside out.',
    stats: [
      { num: '50+', label: 'Students' },
      { num: '1', label: 'Day' },
      { num: '∞', label: 'Memories' },
    ],
    photos: [
      '/images/exhibitions/chitkara/1.jpg',
      '/images/exhibitions/chitkara/2.jpg',
      '/images/exhibitions/chitkara/3.jpg',
      '/images/exhibitions/chitkara/4.jpg',
      '/images/exhibitions/chitkara/5.jpg',
      '/images/exhibitions/chitkara/6.jpg',
    ],
  },
};

// ─── SHIMLA: Dark Magazine Editorial ─────────────────────────────────────────
const ShimlaContent = ({ ex, onClose }: any) => (
  <div style={{ backgroundColor: '#0f0f0f', minHeight: '100%' }}>
    <div className="px-6 pt-10 pb-8" style={{ borderBottom: '0.5px solid #2a2a2a' }}>
      <button
        onClick={onClose}
        className="text-xs uppercase tracking-widest mb-8 block transition-opacity hover:opacity-60"
        style={{ color: 'rgba(255,255,255,0.4)' }}
      >
        ✕ Close
      </button>
      <span
        className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
        style={{ backgroundColor: '#F5DD61', color: '#1a1a1a' }}
      >
        {ex.date} · {ex.location}
      </span>
      <h1 className="font-serif mb-3" style={{ fontSize: '44px', lineHeight: 1.1, color: 'white' }}>
        {ex.title}
      </h1>
      <p className="text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>
        Kavya Atray's biggest exhibit yet
      </p>
    </div>

    <div className="px-6 py-10">
      <div className="pl-6 mb-10" style={{ borderLeft: '3px solid #F5DD61' }}>
        <p className="text-xl font-serif italic" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
          "{ex.quote}"
        </p>
        <p className="text-xs uppercase tracking-widest mt-3" style={{ color: '#F5DD61' }}>
          — Kavya Atray
        </p>
      </div>

      {/* All photos full size, stacked */}
      <div className="flex flex-col gap-4">
        {ex.photos.map((photo: string, i: number) => (
          <img
            key={i}
            src={photo}
            alt={`Photo ${i + 1}`}
            className="w-full rounded-lg"
            style={{ objectFit: 'contain', backgroundColor: '#1a1a1a' }}
          />
        ))}
      </div>

      <p className="text-sm leading-relaxed mt-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
        {ex.description}
      </p>
    </div>
  </div>
);

// ─── SECTOR 17: Warm Story Scroll ────────────────────────────────────────────
const Sector17Content = ({ ex, onClose }: any) => (
  <div className="bg-white" style={{ minHeight: '100%' }}>
    <div className="py-12 px-6 text-center" style={{ backgroundColor: '#59D5E0' }}>
      <button
        onClick={onClose}
        className="mb-4 text-sm font-medium block mx-auto transition-opacity hover:opacity-60"
        style={{ color: 'rgba(0,0,0,0.5)' }}
      >
        ✕ Close
      </button>
      <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'rgba(0,0,0,0.4)' }}>
        {ex.location}
      </p>
      <h1 className="text-4xl font-serif" style={{ color: '#1a1a1a' }}>{ex.title}</h1>
    </div>

    <div className="py-10 px-6 max-w-2xl mx-auto text-center">
      <p className="text-gray-500 leading-relaxed">{ex.description}</p>
    </div>

    <div className="flex items-center gap-4 max-w-xs mx-auto px-6 mb-12">
      <div className="flex-1" style={{ borderTop: '1px dashed #e0e0e0' }} />
      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#59D5E0' }} />
      <div className="flex-1" style={{ borderTop: '1px dashed #e0e0e0' }} />
    </div>

    <div className="max-w-2xl mx-auto px-6 mb-12">
      {ex.stories.map((story: any, index: number) => (
        <div
          key={index}
          className="flex flex-col gap-6 mb-12 pb-12"
          style={{ borderBottom: index < ex.stories.length - 1 ? '1px solid #f5f5f5' : 'none' }}
        >
          {/* Full photo — no crop at all */}
          <img
            src={story.photo}
            alt={story.title}
            className="w-full rounded-2xl"
            style={{ objectFit: 'contain', backgroundColor: '#f9f9f9' }}
          />
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest block mb-2" style={{ color: '#59D5E0' }}>
              {story.tag}
            </span>
            <h3 className="text-xl font-serif mb-3" style={{ color: '#1a1a1a' }}>{story.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{story.text}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Remaining photos full size */}
    {ex.photos.slice(ex.stories.length).length > 0 && (
      <div className="max-w-2xl mx-auto px-6 mb-12">
        <p className="text-xs text-center uppercase tracking-widest text-gray-300 mb-6">More from the exhibit</p>
        <div className="flex flex-col gap-4">
          {ex.photos.slice(ex.stories.length).map((photo: string, i: number) => (
            <img
              key={i}
              src={photo}
              alt={`Photo ${i + 1}`}
              className="w-full rounded-xl"
              style={{ objectFit: 'contain', backgroundColor: '#f9f9f9' }}
            />
          ))}
        </div>
      </div>
    )}
  </div>
);

// ─── CHITKARA: Gallery Wall ───────────────────────────────────────────────────
const ChitkaraContent = ({ ex, onClose }: any) => (
  <div className="bg-white" style={{ minHeight: '100%' }}>
    <div className="py-12 px-6 text-center" style={{ backgroundColor: '#F4538A' }}>
      <button
        onClick={onClose}
        className="mb-4 text-sm font-medium block mx-auto transition-opacity hover:opacity-70"
        style={{ color: 'rgba(255,255,255,0.7)' }}
      >
        ✕ Close
      </button>
      <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
        {ex.location}
      </p>
      <h1 className="text-4xl font-serif text-white mb-1">{ex.title}</h1>
      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>Where young minds meet healing art</p>
    </div>

    {ex.stats && (
      <div className="grid border-b" style={{ gridTemplateColumns: `repeat(${ex.stats.length}, 1fr)`, borderColor: '#f0f0f0' }}>
        {ex.stats.map((stat: any, i: number) => (
          <div key={i} className="text-center py-5" style={{ borderRight: i < ex.stats.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
            <span className="block text-2xl font-serif mb-1" style={{ color: '#F4538A' }}>{stat.num}</span>
            <span className="text-xs uppercase tracking-widest text-gray-400">{stat.label}</span>
          </div>
        ))}
      </div>
    )}

    <div className="py-8 px-6 max-w-2xl mx-auto text-center">
      <p className="text-gray-500 leading-relaxed">{ex.description}</p>
    </div>

    {/* All photos full size stacked */}
    <div className="px-6 max-w-2xl mx-auto mb-10 flex flex-col gap-4">
      {ex.photos.map((photo: string, i: number) => (
        <img
          key={i}
          src={photo}
          alt={`Photo ${i + 1}`}
          className="w-full rounded-xl"
          style={{ objectFit: 'contain', backgroundColor: '#fff0f5', display: 'block' }}
        />
      ))}
    </div>

    <div className="mx-6 mb-10 rounded-2xl py-8 px-6 text-center" style={{ backgroundColor: '#FFF0F5' }}>
      <h3 className="text-lg font-serif mb-2" style={{ color: '#F4538A' }}>Want to bring HTA to your campus?</h3>
      <p className="text-sm text-gray-400 mb-4">Kavya runs workshops and exhibitions for universities and schools.</p>
      <button
        onClick={onClose}
        className="px-6 py-2 rounded-full text-white text-sm font-medium"
        style={{ backgroundColor: '#F4538A' }}
      >
        Get in touch
      </button>
    </div>
  </div>
);

// ─── Main Panel Component ─────────────────────────────────────────────────────
interface ExhibitionPanelProps {
  id: string | null;
  onClose: () => void;
}

const ExhibitionPanel = ({ id, onClose }: ExhibitionPanelProps) => {
  const ex = id ? exhibitionData[id] : null;
  const isOpen = !!id && !!ex;

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 998,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      />
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '90%',
          maxWidth: '680px',
          zIndex: 999,
          overflowY: 'auto',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          backgroundColor: '#fff',
        }}
      >
        {ex && id === 'the-shimla-exhibit' && <ShimlaContent ex={ex} onClose={onClose} />}
        {ex && id === 'sector-17-unfiltered' && <Sector17Content ex={ex} onClose={onClose} />}
        {ex && id === 'creative-hub-chitkara' && <ChitkaraContent ex={ex} onClose={onClose} />}
      </div>
    </>
  );
};

export default ExhibitionPanel;