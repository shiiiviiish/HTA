import React from 'react';
import kavyaPhoto from '../assets/kavyaabout1.jpg';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">

      <div className="py-20 px-6 text-center" style={{backgroundColor: '#F5DD61'}}>
        <h1 className="text-5xl mb-4" style={{fontFamily: "'MoglanDemo', serif", color: '#5C3317'}}>About Kavya</h1><p className="text-lg text-gray-700">Artist. Therapist. Creator of happiness.</p>
        
      </div>

      <div className="py-16 px-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden" style={{height: '480px'}}>
  <img 
    src={kavyaPhoto} 
    alt="Kavya Atray" 
    className="w-full h-full object-cover rounded-2xl"
  />
</div>
          <div>
            <h2 className="text-3xl font-serif mb-6" >Hi, I'm Kavya Atray</h2>
            <p className="text-gray-600 mb-4 leading-relaxed text-justify">
              I’m Kavya, founder of Happiness Through Art, a creative wellbeing initiative rooted in Expressive Arts Therapy approaches. Through workshops and creative practices, I support emotional wellbeing, self-awareness, and inner growth using simple, accessible forms of expression.
My work brings together creativity, psychology, and spirituality to help individuals and groups manage stress, process emotions, and reconnect with themselves in a safe, non-judgmental space. Through Happiness Through Art, I continue to expand these offerings both offline and online, with a focus on emotional release, clarity, and deeper self-connection through art.
            </p>
            
          </div>
        </div>
      </div>
      <div className="py-12 px-6 text-center rounded-2xl mt-8" style={{backgroundColor: '#F5DD61'}}>
  <img
    src="/images/Joey.gif"
    alt="Joey"
    className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-lg"
    style={{border: '3px solid #FAA300'}}
  />
  <h3 className="text-2xl font-serif mb-2" style={{color: '#5C3317'}}>And this is Joey!</h3>
  <p className="text-gray-700 max-w-lg mx-auto text-sm">
    Kavya's beloved beagle and the heart of the HTA studio. Every painting gets Joey's seal of approval before it finds its forever home! 🐾
  </p>
</div>

      <div className="py-16 px-6 text-center" style={{backgroundColor: '#F4538A'}}>
        <h2 className="text-3xl font-serif mb-8 text-white">What Drives Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="font-bold mb-2">Made with Love</h3>
            <p className="text-gray-600 text-sm">Beautiful art pieces, bookmarks, and prints created to brighten up your home and daily routine.</p>
          </div>
          <div className="bg-white rounded-2xl p-6">
            <div className="text-3xl mb-3">💆</div>
            <h3 className="font-bold mb-2">Happy Minds</h3>
            <p className="text-gray-600 text-sm">Helping you clear your head and feel happier through creative art-sharing sessions.</p>
          </div>
          <div className="bg-white rounded-2xl p-6">
            <div className="text-3xl mb-3">✨</div>
            <h3 className="font-bold mb-2">Art Workshops</h3>
            <p className="text-gray-600 text-sm">Bringing people together in different cities to create memories, laugh, and learn together.</p>
          </div>
        </div>
      </div>

      <div className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-8">Kavya's Mission</h2>
        <p className="text-gray-600 text-center leading-relaxed max-w-2xl mx-auto">
          Through Happiness Through Art, Kavya continues to grow and expand her offerings — both offline and online — with a focus on emotional release, clarity, and building a deeper connection with oneself through art.
        </p>
      </div>

      <div className="py-16 px-6 text-center" style={{backgroundColor: '#F5DD61'}}>
        <h2 className="text-3xl font-serif mb-4">Let’s Start a Conversation</h2>
        <p className="text-gray-600 mb-8">Whether you're looking for a bespoke painting, a healing session, or a collaborative project—our doors are always open!.</p>
        <a href="https://wa.me/919877591063?text=Heyyyyyyy! I just finished reading your story and would love to connect with you! 💛✨" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full text-white font-medium" style={{backgroundColor: '#FAA300'}}>
          Let's Connect ✨
        </a>
      </div>

    </div>
  );
};

export default AboutPage;
