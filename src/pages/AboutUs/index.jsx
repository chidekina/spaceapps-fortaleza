import { useEffect, useState } from 'react';
import Ellipse1 from '../../assets/Orbits/Ellipse 1.svg';
import Ellipse2 from '../../assets/Orbits/Ellipse 2.svg';
import Ellipse3 from '../../assets/Orbits/Ellipse 3.svg';
import Ellipse4 from '../../assets/Orbits/Ellipse 4.svg';
import Ellipse5 from '../../assets/Orbits/Ellipse 5.svg';
import WavesSvg from '../../assets/waves.svg';

const AboutUs = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const orbits = [
        { svg: Ellipse1, size: 'w-[450px] h-[320px]' },
        { svg: Ellipse2, size: 'w-[400px] h-[280px]' },
        { svg: Ellipse3, size: 'w-[350px] h-[240px]' },
        { svg: Ellipse4, size: 'w-[300px] h-[200px]' },
        { svg: Ellipse5, size: 'w-[250px] h-[160px]' },
    ];

    return (
        <>
            <section
                className="relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
                style={{ backgroundImage: 'url(/galaxy.gif)' }}
            >
                {/* Overlay escuro por cima da imagem */}
                <div className="absolute inset-0 bg-black/50 z-0"></div>

                {/* Container das órbitas posicionado no canto superior esquerdo */}
                <div className="-left-50 absolute top-12 transform scale-175 z-10">
                    {/* Órbitas e Planetas */}
                    {orbits.map((orbit, index) => (
                        <div key={index} className="absolute">
                            {/* Órbita estática */}
                            <div className={`${orbit.size} `}>
                                <img
                                    src={orbit.svg}
                                    alt={`Orbit ${index + 1}`}
                                    className="w-full h-full object-contain filter brightness-90"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Conteúdo da página */}
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
                {/* Overlay escuro por cima da imagem */}
                <div className="absolute inset-0 bg-black/50 z-0"></div>

                {/* Conteúdo da segunda seção */}
                <div className="flex flex-col relative z-20 pt-16 px-12 mx-auto gap-12" >
                    <h1 className='text-neon-yellow text-center font-bold leading-relaxed'>
                        O NASA Space Apps é um hackathon global para programadores, cientistas, designers, contadores de
                        histórias, fabricantes, tecnólogos e inovadores. Os benefícios para os participantes incluem:
                    </h1>
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
                <div
                    className="relative flex flex-col z-20 p-12 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${WavesSvg})` }}
                >
                    {/* Overlay para deixar o background mais opaco */}
                    <div className="absolute inset-0 bg-black/70 z-0"></div>

                    <div className='relative z-10'>
                        <h1 className='font-bold text-2xl mb-4 font-heading text-white'>
                            Usar dados abertos para abordar uma variedade de desafios:
                        </h1>
                        <p className='text-lg leading-relaxed mb-10'>
                            O NASA Space Apps fornece uma plataforma para que solucionadores de problemas em todo o mundo usem
                            dados abertos e gratuitos da NASA e de seus parceiros da Agência Espacial, incluindo a Agência Espacial
                            Brasileira (AEB) e a Agência Espacial Europeia (ESA).
                        </p>
                        <p className='text-lg leading-relaxed mb-24'>
                            As equipes do NASA Space Apps Challenge usam esses recursos para abordar desafios escritos por especialistas
                            da NASA, apresentando tópicos que vão desde contar histórias até desenvolvimento de software, astrofísica,
                            exploração espacial e muito mais.
                        </p>
                        <div className='w-1/2 ml-auto text-xl font-black text-left font-heading'>
                            <h1>
                                TEMA 2025:
                            </h1>
                        </div>
                    </div>
                    <p className='mt-40 text-center font-heading font-black text-neon-yellow z-20 text-5xl'>AWARDS 2025</p>
                </div>
            </section>
        </>
    );
}

export default AboutUs;