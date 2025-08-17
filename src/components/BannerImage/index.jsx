import BlurAppear from "../../effects/BlurAppear";

const BannerImage = () => {
    return (
        <BlurAppear
            speed="slow"
            as="div"
        >
            <div className="flex flex-col items-center my-4 sm:my-6 lg:my-8">
                <img
                    src="/logo/6.png"
                    alt="Logo Space Apps"
                    className="w-48 sm:w-60 md:w-70 lg:w-80 h-fit max-w-full"
                />
                <div className="flex items-center">
                </div>
            </div>
        </BlurAppear>
    );
}

export default BannerImage;