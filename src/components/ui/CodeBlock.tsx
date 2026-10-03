import type { ComponentProps } from "react";

/** Let keyboard users scroll long code samples without moving the page. */
export const CodeBlock = ({ children, ...props }: ComponentProps<"pre">) => (
  <pre {...props} tabIndex={0} aria-label="Code example">
    {children}
  </pre>
);
