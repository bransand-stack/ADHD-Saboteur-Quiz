import React from 'react';

export default function Intro({ onStart }) {
  return (
    <div style={{
      textAlign: 'center',
      animation: 'fadeUp 0.7s ease both',
    }}>
      <div style={{
        fontSize: 11,
        letterSpacing: '0.25em',
        color: '#E85D3A',
        textTransform: 'uppercase',
        marginBottom: 24,
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 500,
      }}>
        Bransand Solutions &amp; Services
      </div>

      <h1 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: 'clamp(2rem, 6vw, 3.4rem)',
        color: '#F5F0E8',
        fontWeight: 400,
        lineHeight: 1.2,
        marginBottom: 20,
        letterSpacing: '-0.02em',
      }}>
        What's Your<br />
        <em style={{ color: '#E85D3A', fontStyle: 'italic' }}>ADHD Saboteur?</em>
      </h1>

      <p style={{
        color: '#A89F94',
        fontSize: 'clamp(15px, 2vw, 17px)',
        lineHeight: 1.75,
        maxWidth: 480,
        margin: '0 auto 12px',
        fontWeight: 300,
      }}>
        You've tried the planners. The apps. The advice. Yet something keeps getting in the way.
      </p>
      <p style={{
        color: '#A89F94',
        fontSize: 'clamp(15px, 2vw, 17px)',
        lineHeight: 1.75,
        maxWidth: 480,
        margin: '0 auto 40px',
        fontWeight: 300,
      }}>
        This 7-question quiz helps you identify the specific pattern holding you back — so you can finally stop fighting yourself and start moving forward.
      </p>

      <div style={{
        display: 'flex',
        gap: 28,
        justifyContent: 'center',
        marginBottom: 44,
        flexWrap: 'wrap',
      }}>
        {['7 questions', '~3 minutes', 'Personalized result'].map(item => (
          <span key={item} style={{ color: '#6B6560', fontSize: 13, letterSpacing: '0.08em' }}>
            ✦&nbsp; {item}
          </span>
        ))}
      </div>

      <button
        onClick={onStart}
        style={{
          background: '#E85D3A',
          color: '#fff',
          border: 'none',
          padding: '16px 44px',
          fontSize: 16,
          letterSpacing: '0.05em',
          cursor: 'pointer',
          borderRadius: 3,
          fontFamily: "'Playfair Display', serif",
          fontWeight: 400,
          transition: 'all 0.2s',
        }}
        onMouseOver={e => e.currentTarget.style.background = '#d04f2e'}
        onMouseOut={e => e.currentTarget.style.background = '#E85D3A'}
      >
        Discover Your Saboteur →
      </button>
    </div>
  );
}
