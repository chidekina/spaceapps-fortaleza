const TextContent = ({ text, responsiveMargin = false }) => {
    return ( 
        <p className={`text-base md:text-lg lg:text-xl leading-relaxed ${responsiveMargin ? "md:mb-5 lg:mb-6" : ""}`}>
            {text}
        </p>
     );
}
 
export default TextContent;