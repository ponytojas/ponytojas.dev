'use client';

import { FileDown, Github, Linkedin } from "lucide-react";

interface SocialLink {
    href: string;
    title: string;
    icon?: React.ReactNode;
}

const links: SocialLink[] = [
    {
        href: "https://github.com/ponytojas",
        title: "GitHub",
        icon: <Github className="w-4 h-4" />,
    },
    {
        href: "https://linkedin.com/in/ponytojas",
        title: "LinkedIn",
        icon: <Linkedin className="w-4 h-4" />,
    },
    {
        href: "/cv-danielVillalobos.pdf",
        title: "Resume",
        icon: <FileDown className="w-4 h-4" />,
    },
];

export default function SocialLinks() {
    return (
        <div className="flex flex-wrap gap-6">
            {links.map(({ href, title, icon }) => (
                <a
                    key={title}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors duration-200 uppercase tracking-wider"
                >
                    <span className="group-hover:-translate-y-0.5 transition-transform duration-200">
                        {icon}
                    </span>
                    <span className="link-underline">{title}</span>
                </a>
            ))}
        </div>
    );
}
