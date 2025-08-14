import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SlideUpOnScroll = ({
    children,
    delay = 0,
    duration = 0.6,
    distance = 50,
    className = ""
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const slideUpVariants = {
        hidden: {
            opacity: 0,
            y: distance,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: duration,
                delay: delay,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            variants={slideUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {children}
        </motion.div>
    );
};

export default SlideUpOnScroll;
