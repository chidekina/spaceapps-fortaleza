import sunGif from '../../assets/sun.gif';
import StaticData from '../StaticData';
import staticDataList from "../../db/staticDataJson.json";

const SpaceAppsStats = () => {

    return (
        <section className="relative w-full min-h-screen py-20 bg-cover bg-center bg-fixed overflow-hidden flex items-center justify-center"
            style={{
                backgroundImage: 'url(/galaxy.jpg)',
                backgroundAttachment: 'fixed',
                minHeight: '120vh' // Aumentando a altura mínima
            }}
        >
            <div className="absolute inset-0 bg-opacity-40 z-10" />

            <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-4" style={{ minHeight: '120vh' }}>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                    <img
                        src={sunGif}
                        alt="Sun"
                        className="w-85 h-85 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] object-cover rounded-full shadow-2xl"
                        style={{
                            filter: 'drop-shadow(0 0 60px rgba(255, 165, 0, 0.8))',
                            animation: 'sunGlow 3s ease-in-out infinite alternate'
                        }}
                    />
                </div>

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


                <div className="absolute bottom-80 left-255 text-left">
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
            `}</style>
        </section>
    );
}

export default SpaceAppsStats;