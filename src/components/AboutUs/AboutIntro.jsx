import React from "react";
import SlideFromRight from '../../effects/SlideFromRight';
import Orbits from '../../components/Orbits';

const AboutIntro = () => (
    <>
        <Orbits />
        <SlideFromRight className="absolute right-4 md:right-8 lg:right-15 top-1/2 transform -translate-y-1/2 max-w-xs md:max-w-md lg:max-w-lg text-white z-30 px-4 md:px-0 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 lg:mb-8" style={{ color: '#EAFE07' }}>Sobre Nós</h1>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-4 md:mb-5 lg:mb-6">
                O Space Apps Challenge é o maior hackathon da NASA, reunindo mentes criativas para resolver desafios reais do espaço e da Terra.
            </p>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-4 md:mb-5 lg:mb-6">
                Em Fortaleza, criamos um ambiente colaborativo onde inovação e tecnologia se encontram para transformar ideias em soluções concretas.
            </p>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                Junte-se a nós nesta jornada extraordinária pelo cosmos da criatividade e descoberta.
            </p>
        </SlideFromRight>
    </>
);

export default AboutIntro;
