const Button = ({
    link,
    text,
    width = "w-40",
    height = "h-12",
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
             className={`cursor-pointer font-semibold rounded-3xl ${width} ${height} ${backgroundColor} ${textColor}`} >
                <span className={`${fontSize}`}>
                    {text}
                </span>
            </button>
        </a>
    );
}

export default Button;