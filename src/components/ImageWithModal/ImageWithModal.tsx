"use client";

import Image, { type ImageProps } from "next/image";
import { Cambio } from "cambio";
import styles from "./styles.module.css";
import { forwardRef } from "react";

export interface ImageWithModalProps extends ImageProps {
    fullSrc?: ImageProps["src"];
}

const ImageWithModal = forwardRef<HTMLDivElement, ImageWithModalProps>(
    ({ fullSrc, ...imageProps }) => {
        return (
            <Cambio.Root motion="smooth">
                <Cambio.Trigger className={styles.trigger}>
                    <Image
                        fill
                        unoptimized
                        loading="eager"
                        src={fullSrc ?? imageProps.src}
                        alt={imageProps.alt}
                        style={{ pointerEvents: "none", objectFit: "contain" }}
                    />
                </Cambio.Trigger>
                <Cambio.Portal>
                    <Cambio.Backdrop className={styles.backdrop} />
                    <Cambio.Popup className={styles.popup}>
                        <Image
                            fill
                            unoptimized
                            loading="eager"
                            src={fullSrc ?? imageProps.src}
                            alt={imageProps.alt}
                            style={{ pointerEvents: "none", objectFit: "contain" }}
                        />

                    </Cambio.Popup>
                </Cambio.Portal>
            </Cambio.Root>

        );
    },
);

ImageWithModal.displayName = "ImageWithModal";

export default ImageWithModal;