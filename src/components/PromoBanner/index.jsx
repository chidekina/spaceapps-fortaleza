import Button from "../Button";

const PromoBanner = () => {
    // Style inline para o gradiente customizável
    const gradientStyle = {
        background: `linear-gradient(215deg, rgba(0, 66, 166, 1) 0%, rgba(7, 23, 63, 1) 100%)`
    };

    return (
        <div
            className="w-full py-8 sm:py-12 lg:py-15 flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0 px-4 sm:px-8 lg:px-22"
            style={gradientStyle}
        >
            <div className="flex flex-col gap-2 text-center lg:text-left">
                <p className="text-white text-2xl sm:text-3xl lg:text-4xl font-body font-semibold">
                    FAÇA SUA <span className="text-neon-yellow font-bold">PRÉ INSCRIÇÃO!</span>
                </p>
                <p className="text-white text-lg sm:text-xl font-semibold">
                    Embarque conosco nessa jornada! 🚀
                </p>
            </div>
            <div className="flex-shrink-0">
                <Button text="Inscreva-se" link="https://www.sympla.com.br/evento/nasa-space-apps-challenge-2025/3070558#compartilhar-evento?share_id=copiarlink" />
            </div>
        </div>
    );
}

export default PromoBanner;