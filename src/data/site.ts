export type ProjectTone = "cream" | "orange" | "acid" | "blue";

export type FeaturedProject = {
  slug: string;
  number: string;
  title: string;
  description: string;
  year: string;
  category: string;
  tags: string[];
  image: string;
  imageAlt: string;
  href?: string;
  cta?: string;
  tone: ProjectTone;
};

export type CareerEntry = {
  company: string;
  role: string;
  time: string;
  summary: string;
  tags: string[];
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "labtools",
    number: "01",
    title: "Labtools",
    description: "Inventory and live room telemetry built around the real routines of a neuroscience lab.",
    year: "2025",
    category: "Internal platform",
    tags: ["Go", "MQTT", "IoT", "Data visualization"],
    image: "/projects/labtools/dashboard.webp",
    imageAlt: "Labtools monitoring dashboard",
    tone: "cream",
  },
  {
    slug: "my-tasks",
    number: "02",
    title: "MyTasks",
    description: "A personal work log that became an AI-assisted reporting tool for a wider team.",
    year: "2026",
    category: "Product",
    tags: ["Next.js", "PocketBase", "OpenAI"],
    image: "/projects/my-tasks/main.webp",
    imageAlt: "MyTasks weekly task interface",
    href: "https://tasks.ponytojas.dev/",
    cta: "Open demo",
    tone: "orange",
  },
  {
    slug: "flappy-ball",
    number: "03",
    title: "Flappy-Ball RL",
    description: "Neural agents learning a tiny game through evolution, one chaotic generation at a time.",
    year: "2026",
    category: "Experiment",
    tags: ["React", "Canvas", "Reinforcement learning"],
    image: "/projects/flappy/main.gif",
    imageAlt: "Flappy-Ball reinforcement learning simulation",
    href: "https://flappy-ball.ponytojas.dev/",
    cta: "Run experiment",
    tone: "acid",
  },
  {
    slug: "diun",
    number: "04",
    title: "Docker Image Update Notify",
    description: "A lightweight Go service that watches containers and sends useful update alerts.",
    year: "2025",
    category: "Infrastructure",
    tags: ["Go", "Docker API", "Cron", "Telegram"],
    image: "/projects/diun/notifications.webp",
    imageAlt: "Docker image update notifications",
    href: "https://github.com/ponytojas/DIUN",
    cta: "View repository",
    tone: "blue",
  },
];

export const careerEntries: CareerEntry[] = [
  {
    company: "Lumibit Digital / BMW",
    role: "Senior full-stack engineer",
    time: "2024 — Now",
    summary: "Building private-cloud products used by thousands of engineers: vehicle topology explorers, feature lifecycle tooling, background data pipelines and test-fleet planning systems.",
    tags: ["Architecture", "TypeScript", "Redis", "SVG"],
  },
  {
    company: "ETRA I+D",
    role: "Technical lead",
    time: "2023 — 2024",
    summary: "Led engineering for European smart-city research: public-transport digital twins, real-time telemetry, geospatial decision tools and secure DataSpace integrations.",
    tags: ["Digital twins", "Deck.GL", "Kubernetes", "IoT"],
  },
  {
    company: "Bounsel",
    role: "Senior software engineer",
    time: "2022 — 2023",
    summary: "Modernized a LegalTech platform, led its move to a Nuxt 3 monorepo and owned dynamic Smart Forms from product definition through delivery.",
    tags: ["Nuxt", "Monorepos", "Performance", "Product"],
  },
  {
    company: "Thermohuman",
    role: "Software engineer",
    time: "2021 — 2022",
    summary: "Built health-tech features used by elite sports teams, improved thermal-image analytics and moved a legacy interface toward a tested React application.",
    tags: ["React", "HealthTech", "Testing", "Imaging"],
  },
  {
    company: "Anova IT Consulting",
    role: "Full-stack developer",
    time: "2019 — 2021",
    summary: "Delivered enterprise web platforms, IoT dashboards and hybrid mobile apps while mentoring junior developers and shaping projects with clients.",
    tags: ["Node.js", "PostgreSQL", "IoT", "React Native"],
  },
  {
    company: "Narrativa",
    role: "AI researcher",
    time: "2017 — 2019",
    summary: "Worked between software and data science on NLG systems that transformed live football data into automated sports journalism.",
    tags: ["Python", "NLG", "ETL", "Data"],
  },
];

export const engineeringPrinciples = [
  { number: "01", title: "Reduce noise", detail: "Complexity needs an editor." },
  { number: "02", title: "Design for failure", detail: "Reliable beats impressive." },
  { number: "03", title: "Make it useful", detail: "Usage is the final test." },
];
