"use client";

import * as React from "react";
import Image, { type ImageProps } from "next/image";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogClose,
    DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export interface ImageWithModalProps extends ImageProps {
    fullSrc?: ImageProps["src"];
    thumbnailClassName?: string;
    modalClassName?: string;
}

const ImageWithModal = React.forwardRef<HTMLDivElement, ImageWithModalProps>(
    ({ fullSrc, thumbnailClassName, modalClassName, ...imageProps }, ref) => {
        const { width: _w, height: _h, ...rest } = imageProps;

        return (
            <Dialog>
                <DialogTrigger asChild ref={ref}>
                    <div className={cn("inline-block cursor-zoom-in", thumbnailClassName)}>
                        <Image {...imageProps} />
                    </div>
                </DialogTrigger>

                <VisuallyHidden>
                    <DialogTitle />
                </VisuallyHidden>

                <DialogContent
                    className={cn(
                        "p-0 border-0 bg-transparent flex items-center justify-center [&>button]:hidden",
                        modalClassName,
                    )}
                >
                    <DialogClose asChild>
                        <div
                            className={cn(
                                "relative w-full h-full",
                                "min-h-[75vh] min-w-[90vw] md:min-h-[50vh] md:min-w-[50vw]",
                                "max-h-[90vh] max-w-[90vw]",
                            )}
                        >
                            <Image
                                {...rest}
                                src={fullSrc ?? imageProps.src}
                                alt={imageProps.alt}
                                priority={imageProps.priority}
                                fill
                                sizes="(max-width: 768px) 90vw, 50vw"
                                className="object-contain"
                            />
                        </div>
                    </DialogClose>
                </DialogContent>
            </Dialog>
        );
    },
);

ImageWithModal.displayName = "ImageWithModal";

export default ImageWithModal;