import Image from "next/image";
import SocialLinks from "./SocialLinks";
import { useTheme } from "next-themes";

export const Hero = () => {
    const { theme } = useTheme();
    return (
        <section id="presentation" className="min-h-[80vh] flex flex-col justify-center py-20">
            <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-12">
                <div className="flex-1 animate-[fadeInUp_0.8s_ease-out_forwards]">
                    <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 text-foreground">
                        Hello, I&apos;m <span className="text-accent-primary">Daniel</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
                        Spaniard Software Engineer building neat things on the web.
                    </p>
                    <div className="opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
                        <SocialLinks />
                    </div>
                </div>

                <div className="relative w-32 h-32 md:w-48 md:h-48 shrink-0 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
                    <Image
                        src="/logo/logo_no_name.webp"
                        alt="Daniel's Logo"
                        fill
                        className={`object-contain ${theme === "dark" ? "invert" : ""}`}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}