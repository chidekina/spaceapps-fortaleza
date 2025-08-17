import { useEffect, useState } from 'react';

const SlideTransition = ({
    children,
    direction = 'right',
    duration = 1000,
    delay = 0,
    className = '',
    ...props
}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    // Definir as classes de transição baseadas na direção
    const getTransitionClasses = () => {
        const durationClass = duration === 1000 ? 'duration-1000' : `duration-[${duration}ms]`;
        const baseClasses = `transition-all ${durationClass} ${className}`;

        if (isVisible) {
            return `${baseClasses} opacity-100`;
        }

        switch (direction) {
            case 'right':
                return `${baseClasses} opacity-0 translate-x-8`;
            case 'left':
                return `${baseClasses} opacity-0 -translate-x-8`;
            case 'top':
                return `${baseClasses} opacity-0 -translate-y-8`;
            case 'bottom':
                return `${baseClasses} opacity-0 translate-y-8`;
            default:
                return `${baseClasses} opacity-0 translate-x-8`;
        }
    };

    return (
        <div className={getTransitionClasses()} {...props}>
            {children}
        </div>
    );
};

export default SlideTransition;
