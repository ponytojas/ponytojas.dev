import SocialLinks from "./SocialLinks";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
    return (
        <section id="presentation" className="relative min-h-[60vh] flex flex-col justify-center items-start py-20 overflow-hidden">
            {/* Technical Grid Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] bg-grid [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />

            <div className="relative z-10 animate-[fadeInUp_0.5s_ease-out_forwards] w-full max-w-3xl">
                <span className="block text-sm font-mono text-accent-primary mb-4 tracking-widest uppercase">
                    Daniel Villalobos
                </span>
                <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-foreground mb-6 leading-[1.1]">
                    Senior Software Engineer
                    <span className="block text-muted-foreground">architecting resilient systems.</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
                    I design and build high-performance distributed architectures and geospatial solutions. My focus is on delivering scalability, reliability, and tangible business impact through code.
                </p>
                <div className="flex flex-row gap-6 items-center mt-8">
                    <Button asChild className="group" size="lg">
                        <a href="mailto:daniel.villalobosdel@icloud.com">
                            Get in touch
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </Button>
                    <SocialLinks />
                </div>
            </div>
        </section>
    );
}
