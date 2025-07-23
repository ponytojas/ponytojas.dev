import Image from "next/image";
import SocialLinks from "./SocialLinks";
import { useTheme } from "next-themes";

export const Hero = () => {
    const { theme } = useTheme();
    return (
        <section id="presentation" className="h-[70vh] mt-[25vh] pb-12 overflow-x-hidden">
            <Image
                src="/logo/logo_no_name.webp"
                alt="Daniel's Hero Image"
                width={500}
                height={500}
                className={`absolute top-0 left-45% object-cover transform transition-all ${theme === "dark" ? "invert" : ""}`}
                priority
            />
            <h1 className="text-4xl font-medium mb-4 flex items-center gap-6">
                <span data-indicator-container="presentation" className="relative inline-block w-5 h-5" />
                Hello, I&apos;m Daniel
            </h1>
            <p className="font-normal text-2xl prose lg:prose-xl dark:prose-invert">
                Spaniard Software Engineer building neat things on the web.
            </p>
            <SocialLinks />
        </section>
    );
}