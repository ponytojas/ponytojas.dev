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
      tags: [
        { technology: "React", color: "#0A7EA4" },
        { technology: "NodeJS", color: "#336633" },
        { technology: "MongoDB", color: "#00684A" },
        { technology: "PostgreSQL", color: "#336791" },
        { technology: "GraphQL", color: "#E10098" },
        { technology: "Redis", color: "#FF4438" },
        { technology: "TypeScript", color: "#3178C6" },
        { technology: "BullMQ", color: "#BDBDBD" },
        { technology: "Mongoose", color: "#00684A" },
      ],
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
      tags: [
        { technology: "React", color: "#0A7EA4" },
        { technology: "NodeJS", color: "#336633" },
        { technology: "MongoDB", color: "#00684A" },
        { technology: "Go", color: "#00ADD8" },
        { technology: "Flutter", color: "#0553B1" },
        { technology: "NATS", color: "#34A574" },
        { technology: "K8S", color: "#0169CA" },
        { technology: "ESP32", color: "#BDBDBD" },
        { technology: "Deck.GL", color: "#2B3848" },
        { technology: "Kepler.GL", color: "#1EBAD7" },
        { technology: "LoRa", color: "#27A8DC" },
      ],
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
      tags: [
        { technology: "Nuxt", color: "#00DC82" },
        { technology: "VueJS", color: "#43B17F" },
        { technology: "PostgreSQL", color: "#336791" },
      ],
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
      tags: [
        { technology: "React", color: "#0A7EA4" },
        { technology: "PHP", color: "#777BB3" },
        { technology: "MySQL", color: "#3D6E93" },
        { technology: "Python", color: "#4B8BBE" },
        { technology: "C++", color: "#6195CC" },
      ],
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
      tags: [
        { technology: "React", color: "#0A7EA4" },
        { technology: "NodeJS", color: "#336633" },
        { technology: "Wordpress", color: "#23282D" },
        { technology: "Drupal", color: "#0077C0" },
        { technology: "Joomla", color: "#7ac143" },
        { technology: "React native", color: "#0A7EA4" },
        { technology: "PostgreSQL", color: "#336791" },
        { technology: "Nuxt", color: "#00DC82" },
        { technology: "Python", color: "#4B8BBE" },
      ],
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
      tags: [
        { technology: "Python", color: "#4B8BBE" },
        { technology: "Tensorflow", color: "#FF9C00" },
        { technology: "Matlab", color: "##08609D" },
      ],
      time: "2017 - 2019",
      link: "https://www.narrativa.com/",
    },
    Content: loadMdx(() => import("@/app/experiences/narrativa.mdx")),
  },
];
