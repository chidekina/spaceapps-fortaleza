import React, { useState } from "react";
import { useEffect } from "react";

const GalaxyBg = ({
    children,
    minHeight = "100vh",
    isFixed = true,
    bgImage,
    className,
    ...props
}) => {
    const [isBgLoaded, setIsBgLoaded] = useState(false);
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        const checkIOS = () => {
            return /iPad|Iphone|Ipod/.test(navigator.userAgent) ||
                (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        };
        setIsIOS(checkIOS());
    }, []); 

    return (
        <section
            className={`relative w-full min-h-screen ${isFixed ? 'bg-fixed' : 'bg-scroll bg-cover bg-center overflow-hidden'} bg-cover bg-center bg-no-repeat ${className}`}
            style={{
                minHeight,
                backgroundColor: '#0a0a0a',
                ...(isIOS ? {
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundAttachment: 'scroll',
                    WebkitBackgroundSize: 'cover',
                    WebkitTransform: 'translateZ(0)',
                } : {
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundAttachment: isFixed ? 'fixed' : 'scroll'
                })
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
            <div className={`relative z-20 min-h-full flex flex-col justify-center items-center md:py-16 overflow-hidden transition-opacity duration-700 ${isBgLoaded ? "opacity-100" : "opacity-0"}`}>
                {isBgLoaded && children}
            </div>
        </section>
    );
}

export default GalaxyBg;