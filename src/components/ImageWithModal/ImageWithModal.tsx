"use client";

import type React from "react";
import { Cambio } from "cambio";
import { cn } from "@/lib/utils";
import styles from "./styles.module.css";

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
  fullSrc,
  modalClassName,
  triggerClassName,
  src,
  alt,
  className,
  style,
  fill,
  width,
  height,
  sizes,
  loading,
  priority,
  ...imageProps
}) => {
  const triggerSrc = src;
  const modalSrc = fullSrc ?? src;
  const shouldFill = fill ?? (!width || !height);

  const sharedStyle: React.CSSProperties = {
    pointerEvents: "none",
    objectFit: "contain",
    ...style,
  };

  const imageAttrs = shouldFill
    ? {
        style: {
          ...sharedStyle,
          position: "absolute" as const,
          inset: 0,
          width: "100%",
          height: "100%",
        },
      }
    : {
        width,
        height,
        style: sharedStyle,
      };

  return (
    <Cambio.Root motion="smooth">
      <Cambio.Trigger className={cn(styles.trigger, triggerClassName)}>
        <img
          {...imageProps}
          {...imageAttrs}
          src={triggerSrc}
          alt={alt}
          className={className}
          sizes={sizes}
          loading={priority ? "eager" : loading}
          decoding="async"
        />
      </Cambio.Trigger>
      <Cambio.Portal>
        <Cambio.Backdrop className={styles.backdrop} />
        <Cambio.Popup className={cn(styles.popup, modalClassName)}>
          <img
            {...imageProps}
            {...imageAttrs}
            src={modalSrc}
            alt={alt}
            className={className}
            sizes={sizes ?? "(min-width: 768px) 60vw, 90vw"}
            loading="lazy"
            decoding="async"
          />
        </Cambio.Popup>
      </Cambio.Portal>
    </Cambio.Root>
  );
};
