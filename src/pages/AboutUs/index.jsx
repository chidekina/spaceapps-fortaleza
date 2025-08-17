import { useEffect, useState } from 'react';
import WavesSvg from '../../assets/waves.svg';
import Orbits from '../../components/Orbits';
import Overlay from '../../components/Overlay';

const AboutUs = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);


    return (
        <>
            <section
                className="relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
                style={{ backgroundImage: 'url(/galaxy.gif)' }}
            >
                <Overlay />
                <Orbits />

                <div className={`absolute right-15 top-1/2 transform -translate-y-1/2 max-w-lg text-white transition-all duration-1000 z-20 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                    <h1 className="text-5xl font-bold mb-8" style={{ color: '#EAFE07' }}>Sobre Nós</h1>
                    <p className="text-xl leading-relaxed mb-6">
                        O Space Apps Challenge é o maior hackathon da NASA, reunindo mentes criativas para resolver desafios reais do espaço e da Terra.
                    </p>
                    <p className="text-xl leading-relaxed mb-6">
                        Em Fortaleza, criamos um ambiente colaborativo onde inovação e tecnologia se encontram para transformar ideias em soluções concretas.
                    </p>
                    <p className="text-xl leading-relaxed">
                        Junte-se a nós nesta jornada extraordinária pelo cosmos da criatividade e descoberta.
                    </p>
                </div>
            </section>

            {/* Segunda seção com o mesmo background */}
            <section
                className="relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
                style={{ backgroundImage: 'url(/galaxy.gif)' }}
            >
                <Overlay />
                <div className="flex flex-col relative z-20 pt-16 px-12 mx-auto gap-12" >
                    <h1 className='text-neon-yellow text-center font-bold leading-relaxed'>
                        O NASA Space Apps é um hackathon global para programadores, cientistas, designers, contadores de
                        histórias, fabricantes, tecnólogos e inovadores. Os benefícios para os participantes incluem:
                    </h1>
                    <div
                        className="relative flex flex-col z-20 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${WavesSvg})` }}
                    >
                        <Overlay />
                        <div className='z-30 flex flex-col gap-16'>
                            <p className='w-1/2 text-2xl'>
                                <span className='font-bold'>Conhecer pessoas com interesses em comum: <br /></span>
                                A comunidade NASA Space Apps compartilha o desejo de aprender
                                e o interesse em explorar nosso planeta e universo através do uso
                                criativo da ciência e da tecnologia. Todas as idades, níveis de
                                habilidade e formações profissionais são bem-vindos
                            </p>
                            <p className='w-1/2 ml-auto text-2xl text-right'>
                                <span className='font-bold'>Conhecer pessoas com interesses em comum: <br /></span>
                                A comunidade NASA Space Apps compartilha o desejo de aprender
                                e o interesse em explorar nosso planeta e universo através do uso
                                criativo da ciência e da tecnologia. Todas as idades, níveis de
                                habilidade e formações profissionais são bem-vindos
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2 relative z-30 mt-30 px-10 text-center'>
                    <h1 className='font-bold text-2xl font-heading text-neon-yellow'>
                        Usar dados abertos para abordar uma variedade de desafios:
                    </h1>
                    <p className='text-lg leading-relaxed'>
                        O NASA Space Apps fornece uma plataforma para que solucionadores de problemas em todo o mundo usem
                        dados abertos e gratuitos da NASA e de seus parceiros da Agência Espacial, incluindo a Agência Espacial
                        Brasileira (AEB) e a Agência Espacial Europeia (ESA).
                    </p>
                    <p className='text-lg leading-relaxed'>
                        As equipes do NASA Space Apps Challenge usam esses recursos para abordar desafios escritos por especialistas
                        da NASA, apresentando tópicos que vão desde contar histórias até desenvolvimento de software, astrofísica,
                        exploração espacial e muito mais.
                    </p>
                        <div className='w-1/2 ml-auto text-xl font-bold text-left font-heading -mr-30 z-40 mt-40'>
                            <h1 className='text-neon-yellow'>
                                TEMA <span className='font-black text-blue-yonder'>2025</span>
                            </h1>
                            <img
                                src='/Theme.png'
                                alt='Tema 2025 "Learn Launch Lead"'
                                className='z-20 w-80'
                            />
                        </div>
                    </div>
            </section>
            <section
                className="relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
                style={{ backgroundImage: 'url(/galaxy.gif)' }}
            >

            <p className='mt-40 text-center font-heading font-black text-neon-yellow z-30 text-5xl'>AWARDS 2025</p>
            </section>
        </>
    );
}

export default AboutUs;