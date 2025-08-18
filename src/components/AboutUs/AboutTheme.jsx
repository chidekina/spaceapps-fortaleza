import React from "react";
import Overlay from '../../components/Overlay';
import Voronoi from '../../assets/Voronoi.svg';
import SlideUpOnScroll from '../../effects/SlideUpOnScroll';

const AboutTheme = () => (
    <div className='flex flex-col gap-2 relative z-30 mt-8 md:mt-20 lg:mt-30 text-center'>
        <SlideUpOnScroll>
            <h1 className='font-bold text-xl md:text-2xl lg:text-3xl font-heading text-neon-yellow px-4 md:px-8 lg:px-12'>
                Usar dados abertos para abordar uma variedade de desafios:
            </h1>
            <div className="px-12 text-justify">
                <p className='text-sm md:text-base lg:text-lg leading-relaxed px-4 md:px-8 lg:px-12'>
                    O NASA Space Apps fornece uma plataforma para que solucionadores de problemas em todo o mundo usem dados abertos e gratuitos da NASA e de seus parceiros da Agência Espacial, incluindo a Agência Espacial Brasileira (AEB) e a Agência Espacial Europeia (ESA).
                </p>
                <p className='text-sm md:text-base lg:text-lg leading-relaxed px-4 md:px-8 lg:px-12'>
                    As equipes do NASA Space Apps Challenge usam esses recursos para abordar desafios escritos por especialistas da NASA, apresentando tópicos que vão desde contar histórias até desenvolvimento de software, astrofísica, exploração espacial e muito mais.
                </p>
            </div>
        </SlideUpOnScroll>
        <SlideUpOnScroll>
            <div className="relative flex flex-col z-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Voronoi})` }}>
                <Overlay />
                <div className='w-full md:w-3/4 lg:w-1/2 md:ml-auto text-base md:text-lg lg:text-xl font-bold text-center md:text-center lg:text-left font-heading -mr-0 md:-mr-15 lg:-mr-70 z-40 mt-4 md:mt-8 lg:mt-10 px-4 md:px-0'>
                    <h1 className='text-neon-yellow'>
                        TEMA <span className='font-black text-blue-yonder'>2025</span>
                    </h1>
                    <img
                        src='/Theme.png'
                        alt='Tema 2025 "Learn Launch Lead"'
                        className='z-50 w-48 md:w-64 lg:w-80 mx-auto lg:mx-0'
                        loading="lazy"
                    />
                </div>
            </div>
        </SlideUpOnScroll>
    </div>
);

export default AboutTheme;
