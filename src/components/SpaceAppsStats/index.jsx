import sunGif from '../../assets/sun.gif';
import staticDataList from "../../db/staticDataJson.json";
import SlideUpOnScroll from '../../effects/SlideUpOnScroll';
import Overlay from '../Overlay';

const SpaceAppsStats = () => {

    return (
        <section className="relative w-full min-h-screen py-10 sm:py-20 bg-cover bg-center bg-fixed overflow-hidden flex items-center justify-center mt-20 sm:mt-32 lg:mt-40"
            style={{
                backgroundImage: 'url(/galaxy-2.jpg)',
                backgroundAttachment: 'fixed',
                minHeight: '100vh'
            }}
        >
            <Overlay />
            <div className="absolute inset-0 bg-opacity-40 z-10" />

            <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-4 sm:px-8" style={{ minHeight: '100vh' }}>

                {/* TOP 5 COUNTRIES em destaque no topo - Mobile/Tablet/Desktop */}
                <div className="flex justify-center pt-8 pb-8">
                    <div className="flex flex-col gap-3 justify-center items-center
                             backdrop-blur-[2px] border-2 border-yellow-400 rounded-lg p-5 sm:p-6 min-w-[260px] sm:min-w-[350px] lg:min-w-[400px] shadow-2xl"
                        style={{
                            background: 'rgba(0, 0, 0, 0.4)',
                            boxShadow: '0 0 30px rgba(255, 255, 0, 0.3)'
                        }}>
                        <div className='flex items-center gap-3'>
                            <img
                                className='w-8 sm:w-10'
                                src='/icons/globe.svg'
                            />
                            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-neon-yellow">
                                TOP 5 COUNTRIES
                            </div>
                        </div>
                        <div className="text-base sm:text-lg text-center text-white font-semibold">
                            India | Egypt | Pakistan | <span className='font-bold text-neon-yellow'>Brazil</span> | Turkey
                        </div>
                        <div className="text-xs sm:text-sm text-yellow-300 text-center font-medium">
                            By Number of Registrants
                        </div>
                    </div>
                </div>

                {/* Sol centralizado */}
                <div className="flex justify-center pt-8 pb-12 lg:pt-8 lg:pb-16 z-30">
                    <img
                        src={sunGif}
                        alt="Sun"
                        className="object-cover rounded-full shadow-2xl sun-responsive"
                        style={{
                            width: 'min(350px, 80vw)',  // 350px ou 80% da largura da tela, o que for menor
                            height: 'min(350px, 80vw)',
                            filter: 'drop-shadow(0 0 60px rgba(255, 165, 0, 0.8))',
                            animation: 'sunGlow 3s ease-in-out infinite alternate'
                        }}
                    />
                </div>
                <SlideUpOnScroll>

                    {/* Layout para Desktop (lg+) - Grid Layout */}
                    <div className="hidden lg:flex lg:flex-col lg:items-center lg:mt-8 lg:mb-20 lg:space-y-12">
                        {/* Grid principal com 4 colunas para desktop */}
                        <div className="grid grid-cols-4 gap-6 place-items-center w-full max-w-6xl">
                            {staticDataList.map(item => {
                                // Pular Universal Event Registration aqui, será renderizado separadamente
                                if (item.data === "Universal Event<br />Registration") {
                                    return null;
                                }

                                // Todos os elementos com o mesmo tamanho
                                return (
                                    <div key={item.id} className="flex justify-center">
                                        <div className="flex flex-col gap-2 justify-center items-center
                                             backdrop-blur-[2px] border border-yellow-400 rounded-full p-4 w-[180px] h-[120px]">
                                            <div className='flex items-center gap-2'>
                                                <img
                                                    className='w-7'
                                                    src={`/icons/${item.source}`}
                                                />
                                                <div className="text-xl font-bold text-neon-yellow">
                                                    {item.staticValue}
                                                </div>
                                            </div>
                                            <div className="text-xs text-center leading-tight" dangerouslySetInnerHTML={{ __html: item.data }}></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Universal Event Registration centralizado */}
                        <div className="flex justify-center">
                            {staticDataList.filter(item => item.data === "Universal Event<br />Registration").map(item => (
                                <div key={item.id} className="flex justify-center">
                                    <div className="flex flex-col gap-2 justify-center items-center
                                         backdrop-blur-[2px] border border-yellow-400 rounded-full p-4 w-[180px] h-[120px]">
                                        <div className='flex items-center gap-2'>
                                            <img
                                                className='w-7'
                                                src={`/icons/${item.source}`}
                                            />
                                            <div className="text-xl font-bold text-neon-yellow">
                                                {item.data === "Space Agency<br />Partners" ? item.staticValue : `${item.staticValue}+`}
                                            </div>
                                        </div>
                                        <div className="text-xs text-center leading-tight" dangerouslySetInnerHTML={{ __html: item.data }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </SlideUpOnScroll>

                {/* Layout para Mobile/Tablet (até lg) - Tamanhos uniformes */}
                <div className="lg:hidden flex flex-col items-center mt-8 mb-20 space-y-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 place-items-center w-full max-w-4xl">
                        {/* Universal Event Registration será renderizado abaixo do grid */}
                        {staticDataList.filter(item => item.data !== "Universal Event<br />Registration").map(item => (
                            <div key={item.id} className="flex justify-center">
                                <div className="flex flex-col gap-2 justify-center items-center
                                         backdrop-blur-[2px] border border-yellow-400 rounded-full p-3 w-[140px] h-[100px] sm:w-[160px] sm:h-[110px]">
                                    <div className='flex items-center gap-2'>
                                        <img
                                            className='w-5 sm:w-6'
                                            src={`/icons/${item.source}`}
                                        />
                                        <div className="text-sm sm:text-lg font-bold text-neon-yellow">
                                            {item.data === "Space Agency<br />Partners" ? item.staticValue : `${item.staticValue}+`}
                                        </div>
                                    </div>
                                    <div className="text-xs text-center leading-tight" dangerouslySetInnerHTML={{ __html: item.data }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Universal Event Registration centralizado abaixo do grid */}
                    <div className="flex justify-center w-full">
                        {staticDataList.filter(item => item.data === "Universal Event<br />Registration").map(item => (
                            <div key={item.id} className="flex justify-center">
                                <div className="flex flex-col gap-2 justify-center items-center
                                         backdrop-blur-[2px] border border-yellow-400 rounded-full p-3 w-[140px] h-[100px] sm:w-[160px] sm:h-[110px]">
                                    <div className='flex items-center gap-2'>
                                        <img
                                            className='w-5 sm:w-6'
                                            src={`/icons/${item.source}`}
                                        />
                                        <div className="text-sm sm:text-lg font-bold text-neon-yellow">
                                            {item.data === "Space Agency<br />Partners" ? item.staticValue : `${item.staticValue}+`}
                                        </div>
                                    </div>
                                    <div className="text-xs text-center leading-tight" dangerouslySetInnerHTML={{ __html: item.data }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <style jsx>{`
                @keyframes sunGlow {
                    0% {
                        filter: drop-shadow(0 0 40px rgba(255, 165, 0, 0.6));
                    }
                    100% {
                        filter: drop-shadow(0 0 80px rgba(255, 165, 0, 1));
                    }
                }
                
                .sun-responsive {
                    width: min(350px, 80vw);
                    height: min(350px, 80vw);
                }
                
                @media (min-width: 1024px) {
                    .sun-responsive {
                        width: 350px !important;
                        height: 350px !important;
                    }
                }
                
                @media (min-width: 1280px) {
                    .sun-responsive {
                        width: 400px !important;
                        height: 400px !important;
                    }
                }
            `}</style>
        </section>
    );
}

export default SpaceAppsStats;