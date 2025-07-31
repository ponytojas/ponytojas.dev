import Image from "next/image";
import SocialLinks from "./SocialLinks";
import { useTheme } from "next-themes";

export const Hero = () => {
    const { theme } = useTheme();
    return (
        <section id="presentation" className="mt-[15vh] mb-[25vh] h-auto pb-12 overflow-x-hidden overflow-y-hidden">
            <Image
                src="/logo/logo_no_name.webp"
                alt="Daniel's Hero Image"
                width={400}
                height={400}
                className={`md:top-4 left-45% object-cover transform transition-all ${theme === "dark" ? "invert" : ""}`}
                priority
            />
            <div className="z-10 mt-10 md:mt-0">
                <h1 className="text-4xl font-medium mb-4 flex items-center gap-6">
                    <span data-indicator-container="presentation" className="relative inline-block w-5 h-5" />
                    Hello, I&apos;m Daniel
                </h1>
                <p className="font-normal text-2xl prose max-w-none lg:prose-xl dark:prose-invert">
                    Spaniard Software Engineer building neat things on the web.
                </p>
                <SocialLinks />
            </div>
        </section>
    );
}