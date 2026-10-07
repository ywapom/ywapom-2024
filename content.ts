// All site copy lives here. Edit text without touching layout.

export const site = {
  name: "Ron Hermansen",
  email: "rth333@gmail.com",
  linkedin: "https://linkedin.com/in/ron-hermansen",
  domain: "quantum-embrace.com",
  eyebrow: "AI-Native Developer · AI Systems Orchestrator",
};

export const hero = {
  lead: "I orchestrate AI to ship",
  accent: "production code.",
  body: "Engineering has moved from writing code by hand to directing it. In skilled hands, AI is a force multiplier. In unskilled hands, it ships confident, plausible-looking bugs at scale.",
  reviewTitle: "review · ai-generated change",
  checks: [
    { label: "matches stated intent", ok: true },
    { label: "unit tests green", ok: true },
    { label: "calls an API that doesn't exist", ok: false },
    { label: "catch block swallows the error", ok: false },
    { label: "respects module boundaries", ok: true },
    { label: "test asserts real behavior", ok: false },
    { label: "no secrets or unsafe input", ok: true },
  ],
  reviewFooter: ["it all compiled", "sent back, not merged"] as const,
};

export const skillBand = {
  statementStart: "AI doesn't replace engineering judgment. It",
  statementAccent: "amplifies",
  statementEnd: "whatever judgment is already there — good or bad.",
  unskilled: [
    "Accepts code because it looks right and compiles",
    "Ships invented APIs, silent failures and hollow tests",
    "Piles up code nobody on the team understands",
    "Fast this sprint, a rewrite next quarter",
  ],
  skilled: [
    "Verifies every output against intent, not appearance",
    "Uses tests, types and architecture as guardrails",
    "Keeps the codebase coherent, readable and owned",
    "Speed that compounds instead of collapsing",
  ],
};

export const approach = {
  heading: "Every agent is a piece. Someone has to play the board.",
  intro:
    "Years as a U.S. National Chess Master trained one skill above all: holding many lines in your head at once and choosing well under pressure. That is exactly what multi-agent development demands.",
  principles: [
    {
      icon: "grid",
      title: "Direct, don't just prompt",
      body: "Scope the work, give agents the right context, and keep the architecture in one head — so many streams still add up to one coherent system.",
    },
    {
      icon: "shield",
      title: "Validate everything",
      body: "Prompt validation, automated unit tests and architectural sanity checks on every LLM output. Nothing merges on trust.",
    },
    {
      icon: "refresh",
      title: "Build systems that heal",
      body: "LLM-generated JSON flows driving Playwright runners that adapt when the app changes, instead of breaking.",
    },
    {
      icon: "people",
      title: "Bring the team along",
      body: "Leading department-wide moves from manual coding loops to AI-native pipelines, with shared validation standards.",
    },
  ],
} as const;

export const featured = {
  meta: "Current work · 2025 — now",
  title: "AI-coded solutions that raise the bar",
  body: "Using AI to deliver more, faster — without trading away quality. Every AI-built solution goes through the same rigor as hand-written code: clear intent, real tests, and architectural review before anything ships. The result is more output and fewer defects, not one at the expense of the other.",
  tags: ["Claude Code", "AI orchestration", "Code quality", "Automation"],
  steps: [
    "Define the outcome and constraints",
    "AI builds the solution",
    "Verify against intent, tests and architecture",
    "Ship faster — with fewer defects",
  ],
};

export const projects = [
  {
    meta: "Meta · VR",
    title: "VR performance test frameworks",
    body: "Python frameworks for RenderDoc GPU profiling on Oculus headsets, plus Perfetto-based real-time graphics performance tests.",
    stack: "Python · Perfetto · RenderDoc · ADB",
  },
  {
    meta: "Meta · Messenger",
    title: "Cross-platform messaging suites",
    body: "React/Jest end-to-end suites for core messaging infrastructure. Earned Meta's internal “Jest-Hero” award.",
    stack: "TypeScript · React · jest-e2e",
  },
  {
    meta: "ML / AI · UT Austin",
    title: "Support ticket categorization",
    body: "NLP and transformer models combined with prompt engineering to route support tickets automatically.",
    stack: "Transformers · PyTorch · Colab",
  },
];

export const experience = [
  {
    dates: "2025 — Present",
    company: "Apple",
    via: "via Aquent",
    role: "Native-AI Developer & Automation Orchestrator",
    summary:
      "AI orchestration, LLM-driven automation architecture, and leading the department's move to AI-native pipelines.",
    current: true,
  },
  {
    dates: "2022 — 2024",
    company: "Meta",
    via: "via Qualitest",
    role: "VR Tools Developer & Automation Scripter",
    summary:
      "GPU profiling and graphics performance frameworks for VR headsets; Messenger end-to-end automation.",
  },
  {
    dates: "2018 — 2022",
    company: "AssetSmart",
    role: "Senior SDET / Full-Stack Engineer",
    summary:
      "A 10,000+ test data-driven C#/SQL automation engine, plus deployment orchestration via Cypress and custom Slackbots.",
  },
  {
    dates: "2009 — 2018",
    company: "Conduce & TiVo",
    role: "QA Automation Lead & Principal Engineer",
    summary:
      "Company-wide API test suites in Python, penetration testing, and distributed teams building VOD validation frameworks.",
  },
];

export const logos = [
  { src: "/images/meta.svg", alt: "Meta", height: 22, style: "gray" },
  { src: "/images/assetsmart.png", alt: "AssetSmart", height: 26, style: "gray" },
  { src: "/images/conduce.jpg", alt: "Conduce", height: 44, style: "multiply" },
  { src: "/images/tivo.png", alt: "TiVo", height: 28, style: "black" },
] as const;

export const stack = [
  {
    group: "AI-native",
    items: ["Claude Code", "Custom skills & agents", "Prompt engineering", "LLM integration", "PyTorch"],
  },
  { group: "Languages", items: ["Python", "TypeScript", "C# .NET", "C++", "SQL", "Bash"] },
  {
    group: "Automation & cloud",
    items: ["Playwright", "Pytest", "Jest", "Docker", "Kubernetes", "AWS", "GitHub Actions"],
  },
];

export const testimonials = [
  {
    quote:
      "Ron is a highly intelligent, motivated, and creative problem solver… I have no hesitation in recommending him to anyone.",
    name: "Richard Piedra",
    title: "Director of Quality Assurance, Conduce",
    photo: "/images/profile_rp.jpg",
  },
  {
    quote:
      "…contributed greatly to the quality and supportability of our highly complex enterprise application suite.",
    name: "Christopher Cambell",
    title: "CEO, AssetSmart",
    photo: "/images/profile_cc.jpg",
  },
  {
    quote:
      "…he excelled in writing automation and test tools to reduce testing time and increase coverage.",
    name: "Paul Davis",
    title: "Director of Engineering, Rovi",
    photo: "/images/profile_pd.jpg",
  },
];

export const beyond = [
  {
    image: "/images/chess.jpg",
    alt: "Wooden chess king and queen on a board",
    title: "National Chess Master",
    text: "L.A. County Champion and undefeated USAT National Champion.",
  },
  {
    image: "/images/thess.jpg",
    alt: "Large mural on a building in Thessaloniki",
    title: "Composer",
    text: "Wrote a film score while visiting Thessaloniki.",
    link: {
      label: "Watch the film score",
      href: "https://s3.amazonaws.com/www.ywapom.com/vid/RH_visit_flim_mix.mp4",
    },
  },
  {
    image: "/images/panda.jpg",
    alt: "Red panda standing on a rock",
    title: "Red panda supporter",
    text: "Adopter with the Red Panda Network — you can donate too.",
    link: { label: "redpandanetwork.org", href: "https://redpandanetwork.org" },
    position: "40% 50%",
  },
  {
    image: "/images/athens.jpg",
    alt: "The Acropolis in Athens",
    title: "Historic sites",
    text: "Travels for the history — most recently, Athens.",
    position: "38% 50%",
  },
];

export const contact = {
  heading: "Let's put AI to work on your roadmap.",
  body: "Open to AI-native engineering roles and orchestration work. Based in Los Angeles.",
};
