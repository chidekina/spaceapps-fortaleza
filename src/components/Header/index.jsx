
import NavBar from "../NavBar";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-sm border-b border-white/10 py-3">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <img src="./logo/4.png" alt="Logo Space Apps Fortaleza" className="h-15 w-auto mr-3" />
                    </div>
                    <NavBar />
                    <div className="md:hidden">
                        <button className="text-white hover:text-neon-yellow p-2">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;