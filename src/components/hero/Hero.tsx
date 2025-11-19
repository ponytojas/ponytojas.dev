import Image from "next/image";
import SocialLinks from "./SocialLinks";
import { useTheme } from "next-themes";

export const Hero = () => {
    const { theme } = useTheme();
    return (
        <section id="presentation" className="min-h-[90vh] flex flex-col justify-center py-20 relative overflow-hidden">

            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-24 z-10">
                <div className="flex-1 animate-[fadeInUp_0.8s_ease-out_forwards] text-center md:text-left">
                    <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter mb-8 text-foreground leading-[1.1]">
                        Hello, I&apos;m <span className="text-accent-primary inline-block hover:scale-105 transition-transform duration-300 cursor-default">Daniel</span>
                    </h1>
                    <p className="text-xl md:text-3xl text-muted-foreground max-w-2xl leading-relaxed mb-10 font-light tracking-wide mx-auto md:mx-0">
                        Spaniard Software Engineer building <span className="text-foreground font-medium">neat things</span> on the web.
                    </p>
                    <div className="opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards] flex justify-center md:justify-start">
                        <SocialLinks />
                    </div>
                </div>

                <div className="relative w-48 h-48 md:w-72 md:h-72 shrink-0 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
                    <Image
                        src="/logo/logo_no_name.webp"
                        alt="Daniel's Logo"
                        fill
                        className={`object-contain drop-shadow-2xl ${theme === "dark" ? "invert" : ""}`}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}