import SocialLinks from "../hero/SocialLinks";

export default function Footer() {
    return (
        <footer className="w-full py-12 mt-20 border-t border-border/40">
            <div className="max-w-[1000px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Daniel Villalobos. All rights reserved.
                </div>
                <div className="scale-90">
                    <SocialLinks />
                </div>
            </div>
        </footer>
    );
}