import sunGif from '../../assets/sun.gif';
import StaticData from '../StaticData';
import staticDataList from "../../db/staticDataJson.json";

const SpaceAppsStats = () => {

    return (
        <section className="relative w-full min-h-screen py-10 sm:py-20 bg-cover bg-center bg-fixed overflow-hidden flex items-center justify-center mt-20 sm:mt-32 lg:mt-40"
            style={{
                backgroundImage: 'url(/galaxy.jpg)',
                backgroundAttachment: 'fixed',
                minHeight: '100vh'
            }}
        >
            <div className="absolute inset-0 bg-opacity-40 z-10" />

            <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-4 sm:px-8" style={{ minHeight: '100vh' }}>

                {/* Sol centralizado no topo para mobile, absoluto para desktop */}
                <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 z-30 flex justify-center lg:block pt-8 pb-12 lg:pt-0 lg:pb-0">
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

                {/* Layout para Desktop (lg+) - Posicionamento absoluto */}
                <div className="hidden lg:block">
                    {staticDataList.map(item => (
                        <StaticData
                            key={item.id}
                            yDirection={item.yDirection}
                            yValue={item.yValue}
                            xDirection={item.xDirection}
                            xValue={item.xValue}
                            source={item.source}
                            staticValue={item.staticValue}
                            data={item.data}
                            className={item.className}
                        />
                    ))}
                </div>

                {/* Layout para Mobile/Tablet (até lg) - Flex Column com Sol no topo */}
                <div className="lg:hidden flex flex-col items-center mt-8 mb-20 space-y-12">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 place-items-center w-full">
                        {staticDataList.map(item => {
                            // Universal Event Registration ocupa 2 colunas
                            if (item.data === "Universal Event<br />Registration") {
                                return (
                                    <div key={item.id} className="col-span-2 sm:col-span-2 flex justify-center">
                                        <div className="flex flex-col gap-2 justify-center items-center
                                                 backdrop-blur-[2px] border border-yellow-400 rounded-lg p-3 w-full max-w-[280px] sm:max-w-[320px]">
                                            <div className='flex items-center gap-2'>
                                                <img
                                                    className='w-6 sm:w-7'
                                                    src={`/icons/${item.source}`}
                                                />
                                                <div className="text-sm sm:text-base font-bold text-neon-yellow">
                                                    {item.staticValue}
                                                </div>
                                            </div>
                                            <div className="text-xs sm:text-sm text-center" dangerouslySetInnerHTML={{ __html: item.data }}></div>
                                        </div>
                                    </div>
                                );
                            }

                            // Outros elementos ocupam 1 coluna
                            return (
                                <div key={item.id} className="flex justify-center">
                                    <div className="flex flex-col gap-1 sm:gap-2 justify-center items-center
                                             backdrop-blur-[2px] border border-yellow-400 rounded-full p-2 sm:p-3 min-w-[120px] sm:min-w-[140px]">
                                        <div className='flex items-center gap-1 sm:gap-2'>
                                            <img
                                                className='w-5 sm:w-6'
                                                src={`/icons/${item.source}`}
                                            />
                                            <div className="text-sm sm:text-lg font-bold text-neon-yellow">
                                                {item.staticValue}
                                            </div>
                                        </div>
                                        <div className="text-xs text-center" dangerouslySetInnerHTML={{ __html: item.data }}></div>
                                    </div>
                                </div>
                            );
                        })}                        {/* TOP 5 COUNTRIES para mobile - ocupando espaço de 2 colunas */}
                        <div className="col-span-2 sm:col-span-2 flex justify-center mt-4">
                            <div className="flex flex-col gap-2 justify-center items-center
                                     backdrop-blur-[2px] border border-yellow-400 rounded-lg p-3 w-full max-w-[280px] sm:max-w-[320px]">
                                <div className='flex items-center gap-2'>
                                    <img
                                        className='w-6 sm:w-7'
                                        src='/icons/globe.svg'
                                    />
                                    <div className="text-sm sm:text-base font-bold text-neon-yellow">
                                        TOP 5 COUNTRIES
                                    </div>
                                </div>
                                <div className="text-xs sm:text-sm text-center">India | Egypt | Pakistan | Brazil | Turkey</div>
                                <div className="text-xs text-gray-300 text-center">By Number of Registrants</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TOP 5 COUNTRIES para Desktop */}
                <div className="hidden lg:block absolute bottom-80 left-255 text-left">
                    <div className="flex flex-col gap-2 justify-center
                     backdrop-blur-[2px] border border-yellow-400 rounded-full p-3 min-w-[160px]">
                        <div className='flex flex-col text-left gap-0.5'>
                            <div className='text-2xl font-bold text-neon-yellow'>
                                TOP 5 <br />COUNTRIES
                            </div>
                            <div className="text-sm text-neon-yellow">
                                By Number of Registrants
                            </div>
                        </div>
                        <div className="text-md text-white">India | Egypt | Pakistan | Brazil | Turkey
                        </div>
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
                        width: 400px !important;
                        height: 400px !important;
                    }
                }
            `}</style>
        </section>
    );
}

export default SpaceAppsStats;