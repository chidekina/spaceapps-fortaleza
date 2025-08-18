
import React, { useState } from "react";

const Banner = ({ children }) => {
    const [isVideoReady, setIsVideoReady] = useState(false);

    const handleVideoLoad = (e) => {
        e.target.playbackRate = 0.55;
    };

    const handleCanPlayThrough = () => {
        setIsVideoReady(true);
    };

    return (
        <div
            className="relative w-full min-h-screen flex-col flex justify-center items-center text-center overflow-hidden pb-10 sm:pb-20 py-20 sm:py-40 px-4 sm:px-8"
            aria-label="Banner do Space Apps Fortaleza"
        >
            <video
                className="absolute inset-0 w-full h-full object-cover -z-20"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                onLoadedData={handleVideoLoad}
                onCanPlayThrough={handleCanPlayThrough}
                poster="./Banner.jpg"
            >
                <source src="./Banner.mp4" type="video/mp4" />
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url(./Banner.jpg)' }}
                ></div>
            </video>
            <div
                className="absolute inset-0 -z-10"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            ></div>
            {!isVideoReady && (
                <div className="absolute inset-0 flex items-center justify-center z-50 bg-black/80">
                    <img
                        src="/logo/6.png"
                        alt="Logo Space Apps"
                        className="w-32 sm:w-40 md:w-48 lg:w-56 animate-pulse opacity-80 transition-opacity duration-700"
                        style={{ filter: "drop-shadow(0 0 20px #EAFE07)" }}
                    />
                </div>
            )}
            {isVideoReady && children}
        </div>
    );
}

export default Banner;