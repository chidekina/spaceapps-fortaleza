import React from "react";
import SlideUpOnScroll from '../../effects/SlideUpOnScroll';
import Overlay from '../../components/Overlay';
import Rosette from '../../assets/Rosette.svg';
import Awards from '../../components/Awards';

const AboutAwards = () => (
    <>
        <SlideUpOnScroll>
            <p className=' md:mt-30 lg:mt-40 text-center font-heading font-black text-neon-yellow z-30 text-3xl md:text-4xl lg:text-5xl '>AWARDS 2025</p>
        </SlideUpOnScroll>
        <SlideUpOnScroll>
            <div className="relative flex flex-col z-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Rosette})` }}>
                <Overlay />
                <Awards />
            </div>
        </SlideUpOnScroll>
    </>
);

export default AboutAwards;
