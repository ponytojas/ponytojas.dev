import { ArrowUpRight } from "lucide-react"

export const LinkArrow: React.FC<{ url: string, inline?: boolean, text?: string }> = ({ url, inline = false, text = 'Check it out' }) => {
    const content = (
        <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group w-fit relative">
            <span className="text-sm font-medium text-brand-secondary group-hover:text-brand-primary underline underline-offset-4 decoration-dotted group-hover:decoration-solid transform transition-all duration-300 group-hover:translate-x-0.5">
                {text}
            </span>
            <ArrowUpRight className="w-4 h-4 text-brand-secondary group-hover:text-brand-primary transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
