export default function Footer() {
    return (
        <footer className="sticky bottom-0 bg-accent-primary h-65 w-full flex items-center justify-center pb-10 z-0">
            <div className="relative w-full max-w-screen sm:max-w-[800px] h-full px-12 py-12 text-background flex items-center justify-center align-middle">
                <span
                    className='font-sans mx-auto text-center absolute bottom-0 text-[80px] sm:text-[150px] font-thin pointer-events-none'
                >
                    ponytojas
                </span>
            </div>
        </footer>
    );
}