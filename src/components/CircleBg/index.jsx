const CircleBg = ({
    children,
    circleColor = "border-white/50",
    circleCount = 3,
    className = ""
}) => {
    const circles = Array.from({ length: circleCount }, (_, i) => {
        const size = 1200 + (i * 200); 
        return {
            id: i,
            size: size,
            className: `absolute rounded-full border-3 ${circleColor}`,
            style: {
                width: `${size}px`,
                height: `${size}px`,
                left: '50%',
                top: '70%',
                transform: 'translate(-50%, -50%)'
            }
        };
    });

    return (
        <div className={`relative ${className}`}>
            {circles.map(circle => (
                <div
                    key={circle.id}
                    className={circle.className}
                    style={circle.style}
                />
            ))}

            <div className="relative z-40">
                {children}
            </div>
        </div>
    );
};

export default CircleBg;
