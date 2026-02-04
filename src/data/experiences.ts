import dynamic from "next/dynamic";
import type { ComponentType } from "react";

export type ExperienceTag = {
  technology: string;
  color: string;
};

export type ExperienceMetadata = {
  title: string;
  position: string;
  color: string;
  darkColor?: string;
  tags?: ExperienceTag[];
  time: string;
  link?: string;
};

export type ExperienceEntry = {
  id: string;
  metadata: ExperienceMetadata;
  Content: ComponentType;
};

const loadMdx = (loader: () => Promise<{ default: ComponentType }>) =>
  dynamic(loader, { ssr: false, loading: () => null });

export const experiences: ExperienceEntry[] = [
  {
    id: "lumibit",
    metadata: {
      title: "Lumibit Digital",
      position: "Senior software engineer",
      color: "#DA0D3A",
      darkColor: "#DA0D3A",
      time: "2024 - Present",
      link: "https://lumibit.io",
    },
    Content: loadMdx(() => import("@/app/experiences/lumibit.mdx")),
  },
  {
    id: "etra",
    metadata: {
      title: "ETRA I+D",
      position: "Senior Software Engineer",
      color: "#002181",
      darkColor: "#4040e6",
      time: "2023 - 2024",
      link: "https://www.grupoetra.com/",
    },
    Content: loadMdx(() => import("@/app/experiences/etra.mdx")),
  },
  {
    id: "bounsel",
    metadata: {
      title: "Bounsel",
      position: "Senior Software Engineer",
      color: "#002181",
      darkColor: "#4040e6",
      time: "2022 - 2023",
      link: "https://bounsel.com",
    },
    Content: loadMdx(() => import("@/app/experiences/bounsel.mdx")),
  },
  {
    id: "thermohuman",
    metadata: {
      title: "Thermohuman",
      position: "Software Engineer",
      color: "#f96332",
      darkColor: "#f96332",
      time: "2021 - 2022",
      link: "https://thermohuman.com",
    },
    Content: loadMdx(() => import("@/app/experiences/thermohuman.mdx")),
  },
  {
    id: "anova",
    metadata: {
      title: "Anova IT Consulting",
      position: "Full Stack Developer",
      color: "#f57c00",
      darkColor: "#f57c00",
      time: "2019 - 2021",
      link: "https://www.anovagroup.es/",
    },
    Content: loadMdx(() => import("@/app/experiences/anova.mdx")),
  },
  {
    id: "narrativa",
    metadata: {
      title: "Narrativa",
      position: "AI Researcher",
      color: "#00008D",
      darkColor: "#4040e6",
      time: "2017 - 2019",
      link: "https://www.narrativa.com/",
    },
    Content: loadMdx(() => import("@/app/experiences/narrativa.mdx")),
  },
];
