import { motion } from "framer-motion";

const ArrowDown = () => {
    const scrollToStats = () => {
        const statsSection = document.querySelector('[data-section="space-apps-stats"]');
        if (statsSection) {
            statsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <>
            <motion.img
                src="/icons/caret-down.svg"
                alt="Seta apontando para baixo"
                className="mt-25 w-20 cursor-pointer"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                onClick={scrollToStats}
            />
        </>
    );
}

export default ArrowDown;