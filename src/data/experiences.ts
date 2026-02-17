import LumibitExperience from "@/app/experiences/lumibit.mdx";
import EtraExperience from "@/app/experiences/etra.mdx";
import BounselExperience from "@/app/experiences/bounsel.mdx";
import ThermohumanExperience from "@/app/experiences/thermohuman.mdx";
import AnovaExperience from "@/app/experiences/anova.mdx";
import NarrativaExperience from "@/app/experiences/narrativa.mdx";

type MdxComponent = (...args: any[]) => any;

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
  Component: MdxComponent;
};

const asComponent = (component: unknown) => component as MdxComponent;

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
    Component: asComponent(LumibitExperience),
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
    Component: asComponent(EtraExperience),
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
    Component: asComponent(BounselExperience),
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
    Component: asComponent(ThermohumanExperience),
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
    Component: asComponent(AnovaExperience),
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
    Component: asComponent(NarrativaExperience),
  },
];
