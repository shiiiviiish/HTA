import React, { useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  coverImage: string;
  excerpt: string;
  content: string;
  readTime: string;
}

// ─── ADD NEW POSTS HERE ───────────────────────────────────────────────────────
// To add a new post, copy one block below and paste it at the top of the array.
// Change the id, title, date, category, coverImage, excerpt, content, readTime.
// Add the cover image to public/images/blog/ folder.
const posts: BlogPost[] = [
  {
    id: 1,
    title: 'Why I Believe Every Person is an Artist',
    date: 'May 10, 2026',
    category: 'Art & Healing',
    coverImage: '/images/blog/1.jpg',
    excerpt: 'Art is not a talent — it is a language. And like any language, it can be learned, felt, and expressed by anyone willing to try.',
    readTime: '4 min read',
    content: `
Art is not a talent — it is a language. And like any language, it can be learned, felt, and expressed by anyone willing to try.

Growing up, I was told I was "creative" as if it were something rare. But the more I worked with people through Expressive Arts Therapy, the more I realised — creativity is not rare. It is human.

Every person I have worked with, from a seven-year-old to a seventy-year-old, has surprised me with what they can express when they stop trying to be "good" at art and simply start feeling through it.

The blank canvas is not intimidating. It is an invitation.

When we pick up a brush without expectation, something magical happens. We stop performing and start expressing. We stop thinking about the outcome and start feeling the process.

That is where healing lives — not in the perfect painting, but in the honest one.

So if you have ever said "I am not an artist" — I want to gently challenge that. You are. You always have been. You just haven't given yourself permission yet.

And when you are ready, I will be here with the brushes, the colours, and all the space you need.
    `,
  },
  {
    id: 2,
    title: "The Healing Power of Colour — A Beginner's Guide",
    date: 'April 22, 2026',
    category: 'Colour Therapy',
    coverImage: '/images/blog/2.jpg',
    excerpt: 'Colours carry energy. The colours we are drawn to, the ones we avoid — they all tell a story about where we are emotionally.',
    readTime: '5 min read',
    content: `
Colours carry energy. The colours we are drawn to, the ones we avoid — they all tell a story about where we are emotionally.

Colour therapy, or chromotherapy, is the practice of using colour intentionally to support emotional and physical wellbeing. It has been used across cultures for thousands of years, and modern psychology continues to explore its effects.

Here is a simple guide to what I have observed working with colour in my sessions:

**Yellow** — joy, optimism, mental clarity. When someone reaches for yellow instinctively, they are often seeking lightness. It is the colour of sunshine and new beginnings.

**Blue** — calm, trust, depth. Blue slows the nervous system. People who are overwhelmed often find peace in painting with blue.

**Red** — energy, passion, courage. Red can feel intense, but it is also deeply grounding. It connects us to the body and to action.

**Green** — balance, growth, healing. The colour of nature. Green reminds us to breathe, to be patient, to trust the process.

**Pink** — love, softness, compassion. Pink is gentle. It invites tenderness — towards ourselves and others.

In my workshops, I never tell participants which colours to use. Instead, I watch which ones they reach for. Those instinctive choices are always the most honest.

Try this at home: the next time you are feeling a strong emotion, pick a colour that matches it and paint freely. Don't worry about what it looks like. Just let the colour speak.

You might be surprised by what comes out.
    `,
  },
  {
    id: 3,
    title: 'Behind the Canvas — The Story of the Shimla Exhibit',
    date: 'March 15, 2026',
    category: 'Behind the Canvas',
    coverImage: '/images/blog/3.jpg',
    excerpt: 'The mountains of Shimla taught me something I had been trying to learn for years — that art does not need a perfect setting. It just needs an honest heart.',
    readTime: '6 min read',
    content: `
The mountains of Shimla taught me something I had been trying to learn for years — that art does not need a perfect setting. It just needs an honest heart.

When I first decided to exhibit in Shimla, people thought it was an unusual choice. Why not Chandigarh? Why not Delhi? But something about the hills called to me. There is a quietness in the mountains that strips everything back to what is essential.

I spent three weeks preparing for the exhibit. Every morning I would wake up, look at the pine trees outside my window, and let whatever I saw inspire what went onto the canvas that day.

Some days it was the colour of the morning mist — soft greys and pale blues bleeding into each other. Other days it was the sharp contrast of bright wildflowers against dark soil.

The exhibit brought together people from all walks of life — artists, therapists, teachers, tourists who had simply wandered in. What struck me most was how differently each person responded to the same piece. One woman stood in front of a painting for fifteen minutes without saying a word. When she finally turned to me, her eyes were full of tears. "It looks exactly like how grief feels," she said.

That is the moment I understood — truly understood — why I make art.

Not to be seen. But to create space for others to feel seen.

The Shimla Exhibit will always hold a special place in my journey. It was the first time I truly let go of what I thought art should be — and simply let it be.
    `,
  },
  {
    id: 4,
    title: 'What Happens in an Expressive Arts Therapy Session?',
    date: 'February 8, 2026',
    category: 'Workshops',
    coverImage: '/images/blog/4.jpg',
    excerpt: 'People often come to my sessions with one question: "But I am not creative — will that be a problem?" The answer is always the same — no. In fact, it might be your greatest strength.',
    readTime: '5 min read',
    content: `
People often come to my sessions with one question: "But I am not creative — will that be a problem?" The answer is always the same — no. In fact, it might be your greatest strength.

Expressive Arts Therapy is not about making beautiful art. It is about using the creative process as a tool for self-exploration, emotional release, and healing.

Here is what a typical session with me looks like:

**We begin with a check-in.** I ask how you are feeling — not just "fine" or "okay," but really feeling. Sometimes this takes a few minutes. That is okay.

**We set an intention.** Maybe you want to explore a difficult emotion. Maybe you just want to feel lighter. We name it together.

**We create.** I offer materials — paint, pastels, collage, clay — and you choose what calls to you. There is no brief, no theme, no right answer. Just you and the materials.

**We reflect.** After creating, we talk about the experience. Not about what the piece "means" in a technical sense, but about what came up for you while making it. Often, this is where the most profound insights emerge.

**We close.** We end with a grounding exercise — sometimes breathing, sometimes writing — to bring you back to the present.

Sessions can be one-to-one or in groups. Both have their own beauty. In groups, there is something powerful about creating alongside others — each person on their own journey, but sharing the same space.

If you have been curious about trying a session, I would love to hear from you. There is no experience needed. Just a willingness to show up as you are.

That is more than enough.
    `,
  },
];

const categories = ['All', 'Art & Healing', 'Colour Therapy', 'Behind the Canvas', 'Personal Stories', 'Workshops'];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filtered = activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="py-20 px-6 text-center" style={{ backgroundColor: '#F5DD61' }}>
        <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#FF6B35' }}>
          Kavya Atray
        </p>
        <h1 className="text-5xl font-serif mb-4" style={{ color: '#1a1a1a' }}>The HTA Blog</h1>
        <p className="text-gray-700 text-lg max-w-xl mx-auto">
          Thoughts on art, healing, colour, and the beautiful mess of being human.
        </p>
      </div>

      {/* Category filters */}
      <div className="py-8 px-6 max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: activeCategory === cat ? '#FAA300' : '#f5f5f5',
                color: activeCategory === cat ? 'white' : '#555',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {filtered.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="cursor-pointer group rounded-2xl overflow-hidden border hover:shadow-xl transition-all duration-300"
            >
              {/* Cover image */}
              <div className="relative overflow-hidden" style={{ height: '240px', backgroundColor: '#f5f5f5' }}>
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute top-3 left-3">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: '#FAA300' }}
                  >
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post info */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <p className="text-xs text-gray-400">{post.date}</p>
                  <span className="text-gray-300">·</span>
                  <p className="text-xs text-gray-400">{post.readTime}</p>
                </div>
                <h2 className="font-serif text-xl mb-3 group-hover:text-orange-500 transition-colors" style={{ color: '#1a1a1a' }}>
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <span className="text-sm font-medium" style={{ color: '#FAA300' }}>
                  Read more →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full post modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="relative bg-white rounded-3xl overflow-hidden shadow-2xl"
            style={{ maxWidth: '720px', width: '92%', maxHeight: '90vh', overflowY: 'auto' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-800"
              style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
            >
              ✕
            </button>

            {/* Cover */}
            <div style={{ height: '280px', backgroundColor: '#f5f5f5' }}>
              <img
                src={selectedPost.coverImage}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full text-white mb-4 inline-block"
                style={{ backgroundColor: '#FAA300' }}
              >
                {selectedPost.category}
              </span>

              <h1 className="text-3xl font-serif mb-3" style={{ color: '#1a1a1a' }}>
                {selectedPost.title}
              </h1>

              <div className="flex items-center gap-3 mb-6">
                <p className="text-sm text-gray-400">{selectedPost.date}</p>
                <span className="text-gray-300">·</span>
                <p className="text-sm text-gray-400">{selectedPost.readTime}</p>
                <span className="text-gray-300">·</span>
                <p className="text-sm font-medium" style={{ color: '#FAA300' }}>Kavya Atray</p>
              </div>

              <div className="border-t border-gray-100 pt-6">
                {selectedPost.content.trim().split('\n\n').map((para, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed mb-4" style={{ whiteSpace: 'pre-line' }}>
                    {para}
                  </p>
                ))}
              </div>

              {/* CTA */}
              <div
                className="mt-8 p-6 rounded-2xl text-center"
                style={{ backgroundColor: '#FFF8F0' }}
              >
                <p className="font-serif text-lg mb-2" style={{ color: '#1a1a1a' }}>
                  Want to experience art therapy with Kavya?
                </p>
                <a
                  href="https://wa.me/919877591063?text=Hey Kavya! I read your blog and would love to book a session."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-full text-white text-sm font-medium mt-2 transition-opacity hover:opacity-80"
                  style={{ backgroundColor: '#FAA300' }}
                >
                  Book a Session with Kavya →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default BlogPage;