
import galaxyGif from "/galaxy.gif"


import React from "react";
import GalaxyBg from '../../components/GalaxyBg';
import AboutIntro from '../../components/AboutUs/AboutIntro';
import AboutBenefits from '../../components/AboutUs/AboutBenefits';
import AboutTheme from '../../components/AboutUs/AboutTheme';
import AboutAwards from '../../components/AboutUs/AboutAwards';

const AboutUs = React.memo(() => {
    return (
        <>
            <section
                className="min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${galaxyGif})` }}>
                <div className="absolute inset-0 bg-black opacity-70 md:opacity-50 z-20"></div>
                <AboutIntro />
            </section>
            <GalaxyBg bgImage={galaxyGif}>
                <AboutBenefits />
                <AboutTheme />
            </GalaxyBg>
            <GalaxyBg bgImage={galaxyGif}>
                <AboutAwards />
            </GalaxyBg>
        </>
    );
});

export default AboutUs;