export type ProjectTone =
  | "cream"
  | "orange"
  | "acid"
  | "blue"
  | "ink"
  | "mint"
  | "pink"
  | "salmon"
  | "lilac"
  | "sky"
  | "gold";

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
  website: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "shiori",
    number: "01",
    title: "Shiori",
    description:
      "A self-hosted bookmark manager rebuilt around a tag-based operational reading workflow.",
    year: "2026",
    category: "Self-hosted product",
    tags: ["Go", "React", "TypeScript", "SQLite"],
    image: "/projects/shiori/inbox.webp",
    imageAlt:
      "Shiori inbox with operational reading filters and saved bookmarks",
    href: "https://github.com/ponytojas/shiori",
    cta: "View repository",
    tone: "mint",
  },
  {
    slug: "labtools",
    number: "02",
    title: "Labtools",
    description:
      "Inventory and live room telemetry built around the real routines of a neuroscience lab.",
    year: "2025",
    category: "Internal platform",
    tags: ["Go", "MQTT", "IoT", "Data visualization", "Next.js"],
    image: "/projects/labtools/dashboard.webp",
    imageAlt: "Labtools monitoring dashboard",
    tone: "cream",
  },
  {
    slug: "my-tasks",
    number: "03",
    title: "MyTasks",
    description:
      "A personal work log that became an AI-assisted reporting tool for a wider team.",
    year: "2026",
    category: "Product",
    tags: ["Next.js", "PocketBase", "LLM"],
    image: "/projects/my-tasks/main.webp",
    imageAlt: "MyTasks weekly task interface",
    href: "https://github.com/ponytojas/manage-tasks",
    cta: "View repository",
    tone: "orange",
  },
  {
    slug: "flappy-ball",
    number: "04",
    title: "Flappy-Ball RL",
    description:
      "Neural agents learning a tiny game through evolution, one chaotic generation at a time.",
    year: "2026",
    category: "Experiment",
    tags: ["React", "Canvas", "Reinforcement learning"],
    image: "/projects/flappy/main.gif",
    imageAlt: "Flappy-Ball reinforcement learning simulation",
    href: "https://github.com/ponytojas/Flappy-Ball-RL",
    cta: "View repository",
    tone: "acid",
  },
  {
    slug: "diun",
    number: "05",
    title: "Docker Image Update Notify",
    description:
      "A lightweight Go service that watches containers and sends useful update alerts.",
    year: "2025",
    category: "Infrastructure",
    tags: ["Go", "Docker API", "Cron", "Telegram"],
    image: "/projects/diun/notifications.webp",
    imageAlt: "Docker image update notifications",
    href: "https://github.com/ponytojas/DIUN",
    cta: "View repository",
    tone: "salmon",
  },
];

export const careerEntries: CareerEntry[] = [
  {
    company: "Lumibit Digital",
    role: "Senior Fullstack Fngineer - Principal Architect",
    time: "2024 — Now",
    summary:
      "Building private cloud products used by thousands of BMW engineers: vehicle topology explorers, feature lifecycle tooling, background data pipelines and test-fleet planning systems.",
    website: "https://lumibit.io/",
    tags: [
      "Architecture",
      "TypeScript",
      "React",
      "Mongo",
      "PostgreSQL",
      "GraphQL",
      "Redis",
      "SVG",
    ],
  },
  {
    company: "ETRA I+D",
    role: "Senior Software Engineer - Technical Lead",
    time: "2023 — 2024",
    summary:
      "Led engineering for European smart-city research: public-transport digital twins, real-time telemetry, geospatial decision tools and secure DataSpace integrations.",
    website: "https://www.grupoetra.com/",
    tags: [
      "Digital twins",
      "Deck.GL",
      "Kubernetes",
      "IoT",
      "Meteor",
      "DataSpaces",
      "IDSA",
    ],
  },
  {
    company: "Bounsel",
    role: "Software Engineer",
    time: "2022 — 2023",
    summary:
      "Modernized a LegalTech platform, led its move to a Nuxt 3 monorepo and owned dynamic Smart Forms from product definition through delivery.",
    website: "https://www.bounsel.com/es/",
    tags: ["Nuxt", "Monorepos", "Performance", "Product"],
  },
  {
    company: "Thermohuman",
    role: "Software engineer",
    time: "2021 — 2022",
    summary:
      "Built health-tech features used by elite sports teams, improved thermal-image analytics and moved a legacy interface toward a tested React application.",
    website: "https://thermohuman.com/",
    tags: [
      "React",
      "HealthTech",
      "Testing",
      "Imaging",
      "PHP",
      "Python",
      "C++",
      "MySQL",
      "Product",
      "Architecture",
    ],
  },
  {
    company: "Anova IT Consulting",
    role: "Fullstack developer",
    time: "2019 — 2021",
    summary:
      "Delivered enterprise web platforms, IoT dashboards and hybrid mobile apps while mentoring junior developers and shaping projects with clients.",
    website: "https://www.anovagroup.es/",
    tags: [
      "Node.js",
      "PostgreSQL",
      "IoT",
      "React Native",
      "Python",
      "edX",
      "PHP",
    ],
  },
  {
    company: "Narrativa",
    role: "AI researcher",
    time: "2017 — 2019",
    summary:
      "Worked between software and data science on NLG systems that transformed live football data into automated sports journalism.",
    website: "",
    tags: ["Python", "NLG", "ETL", "Data", "Matlab", "AI"],
  },
];

export const engineeringPrinciples = [
  {
    number: "01",
    title: "Reduce noise",
    detail: "Complexity needs an editor.",
  },
  {
    number: "02",
    title: "Design for failure",
    detail: "Reliable beats impressive.",
  },
  { number: "03", title: "Make it useful", detail: "Usage is the final test." },
];
