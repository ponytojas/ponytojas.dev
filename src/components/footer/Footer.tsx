import SocialLinks from "../hero/SocialLinks";

export default function Footer() {
    return (
        <footer className="w-full py-12 mt-20 border-t border-border/40 bg-background/50 backdrop-blur-sm">
            <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-sm text-muted-foreground/60 font-medium">
                    © {new Date().getFullYear()} Daniel Villalobos.
                </div>
                <div className="scale-90 opacity-80 hover:opacity-100 transition-opacity">
                    <SocialLinks />
                </div>
            </div>
        </footer>
    );
}
