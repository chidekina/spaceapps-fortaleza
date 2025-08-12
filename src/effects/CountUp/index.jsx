import { useEffect, useRef, useState } from "react";

const CountUp = ({ end, duration = 1.5, ...props }) => {
    const [value, setValue] = useState(0);
    const start = useRef(0);

    useEffect(() => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
            setValue(Math.floor(progress * (end - start.current) + start.current));
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                setValue(end);
            }
        };
        requestAnimationFrame(step);
        // cleanup
        return () => { start.current = value; };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [end, duration]);

    return <span {...props}>{value.toLocaleString("pt-BR")}</span>;
};

export default CountUp;
