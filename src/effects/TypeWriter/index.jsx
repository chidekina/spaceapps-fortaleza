/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState, useEffect } from "react";



const TypeWriter = ({
    children,
    className,
    speed = "normal",
    cursor = true,
    cursorBlinkSpeed = 1,
    delay = 0
}) => {
    const text = children;
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    const speedSettings = {
        slow: 150,
        normal: 100,
        fast: 50
    };

    const typingSpeed = speedSettings[speed] || speedSettings.normal;

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, currentIndex === 0 ? delay * 1000 : typingSpeed);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text, typingSpeed, delay]);

    useEffect(() => {
        setDisplayedText("");
        setCurrentIndex(0);
    }, [text]);

    const cursorVariants = {
        blinking: {
            opacity: [0, 0, 1, 1],
            transition: {
                duration: cursorBlinkSpeed,
                repeat: Infinity,
                repeatDelay: 0,
                ease: "linear",
            },
        },
    };

    return (
        <p className={className}>
            {displayedText}
            {cursor && (
                <motion.span
                    variants={cursorVariants}
                    animate="blinking"
                    className="inline-block"
                >
                    |
                </motion.span>
            )}
        </p>
    );
};

export default TypeWriter;