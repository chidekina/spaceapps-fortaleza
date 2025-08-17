const Banner = ({ children }) => {
    const handleVideoLoad = (e) => {
        e.target.playbackRate = 0.55;
    };

    return (
        <div
            className="relative w-full min-h-screen flex-col flex justify-center items-center text-center overflow-hidden pb-10 sm:pb-20 py-20 sm:py-40 px-4 sm:px-8"
            aria-label="Banner do Space Apps Fortaleza"
        >
            <video
                className="absolute inset-0 w-full h-full object-cover -z-20"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                onLoadedData={handleVideoLoad}
                poster="./Banner.jpg"
            >
                <source src="./Banner.mp4" type="video/mp4" />
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url(./Banner.jpg)' }}
                ></div>
            </video>
            <div
                className="absolute inset-0 -z-10"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            ></div>
            {children}
        </div>
    );
}

export default Banner;