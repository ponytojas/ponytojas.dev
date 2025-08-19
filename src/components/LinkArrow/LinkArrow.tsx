import { ArrowUpRight } from "lucide-react"

export const LinkArrow: React.FC<{ url: string, inline?: boolean, text?: string }> = ({ url, inline = false, text = 'Check it out' }) => {
    const content = (
        <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <span className="text-sm text-gray-500  hover:text-gray-900 dark:hover:text-gray-50 underline underline-offset-4 decoration-dotted hover:decoration-solid transform transition-all duration-300">
                {text}
            </span>
            <ArrowUpRight />
        </a>
    )

    return inline ? (
        <span className="inline-flex">
            {content}
        </span>
    ) : (
        <div className={`mb-8`}>
            {content}
        </div>
    )

}