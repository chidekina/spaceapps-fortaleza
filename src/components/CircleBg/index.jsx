const CircleBg = ({
    children,
    circleColor = "border-white/50",
    circleCount = 3,
    className = ""
}) => {
    const circles = Array.from({ length: circleCount }, (_, i) => {
        const baseSize = 800; // Tamanho base menor para mobile
        const increment = 150; // Incremento menor entre círculos
        const size = baseSize + (i * increment);

        return {
            id: i,
            size: size,
            className: `absolute rounded-full border-2 sm:border-3 ${circleColor}`,
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
        <div className={`relative ${className} mb-32 sm:mb-40 lg:mb-80 px-4 sm:px-8 lg:mt-50`}>
            {circles.map(circle => (
                <div
                    key={circle.id}
                    className={circle.className}
                    style={{
                        ...circle.style,
                        // Responsividade através de CSS custom properties
                        width: `min(${circle.size}px, 120vw)`,
                        height: `min(${circle.size}px, 120vw)`
                    }}
                />
            ))}

            <div className="relative z-40">
                {children}
            </div>
        </div>
    );
};

export default CircleBg;
