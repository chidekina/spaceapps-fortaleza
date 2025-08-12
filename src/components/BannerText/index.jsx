import TypeWriter from "../../effects/TypeWriter";

const BannerText = ({
    text,
    textColor = "text-white",
    fontSize = "text-2xl",
    fontWeight = "font-normal",
    className = "",
    margin = "m-0",
    typewriter = false,
    speed = "normal",
    cursor = true,
    cursorBlinkSpeed = 1,
    delay = 0.5
}) => {
    const sharedClasses = `relative font-heading text-center ${margin} ${textColor} ${fontSize} ${fontWeight} ${className}`;

    return (
        <>
            {typewriter ? (
                <TypeWriter
                    className={sharedClasses}
                    speed={speed}
                    cursor={cursor}
                    cursorBlinkSpeed={cursorBlinkSpeed}
                    delay={delay}
                >
                    {text}
                </TypeWriter>
            ) : (
                <p className={sharedClasses}>
                    {text}
                </p>
            )}
        </>
    );
}

export default BannerText;