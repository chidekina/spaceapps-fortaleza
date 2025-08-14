import sunGif from '../../assets/sun.gif';

const SpaceAppsStats = () => {
    return (
        <section className="relative w-full min-h-screen py-20 bg-cover bg-center bg-fixed overflow-hidden flex items-center justify-center"
            style={{
                backgroundImage: 'url(/galaxy.jpg)',
                backgroundAttachment: 'fixed',
                minHeight: '120vh' // Aumentando a altura mínima
            }}
        >
            {/* Overlay escuro para contraste */}
            <div className="absolute inset-0 bg-opacity-40 z-10" />

            {/* Container principal */}
            <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-4" style={{ minHeight: '120vh' }}>

                {/* Sol no centro */}
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

                {/* Estatísticas posicionadas ao redor do sol */}

                {/* Participantes Registrados - Top */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="flex flex-col gap-2 justify-center items-center backdrop-blur-[2px] border-yellow-400 rounded-full p-4 min-w-[200px]">
                        <div className='flex items-center gap-2'>
                            <img
                                className='w-8'
                                src='/icons/user.svg'
                            />
                            <div className="text-2xl font-bold text-neon-yellow">
                                93.520
                            </div>
                        </div>
                        <div className="text-sm text-white">Registered Participants</div>
                    </div>
                </div>

                {/* Projetos Submetidos - Top Left */}
                <div className="absolute top-15 left-70 text-center">
                    <div className="flex flex-col gap-2 justify-center items-center
                     backdrop-blur-[2px] border border-yellow-400 rounded-full p-3 min-w-[160px]">
                        <div className='flex items-center gap-2'>
                            <img
                                className='w-8'
                                src='/icons/file-arrow-down.svg'
                            />
                            <div className="text-2xl font-bold text-neon-yellow">
                                9,996
                            </div>
                        </div>
                        <div className="text-xs text-white">Projects Submitted</div>
                    </div>
                </div>

                {/* Teams - Top Right */}
                <div className="absolute top-15 right-70 text-center">
                    <div className="flex flex-col gap-2 justify-center items-center
                     backdrop-blur-[2px] border border-yellow-400 rounded-full p-3 min-w-[160px]">
                        <div className='flex items-center gap-2'>
                            <img
                                className='w-8'
                                src='/icons/users-three.svg'
                            />
                            <div className="text-2xl font-bold text-neon-yellow">
                                15,444
                            </div>
                        </div>
                        <div className="text-xs text-white">Teams</div>
                    </div>
                </div>

                {/* Challenges - Left */}
                <div className="absolute top-50 left-40 transform -translate-y-1/2 text-center">
                    <div className="flex flex-col gap-2 justify-center items-center
                     backdrop-blur-[2px] border border-yellow-400 rounded-full p-3 min-w-[160px]">
                        <div className='flex items-center gap-2'>
                            <img
                                className='w-8'
                                src='/icons/laptop.svg'
                            />
                            <div className="text-2xl font-bold text-neon-yellow">
                                20
                            </div>
                        </div>
                        <div className="text-xs text-white">Challenges</div>
                    </div>
                </div>

                {/* Countries/Territories - Right */}
                <div className="absolute top-50 right-40 transform -translate-y-1/2 text-center">
                    <div className="flex flex-col gap-2 justify-center items-center
                     backdrop-blur-[2px] border border-yellow-400 rounded-full p-3 min-w-[160px]">
                        <div className='flex items-center gap-2'>
                            <img
                                className='w-8'
                                src='/icons/globe.svg'
                            />
                            <div className="text-2xl font-bold text-neon-yellow">163</div>
                        </div>
                        <div className="text-xs text-white">
                            Countries/ Territories
                        </div>
                    </div>
                </div>

                {/* Space Agency Partners - Bottom Left */}
                <div className="absolute top-70 left-30 text-center">
                    <div className="flex flex-col gap-2 justify-center items-center
                     backdrop-blur-[2px] border border-yellow-400 rounded-full p-3 min-w-[160px]">
                        <div className='flex items-center gap-2'>
                            <img
                                className='w-8'
                                src='/icons/planet.svg'
                            />
                            <div className="text-2xl font-bold text-neon-yellow">15</div>
                        </div>
                        <div className="text-xs text-white">
                            Space Agency<br />Partners
                        </div>
                    </div>
                </div>

                {/* Local Events - Bottom */}
                <div className="absolute top-70 right-30 text-center">
                    <div className="flex flex-col gap-2 justify-center items-center
                     backdrop-blur-[2px] border border-yellow-400 rounded-full p-3 min-w-[160px]">
                        <div className='flex items-center gap-2'>
                            <img
                                className='w-8'
                                src='/icons/planet.svg'
                            />
                            <div className="text-2xl font-bold text-neon-yellow">485</div>
                        </div>
                        <div className="text-sm text-white">
                            Local Events
                        </div>
                    </div>
                </div>

                {/* Subject Matter Experts - Bottom Right */}
                <div className="absolute bottom-65 left-35 text-center">
                    <div className="flex flex-col gap-2 justify-center items-center
                     backdrop-blur-[2px] border border-yellow-400 rounded-full p-3 min-w-[160px]">
                        <div className='flex items-center gap-2'>
                            <img
                                className='w-8'
                                src='/icons/student.svg'
                            />
                            <div className="text-2xl font-bold text-neon-yellow">120</div>
                        </div>
                        <div className="text-xs text-white">Subject Matter<br />Experts</div>
                    </div>
                </div>

                {/* Social Media Reach - Intermediário esquerdo */}
                <div className="absolute bottom-32 left-45 text-center">
                    <div className="flex flex-col gap-2 justify-center items-center
                     backdrop-blur-[2px] border border-yellow-400 rounded-full p-3 min-w-[160px]">
                        <div className='flex items-center gap-2'>
                            <img
                                className='w-8'
                                src='/icons/thumbs-up.svg'
                            />
                            <div className="text-2xl font-bold text-neon-yellow">
                                512M
                            </div>
                        </div>
                        <div className="text-xs text-white">Social Mentions<br />Reach</div>
                    </div>
                </div>

                {/* Global Offers - Intermediário inferior direito */}
                <div className="absolute bottom-5 left-85 text-center">
                    <div className="flex flex-col gap-2 justify-center items-center
                     backdrop-blur-[2px] border border-yellow-400 rounded-full p-3 min-w-[160px]">
                        <div className='flex items-center gap-2'>
                            <img
                                className='w-8'
                                src='/icons/thumbs-up.svg'
                            />
                            <div className="text-2xl font-bold text-neon-yellow">
                                26
                            </div>
                        </div>
                        <div className="text-xs text-white">Amplification<br /> Collaborators
                        </div>
                    </div>
                </div>

                {/* Navigators - Intermediário inferior esquerdo */}
                <div className="absolute bottom-0 left-135 text-center">
                    <div className="flex flex-col gap-2 justify-center items-center
                     backdrop-blur-[2px] border border-yellow-400 rounded-full p-3 min-w-[160px]">
                        <div className='flex items-center gap-2'>
                            <img
                                className='w-8'
                                src='/icons/rocket-launch.svg'
                            />
                            <div className="text-2xl font-bold text-neon-yellow">
                                26
                            </div>
                        </div>
                        <div className="text-xs text-white">Navigators</div>
                    </div>
                </div>
                <div className="absolute bottom-10 right-70 text-center">
                    <div className="flex flex-col gap-2 justify-center items-center
                     backdrop-blur-[2px] border border-yellow-400 rounded-full p-3 min-w-[160px]">
                        <div className='flex items-center gap-2'>
                            <img
                                className='w-8'
                                src='/icons/pencil-line.svg'
                            />
                            <div className="text-2xl font-bold text-neon-yellow">
                                14
                            </div>
                        </div>
                        <div className="text-xs text-white">Global Offers</div>
                    </div>
                </div>
                <div className="absolute bottom-30 right-30 text-center">
                    <div className="flex flex-col gap-2 justify-center items-center
                     backdrop-blur-[2px] border border-yellow-400 rounded-full p-3 min-w-[160px]">
                        <div className='flex items-center gap-2'>
                            <img
                                className='w-8'
                                src='/icons/world-wide.svg'
                            />
                            <div className="text-2xl font-bold text-neon-yellow">
                                5.796
                            </div>
                        </div>
                        <div className="text-xs text-white">Universal Event <br />
                            Registration</div>
                    </div>
                </div>
                <div className="absolute bottom-60 left-225 text-left">
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
            {/* CSS personalizado para animação do sol */}
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