
import { useState } from "react";
import NavBar from "../NavBar";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-sm border-b border-white/10 py-3">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <img src="./logo/4.png" alt="Logo Space Apps Fortaleza" className="h-15 w-auto mr-3" />
                    </div>

                    {/* NavBar para desktop */}
                    <NavBar />

                    {/* Botão hambúrguer para mobile */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-neon-yellow p-2 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                // Ícone X quando menu está aberto
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                // Ícone hambúrguer quando menu está fechado
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Menu mobile */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/60 backdrop-blur-sm rounded-lg mt-2">
                            <NavBar isMobile={true} onItemClick={toggleMenu} />
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;