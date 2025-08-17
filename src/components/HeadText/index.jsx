const HeadText = ({ text }) => {
    return (
        <div className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white !m-0 font-bold font-heading px-4 sm:px-8 mb-6 sm:mb-8 lg:mb-12">
            {text}
        </div>
    );
}

export default HeadText;