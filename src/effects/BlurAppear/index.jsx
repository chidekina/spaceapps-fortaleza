import { motion } from "framer-motion";

const BlurAppearAny = ({
    children,
    className = "",
    speed = "normal",
    delay = 0,
    as = "span" 
}) => {
    const speedSettings = {
        slow: 0.25,
        normal: 0.07,
        fast: 0.03
    };
    const appearDelay = speedSettings[speed] || speedSettings.normal;

    const variants = {
        hidden: {
            opacity: 0,
            filter: "blur(8px)",
            scale: 1.1
        },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            transition: {
                duration: appearDelay,
                delay: delay,
                type: "spring",
                stiffness: 80,
                damping: 12
            }
        }
    };

    const MotionTag = motion[as] || motion.span;

    return (
        <MotionTag
            className={className}
            variants={variants}
            initial="hidden"
            animate="visible"
            style={{ display: as === "span" ? "inline-block" : undefined }}
        >
            {children}
        </MotionTag>
    );
};

export default BlurAppearAny;
