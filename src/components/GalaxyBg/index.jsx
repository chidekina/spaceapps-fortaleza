const GalaxyBg = ({
    children,
    minHeight = "100vh",
    isFixed = true,
    bgImage,
    ...props
}) => {
    return (
        <section
            className={`relative w-full min-h-screen ${isFixed ? 'bg-fixed' : 'bg-scroll bg-cover bg-center overflow-hidden'
                } bg-cover bg-center bg-no-repeat`}
            style={{
                minHeight,
                backgroundImage: `url(${bgImage})`,
                backgroundColor: '#0a0a0a' // Fallback para um preto espacial
            }}
            {...props}
        >
            {/* Overlay sutil para melhor contraste do texto */}


            {/* Conteúdo */}
            <div className="relative z-20 min-h-full flex flex-col justify-center items-center  py-8 md:px-8 md:py-16 lg:px-20 lg:py-32 overflow-hidden">
                {children}
            </div>
        </section>
    );
}

export default GalaxyBg