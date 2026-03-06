export const questions = [
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
      { text: "Feel a rush of urgency to prove them wrong immediately", value: "A" },
      { text: "Shut down or go quiet — it stings more than they know", value: "B" },
      { text: "Brush it off and move on to something new", value: "C" },
      { text: "Agree out loud, then spiral privately for hours", value: "D" },
    ],
  },
  {
    id: 3,
    question: "Your relationship with routines is best described as:",
    options: [
      { text: "I thrive in chaos — routines feel like a cage", value: "A" },
      { text: "I avoid them because I know I'll fail eventually", value: "B" },
      { text: "I build great ones — they just don't survive contact with real life", value: "C" },
      { text: "I want them desperately but can't seem to start", value: "D" },
    ],
  },
  {
    id: 4,
    question: "When you're overwhelmed, you tend to:",
    options: [
      { text: "Double down and take on even MORE to feel in control", value: "A" },
      { text: "Disappear — ghost plans, cancel commitments, go silent", value: "B" },
      { text: "Jump to a new idea or project that feels exciting and fresh", value: "C" },
      { text: "Wait for the 'right moment' that never quite arrives", value: "D" },
    ],
  },
  {
    id: 5,
    question: "The story you tell yourself most often is:",
    options: [
      { text: "\"I work best under pressure — that's just how I'm wired\"", value: "A" },
      { text: "\"Why bother? I'll just mess it up anyway\"", value: "B" },
      { text: "\"Something better is out there — I just haven't found it yet\"", value: "C" },
      { text: "\"I just need more time / the right system / a better moment\"", value: "D" },
    ],
  },
  {
    id: 6,
    question: "In relationships (personal or professional), others might say you:",
    options: [
      { text: "Take on too much and burn out, then disappear", value: "A" },
      { text: "Are deeply loyal but can be hard to reach when struggling", value: "B" },
      { text: "Are hard to pin down — excited one day, gone the next", value: "C" },
      { text: "Promise a lot but struggle to follow through consistently", value: "D" },
    ],
  },
  {
    id: 7,
    question: "When you imagine investing in yourself (a program, coach, course), you think:",
    options: [
      { text: "\"I've tried everything — what makes this different?\"", value: "A" },
      { text: "\"I don't want to be a burden or take up too much space\"", value: "B" },
      { text: "\"What if I get excited and quit halfway through — again?\"", value: "C" },
      { text: "\"I'll do it when things settle down a little\"", value: "D" },
    ],
  },
];

export const results = {
  A: {
    title: "The Pressure Chaser",
    emoji: "⚡",
    color: "#E85D3A",
    colorLight: "rgba(232, 93, 58, 0.12)",
    colorBorder: "rgba(232, 93, 58, 0.4)",
    description:
      "You've learned to use urgency and adrenaline as fuel — and it works, until it doesn't. Deadlines, crises, and last-minute sprints are your comfort zone. But underneath the hustle is an exhausted nervous system that's been running on overdrive. You're not lazy — you're wired for stimulation, and the world hasn't taught you how to access it without burning yourself down first.",
    next:
      "Try a 'minimum viable start' practice: commit to just 10 minutes on one task with zero pressure for a perfect outcome. Notice what happens in your body when the stakes feel low.",
  },
  B: {
    title: "The Invisible Striver",
    emoji: "🌊",
    color: "#3A7BD5",
    colorLight: "rgba(58, 123, 213, 0.12)",
    colorBorder: "rgba(58, 123, 213, 0.4)",
    description:
      "You work hard in silence, feel everything deeply, and carry more than most people see. When things get hard, you retreat — not because you don't care, but because you care so much that vulnerability feels dangerous. Your ADHD may have taught you that asking for help leads to disappointment. You've become an expert at disappearing before anyone can see you struggle.",
    next:
      "This week, name one thing you're actually struggling with — out loud, to one safe person. You don't have to fix it. Just say it. That's where your next chapter begins.",
  },
  C: {
    title: "The Shiny Object Seeker",
    emoji: "✨",
    color: "#C9A84C",
    colorLight: "rgba(201, 168, 76, 0.12)",
    colorBorder: "rgba(201, 168, 76, 0.4)",
    description:
      "You're magnetic, creative, and full of genuine potential — but you've left a trail of half-finished projects and almost-great ideas behind you. The next thing always feels like THE thing. This isn't a character flaw — it's a dopamine-seeking brain in a world of infinite options. The problem isn't that you start too many things. It's that you haven't found a structure that honours how your brain actually works.",
    next:
      "Pick ONE current project and set a 2-week micro-deadline for just the next step — not the whole thing. Practice finishing small before you build big.",
  },
  D: {
    title: "The Waiting Perfectionist",
    emoji: "🔮",
    color: "#6B8F71",
    colorLight: "rgba(107, 143, 113, 0.12)",
    colorBorder: "rgba(107, 143, 113, 0.4)",
    description:
      "You have a vision. A real one. But the gap between where you are and where you think you should be keeps you frozen. Perfectionism and ADHD are a painful combination — your standards are sky-high, your executive function makes starting hard, and the result is a beautiful plan that never gets off the ground. You're not waiting for the right moment. You're protecting yourself from the risk of a real attempt.",
    next:
      "Write down what 'good enough' looks like for one current goal — not perfect, not ideal. Done. Set a start date within 48 hours and treat it like an appointment with someone you respect.",
  },
};

export function tallyResult(answers) {
  const counts = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach((a) => { if (a) counts[a]++; });
  return Object.entries(counts).sort((x, y) => y[1] - x[1])[0][0];
}
