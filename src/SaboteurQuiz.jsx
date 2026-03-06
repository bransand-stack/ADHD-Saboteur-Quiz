import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "When you have an important task to start, what usually happens?",
    options: [
      { text: "I wait until the pressure is so intense I have no choice", value: "A" },
      { text: "I overthink every detail until I feel paralyzed", value: "B" },
      { text: "I start something else entirely — something more interesting", value: "C" },
      { text: "I tell myself I'll do it perfectly or not at all", value: "D" },
    ],
  },
  {
    id: 2,
    question: "When someone gives you critical feedback, your first instinct is:",
    options: [
      { text: "Shut down or go quiet — it stings more than they know", value: "B" },
      { text: "Agree out loud, then spiral privately for hours", value: "D" },
      { text: "Brush it off and move on to something new", value: "C" },
      { text: "Feel a rush of urgency to prove them wrong immediately", value: "A" },
    ],
  },
  {
    id: 3,
    question: "Your relationship with routines is best described as:",
    options: [
      { text: "I build great ones — they just don't survive contact with real life", value: "C" },
      { text: "I avoid them because I know I'll fail eventually", value: "D" },
      { text: "I thrive in chaos — routines feel like a cage", value: "A" },
      { text: "I want them desperately but can't seem to start", value: "B" },
    ],
  },
  {
    id: 4,
    question: "When you're overwhelmed, you tend to:",
    options: [
      { text: "Disappear — ghost plans, cancel commitments, go silent", value: "B" },
      { text: "Double down and take on even MORE to feel in control", value: "A" },
      { text: "Jump to a new idea or project that feels exciting and fresh", value: "C" },
      { text: "Wait for the 'right moment' that never quite arrives", value: "D" },
    ],
  },
  {
    id: 5,
    question: "The story you tell yourself most often is:",
    options: [
      { text: '"I just need more time / the right system / a better moment"', value: "D" },
      { text: '"I work best under pressure — that\'s just how I\'m wired"', value: "A" },
      { text: '"Why bother? I\'ll just mess it up anyway"', value: "B" },
      { text: '"Something better is out there — I just haven\'t found it yet"', value: "C" },
    ],
  },
  {
    id: 6,
    question: "In relationships (personal or professional), others might say you:",
    options: [
      { text: "Are hard to pin down — excited one day, gone the next", value: "C" },
      { text: "Take on too much and burn out, then disappear", value: "A" },
      { text: "Are deeply loyal but can be hard to reach when struggling", value: "B" },
      { text: "Promise a lot but struggle to follow through consistently", value: "D" },
    ],
  },
  {
    id: 7,
    question: "When you imagine investing in yourself (a program, coach, course), you think:",
    options: [
      { text: '"What if I get excited and quit halfway through — again?"', value: "C" },
      { text: '"I\'ll do it when things settle down a little"', value: "D" },
      { text: '"I don\'t want to be a burden or take up too much space"', value: "B" },
      { text: '"I\'ve tried everything — what makes this different?"', value: "A" },
    ],
  },
];

const results = {
  A: {
    title: "The Pressure Chaser",
    emoji: "⚡",
    color: "#E85D3A",
    accent: "#FFF0EC",
    description:
      "You've learned to use urgency and adrenaline as fuel — and it works, until it doesn't. Deadlines, crises, and last-minute sprints are your comfort zone. But underneath the hustle is an exhausted nervous system that's been running on overdrive. You're not lazy — you're wired for stimulation, and the world hasn't taught you how to access it without burning yourself down first.",
    next: "Try a 'minimum viable start' practice: commit to just 10 minutes on one task with zero pressure for a perfect outcome. Notice what happens in your body when the stakes feel low.",
  },
  B: {
    title: "The Invisible Striver",
    emoji: "🌊",
    color: "#3A7BD5",
    accent: "#EEF4FF",
    description:
      "You work hard in silence, feel everything deeply, and carry more than most people see. When things get hard, you retreat — not because you don't care, but because you care so much that vulnerability feels dangerous. Your ADHD may have taught you that asking for help leads to disappointment. You've become an expert at disappearing before anyone can see you struggle.",
    next: "This week, name one thing you're actually struggling with — out loud, to one safe person. You don't have to fix it. Just say it. That's where your next chapter begins.",
  },
  C: {
    title: "The Shiny Object Seeker",
    emoji: "✨",
    color: "#9B5DE5",
    accent: "#F5EEFF",
    description:
      "You're magnetic, creative, and full of genuine potential — but you've left a trail of half-finished projects and almost-great ideas behind you. The next thing always feels like THE thing. This isn't a character flaw — it's a dopamine-seeking brain in a world of infinite options. The problem isn't that you start too many things. It's that you haven't found a structure that honours how your brain actually works.",
    next: "Pick ONE current project and set a 2-week micro-deadline for just the next step — not the whole thing. Practice finishing small before you build big.",
  },
  D: {
    title: "The Waiting Perfectionist",
    emoji: "🔮",
    color: "#2D9E6B",
    accent: "#EDFBF4",
    description:
      "You have a vision. A real one. But the gap between where you are and where you think you should be keeps you frozen. Perfectionism and ADHD are a painful combination — your standards are sky-high, your executive function makes starting hard, and the result is a beautiful plan that never gets off the ground. You're not waiting for the right moment. You're protecting yourself from the risk of a real attempt.",
    next: "Write down what 'good enough' looks like for one current goal — not perfect, not ideal. Done. Set a start date within 48 hours and treat it like an appointment with someone you respect.",
  },
};

function tally(answers) {
  const counts = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach((a) => { if (a) counts[a]++; });
  return Object.entries(counts).sort((x, y) => y[1] - x[1])[0][0];
}

export default function SaboteurQuiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [selected, setSelected] = useState(null);
  const [phase, setPhase] = useState("intro"); // intro | quiz | result
  const [animating, setAnimating] = useState(false);

  const result = phase === "result" ? results[tally(answers)] : null;

  function startQuiz() {
    setPhase("quiz");
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
        setPhase("result");
      }
      setAnimating(false);
    }, 300);
  }

  const progress = ((current) / questions.length) * 100;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0F0F0F",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px 16px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background texture */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0,
        background: "radial-gradient(ellipse at 20% 50%, rgba(232,93,58,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(155,93,229,0.06) 0%, transparent 50%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 640 }}>

        {/* INTRO */}
        {phase === "intro" && (
          <div style={{ textAlign: "center", animation: "fadeUp 0.6s ease both" }}>
            <div style={{ fontSize: 13, letterSpacing: "0.2em", color: "#E85D3A", textTransform: "uppercase", marginBottom: 20, fontFamily: "Georgia, serif" }}>
              Bransand Solutions & Services
            </div>
            <h1 style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              color: "#F5F0E8",
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: 16,
              letterSpacing: "-0.02em",
            }}>
              What's Your<br /><em style={{ color: "#E85D3A" }}>ADHD Saboteur?</em>
            </h1>
            <p style={{ color: "#A89F94", fontSize: 17, lineHeight: 1.7, marginBottom: 12, maxWidth: 480, margin: "0 auto 12px" }}>
              You've tried the planners. The apps. The advice. Yet something keeps getting in the way.
            </p>
            <p style={{ color: "#A89F94", fontSize: 17, lineHeight: 1.7, maxWidth: 480, margin: "0 auto 32px" }}>
              This 7-question quiz helps you identify the specific pattern holding you back — so you can finally stop fighting yourself and start moving forward.
            </p>
            <div style={{ display: "flex", gap: 24, justifyContent: "center", marginBottom: 36, flexWrap: "wrap" }}>
              {["7 questions", "~3 minutes", "Personalized result"].map(item => (
                <span key={item} style={{ color: "#6B6560", fontSize: 13, letterSpacing: "0.08em" }}>✦ {item}</span>
              ))}
            </div>
            <button onClick={startQuiz} style={{
              background: "#E85D3A", color: "#fff", border: "none",
              padding: "16px 40px", fontSize: 16, letterSpacing: "0.05em",
              cursor: "pointer", borderRadius: 2,
              fontFamily: "Georgia, serif",
              transition: "all 0.2s",
            }}
              onMouseOver={e => e.target.style.background = "#d44e2e"}
              onMouseOut={e => e.target.style.background = "#E85D3A"}
            >
              Discover Your Saboteur →
            </button>
          </div>
        )}

        {/* QUIZ */}
        {phase === "quiz" && (
          <div style={{ opacity: animating ? 0 : 1, transition: "opacity 0.3s ease" }}>
            {/* Progress */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ color: "#6B6560", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  Question {current + 1} of {questions.length}
                </span>
                <span style={{ color: "#6B6560", fontSize: 12 }}>{Math.round(progress)}%</span>
              </div>
              <div style={{ height: 2, background: "#2A2A2A", borderRadius: 1 }}>
                <div style={{
                  height: "100%", background: "#E85D3A", borderRadius: 1,
                  width: `${progress}%`, transition: "width 0.4s ease"
                }} />
              </div>
            </div>

            {/* Question */}
            <h2 style={{
              color: "#F5F0E8", fontSize: "clamp(1.2rem, 3vw, 1.55rem)",
              fontWeight: 400, lineHeight: 1.4, marginBottom: 32,
              letterSpacing: "-0.01em",
            }}>
              {questions[current].question}
            </h2>

            {/* Options */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
              {questions[current].options.map((opt) => {
                const isSelected = selected === opt.value;
                return (
                  <button key={opt.value} onClick={() => handleSelect(opt.value)} style={{
                    background: isSelected ? "rgba(232,93,58,0.12)" : "rgba(255,255,255,0.03)",
                    border: isSelected ? "1px solid rgba(232,93,58,0.6)" : "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 4, padding: "16px 20px",
                    color: isSelected ? "#F5F0E8" : "#A89F94",
                    textAlign: "left", fontSize: 15, lineHeight: 1.5,
                    cursor: "pointer", fontFamily: "Georgia, serif",
                    transition: "all 0.2s",
                    display: "flex", alignItems: "flex-start", gap: 12,
                  }}
                    onMouseOver={e => { if (!isSelected) { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "#F5F0E8"; }}}
                    onMouseOut={e => { if (!isSelected) { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#A89F94"; }}}
                  >
                    <span style={{
                      width: 22, height: 22, borderRadius: "50%", flexShrink: 0, marginTop: 1,
                      border: isSelected ? "2px solid #E85D3A" : "2px solid #3A3A3A",
                      background: isSelected ? "#E85D3A" : "transparent",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.2s",
                    }}>
                      {isSelected && <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#fff" }} />}
                    </span>
                    {opt.text}
                  </button>
                );
              })}
            </div>

            <button onClick={handleNext} disabled={!selected} style={{
              background: selected ? "#E85D3A" : "#2A2A2A",
              color: selected ? "#fff" : "#4A4A4A",
              border: "none", padding: "14px 36px", fontSize: 15,
              cursor: selected ? "pointer" : "not-allowed",
              borderRadius: 2, fontFamily: "Georgia, serif",
              letterSpacing: "0.04em", transition: "all 0.2s",
            }}>
              {current + 1 === questions.length ? "See My Result →" : "Next Question →"}
            </button>
          </div>
        )}

        {/* RESULT */}
        {phase === "result" && result && (
          <div style={{ animation: "fadeUp 0.7s ease both" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <div style={{ fontSize: 13, letterSpacing: "0.2em", color: "#6B6560", textTransform: "uppercase", marginBottom: 16 }}>
                Your Saboteur is
              </div>
              <div style={{ fontSize: 56, marginBottom: 8 }}>{result.emoji}</div>
              <h1 style={{
                fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
                color: result.color, fontWeight: 400,
                letterSpacing: "-0.02em", marginBottom: 0,
              }}>
                {result.title}
              </h1>
            </div>

            {/* Description card */}
            <div style={{
              background: result.accent + "10",
              border: `1px solid ${result.color}30`,
              borderLeft: `3px solid ${result.color}`,
              borderRadius: 4, padding: "28px 28px",
              marginBottom: 24,
            }}>
              <p style={{ color: "#C8C0B8", fontSize: 16, lineHeight: 1.75, margin: 0 }}>
                {result.description}
              </p>
            </div>

            {/* Next step */}
            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 4, padding: "24px 28px",
              marginBottom: 36,
            }}>
              <div style={{ fontSize: 11, letterSpacing: "0.2em", color: result.color, textTransform: "uppercase", marginBottom: 12 }}>
                Your Next Step
              </div>
              <p style={{ color: "#F5F0E8", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                {result.next}
              </p>
            </div>

            {/* CTA */}
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "#6B6560", fontSize: 14, marginBottom: 20, lineHeight: 1.6 }}>
                Ready to go deeper? This is exactly the kind of pattern we work through together in 1:1 coaching.
              </p>
              <a href="https://bransandservices.com" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-block",
                background: result.color, color: "#fff", textDecoration: "none",
                padding: "15px 36px", fontSize: 15, borderRadius: 2,
                fontFamily: "Georgia, serif", letterSpacing: "0.04em",
                marginBottom: 16,
              }}>
                Book a Discovery Call →
              </a>
              <br />
              <button onClick={startQuiz} style={{
                background: "transparent", border: "none",
                color: "#6B6560", fontSize: 13, cursor: "pointer",
                fontFamily: "Georgia, serif", letterSpacing: "0.05em",
                textDecoration: "underline", marginTop: 8,
              }}>
                Retake the quiz
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
