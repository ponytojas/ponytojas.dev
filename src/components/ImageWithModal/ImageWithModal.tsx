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
  <button
    type="button"
    className={["case-image-link", triggerClassName].filter(Boolean).join(" ")}
    data-image-modal
    data-full-src={fullSrc ?? src}
    aria-label={alt ? `Open image viewer: ${alt}` : "Open image viewer"}
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
    <span className="case-image-action" aria-hidden="true">Zoom image +</span>
  </button>
);
