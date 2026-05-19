import React, { useState } from 'react';

const JoeyMascot = () => {
  const [showBubble, setShowBubble] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Joey in corner */}
      <div
        className="fixed bottom-6 left-6 z-50 flex items-end gap-2"
        onMouseEnter={() => setShowBubble(true)}
        onMouseLeave={() => setShowBubble(false)}
      >
        {showBubble && (
          <div
            className="bg-white rounded-2xl px-4 py-2 shadow-lg mb-2 text-sm font-medium"
            style={{ color: '#FF6B35', maxWidth: '160px', position: 'relative', zIndex: 9999 }}
          >
            Woof! I'm Joey! 🐾
          </div>
        )}
        <img
          src="/images/Joey.gif"
          alt="Joey"
          onClick={() => setShowModal(true)}
          className="w-20 h-20 rounded-full object-cover shadow-xl cursor-pointer hover:scale-110 transition-all duration-300"
          style={{ border: '3px solid #FAA300' }}
        />
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 99999 }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-3xl p-8 flex flex-col items-center gap-4 shadow-2xl"
            style={{ maxWidth: '360px', width: '90%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="self-end text-gray-400 hover:text-gray-600 text-xl font-bold"
            >
              ✕
            </button>

            <img
              src="/images/Joey.gif"
              alt="Joey"
              className="w-48 h-48 rounded-full object-cover shadow-xl"
              style={{ border: '4px solid #FAA300' }}
            />

            <h2 className="text-2xl font-bold text-center" style={{ color: '#FF6B35' }}>
              Heyyyy! I'm Joey! 🐾
            </h2>
            <p className="text-center text-gray-600 text-sm leading-relaxed">
              I'm the cutest mascot of HTA! 🐶✨<br />
              Kavya's art brings joy — and so do I!<br />
              Woof woof! 🎨
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="mt-2 px-6 py-2 rounded-full text-white font-semibold text-sm"
              style={{ backgroundColor: '#FAA300' }}
            >
              Bye Joey! 👋
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default JoeyMascot;