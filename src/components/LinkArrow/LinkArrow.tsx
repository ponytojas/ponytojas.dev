import { ArrowUpRight } from "lucide-react";

export const LinkArrow: React.FC<{
  url: string;
  text?: string;
  inline?: boolean;
}> = ({ url, text = "View" }) => (
  <a className="case-inline-link" href={url} target="_blank" rel="noreferrer">
    <span>{text}</span>
    <ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.8} />
  </a>
);
