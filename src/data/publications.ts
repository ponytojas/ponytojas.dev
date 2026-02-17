import V2xPublication from "@/app/publications/v2x.mdx";

type MdxComponent = (...args: any[]) => any;

export type PublicationMetadata = {
  title: string;
  time: string;
  link?: string;
};

export type PublicationEntry = {
  id: string;
  metadata: PublicationMetadata;
  Content: MdxComponent;
};

const asComponent = (component: unknown) => component as MdxComponent;

export const publications: PublicationEntry[] = [
  {
    id: "v2x",
    metadata: {
      title:
        "Evaluating V2X Communications in the CARLA Simulator for a Collaborative Planning Use Case",
      time: "December 2024",
      link: "https://ieeexplore.ieee.org/abstract/document/10796909",
    },
    Content: asComponent(V2xPublication),
  },
];
