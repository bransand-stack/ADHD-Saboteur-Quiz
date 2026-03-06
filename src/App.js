import React, { useState } from 'react';
import Intro from './components/Intro';
import Question from './components/Question';
import Result from './components/Result';
import { questions, results, tallyResult } from './data/quizData';

export default function App() {
  const [phase, setPhase] = useState('intro'); // intro | quiz | result
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [selected, setSelected] = useState(null);
  const [animating, setAnimating] = useState(false);

  function handleStart() {
    setPhase('quiz');
    setCurrent(0);
    setAnswers(Array(questions.length).fill(null));
    setSelected(null);
  }

  function handleSelect(value) {
    setSelected(value);
  }

  function handleNext() {
    if (!selected) return;
    const newAnswers = [...answers];
    newAnswers[current] = selected;
    setAnswers(newAnswers);
    setAnimating(true);
    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setPhase('result');
      }
      setAnimating(false);
    }, 280);
  }

  function handleRetake() {
    setPhase('intro');
    setCurrent(0);
    setAnswers(Array(questions.length).fill(null));
    setSelected(null);
  }

  const resultKey = phase === 'result' ? tallyResult(answers) : null;
  const result = resultKey ? results[resultKey] : null;

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0F0F0F',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px 16px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Ambient background glow */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        background:
          'radial-gradient(ellipse at 15% 55%, rgba(232,93,58,0.07) 0%, transparent 55%), ' +
          'radial-gradient(ellipse at 85% 20%, rgba(107,143,113,0.05) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        maxWidth: 640,
        opacity: animating ? 0 : 1,
        transition: 'opacity 0.28s ease',
      }}>
        {phase === 'intro' && (
          <Intro onStart={handleStart} />
        )}

        {phase === 'quiz' && (
          <Question
            question={questions[current]}
            current={current + 1}
            total={questions.length}
            selected={selected}
            onSelect={handleSelect}
            onNext={handleNext}
          />
        )}

        {phase === 'result' && result && (
          <Result result={result} onRetake={handleRetake} />
        )}
      </div>
    </div>
  );
}
