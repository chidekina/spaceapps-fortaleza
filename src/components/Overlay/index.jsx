const Overlay = ({ opacity = 65 }) => {
    return (
        <div
            className="absolute inset-0 bg-black z-0"
            style={{ opacity: opacity / 100 }}
        ></div>
    );
}

export default Overlay;