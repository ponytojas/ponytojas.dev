declare module '*.mdx' {
    import { ComponentType } from 'react';

    export const metadata: {
        title: string;
        position: string;
        color: string;
        darkColor?: string;
        tags?: { technology: string; color: string }[];
        time: string;
        link?: string;
        type?: string
    };

    const MDXComponent: ComponentType;
    export default MDXComponent;
}