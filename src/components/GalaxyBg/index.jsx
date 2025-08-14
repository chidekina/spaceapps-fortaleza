const GalaxyBg = ({
    children,
    minHeight = "100vh",
    isFixed = true
}) => {
    return (
        <section
            className={`relative w-full min-h-screen overflow-hidden ${isFixed ? 'bg-fixed' : 'bg-scroll'
                } bg-cover bg-center bg-no-repeat`}
            style={{
                minHeight,
                backgroundImage: 'url(/galaxy.jpg)',
                backgroundAttachment: isFixed ? 'fixed' : 'scroll',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#0a0a0a' // Fallback para um preto espacial
            }}
        >
            {/* Overlay sutil para melhor contraste do texto */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 z-10" />

            {/* Conteúdo */}
            <div className="relative z-20 min-h-full flex flex-col justify-center items-center px-4 py-8 md:px-8 md:py-16 lg:px-20 lg:py-32">
                {children}
            </div>
        </section>
    );
}

export default GalaxyBg