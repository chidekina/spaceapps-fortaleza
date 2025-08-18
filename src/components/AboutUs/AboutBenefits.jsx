import React from "react";
import Overlay from '../../components/Overlay';
import WavesSvg from '../../assets/Waves.svg';
import SlideUpOnScroll from '../../effects/SlideUpOnScroll';

const AboutBenefits = () => (
    <SlideUpOnScroll>
        <div className="flex flex-col relative z-20 pt-4 md:pt-12 lg:pt-16 mx-auto gap-4 md:gap-8 lg:gap-12">
            <h1 className='text-neon-yellow text-center font-bold leading-relaxed md:px-8 lg:px-12 text-lg md:text-xl lg:text-2xl'>
                O NASA Space Apps é um hackathon global para programadores, cientistas, designers, contadores de histórias, fabricantes, tecnólogos e inovadores. Os benefícios para os participantes incluem:
            </h1>
            <div className="px-12 relative flex flex-col z-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${WavesSvg})` }}>
                <Overlay />
                <div className='z-30 flex flex-col gap-4 md:gap-12 lg:gap-16 px-4 md:px-8 lg:px-12'>
                    <SlideUpOnScroll>
                        <p className='w-full md:w-3/4 lg:w-1/2 text-lg md:text-xl lg:text-2xl text-center md:text-left'>
                            <span className='font-bold'>Conhecer pessoas com interesses em comum: <br /></span>
                            A comunidade NASA Space Apps compartilha o desejo de aprender e o interesse em explorar nosso planeta e universo através do uso criativo da ciência e da tecnologia. Todas as idades, níveis de habilidade e formações profissionais são bem-vindos
                        </p>
                    </SlideUpOnScroll>
                    <SlideUpOnScroll>
                        <p className='w-full md:w-3/4 lg:w-1/2 md:ml-auto text-lg md:text-xl lg:text-2xl text-center md:text-right'>
                            <span className='font-bold'>Conhecer pessoas com interesses em comum: <br /></span>
                            A comunidade NASA Space Apps compartilha o desejo de aprender e o interesse em explorar nosso planeta e universo através do uso criativo da ciência e da tecnologia. Todas as idades, níveis de habilidade e formações profissionais são bem-vindos
                        </p>
                    </SlideUpOnScroll>
                </div>
            </div>
        </div>
    </SlideUpOnScroll>
);

export default AboutBenefits;
