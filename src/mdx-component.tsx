import type { MDXComponents } from 'mdx/types'
import { RotatingTooltipText } from '@/components/rotating-tooltip-text/RotatingTooltipText';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        RotatingTooltipText
    }
}