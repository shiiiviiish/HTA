import React from 'react';

const testimonials = [
  {
    text: "The play and movement workshop by Kavya was an enriching experience. It made me reminisce the games we played and fun we had as children, making me feel fresh, relaxed and above all HAPPY. Waiting for more such exciting workshops.",
    name: "Sakshi Mengi",
  },
  {
    text: "Arts Based Therapy has helped me a lot. Since I don't always need to express everything I feel through words, its even better. I can draw and write what I feel. Both the things have really helped me a lot.",
    name: "Raha ",
  },
  {
    text: "Attended a group session conducted by Kavya. The session was a great way of bonding with everyone. It was a wonderful session and I don't remember the last time I had so much fun.",
    name: "Ashima Kapoor",
  },
  {
    text: "I really enjoyed the program conducted by Kavya. The concepts regarding Art based Therapy were the theme of the event that really brought a light of inspiration for me to appreciate and continue my skills of art. A relaxing and enjoyable way to calm your mind. Really Appreciable. Amazing!!",
    name: "Shinam Sehgal",
  },
  {
    text: "One thing is listening to how to work on something and the other is to get the energy to be able to work on that thing. Kavya gave me the latter.",
    name: "Poonam Bishnoi",
  },
];

const TherapyPage = () => {
  return (
    <div className="min-h-screen bg-white">

      <div className="py-20 px-6 md:px-12 text-center" style={{backgroundColor: '#59D5E0'}}>
        <p className="text-sm font-medium uppercase tracking-widest mb-3 text-white">Heal through art</p>
        <h1 className="text-4xl md:text-6xl font-serif mb-6 text-white">Therapy with Kavya</h1>
        <p className="text-lg text-white max-w-2xl mx-auto">
          A safe, compassionate space where art and healing come together.
          Kavya Atray combines her passion for art with therapeutic practice
          to help you find clarity, peace, and joy.
        </p>
      </div>

      <div className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12">What I Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl" style={{backgroundColor: '#F5DD61'}}>
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-3">Art Therapy</h3>
            <p className="text-gray-700">Express emotions through creative art in a guided therapeutic setting. No art experience needed.</p>
          </div>
          <div className="text-center p-8 rounded-2xl" style={{backgroundColor: '#F4538A'}}>
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-3 text-white">Talk Therapy</h3>
            <p className="text-white">One-on-one sessions to help you process emotions and find your path forward.</p>
          </div>
          <div className="text-center p-8 rounded-2xl" style={{backgroundColor: '#FAA300'}}>
            <div className="text-4xl mb-4">🌿</div>
            <h3 className="text-xl font-bold mb-3">Mindfulness</h3>
            <p className="text-gray-700">Guided mindfulness techniques to bring calm and balance into your everyday life.</p>
          </div>
        </div>
      </div>

      <div className="py-16 px-6 md:px-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4" style={{backgroundColor: '#59D5E0'}}>1</div>
            <h3 className="font-bold mb-2">Book a Session</h3>
            <p className="text-gray-600 text-sm">Reach out via WhatsApp or email to schedule your first session.</p>
          </div>
          <div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4" style={{backgroundColor: '#FAA300'}}>2</div>
            <h3 className="font-bold mb-2">Initial Consultation</h3>
            <p className="text-gray-600 text-sm">A free 15-minute call to understand your needs and goals.</p>
          </div>
          <div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4" style={{backgroundColor: '#F4538A'}}>3</div>
            <h3 className="font-bold mb-2">Begin Your Journey</h3>
            <p className="text-gray-600 text-sm">Start your healing journey with personalised therapy sessions.</p>
          </div>
        </div>
      </div>

      <div className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-4">What People Say</h2>
        <p className="text-center text-gray-500 mb-12">Real words from real people</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
              <p className="text-gray-600 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{backgroundColor: ['#59D5E0','#F4538A','#FAA300','#F5DD61','#59D5E0'][index % 5]}}>
                  {t.name.charAt(0)}
                </div>
                <p className="font-semibold text-gray-800">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 px-6 md:px-12 text-center" style={{backgroundColor: '#F5DD61'}}>
        <h2 className="text-3xl font-serif mb-4">Ready to Begin?</h2>
        <p className="text-gray-700 mb-8 max-w-xl mx-auto">
          Take the first step towards healing. Reach out to Kavya today and book your first session.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/919877591063" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full text-white font-medium" style={{backgroundColor: '#25D366'}}>
            WhatsApp Kavya
          </a>
          <a href="mailto:kavya@happinessthroughart.com" className="px-8 py-3 rounded-full font-medium border-2 border-black">
            Send an Email
          </a>
        </div>
      </div>

    </div>
  );
};

export default TherapyPage;