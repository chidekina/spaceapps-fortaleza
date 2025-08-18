
const HeadText = ({ text, className = "" }) => {
    return (
        <div className={`text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold font-heading px-4 sm:px-8 mb-6 sm:mb-8 sm:mt-12 lg:mb-12 ${className}`}>
            {text}
        </div>
    );
}

export default HeadText;