const Button = ({
    link,
    text,
    width = "w-40",
    height = "h-13",
    backgroundColor = "bg-neon-blue",
    textColor = "text-white",
    fontSize = "text-xl"
}) => {
    return (
        <a
            target="_blank"
            href={link}
            rel="noopener noreferrer"
        >
            <button
                className={`flex cursor-pointer font-semibold rounded-3xl items-center justify-center transition-all duration-300 hover:scale-105 px-6 py-3 sm:px-8 sm:py-4 ${width} ${height} ${backgroundColor} ${textColor} ${fontSize}`} >
                {text}
            </button>
        </a>
    );
}

export default Button;