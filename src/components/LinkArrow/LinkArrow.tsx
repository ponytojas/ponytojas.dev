import { ArrowUpRight } from "lucide-react"

export const LinkArrow: React.FC<{ url: string, inline?: boolean, text?: string }> = ({ url, inline = false, text = 'Check it out' }) => {
    const content = (
        <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group w-fit">
            <span className="text-sm font-medium text-brand-secondary group-hover:text-brand-primary underline underline-offset-4 decoration-dotted hover:decoration-solid transform transition-all duration-300">
                {text}
            </span>
            <ArrowUpRight className="w-4 h-4 text-brand-secondary group-hover:text-brand-primary transition-colors" />
        </a>
    )

    return inline ? (
        <span className="inline-flex">
            {content}
        </span>
    ) : (
        <div className={`mb-4`}>
            {content}
        </div>
    )
}
