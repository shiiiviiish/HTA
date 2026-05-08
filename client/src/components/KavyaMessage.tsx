import React, { useState } from 'react';

const KavyaMessage = () => {
  const [isOpen, setIsOpen] = useState(false);

  // TO CHANGE VIDEO: replace the reel ID in the src URL below
  // Current reel: https://www.instagram.com/reel/DLUR0JxP1bg/
  // Just change DLUR0JxP1bg to the new reel ID
  const reelSrc = "https://www.instagram.com/reel/DLUR0JxP1bg/embed";

  return (
    <>
      <div className="fixed bottom-24 right-6 z-50 flex items-center gap-2 roam-button">
        <div className="bg-white rounded-full px-3 py-1 shadow-lg">
          <p className="text-xs font-medium" style={{ color: '#F4538A' }}>Message from Kavya!</p>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full shadow-xl flex items-center justify-center text-2xl hover:scale-110 transition-all duration-300"
          style={{ backgroundColor: '#F4538A' }}
          title="Message from Kavya"
        >
          🎥
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{ width: '320px', height: '500px', overflow: 'hidden',  borderRadius: '24px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
  src={reelSrc}
  width="100%"
  height="600px"
  
  frameBorder="0"
  scrolling="no"
  allowTransparency={true}
  allowFullScreen={true}
/>
          </div>
        </div>
      )}
    </>
  );
};

export default KavyaMessage;