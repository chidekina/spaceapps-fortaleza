
import galaxyGif from "/galaxy.gif"


import React, { useEffect, useState } from "react";
import GalaxyBg from '../../components/GalaxyBg';
import AboutIntro from '../../components/AboutUs/AboutIntro';
import AboutBenefits from '../../components/AboutUs/AboutBenefits';
import AboutTheme from '../../components/AboutUs/AboutTheme';
import AboutAwards from '../../components/AboutUs/AboutAwards';

const AboutUs = React.memo(() => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleLoad = () => setIsLoaded(true);
        if (document.readyState === "complete") {
            setIsLoaded(true);
        } else {
            window.addEventListener("load", handleLoad);
        }
        return () => window.removeEventListener("load", handleLoad);
    }, []);

    if (!isLoaded) {
        return (
            <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-black/80">
                <img
                    src="/logo/6.png"
                    alt="Logo Space Apps"
                    className="w-32 sm:w-40 md:w-48 lg:w-56 animate-pulse opacity-80 transition-opacity duration-700"
                    style={{ filter: "drop-shadow(0 0 20px #EAFE07)" }}
                />
            </div>
        );
    }

    return (
        <>
            <GalaxyBg bgImage={galaxyGif} className="w-full overflow-hidden bg-cover bg-center bg-no-repeat items-center h-100">
                <div className="absolute inset-0 bg-black opacity-70 md:opacity-50 z-20"></div>
                <AboutIntro />
            </GalaxyBg>
            <GalaxyBg bgImage={galaxyGif} className="bg-cover bg-center bg-no-repeat">
                <AboutBenefits />
                <AboutTheme />
            </GalaxyBg>
            <GalaxyBg bgImage={galaxyGif} className="bg-cover bg-center bg-no-repeat">
                <AboutAwards />
            </GalaxyBg>
        </>
    );
});

export default AboutUs;