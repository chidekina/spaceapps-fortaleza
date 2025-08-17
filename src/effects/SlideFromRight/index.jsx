import { useEffect, useState } from 'react';

const SlideFromRight = ({
    children,
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

    const transitionClasses = isVisible
        ? `opacity-100 transition-all duration-1000 ${className}`
        : `opacity-0 translate-x-8 transition-all duration-1000 ${className}`;

    return (
        <div className={transitionClasses} {...props}>
            {children}
        </div>
    );
};

export default SlideFromRight;
