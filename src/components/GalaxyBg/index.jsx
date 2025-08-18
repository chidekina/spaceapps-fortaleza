import React, { useState } from "react";

const GalaxyBg = ({
    children,
    minHeight = "100vh",
    isFixed = true,
    bgImage,
    className,
    ...props
}) => {
    const [isBgLoaded, setIsBgLoaded] = useState(false);

    return (
        <section
            className={`relative w-full min-h-[80vh] md:min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden ${className}`}
            style={{
                minHeight,
                backgroundImage: `url(${bgImage})`,
                backgroundColor: '#0a0a0a'
            }}
            {...props}
        >
            {/* Imagem invisível para disparar o carregamento */}
            <img
                src={bgImage}
                alt="background"
                style={{ display: "none" }}
                onLoad={() => setIsBgLoaded(true)}
            />

            {/* Loading com a logo */}
            {!isBgLoaded && (
                <div className="absolute inset-0 flex items-center justify-center z-50 bg-black/80">
                    <img
                        src="/logo/6.png"
                        alt="Logo Space Apps"
                        className="w-32 sm:w-40 md:w-48 lg:w-56 animate-pulse opacity-80 transition-opacity duration-700"
                        style={{ filter: "drop-shadow(0 0 20px #EAFE07)" }}
                    />
                </div>
            )}

            {/* Conteúdo */}
            <div className={`relative z-20 min-h-full flex flex-col justify-center items-center overflow-hidden transition-opacity duration-700 ${isBgLoaded ? "opacity-100" : "opacity-0"}`}>
                {isBgLoaded && children}
            </div>
        </section>
    );
}

export default GalaxyBg