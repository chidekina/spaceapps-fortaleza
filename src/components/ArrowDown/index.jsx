import { motion } from "framer-motion";

const ArrowDown = () => {
    return ( 
        <>
        <motion.img 
        src="/icons/caret-down.svg" 
        alt="Seta apontando para baixo" 
        className="mt-25 w-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        />
        </>
     );
}
 
export default ArrowDown;