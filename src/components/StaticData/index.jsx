const StaticData = ({
    yDirection,
    yValue,
    xDirection,
    xValue,
    source,
    staticValue,
    data, className,
    isSpecial,
    subtitle
}) => {
    const positionStyle = {
        [yDirection]: `${yValue * 0.25}rem`,
        [xDirection]: `${xValue * 0.25}rem`
    };

    if (isSpecial) {
        return (
            <div className={`absolute text-center ${className}`} style={positionStyle}>
                <div className="flex flex-col gap-1 sm:gap-2 justify-center items-center
                         backdrop-blur-[2px] border border-yellow-400 rounded-lg p-2 sm:p-3 min-w-[140px] sm:min-w-[200px]">
                    <div className='flex items-center gap-1 sm:gap-2'>
                        <img
                            className='w-6 sm:w-8'
                            src={`/icons/${source}`}
                        />
                        <div className="text-sm sm:text-lg font-bold text-neon-yellow">
                            {staticValue}
                        </div>
                    </div>
                    <div className="text-xs" dangerouslySetInnerHTML={{ __html: data }}></div>
                    {subtitle && <div className="text-xs text-gray-300">{subtitle}</div>}
                </div>
            </div>
        );
    }

    return (
        <div className={`absolute text-center ${className}`} style={positionStyle}>
            <div className="flex flex-col gap-1 sm:gap-2 justify-center items-center
                     backdrop-blur-[2px] border border-yellow-400 rounded-full p-2 sm:p-3 min-w-[120px] sm:min-w-[160px]">
                <div className='flex items-center gap-1 sm:gap-2'>
                    <img
                        className='w-6 sm:w-8'
                        src={`/icons/${source}`}
                    />
                    <div className="text-lg sm:text-2xl font-bold text-neon-yellow">
                        {staticValue}
                    </div>
                </div>
                <div className="text-xs" dangerouslySetInnerHTML={{ __html: data }}></div>
            </div>
        </div>
    );
}

export default StaticData;