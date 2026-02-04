import dynamic from "next/dynamic";
import type { ComponentType } from "react";

export type PublicationMetadata = {
  title: string;
  time: string;
  link?: string;
};

export type PublicationEntry = {
  id: string;
  metadata: PublicationMetadata;
  Content: ComponentType;
};

const loadMdx = (loader: () => Promise<{ default: ComponentType }>) =>
  dynamic(loader, { ssr: false, loading: () => null });

export const publications: PublicationEntry[] = [
  {
    id: "v2x",
    metadata: {
      title:
        "Evaluating V2X Communications in the CARLA Simulator for a Collaborative Planning Use Case",
      time: "December 2024",
      link: "https://ieeexplore.ieee.org/abstract/document/10796909",
    },
    Content: loadMdx(() => import("@/app/publications/v2x.mdx")),
  },
];
