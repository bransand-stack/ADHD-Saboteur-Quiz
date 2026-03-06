import React from 'react';

export default function Result({ result, onRetake }) {
  return (
    <div style={{ animation: 'fadeUp 0.7s ease both' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <div style={{
          fontSize: 12,
          letterSpacing: '0.22em',
          color: '#6B6560',
          textTransform: 'uppercase',
          marginBottom: 18,
          fontWeight: 500,
        }}>
          Your Saboteur Is
        </div>
        <div style={{ fontSize: 52, marginBottom: 10 }}>{result.emoji}</div>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
          color: result.color,
          fontWeight: 400,
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
        }}>
          {result.title}
        </h1>
      </div>

      {/* Description */}
      <div style={{
        background: result.colorLight,
        border: `1px solid ${result.colorBorder}`,
        borderLeft: `3px solid ${result.color}`,
        borderRadius: 4,
        padding: '28px 28px',
        marginBottom: 20,
      }}>
        <p style={{
          color: '#C8C0B8',
          fontSize: 16,
          lineHeight: 1.8,
          margin: 0,
          fontWeight: 300,
        }}>
          {result.description}
        </p>
      </div>

      {/* Next step */}
      <div style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 4,
        padding: '24px 28px',
        marginBottom: 40,
      }}>
        <div style={{
          fontSize: 11,
          letterSpacing: '0.2em',
          color: result.color,
          textTransform: 'uppercase',
          marginBottom: 12,
          fontWeight: 500,
        }}>
          Your Next Step
        </div>
        <p style={{
          color: '#F5F0E8',
          fontSize: 15,
          lineHeight: 1.75,
          margin: 0,
          fontWeight: 300,
        }}>
          {result.next}
        </p>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center' }}>
        <p style={{
          color: '#6B6560',
          fontSize: 14,
          marginBottom: 24,
          lineHeight: 1.7,
        }}>
          Ready to go deeper? This is exactly the kind of pattern we work through together in 1:1 coaching.
        </p>
        <a
          href="https://bransandservices.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: result.color,
            color: '#fff',
            textDecoration: 'none',
            padding: '15px 40px',
            fontSize: 15,
            borderRadius: 3,
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: '0.04em',
            fontWeight: 500,
            marginBottom: 20,
            transition: 'opacity 0.2s',
          }}
          onMouseOver={e => e.currentTarget.style.opacity = '0.85'}
          onMouseOut={e => e.currentTarget.style.opacity = '1'}
        >
          Book a Discovery Call →
        </a>
        <br />
        <button
          onClick={onRetake}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#6B6560',
            fontSize: 13,
            cursor: 'pointer',
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: '0.05em',
            textDecoration: 'underline',
            marginTop: 8,
          }}
        >
          Retake the quiz
        </button>
      </div>
    </div>
  );
}
