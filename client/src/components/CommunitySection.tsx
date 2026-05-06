import React from 'react';

const CommunitySection = () => {
  const openInstagram = () => {
    window.open('https://www.instagram.com/happinessthroughart', '_blank');
  };

  return (
    <section className="py-24 px-4 md:px-8" style={{backgroundColor: '#FAA300'}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-6 text-white">Join Our Community</h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Follow Kavya on Instagram and be part of the happiness!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          <div className="instagram-container w-full max-w-sm">
            <iframe
              src="https://www.instagram.com/reel/DWjmGTAj79d/embed"
              width="100%"
              height="480"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
            />
          </div>
          <div className="instagram-container w-full max-w-sm">
            <iframe
              src="https://www.instagram.com/reel/DXRLYoaj_-e/embed"
              width="100%"
              height="480"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
            />
          </div>
          <div className="instagram-container w-full max-w-sm">
            <iframe
              src="https://www.instagram.com/reel/DXzeFYjPZJB/embed"
              width="100%"
              height="480"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
            />
          </div>
        </div>
        <div className="mt-16 text-center">
          <button onClick={openInstagram} className="px-8 py-4 bg-white rounded-full font-medium text-orange-400">
            Follow on Instagram
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;  