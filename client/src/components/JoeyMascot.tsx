import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JoeyMascot = () => {
  const [showBubble, setShowBubble] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="fixed bottom-6 left-6 z-50 flex items-end gap-2"
      onMouseEnter={() => setShowBubble(true)}
      onMouseLeave={() => setShowBubble(false)}
    >
      {showBubble && (
        <div
          className="bg-white rounded-2xl px-4 py-2 shadow-lg mb-2 text-sm font-medium"
          style={{ color: '#FF6B35', maxWidth: '180px', position: 'relative', zIndex: 9999 }}
        >
          Woof! I'm Joey! Click to meet me! 🐾
        </div>
      )}
      <img
        src="/images/Joey.gif"
        alt="Joey"
        onClick={() => navigate('/joey')}
        className="w-20 h-20 rounded-full object-cover shadow-xl cursor-pointer hover:scale-110 transition-all duration-300"
        style={{ border: '3px solid #FAA300' }}
      />
    </div>
  );
};

export default JoeyMascot;