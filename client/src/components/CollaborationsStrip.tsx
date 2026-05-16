import React, { useState } from 'react';

const collaborations = [
  {
    name: 'Pixable Studio & Media',
    logo: '/images/collaborations/1.png',
  },
  {
    name: "J.P.A. Toddlers' World School",
    logo: '/images/collaborations/2.png',
  },
  // ADD MORE HERE — just copy block above
];

const VISIBLE = 3; // logos visible at a time

const CollaborationsStrip = () => {
  const [current, setCurrent] = useState(0);

  const totalPages = Math.ceil(collaborations.length / VISIBLE);
  const currentPage = Math.floor(current / VISIBLE);

  const canPrev = current > 0;
  const canNext = current + VISIBLE < collaborations.length;

  const prev = () => { if (canPrev) setCurrent(c => c - 1); };
  const next = () => { if (canNext) setCurrent(c => c + 1); };

  const visible = collaborations.slice(current, current + VISIBLE);

  // Pad with empty slots if less than VISIBLE
  const padded = [
    ...visible,
    ...Array(Math.max(0, VISIBLE - visible.length)).fill(null),
  ];

  return (
    <div style={{
      backgroundColor: '#F5DD61',
      padding: '40px 0 32px',
      position: 'relative',
    }}>

      {/* HTA logo centered on top */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
  <p style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)', marginBottom: '8px' }}>

  </p>
  <h2 className="collab-heading" style={{
  fontSize: '40px',
  fontFamily: "var(--font-serif)",
  color: '#5C3317',
  margin: 0,
  fontWeight: 500,
}}>
  Spaces We've Transformed Together
</h2>
</div>

      {/* Main row with arrows and logos */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0',
        padding: '0 24px',
        position: 'relative',
        minHeight: '120px',
      }}>

        {/* Left arrow */}
        <button
          onClick={prev}
          style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: canPrev ? 'rgba(0,0,0,0.15)' : 'rgba(0,0,0,0.05)',
            color: canPrev ? '#1a1a1a' : 'rgba(0,0,0,0.2)',
            fontSize: '18px',
            cursor: canPrev ? 'pointer' : 'not-allowed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            transition: 'all 0.2s',
          }}
        >
          ‹
        </button>

        {/* Logos row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          width: '100%',
          maxWidth: '860px',
          margin: '0 auto',
          padding: '0 48px',
        }}>
          {padded.map((collab, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100px',
                opacity: collab ? 1 : 0,
                transition: 'opacity 0.3s ease',
              }}
            >
              {collab && (
                <img
                  src={collab.logo}
                  alt={collab.name}
                  style={{
                    maxWidth: '320px',
                    maxHeight: '150px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))',
                  }}
                />
              )}
              <style>{`
  @media (max-width: 768px) {
    .collab-heading {
      font-size: 26px !important;
    }
    .collab-logo {
      max-width: 100px !important;
      max-height: 50px !important;
    }
  }
`}</style>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: canNext ? 'rgba(0,0,0,0.15)' : 'rgba(0,0,0,0.05)',
            color: canNext ? '#1a1a1a' : 'rgba(0,0,0,0.2)',
            fontSize: '18px',
            cursor: canNext ? 'pointer' : 'not-allowed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            transition: 'all 0.2s',
          }}
        >
          ›
        </button>

      </div>

      {/* Dots */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        marginTop: '24px',
      }}>
        {Array.from({ length: totalPages }).map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i * VISIBLE)}
            style={{
              width: i === currentPage ? '20px' : '8px',
              height: '8px',
              borderRadius: '4px',
              backgroundColor: i === currentPage ? '#1a1a1a' : 'rgba(0,0,0,0.25)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>

    </div>
  );
};

export default CollaborationsStrip;