import Ellipse1 from '../../assets/Orbits/Ellipse 1.svg';
import Ellipse2 from '../../assets/Orbits/Ellipse 2.svg';
import Ellipse3 from '../../assets/Orbits/Ellipse 3.svg';
import Ellipse4 from '../../assets/Orbits/Ellipse 4.svg';
import Ellipse5 from '../../assets/Orbits/Ellipse 5.svg';

const Orbits = () => {
    const orbits = [
        { id: 1, svg: Ellipse1, size: 'w-[450px] h-[320px]' },
        { id: 2, svg: Ellipse2, size: 'w-[400px] h-[280px]' },
        { id: 3, svg: Ellipse3, size: 'w-[350px] h-[240px]' },
        { id: 4, svg: Ellipse4, size: 'w-[300px] h-[200px]' },
        { id: 5, svg: Ellipse5, size: 'w-[250px] h-[160px]' },
    ];

    return (
        <div className="-left-50 absolute top-12 transform scale-175 z-10">
            {orbits.map(orbit => (
                <div key={orbit.id} className="absolute">
                    <div className={`${orbit.size} `}>
                        <img
                            src={orbit.svg}
                            alt={`Orbit ${orbit.id}`}
                            className="w-full h-full object-contain filter brightness-90"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Orbits;