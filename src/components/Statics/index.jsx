import CountUp from "../../effects/CountUp";

const Statics = ({ list }) => {
    return (
        <ul className="flex flex-col sm:flex-row justify-around items-center my-20 sm:my-32 lg:my-40 text-center font-body gap-8 sm:gap-4 px-4 sm:px-8">
            {list.map(item => (
                <li key={item.id} className="flex flex-col gap-2 text-white min-w-0 flex-1">
                    <h4 className="font-black text-2xl sm:text-3xl lg:text-4xl text-neon-yellow">
                        <CountUp end={item.number} duration={4} />
                    </h4>
                    <p className="font-semibold text-sm sm:text-lg lg:text-2xl break-words">
                        {item.description}
                    </p>
                </li>
            ))}
        </ul>
    );
}

export default Statics;