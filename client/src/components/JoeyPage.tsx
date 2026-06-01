import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const funFacts = [
  "Chief Art Inspector at HTA 🎨",
  "Approves every painting before it leaves the studio ✅",
  "Favourite hobby: stealing Kavya's paintbrushes 🖌️",
  "Has never met a biscuit he didn't like 🍪",
  "Official taste tester of art vibes 🐾",
  "Can smell a new canvas from 3 rooms away 👃",
];

const schedule = [
  { time: '7:00 AM', emoji: '🌅', activity: 'Wake up Kavya by sitting on her face' },
  { time: '9:00 AM', emoji: '🎨', activity: 'Inspect the morning painting session' },
  { time: '11:00 AM', emoji: '☀️', activity: 'Nap near the easel (very important work)' },
  { time: '1:00 PM', emoji: '🍪', activity: 'Biscuit time — favourite part of the day' },
  { time: '3:00 PM', emoji: '🖌️', activity: 'Steal a paintbrush or two' },
  { time: '5:00 PM', emoji: '📸', activity: "Photobomb Kavya's Instagram reel" },
  { time: '8:00 PM', emoji: '🌙', activity: 'Final art inspection before bed' },
  { time: '9:00 PM', emoji: '😴', activity: 'Goodnight from the Chief Art Inspector' },
];

const joeyReviews = [
  {
    painting: "The Blue Daisy Series",
    rating: "🐾🐾🐾🐾🐾",
    review: "5/5 paws. Smells like paint AND love. Sat next to it for 2 hours. Would recommend.",
  },
  {
    painting: "The Shimla Exhibit",
    rating: "🐾🐾🐾🐾",
    review: "4/5 paws. Very pretty. But Kavya wouldn't let me touch it. Still bitter.",
  },
  {
    painting: "The Wall Mural (Sector 17)",
    rating: "🐾🐾🐾🐾🐾",
    review: "5/5 paws. Big art. Very impressive. I barked at it for 10 minutes out of respect.",
  },
];

const moods = [
  "Currently: Demanding belly rubs 🐾",
  "Currently: Napping near Kavya's easel 😴",
  "Currently: Judging your art taste 🧐",
  "Currently: Stealing paintbrushes 🖌️",
  "Currently: Being the goodest boy 🐶",
  "Currently: Inspecting wet paint — very closely 👃",
  "Currently: Photobombing Kavya's artwork 📸",
  "Currently: Dreaming about biscuits 🍪",
  "Currently: Supervising the studio with great authority 🎨",
  "Currently: Sitting on Kavya's sketchbook 😅",
];

const walkMessages = [
  "Bye bye! 🐾 Going for walkies!",
  "Sniff sniff... gotta go! 🐾",
  "Woof! See you later! 🐾",
  "WALKIES TIME!! BYE!! 🐾",
  "Off to sniff lampposts! 🐾",
];

// Generate random natural waypoints — different every time
const generateWaypoints = () => {
  const W = window.innerWidth;
  const H = window.innerHeight;
  const points = [];
  const numPoints = 7 + Math.floor(Math.random() * 4); // 7-10 points

  // Must start from left and end off right — but path is random
  let lastX = -80;

  for (let i = 0; i < numPoints; i++) {
    const progress = (i + 1) / numPoints;
    // X generally moves right but with random wobble
    const baseX = progress * (W + 200);
    const wobbleX = (Math.random() - 0.3) * W * 0.25;
    const x = Math.max(lastX + 40, baseX + wobbleX);

    // Y is fully random — anywhere on screen
    const y = H * (0.1 + Math.random() * 0.8);

    points.push({ x, y });
    lastX = x;
  }

  // Make sure last point is off screen
  points[points.length - 1] = { x: W + 150, y: H * (0.2 + Math.random() * 0.6) };

  return points;
};

// ─── Joey Walk Animation ──────────────────────────────────────────────────────
const JoeyWalk = ({ onDone, walkCount }: { onDone: () => void; walkCount: number }) => {
  const [pos, setPos] = useState({ x: -80, y: window.innerHeight * 0.5 });
  const [flip, setFlip] = useState(false);
  const [message] = useState(walkMessages[walkCount % walkMessages.length]);
  const animRef = useRef<any>(null);
  const waypointsRef = useRef(generateWaypoints());
  const startTimeRef = useRef(Date.now());
  const duration = 5500 + Math.random() * 1500; // 5.5 - 7 seconds, different each time

  useEffect(() => {
    const waypoints = waypointsRef.current;
    let lastX = -80;

    const animate = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      const totalSegments = waypoints.length;
      const segmentProgress = progress * totalSegments;
      const segIndex = Math.min(Math.floor(segmentProgress), totalSegments - 1);
      const segLocal = segmentProgress - segIndex;

      // Ease in/out for natural movement
      const eased = segLocal < 0.5
        ? 2 * segLocal * segLocal
        : -1 + (4 - 2 * segLocal) * segLocal;

      const from = segIndex === 0
        ? { x: -80, y: window.innerHeight * 0.5 }
        : waypoints[segIndex - 1];
      const to = waypoints[segIndex];

      const newX = from.x + (to.x - from.x) * eased;
      const newY = from.y + (to.y - from.y) * eased;

      // Flip based on horizontal direction
      setFlip(newX < lastX);
      lastX = newX;
      setPos({ x: newX, y: newY });

      if (progress < 1) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        onDone();
      }
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: pos.x,
        top: pos.y,
        zIndex: 99999,
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Speech bubble */}
      <div style={{
        position: 'absolute',
        bottom: '80px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '6px 14px',
        fontSize: '11px',
        fontWeight: 600,
        color: '#FF6B35',
        whiteSpace: 'nowrap',
        boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
      }}>
        {message}
      </div>

      {/* Joey circle */}
      <img
        src="/images/Joey.gif"
        alt="Joey walking"
        style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          border: '3px solid #FAA300',
          objectFit: 'cover',
          transform: flip ? 'scaleX(-1)' : 'scaleX(1)',
          transition: 'transform 0.15s ease',
          display: 'block',
        }}
      />
    </div>
  );
};

// ─── Belly Rub Component ──────────────────────────────────────────────────────
const BellyRub = () => {
  const [happiness, setHappiness] = useState(0);
  const [reaction, setReaction] = useState('Click Joey to give belly rubs! 🐶');
  const [paws, setPaws] = useState<{ id: number; x: number; y: number }[]>([]);
  const [wiggle, setWiggle] = useState(false);
  const [phase, setPhase] = useState<'rub' | 'walking' | 'gone'>('rub');
  const [walkCount, setWalkCount] = useState(0);
  const pawIdRef = useRef(0);
  const happinessRef = useRef(0);

  const handleClick = () => {
    if (phase !== 'rub') return;
    happinessRef.current = Math.min(100, happinessRef.current + 5);
    setHappiness(happinessRef.current);

    if (happinessRef.current < 30) {
      setReaction('Ooh that feels nice! 😊');
    } else if (happinessRef.current < 50) {
      setReaction('Yes yes YES! 🐾');
    } else if (happinessRef.current < 75) {
      setReaction("Don't stop! I'm so happy! 😍");
    } else if (happinessRef.current < 100) {
      setReaction('BEST. DAY. EVER. 🎉🎉');
    } else {
      setReaction('MAXIMUM HAPPINESS!! BYE BYE!! 🐶❤️🎊');
      setTimeout(() => setPhase('walking'), 500);
    }

    setWiggle(true);
    setTimeout(() => setWiggle(false), 300);

    const id = pawIdRef.current++;
    const x = Math.random() * 160 + 20;
    const y = Math.random() * 160 + 20;
    setPaws(prev => [...prev, { id, x, y }]);
    setTimeout(() => setPaws(prev => prev.filter(p => p.id !== id)), 1000);
  };

  const resetJoey = () => {
    setHappiness(0);
    happinessRef.current = 0;
    setReaction('Click Joey to give belly rubs! 🐶');
    setPhase('rub');
    setPaws([]);
    setWalkCount(c => c + 1); // increment so next walk is different
  };

  const joeyPhoto = happiness >= 100
    ? '/images/joey/joey-veryhappy.jpeg'
    : happiness >= 50
    ? '/images/joey/joey-happy.jpeg'
    : '/images/joey/joey-normal.gif';

  const borderColor = happiness >= 100 ? '#F4538A' : happiness >= 50 ? '#FF6B35' : '#FAA300';

  return (
    <>
      {phase === 'walking' && (
        <JoeyWalk
          walkCount={walkCount}
          onDone={() => setPhase('gone')}
        />
      )}

      <div className="py-16 px-6" style={{ backgroundColor: '#FFF8F0' }}>
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-serif mb-2">Give Joey a Belly Rub! 🐾</h2>
          <p className="text-gray-500 text-sm mb-8">Click on Joey to make him happy!</p>

          {/* Gone */}
          {phase === 'gone' && (
            <div className="text-center py-8">
              <p className="text-5xl mb-4">🦮💨</p>
              <p className="font-serif text-xl mb-2" style={{ color: '#1a1a1a' }}>Joey went for his walk!</p>
              <p className="text-gray-500 text-sm mb-6">He'll be back after sniffing every lamppost on the street. 🐾</p>
              <button
                onClick={resetJoey}
                className="px-6 py-3 rounded-full text-white text-sm font-medium transition-opacity hover:opacity-80"
                style={{ backgroundColor: '#FAA300' }}
              >
                🐶 Joey is back! Give him belly rubs again?
              </button>
            </div>
          )}

          {/* Walking */}
          {phase === 'walking' && (
            <div className="text-center py-8">
              <p className="text-4xl mb-3">🐾🐾🐾</p>
              <p className="font-serif text-lg" style={{ color: '#FF6B35' }}>Joey is on his walk!</p>
            </div>
          )}

          {/* Belly rub */}
          {phase === 'rub' && (
            <>
              <div
                className="relative mx-auto mb-6 cursor-pointer select-none"
                style={{ width: '200px', height: '200px' }}
                onClick={handleClick}
              >
                <img
                  src={joeyPhoto}
                  alt="Joey"
                  className="rounded-full object-cover w-full h-full"
                  style={{
                    border: `5px solid ${borderColor}`,
                    transform: wiggle ? 'rotate(-5deg) scale(1.08)' : 'rotate(0deg) scale(1)',
                    transition: 'transform 0.15s ease, border-color 0.3s ease',
                    pointerEvents: 'none',
                  }}
                />
                {happiness >= 50 && (
                  <div className="absolute bottom-2 right-2 text-3xl" style={{ animation: 'pulse 0.5s ease infinite alternate' }}>
                    {happiness >= 100 ? '🎊' : '😍'}
                  </div>
                )}
                {paws.map(paw => (
                  <span key={paw.id} style={{ position: 'absolute', left: paw.x, top: paw.y, fontSize: '20px', pointerEvents: 'none', animation: 'floatUp 1s ease forwards' }}>
                    🐾
                  </span>
                ))}
              </div>

              <p className="text-base font-medium mb-4" style={{ color: '#FF6B35', minHeight: '28px' }}>{reaction}</p>

              <div className="max-w-xs mx-auto">
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>Happiness</span>
                  <span>{Math.round(happiness)}%</span>
                </div>
                <div className="h-3 rounded-full overflow-hidden" style={{ backgroundColor: '#f0f0f0' }}>
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${happiness}%`,
                      background: happiness >= 100
                        ? 'linear-gradient(90deg, #F4538A, #FF6B35, #FAA300)'
                        : happiness >= 50
                        ? 'linear-gradient(90deg, #FAA300, #FF6B35)'
                        : '#FAA300',
                    }}
                  />
                </div>
                {happiness >= 50 && happiness < 100 && (
                  <p className="text-sm font-medium mt-3" style={{ color: '#FF6B35' }}>Joey is happy! Keep going! 😍</p>
                )}
              </div>
            </>
          )}
        </div>

        <style>{`
          @keyframes floatUp {
            0% { opacity: 1; transform: translateY(0) scale(1); }
            100% { opacity: 0; transform: translateY(-60px) scale(1.5); }
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            100% { transform: scale(1.2); }
          }
        `}</style>
      </div>
    </>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────
const JoeyPage = () => {
  const navigate = useNavigate();
  const [mood] = useState(moods[Math.floor(Math.random() * moods.length)]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <div className="min-h-screen bg-white">

      <div className="py-20 px-6 text-center" style={{ backgroundColor: '#F5DD61' }}>
        <button onClick={() => navigate('/')} className="mb-6 text-sm font-medium opacity-60 hover:opacity-100 block mx-auto transition-opacity" style={{ color: '#1a1a1a' }}>← Back to Home</button>
        <img src="/images/Joey.gif" alt="Joey" className="w-36 h-36 rounded-full object-cover mx-auto mb-6 shadow-2xl" style={{ border: '5px solid #FAA300' }} />
        <h1 className="text-5xl font-serif mb-3" style={{ color: '#1a1a1a' }}>Hey, I'm Joey! 🐾</h1>
        <p className="text-lg text-gray-700 mb-4 max-w-xl mx-auto">Official mascot at Happiness Through Art. Kavya's best friend. The goodest boy.</p>
        <div className="inline-block px-5 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: '#FAA300', color: 'white' }}>{mood}</div>
      </div>

      <div className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-4">Things You Should Know About Me</h2>
        <p className="text-center text-gray-500 mb-10">Important facts. Very serious. Please read carefully.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {funFacts.map((fact, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-2xl" style={{ backgroundColor: i % 2 === 0 ? '#FFF8F0' : '#F0FFF8' }}>
              <span className="text-2xl">🐾</span>
              <p className="text-gray-700 text-sm font-medium">{fact}</p>
            </div>
          ))}
        </div>
      </div>

      <BellyRub />

      <div className="py-16 px-6" style={{ backgroundColor: '#F0FFF8' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-4">A Day in Joey's Life</h2>
          <p className="text-center text-gray-500 mb-10">Very busy. Very important. Do not disturb.</p>
          <div className="flex flex-col gap-4">
            {schedule.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white border" style={{ borderColor: '#f0f0f0' }}>
                <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                <div className="flex-1"><p className="text-gray-700 text-sm font-medium">{item.activity}</p></div>
                <span className="text-xs font-bold px-3 py-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#F5DD61', color: '#1a1a1a' }}>{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-6" style={{ backgroundColor: '#F5DD61' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-4">Joey on Instagram 📸</h2>
          <p className="text-center text-gray-600 mb-10">Catch me being adorable on Kavya's Instagram!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            <div style={{ width: '280px', height: '480px', overflow: 'hidden', borderRadius: '20px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
              <iframe src="https://www.instagram.com/reel/DOXuUVhD6jj/embed" width="280" height="520" frameBorder="0" scrolling="no" allowTransparency={true} allowFullScreen={true} style={{ marginTop: '0px', display: 'block' }} />
            </div>
            <div style={{ width: '280px', height: '480px', overflow: 'hidden', borderRadius: '20px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
              <iframe src="https://www.instagram.com/reel/DNfam8Sv02V/embed" width="280" height="520" frameBorder="0" scrolling="no" allowTransparency={true} allowFullScreen={true} style={{ marginTop: '0px', display: 'block' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-4">Joey's Art Reviews 🎨</h2>
        <p className="text-center text-gray-500 mb-10">Official reviews by the Chief Art Inspector. Very credible. Very professional.</p>
        <div className="flex flex-col gap-6">
          {joeyReviews.map((review, i) => (
            <div key={i} className="p-6 rounded-2xl border" style={{ backgroundColor: 'white', borderColor: '#f0f0f0' }}>
              <div className="flex items-center gap-3 mb-3">
                <img src="/images/Joey.gif" alt="Joey" className="w-10 h-10 rounded-full object-cover" style={{ border: '2px solid #FAA300' }} />
                <div>
                  <p className="font-semibold text-sm" style={{ color: '#1a1a1a' }}>Joey</p>
                  <p className="text-xs text-gray-400">Chief Art Inspector · Verified Good Boy ✓</p>
                </div>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#FAA300' }}>{review.painting}</p>
              <p className="text-lg mb-2">{review.rating}</p>
              <p className="text-gray-600 text-sm leading-relaxed italic">"{review.review}"</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 px-6" style={{ backgroundColor: '#FFF0F5' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-4">Joey's Gallery 📷</h2>
          <p className="text-center text-gray-500 mb-10">Behind the scenes with the Chief Art Inspector</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: '📸 Joey sitting near a painting', file: '/images/joey/1.jpg' },
              { label: '🎨 Joey inspecting a canvas', file: '/images/joey/2.jpg' },
              { label: '🖌️ Joey stealing a paintbrush', file: '/images/joey/3.jpg' },
              { label: '😴 Joey napping in the studio', file: '/images/joey/4.jpg' },
              { label: '🐾 Joey with Kavya', file: '/images/joey/5.jpg' },
              { label: '✨ Joey being adorable', file: '/images/joey/6.jpg' },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl overflow-hidden" style={{ aspectRatio: '1', position: 'relative' }}>
                <img src={item.file} alt={item.label} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <div className="absolute inset-0 flex items-center justify-center text-center p-4" style={{ backgroundColor: '#FFF0F5' }}>
                  <p className="text-xs text-gray-400 font-medium">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">📁 Add Joey's photos to <code>public/images/joey/</code> named 1.jpg, 2.jpg...</p>
        </div>
      </div>

      <div className="py-16 px-6 text-center" style={{ backgroundColor: '#1a1a1a' }}>
        <img src="/images/Joey.gif" alt="Joey" className="w-20 h-20 rounded-full object-cover mx-auto mb-4 shadow-xl" style={{ border: '3px solid #FAA300' }} />
        <h3 className="text-2xl font-serif text-white mb-3">Want to see more of Joey?</h3>
        <p className="text-gray-400 mb-6 text-sm">Follow Kavya on Instagram for daily doses of art and Joey!</p>
        <a href="https://www.instagram.com/happinessthroughart" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-full text-white font-medium transition-opacity hover:opacity-80" style={{ backgroundColor: '#F4538A' }}>
          Follow on Instagram 📸
        </a>
      </div>

    </div>
  );
};

export default JoeyPage;