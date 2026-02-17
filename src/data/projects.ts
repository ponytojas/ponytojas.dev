import LabtoolsProject from "@/app/projects/labtools.mdx";
import DiunProject from "@/app/projects/diun.mdx";
import FlappyBallProject from "@/app/projects/flappy-ball.mdx";
import MyTasksProject from "@/app/projects/my-tasks.mdx";

type MdxComponent = (...args: any[]) => any;

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
  Content: MdxComponent;
};

const asComponent = (component: unknown) => component as MdxComponent;

export const projects: ProjectEntry[] = [
  {
    id: "labtools",
    metadata: {
      title: "Labtools",
      subtitle: "Inventory & IoT Monitoring for a Neuroscience Lab",
      type: "Personal Project",
    },
    Content: asComponent(LabtoolsProject),
  },
  {
    id: "diun",
    metadata: {
      title: "Docker Image Update Notify",
      subtitle: "Stay Updated with the Latest Docker Images",
      type: "Personal Project",
    },
    Content: asComponent(DiunProject),
  },
  {
    id: "flappy-ball",
    metadata: {
      title: "Flappy-Ball RL",
      subtitle: "A Reinforcement Learning Demo",
      type: "Personal Project",
    },
    Content: asComponent(FlappyBallProject),
  },
  {
    id: "my-tasks",
    metadata: {
      title: "MyTasks",
      subtitle: "A Personal Task Logging and Summarization Tool",
      type: "Personal Project",
    },
    Content: asComponent(MyTasksProject),
  },
];
