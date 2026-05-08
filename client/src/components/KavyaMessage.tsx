import React, { useState } from 'react';
import { X } from 'lucide-react';

const KavyaMessage = () => {
  const [isOpen, setIsOpen] = useState(false);

  // CHANGE THIS URL when Kavya's real video is ready
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";

  return (
    <>
      <button
  onClick={() => setIsOpen(true)}
  className="fixed bottom-24 right-6 z-50 w-16 h-16 rounded-full shadow-xl flex items-center justify-center text-2xl hover:scale-110 transition-all duration-300 roam-button"
  style={{ 
    backgroundColor: '#F4538A',
    animation: 'bounce 2s infinite'
  }}
  title="Message from Kavya"
>
  🎥
</button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-lg">
            <div className="flex justify-between items-center px-6 py-4" style={{ backgroundColor: '#F4538A' }}>
              <div>
                <p className="text-white font-semibold text-lg">A message from Kavya</p>
                <p className="text-white text-sm opacity-80">Happiness Through Art</p>
              </div>
              <button
  onClick={() => setIsOpen(true)}
  className="fixed bottom-24 right-6 z-50 w-16 h-16 rounded-full shadow-xl flex items-center justify-center text-2xl hover:scale-110 transition-all duration-300 float-bounce"
  style={{ backgroundColor: '#F4538A' }}
  title="Message from Kavya"
>
  🎥
</button>
            </div>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={videoUrl}
                title="Message from Kavya"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="px-6 py-4 text-center">
              <p className="text-gray-500 text-sm">Made with 💛 by Kavya Atray</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KavyaMessage;