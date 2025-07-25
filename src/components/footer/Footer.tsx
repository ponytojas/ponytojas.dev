import localFont from "next/font/local";

const calendas = localFont({ src: "./calendas-plus.woff2" });

export default function Footer() {
    return (
        <footer className="sticky bottom-0 bg-accent-primary h-65 w-full flex items-center justify-center pb-10 z-0">
            <div className="relative w-full max-w-screen sm:max-w-[800px] h-full px-12 py-12 text-background">
                <h2
                    className={`${calendas.className} text-center pl-4 sm:ml-0 absolute bottom-0 left-0 text-[80px] sm:text-[150px] font-thin pointer-events-none`}
                >
                    ponytojas
                </h2>
            </div>
        </footer>
    );
}