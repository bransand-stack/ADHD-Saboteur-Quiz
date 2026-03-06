import { useState } from "react";

const questions = [
  { id: 1, question: "When you have an important task to start, what usually happens?", options: [{ text: "I wait until the pressure is so intense I have no choice", value: "A" }, { text: "I overthink every detail until I feel paralyzed", value: "B" }, { text: "I start something else entirely — something more interesting", value: "C" }, { text: "I tell myself I'll do it perfectly or not at all", value: "D" }] },
  { id: 2, question: "When someone gives you critical feedback, your first instinct is:", options: [{ text: "Feel a rush of urgency to prove them wrong immediately", value: "A" }, { text: "Shut down or go quiet — it stings more than they know", value: "B" }, { text: "Brush it off and move on to something new", value: "C" }, { text: "Agree out loud, then spiral privately for hours", value: "D" }] },
  { id: 3, question: "Your relationship with routines is best described as:", options: [{ text: "I thrive in chaos — routines feel like a cage", value: "A" }, { text: "I avoid them because I know I'll fail eventually", value: "B" }, { text: "I build great ones — they just don't survive contact with real life", value: "C" }, { text: "I want them desperately but can't seem to start", value: "D" }] },
  { id: 4, question: "When you're overwhelmed, you tend to:", options: [{ text: "Double down and take on even MORE to feel in control", value: "A" }, { text: "Disappear — ghost plans, cancel commitments, go silent", value: "B" }, { text: "Jump to a new idea or project that feels exciting and fresh", value: "C" }, { text: "Wait for the 'right moment' that never quite arrives", value: "D" }] },
  { id: 5, question: "The story you tell yourself most often is:", options: [{ text: "\"I work best under pressure — that's just how I'm wired\"", value: "A" }, { text: "\"Why bother? I'll just mess it up anyway\"", value: "B" }, { text: "\"Something better is out there — I just haven't found it yet\"", value: "C" }, { text: "\"I just need more time / the right system / a better moment\"", value: "D" }] },
  { id: 6, question: "In relationships (personal or professional), others might say you:", options: [{ text: "Take on too much and burn out, then disappear", value: "A" }, { text: "Are deeply loyal but can be hard to reach when struggling", value: "B" }, { text: "Are hard to pin down — excited one day, gone the next", value: "C" }, { text: "Promise a lot but struggle to follow through consistently", value: "D" }] },
  { id: 7, question: "When you imagine investing in yourself (a program, coach, course), you think:", options: [{ text: "\"I've tried everything — what makes this different?\"", value: "A" }, { text: "\"I don't want to be a burden or take up too much space\"", value: "B" }, { text: "\"What if I get excited and quit halfway through — again?\"", value: "C" }, { text: "\"I'll do it when things settle down a little\"", value: "D" }] },
];

const results = {
  A: { title: "The Pressure Chaser", emoji: "⚡", color: "#E85D3A", colorLight: "rgba(232,93,58,0.1)", colorBorder: "rgba(232,93,58,0.4)", description: "You've learned to use urgency and adrenaline as fuel — and it works, until it doesn't. Deadlines, crises, and last-minute sprints are your comfort zone. But underneath the hustle is an exhausted nervous system that's been running on overdrive. You're not lazy — you're wired for stimulation, and the world hasn't taught you how to access it without burning yourself down first.", next: "Try a 'minimum viable start' practice: commit to just 10 minutes on one task with zero pressure for a perfect outcome. Notice what happens in your body when the stakes feel low." },
  B: { title: "The Invisible Striver", emoji: "🌊", color: "#3A7BD5", colorLight: "rgba(58,123,213,0.1)", colorBorder: "rgba(58,123,213,0.4)", description: "You work hard in silence, feel everything deeply, and carry more than most people see. When things get hard, you retreat — not because you don't care, but because you care so much that vulnerability feels dangerous. Your ADHD may have taught you that asking for help leads to disappointment. You've become an expert at disappearing before anyone can see you struggle.", next: "This week, name one thing you're actually struggling with — out loud, to one safe person. You don't have to fix it. Just say it. That's where your next chapter begins." },
  C: { title: "The Shiny Object Seeker", emoji: "✨", color: "#C9A84C", colorLight: "rgba(201,168,76,0.1)", colorBorder: "rgba(201,168,76,0.4)", description: "You're magnetic, creative, and full of genuine potential — but you've left a trail of half-finished projects and almost-great ideas behind you. The next thing always feels like THE thing. This isn't a character flaw — it's a dopamine-seeking brain in a world of infinite options. The problem isn't that you start too many things. It's that you haven't found a structure that honours how your brain actually works.", next: "Pick ONE current project and set a 2-week micro-deadline for just the next step — not the whole thing. Practice finishing small before you build big." },
  D: { title: "The Waiting Perfectionist", emoji: "🔮", color: "#6B8F71", colorLight: "rgba(107,143,113,0.1)", colorBorder: "rgba(107,143,113,0.4)", description: "You have a vision. A real one. But the gap between where you are and where you think you should be keeps you frozen. Perfectionism and ADHD are a painful combination — your standards are sky-high, your executive function makes starting hard, and the result is a beautiful plan that never gets off the ground. You're not waiting for the right moment. You're protecting yourself from the risk of a real attempt.", next: "Write down what 'good enough' looks like for one current goal — not perfect, not ideal. Done. Set a start date within 48 hours and treat it like an appointment with someone you respect." },
};

function tally(answers) {
  const counts = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach((a) => { if (a) counts[a]++; });
  return Object.entries(counts).sort((x, y) => y[1] - x[1])[0][0];
}

export default function App() {
  const [phase, setPhase] = useState("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [selected, setSelected] = useState(null);
  const [fading, setFading] = useState(false);

  function startQuiz() {
    setPhase("quiz"); setCurrent(0);
    setAnswers(Array(questions.length).fill(null)); setSelected(null);
  }

  function handleNext() {
    if (!selected) return;
    const a = [...answers]; a[current] = selected; setAnswers(a);
    setFading(true);
    setTimeout(() => {
      if (current + 1 < questions.length) { setCurrent(current + 1); setSelected(null); }
      else setPhase("result");
      setFading(false);
    }, 260);
  }

  const result = phase === "result" ? results[tally(answers)] : null;
  const progress = phase === "quiz" ? (current / questions.length) * 100 : 0;

  return (
    <div style={{ minHeight: "100vh", background: "#0F0F0F", display: "flex", alignItems: "center", justifyContent: "center", padding: "32px 16px", position: "relative", overflow: "hidden", fontFamily: "'DM Sans','Segoe UI',sans-serif" }}>
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", background: "radial-gradient(ellipse at 15% 55%, rgba(232,93,58,0.07) 0%, transparent 55%),radial-gradient(ellipse at 85% 20%, rgba(107,143,113,0.05) 0%, transparent 50%)" }} />
      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 640, opacity: fading ? 0 : 1, transition: "opacity 0.26s ease" }}>

        {phase === "intro" && (
          <div style={{ textAlign: "center", animation: "fadeUp 0.7s ease both" }}>
            <div style={{ fontSize: 11, letterSpacing: "0.25em", color: "#E85D3A", textTransform: "uppercase", marginBottom: 24, fontWeight: 500 }}>Bransand Solutions &amp; Services</div>
            <h1 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(2rem,6vw,3.4rem)", color: "#F5F0E8", fontWeight: 400, lineHeight: 1.2, marginBottom: 20, letterSpacing: "-0.02em" }}>
              What's Your<br /><em style={{ color: "#E85D3A" }}>ADHD Saboteur?</em>
            </h1>
            <p style={{ color: "#A89F94", fontSize: "clamp(15px,2vw,17px)", lineHeight: 1.75, maxWidth: 480, margin: "0 auto 12px", fontWeight: 300 }}>You've tried the planners. The apps. The advice. Yet something keeps getting in the way.</p>
            <p style={{ color: "#A89F94", fontSize: "clamp(15px,2vw,17px)", lineHeight: 1.75, maxWidth: 480, margin: "0 auto 40px", fontWeight: 300 }}>This 7-question quiz helps you identify the specific pattern holding you back — so you can finally stop fighting yourself and start moving forward.</p>
            <div style={{ display: "flex", gap: 28, justifyContent: "center", marginBottom: 44, flexWrap: "wrap" }}>
              {["7 questions", "~3 minutes", "Personalized result"].map(t => <span key={t} style={{ color: "#6B6560", fontSize: 13 }}>✦ {t}</span>)}
            </div>
            <button onClick={startQuiz} style={{ background: "#E85D3A", color: "#fff", border: "none", padding: "16px 44px", fontSize: 16, letterSpacing: "0.05em", cursor: "pointer", borderRadius: 3, fontFamily: "'Playfair Display',serif" }}>
              Discover Your Saboteur →
            </button>
          </div>
        )}

        {phase === "quiz" && (
          <div style={{ animation: "fadeUp 0.4s ease both" }}>
            <div style={{ marginBottom: 44 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ color: "#6B6560", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase" }}>Question {current + 1} of {questions.length}</span>
                <span style={{ color: "#6B6560", fontSize: 12 }}>{Math.round(progress)}%</span>
              </div>
              <div style={{ height: 2, background: "#2A2A2A", borderRadius: 1 }}>
                <div style={{ height: "100%", background: "#E85D3A", borderRadius: 1, width: `${progress}%`, transition: "width 0.5s ease" }} />
              </div>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", color: "#F5F0E8", fontSize: "clamp(1.15rem,3vw,1.55rem)", fontWeight: 400, lineHeight: 1.4, marginBottom: 32, letterSpacing: "-0.01em" }}>{questions[current].question}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
              {questions[current].options.map((opt) => {
                const isSel = selected === opt.value;
                return (
                  <button key={opt.value} onClick={() => setSelected(opt.value)} style={{ background: isSel ? "rgba(232,93,58,0.1)" : "rgba(255,255,255,0.03)", border: isSel ? "1px solid rgba(232,93,58,0.55)" : "1px solid rgba(255,255,255,0.07)", borderRadius: 4, padding: "16px 20px", color: isSel ? "#F5F0E8" : "#A89F94", textAlign: "left", fontSize: 15, lineHeight: 1.55, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", fontWeight: 300, display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <span style={{ width: 22, height: 22, borderRadius: "50%", flexShrink: 0, marginTop: 1, border: isSel ? "2px solid #E85D3A" : "2px solid #3A3A3A", background: isSel ? "#E85D3A" : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {isSel && <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#fff", display: "block" }} />}
                    </span>
                    {opt.text}
                  </button>
                );
              })}
            </div>
            <button onClick={handleNext} disabled={!selected} style={{ background: selected ? "#E85D3A" : "#2A2A2A", color: selected ? "#fff" : "#4A4A4A", border: "none", padding: "14px 40px", fontSize: 15, cursor: selected ? "pointer" : "not-allowed", borderRadius: 3, fontFamily: "'DM Sans',sans-serif", letterSpacing: "0.04em", fontWeight: 500 }}>
              {current + 1 === questions.length ? "See My Result →" : "Next Question →"}
            </button>
          </div>
        )}

        {phase === "result" && result && (
          <div style={{ animation: "fadeUp 0.7s ease both" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <div style={{ fontSize: 12, letterSpacing: "0.22em", color: "#6B6560", textTransform: "uppercase", marginBottom: 18, fontWeight: 500 }}>Your Saboteur Is</div>
              <div style={{ fontSize: 52, marginBottom: 10 }}>{result.emoji}</div>
              <h1 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.8rem,5vw,2.8rem)", color: result.color, fontWeight: 400, letterSpacing: "-0.02em" }}>{result.title}</h1>
            </div>
            <div style={{ background: result.colorLight, border: `1px solid ${result.colorBorder}`, borderLeft: `3px solid ${result.color}`, borderRadius: 4, padding: 28, marginBottom: 20 }}>
              <p style={{ color: "#C8C0B8", fontSize: 16, lineHeight: 1.8, margin: 0, fontWeight: 300 }}>{result.description}</p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 4, padding: "24px 28px", marginBottom: 40 }}>
              <div style={{ fontSize: 11, letterSpacing: "0.2em", color: result.color, textTransform: "uppercase", marginBottom: 12, fontWeight: 500 }}>Your Next Step</div>
              <p style={{ color: "#F5F0E8", fontSize: 15, lineHeight: 1.75, margin: 0, fontWeight: 300 }}>{result.next}</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "#6B6560", fontSize: 14, marginBottom: 24, lineHeight: 1.7 }}>Ready to go deeper? This is exactly the kind of pattern we work through together in 1:1 coaching.</p>
              <a href="https://bransandservices.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: result.color, color: "#fff", textDecoration: "none", padding: "15px 40px", fontSize: 15, borderRadius: 3, fontFamily: "'DM Sans',sans-serif", letterSpacing: "0.04em", fontWeight: 500, marginBottom: 20 }}>
                Book a Discovery Call →
              </a><br />
              <button onClick={startQuiz} style={{ background: "transparent", border: "none", color: "#6B6560", fontSize: 13, cursor: "pointer", fontFamily: "'DM Sans',sans-serif", textDecoration: "underline", marginTop: 8 }}>
                Retake the quiz
              </button>
            </div>
          </div>
        )}
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        body { background:#0F0F0F; }
      `}</style>
    </div>
  );
}
