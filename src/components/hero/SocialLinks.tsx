'use client';

import { FileDown, Github, Linkedin } from "lucide-react";
import { motion } from "motion/react";

interface SocialLink {
    href: string;
    title: string;
    textHover: string;
    underline: string;
    icon?: React.ReactNode;
}

const links: SocialLink[] = [
    {
        href: "https://github.com/ponytojas",
        title: "GitHub",
        textHover: "hover:text-[#754DEA]",
        underline: "bg-[#754DEA]",
        icon: <Github className="w-5 h-5 mt-1" />,
    },
    {
        href: "https://linkedin.com/in/ponytojas",
        title: "LinkedIn",
        textHover: "hover:text-[#0A66C2]",
        underline: "bg-[#0A66C2]",
        icon: <Linkedin className="w-5 h-5 mt-1" />,
    },
    {
        href: "/cv-danielVillalobos.pdf",
        title: "CV",
        textHover: "hover:text-accent-primary",
        underline: "bg-accent-primary",
        icon: <FileDown className="w-5 h-5 mt-1" />,
    },
];

export default function SocialLinks() {
    return (
        <motion.section
            className="flex flex-row"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.ul
                className="mt-6 flex flex-wrap justify-center gap-10 text-lg font-medium"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: {},
                    show: {
                        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                    },
                }}
            >
                {links.map(({ href, title, textHover, underline, icon }) => (
                    <motion.li
                        key={title}
                        variants={{
                            hidden: { opacity: 0, y: 12 },
                            show: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.4, ease: "easeOut" },
                            },
                        }}
                    >
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex flex-row group relative gap-1 overflow-hidden transition-colors duration-300 text-muted-foreground ${textHover}`}
                        >
                            {icon && (
                                icon
                            )}
                            {title}
                            <span
                                className={`absolute left-0 bottom-0 h-[1.5px] w-full translate-x-[-100%] ${underline} transition-transform duration-300 group-hover:translate-x-0`}
                            />
                        </a>
                    </motion.li>
                ))}
            </motion.ul>
        </motion.section>
    );
}