import { ArrowUpRight } from "lucide-react";

export const LinkArrow: React.FC<{
  url: string;
  text?: string;
}> = ({ url, text = "View" }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors group"
    >
      <span className="link-subtle">{text}</span>
      <ArrowUpRight aria-hidden="true" className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
};
