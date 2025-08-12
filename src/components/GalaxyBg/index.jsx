const GalaxyBg = ({ children }) => {
    return (
        <section
            className="relative w-full h-fit px-20 py-32 inset-0 bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: 'url(./galaxy.jpg)' }}
        >
            <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />
            <div className="relative z-20">
                {children}
            </div>
        </section>
    );
}

export default GalaxyBg