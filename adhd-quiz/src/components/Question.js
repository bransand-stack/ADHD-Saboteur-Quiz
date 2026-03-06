import React from 'react';

export default function Question({ question, current, total, selected, onSelect, onNext }) {
  const progress = (current / total) * 100;

  return (
    <div style={{ animation: 'fadeUp 0.4s ease both' }}>

      {/* Progress bar */}
      <div style={{ marginBottom: 44 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
          <span style={{ color: '#6B6560', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Question {current} of {total}
          </span>
          <span style={{ color: '#6B6560', fontSize: 12 }}>{Math.round(progress)}%</span>
        </div>
        <div style={{ height: 2, background: '#2A2A2A', borderRadius: 1 }}>
          <div style={{
            height: '100%',
            background: '#E85D3A',
            borderRadius: 1,
            width: `${progress}%`,
            transition: 'width 0.5s ease',
          }} />
        </div>
      </div>

      {/* Question text */}
      <h2 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        color: '#F5F0E8',
        fontSize: 'clamp(1.15rem, 3vw, 1.55rem)',
        fontWeight: 400,
        lineHeight: 1.4,
        marginBottom: 32,
        letterSpacing: '-0.01em',
      }}>
        {question.question}
      </h2>

      {/* Answer options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36 }}>
        {question.options.map((opt) => {
          const isSelected = selected === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => onSelect(opt.value)}
              style={{
                background: isSelected ? 'rgba(232,93,58,0.1)' : 'rgba(255,255,255,0.03)',
                border: isSelected ? '1px solid rgba(232,93,58,0.55)' : '1px solid rgba(255,255,255,0.07)',
                borderRadius: 4,
                padding: '16px 20px',
                color: isSelected ? '#F5F0E8' : '#A89F94',
                textAlign: 'left',
                fontSize: 15,
                lineHeight: 1.55,
                cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                transition: 'all 0.18s',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 14,
              }}
              onMouseOver={e => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)';
                  e.currentTarget.style.color = '#F5F0E8';
                }
              }}
              onMouseOut={e => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.color = '#A89F94';
                }
              }}
            >
              <span style={{
                width: 22,
                height: 22,
                borderRadius: '50%',
                flexShrink: 0,
                marginTop: 1,
                border: isSelected ? '2px solid #E85D3A' : '2px solid #3A3A3A',
                background: isSelected ? '#E85D3A' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.18s',
              }}>
                {isSelected && (
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#fff', display: 'block' }} />
                )}
              </span>
              {opt.text}
            </button>
          );
        })}
      </div>

      {/* Next button */}
      <button
        onClick={onNext}
        disabled={!selected}
        style={{
          background: selected ? '#E85D3A' : '#2A2A2A',
          color: selected ? '#fff' : '#4A4A4A',
          border: 'none',
          padding: '14px 40px',
          fontSize: 15,
          cursor: selected ? 'pointer' : 'not-allowed',
          borderRadius: 3,
          fontFamily: "'DM Sans', sans-serif",
          letterSpacing: '0.04em',
          fontWeight: 500,
          transition: 'all 0.2s',
        }}
        onMouseOver={e => { if (selected) e.currentTarget.style.background = '#d04f2e'; }}
        onMouseOut={e => { if (selected) e.currentTarget.style.background = '#E85D3A'; }}
      >
        {current === 7 ? 'See My Result →' : 'Next Question →'}
      </button>
    </div>
  );
}
