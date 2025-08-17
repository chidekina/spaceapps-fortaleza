const Overlay = ({ opacity = 50 }) => {
    return (
        <div className={`absolute inset-0 bg-black/${opacity} z-0`}></div>
    );
}

export default Overlay;