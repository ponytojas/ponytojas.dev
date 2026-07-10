import type React from "react";

export interface ImageWithModalProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: string;
  fullSrc?: string;
  modalClassName?: string;
  triggerClassName?: string;
  fill?: boolean;
  priority?: boolean;
}

export const ImageWithModal: React.FC<ImageWithModalProps> = ({
  src,
  fullSrc,
  alt = "",
  className,
  triggerClassName,
  priority,
  width,
  height,
  ...props
}) => (
  <a
    className={["case-image-link", triggerClassName].filter(Boolean).join(" ")}
    href={fullSrc ?? src}
    target="_blank"
    rel="noreferrer"
    aria-label={alt ? `Open image: ${alt}` : "Open image"}
  >
    <img
      {...props}
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
    <span className="case-image-action" aria-hidden="true">View full size ↗</span>
  </a>
);
