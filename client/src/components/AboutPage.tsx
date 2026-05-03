import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">

      <div className="py-20 px-6 text-center" style={{backgroundColor: '#F5DD61'}}>
        <h1 className="text-5xl font-serif mb-4">About Kavya</h1>
        <p className="text-lg text-gray-700">Artist. Therapist. Creator of happiness.</p>
      </div>

      <div className="py-16 px-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl h-80 flex items-center justify-center" style={{backgroundColor: '#59D5E0'}}>
            <p className="text-white text-lg font-medium">Kavya's photo coming soon</p>
          </div>
          <div>
            <h2 className="text-3xl font-serif mb-6">Hi, I'm Kavya Atray</h2>
            <p className="text-gray-600 mb-4">
              I'm an artist and therapist who believes that art has the power to heal, inspire, and bring genuine happiness into our lives.
            </p>
            <p className="text-gray-600 mb-4">
              Through my work — whether it's a painting, a bookmark, or a therapy session — my goal is always the same: to help people feel more joy and peace.
            </p>
            <p className="text-gray-600">
              Happiness Through Art is more than a brand. It's my life's purpose.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-6 text-center" style={{backgroundColor: '#F4538A'}}>
        <h2 className="text-3xl font-serif mb-8 text-white">What Drives Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="font-bold mb-2">Art</h3>
            <p className="text-gray-600 text-sm">Creating original pieces that bring colour to everyday life.</p>
          </div>
          <div className="bg-white rounded-2xl p-6">
            <div className="text-3xl mb-3">💆</div>
            <h3 className="font-bold mb-2">Healing</h3>
            <p className="text-gray-600 text-sm">Helping people navigate life with more ease and joy.</p>
          </div>
          <div className="bg-white rounded-2xl p-6">
            <div className="text-3xl mb-3">✨</div>
            <h3 className="font-bold mb-2">Happiness</h3>
            <p className="text-gray-600 text-sm">Everyone deserves a life full of colour and peace.</p>
          </div>
        </div>
      </div>

      <div className="py-16 px-6 text-center">
        <h2 className="text-3xl font-serif mb-4">Want to connect?</h2>
        <p className="text-gray-600 mb-8">Reach out for art, therapy or just to say hi!</p>
        <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full text-white font-medium" style={{backgroundColor: '#FAA300'}}>
          Say Hello
        </a>
      </div>

    </div>
  );
};

export default AboutPage;