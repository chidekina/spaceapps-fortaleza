import { useEffect, useRef, useState } from "react";


const CountUp = ({ end, duration = 1.5, ...props }) => {
    const safeEnd = typeof end === "number" && !isNaN(end) ? end : 0;
    const [value, setValue] = useState(0);
    const start = useRef(0);

    useEffect(() => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
            setValue(Math.floor(progress * (safeEnd - start.current) + start.current));
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                setValue(safeEnd);
            }
        };
        requestAnimationFrame(step);
        // cleanup
        return () => { start.current = value; };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [safeEnd, duration]);

    return <span {...props}>{value.toLocaleString("pt-BR")}</span>;
};

export default CountUp;
