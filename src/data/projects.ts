import dynamic from "next/dynamic";
import type { ComponentType } from "react";

export type ProjectMetadata = {
  title: string;
  subtitle?: string;
  type?: string;
  tags?: { technology: string; color: string }[];
  link?: string;
};

export type ProjectEntry = {
  id: string;
  metadata: ProjectMetadata;
  Content: ComponentType;
};

const loadMdx = (loader: () => Promise<{ default: ComponentType }>) =>
  dynamic(loader, { ssr: false, loading: () => null });

export const projects: ProjectEntry[] = [
  {
    id: "labtools",
    metadata: {
      title: "Labtools",
      subtitle: "Inventory & IoT Monitoring for a Neuroscience Lab",
      type: "Personal Project",
    },
    Content: loadMdx(() => import("@/app/projects/labtools.mdx")),
  },
  {
    id: "diun",
    metadata: {
      title: "Docker Image Update Notify",
      subtitle: "Stay Updated with the Latest Docker Images",
      type: "Personal Project",
    },
    Content: loadMdx(() => import("@/app/projects/diun.mdx")),
  },
  {
    id: "flappy-ball",
    metadata: {
      title: "Flappy-Ball RL",
      subtitle: "A Reinforcement Learning Demo",
      type: "Personal Project",
    },
    Content: loadMdx(() => import("@/app/projects/flappy-ball.mdx")),
  },
  {
    id: "my-tasks",
    metadata: {
      title: "MyTasks",
      subtitle: "A Personal Task Logging and Summarization Tool",
      type: "Personal Project",
    },
    Content: loadMdx(() => import("@/app/projects/my-tasks.mdx")),
  },
];
