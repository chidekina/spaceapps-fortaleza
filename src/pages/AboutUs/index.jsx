import WavesSvg from '../../assets/Waves.svg';
import Voronoi from '../../assets/Voronoi.svg'
import Rosette from "../../assets/Rosette.svg";
import Orbits from '../../components/Orbits';
import Overlay from '../../components/Overlay';
import Awards from '../../components/Awards';
import SlideFromRight from '../../effects/SlideFromRight';
import SlideUpOnScroll from '../../effects/SlideUpOnScroll';

const AboutUs = () => {
    return (
        <>
            <section
                className="relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
                style={{ backgroundImage: 'url(/galaxy.gif)' }}
            >
                {/* Overlay responsivo - mais escuro no mobile */}
                <div className="absolute inset-0 bg-black opacity-70 md:opacity-50 z-20"></div>
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
            </section>
            <section
                className="relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
                style={{ backgroundImage: 'url(/galaxy.gif)' }}
            >
                <Overlay />
                <SlideUpOnScroll>

                    <div className="flex flex-col relative z-20 pt-8 md:pt-12 lg:pt-16 mx-auto gap-6 md:gap-8 lg:gap-12" >
                        <h1 className='text-neon-yellow text-center font-bold leading-relaxed px-4 md:px-8 lg:px-12 text-lg md:text-xl lg:text-2xl'>
                            O NASA Space Apps é um hackathon global para programadores, cientistas, designers, contadores de
                            histórias, fabricantes, tecnólogos e inovadores. Os benefícios para os participantes incluem:
                        </h1>
                        <div
                            className="relative flex flex-col z-20 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${WavesSvg})` }}
                        >
                            <Overlay />
                            <div className='z-30 flex flex-col gap-8 md:gap-12 lg:gap-16 px-4 md:px-8 lg:px-12'>
                                <SlideUpOnScroll>
                                    <p className='w-full md:w-3/4 lg:w-1/2 text-lg md:text-xl lg:text-2xl text-center md:text-left'>
                                        <span className='font-bold'>Conhecer pessoas com interesses em comum: <br /></span>
                                        A comunidade NASA Space Apps compartilha o desejo de aprender
                                        e o interesse em explorar nosso planeta e universo através do uso
                                        criativo da ciência e da tecnologia. Todas as idades, níveis de
                                        habilidade e formações profissionais são bem-vindos
                                    </p>
                                </SlideUpOnScroll>
                                <SlideUpOnScroll>
                                    <p className='w-full md:w-3/4 lg:w-1/2 md:ml-auto text-lg md:text-xl lg:text-2xl text-center md:text-right'>
                                        <span className='font-bold'>Conhecer pessoas com interesses em comum: <br /></span>
                                        A comunidade NASA Space Apps compartilha o desejo de aprender
                                        e o interesse em explorar nosso planeta e universo através do uso
                                        criativo da ciência e da tecnologia. Todas as idades, níveis de
                                        habilidade e formações profissionais são bem-vindos
                                    </p>
                                </SlideUpOnScroll>
                            </div>
                        </div>
                    </div>
                </SlideUpOnScroll>
                <div className='flex flex-col gap-2 relative z-30 mt-16 md:mt-20 lg:mt-30 text-center'>
                    <SlideUpOnScroll>
                        <h1 className='font-bold text-xl md:text-2xl lg:text-3xl font-heading text-neon-yellow px-4 md:px-8 lg:px-12'>
                            Usar dados abertos para abordar uma variedade de desafios:
                        </h1>
                        <p className='text-sm md:text-base lg:text-lg leading-relaxed px-4 md:px-8 lg:px-12'>
                            O NASA Space Apps fornece uma plataforma para que solucionadores de problemas em todo o mundo usem
                            dados abertos e gratuitos da NASA e de seus parceiros da Agência Espacial, incluindo a Agência Espacial
                            Brasileira (AEB) e a Agência Espacial Europeia (ESA).
                        </p>
                        <p className='text-sm md:text-base lg:text-lg leading-relaxed px-4 md:px-8 lg:px-12'>
                            As equipes do NASA Space Apps Challenge usam esses recursos para abordar desafios escritos por especialistas
                            da NASA, apresentando tópicos que vão desde contar histórias até desenvolvimento de software, astrofísica,
                            exploração espacial e muito mais.
                        </p>
                    </SlideUpOnScroll>
                    <SlideUpOnScroll>
                        <div
                            className="relative flex flex-col z-20 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${Voronoi})` }}
                        >
                            <Overlay />
                            <div className='w-full md:w-3/4 lg:w-1/2 md:ml-auto text-base md:text-lg lg:text-xl font-bold text-center md:text-center lg:text-left font-heading -mr-0 md:-mr-15 lg:-mr-30 z-40 mt-6 md:mt-8 lg:mt-10 px-4 md:px-0'>
                                <h1 className='text-neon-yellow'>
                                    TEMA <span className='font-black text-blue-yonder'>2025</span>
                                </h1>
                                <img
                                    src='/Theme.png'
                                    alt='Tema 2025 "Learn Launch Lead"'
                                    className='z-20 w-48 md:w-64 lg:w-80 mx-auto lg:mx-0'
                                />
                            </div>
                        </div>
                    </SlideUpOnScroll>
                </div>
            </section >
            <section
                className="relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
                style={{ backgroundImage: 'url(/galaxy.gif)' }}
            >
                <SlideUpOnScroll>

                    <p className='mt-20 md:mt-30 lg:mt-40 text-center font-heading font-black text-neon-yellow z-30 text-3xl md:text-4xl lg:text-5xl px-4'>AWARDS 2025</p>
                </SlideUpOnScroll>
                <SlideUpOnScroll>
                    <div
                        className="relative flex flex-col z-20 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${Rosette})` }}
                    >
                        <Overlay />
                        <Awards />
                    </div>
                </SlideUpOnScroll>
            </section>
        </>
    );
}

export default AboutUs;