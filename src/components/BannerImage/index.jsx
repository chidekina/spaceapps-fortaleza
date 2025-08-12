import BlurAppear from "../../effects/BlurAppear";

const BannerImage = () => {
    return (
        <BlurAppear
            speed="slow"
            as="div"
        >
            <div className="flex flex-col items-center my-2">
                <img
                    src="/logo/6.png"
                    alt="Logo Space Apps"
                    className="w-70 h-fit"
                />
                <div className="flex items-center">
                </div>
            </div>
        </BlurAppear>
    );
}

export default BannerImage;