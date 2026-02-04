"use client";

import Image, { type ImageProps } from "next/image";
import { Cambio } from "cambio";
import { cn } from "@/lib/utils";
import styles from "./styles.module.css";

export interface ImageWithModalProps extends ImageProps {
    fullSrc?: ImageProps["src"];
    modalClassName?: string;
    triggerClassName?: string;
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
    priority,
    loading,
    ...imageProps
}) => {
    const triggerSrc = src;
    const modalSrc = fullSrc ?? src;
    const shouldFill = fill ?? (!width || !height);
    const sharedStyle: NonNullable<ImageProps["style"]> = {
        pointerEvents: "none",
        objectFit: "contain",
        ...style,
    };

    const baseImageProps = shouldFill
        ? { fill: true as const }
        : { width, height };

    return (
        <Cambio.Root motion="smooth">
            <Cambio.Trigger className={cn(styles.trigger, triggerClassName)}>
                <Image
                    {...imageProps}
                    {...baseImageProps}
                    src={triggerSrc}
                    alt={alt}
                    className={className}
                    style={sharedStyle}
                    sizes={shouldFill ? sizes ?? "100vw" : sizes}
                    priority={priority}
                    loading={loading}
                />
            </Cambio.Trigger>
            <Cambio.Portal>
                <Cambio.Backdrop className={styles.backdrop} />
                <Cambio.Popup className={cn(styles.popup, modalClassName)}>
                    <Image
                        {...imageProps}
                        {...baseImageProps}
                        src={modalSrc}
                        alt={alt}
                        className={className}
                        style={sharedStyle}
                        sizes={shouldFill ? sizes ?? "(min-width: 768px) 60vw, 90vw" : sizes}
                        priority={false}
                        loading="lazy"
                    />

                </Cambio.Popup>
            </Cambio.Portal>
        </Cambio.Root>

    );
}
