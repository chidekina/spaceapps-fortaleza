import CountUp from "../../effects/CountUp";

const Statics = ({ list }) => {
    return (
        <ul className="flex justify-around my-40 text-center font-body">
            {list.map(item => (
                <li key={item.id} className="flex flex-col gap-2 text-white">
                    <h4 className="font-black text-4xl text-neon-yellow">
                        <CountUp end={item.number} duration={4} />
                    </h4>
                    <p className="font-semibold text-2xl">
                        {item.description}
                    </p>
                </li>
            ))}
        </ul>
    );
}

export default Statics;