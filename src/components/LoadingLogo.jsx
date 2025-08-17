import React, { useEffect, useState } from "react";

const LoadingLogo = () => {
    const [show, setShow] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setShow(false), 1200);
        return () => clearTimeout(timer);
    }, []);
    if (!show) return null;
    return (
        <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-black z-50">
            <img
                src="/logo/6.png"
                alt="Logo Space Apps"
                className="w-32 sm:w-40 md:w-48 lg:w-56 animate-pulse opacity-80 transition-opacity duration-700"
                style={{ filter: "drop-shadow(0 0 20px #EAFE07)" }}
            />
        </div>
    );
};

export default LoadingLogo;
