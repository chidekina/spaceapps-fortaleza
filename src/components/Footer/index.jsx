const Footer = () => {
    return (
        <footer
            className="bg-gradient-space flex flex-col justify-center items-center py-8 px-4 w-full text-white"
        >
            <h2 className="text-xs md:text-sm text-center font-normal">
                © 2025 Space Apps Fortaleza. Todos os direitos reservados.
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-2 mt-3 text-xs md:text-sm">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/cesar-hideki-nagano-326b75115/"
                    className="hover:text-neon-yellow transition-colors"
                >
                    LinkedIn
                </a>
                <span className="hidden md:inline text-white/60">|</span>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/chidekina"
                    className="hover:text-neon-yellow transition-colors"
                >
                    GitHub
                </a>
                <span className="hidden md:inline text-white/60">|</span>
                <a href="mailto:cesar.nagano1@gmail.com" className="hover:text-neon-yellow transition-colors">
                    cesar.nagano1@gmail.com
                </a>
            </div>
        </footer>
    );
}

export default Footer;