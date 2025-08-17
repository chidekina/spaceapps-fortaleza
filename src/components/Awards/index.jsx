import awards from '../../db/awards.json';

const Awards = () => {
    return (
        <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-20 md:gap-y-30 lg:gap-y-50 px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 z-20 justify-items-center'>
            {awards.map(award => (
                <li key={award.id} className='flex flex-col'>
                    <div className='font-bold font-heading text-center text-blue-yonder text-lg md:text-xl lg:text-2xl mb-2'>
                        {award.title}
                    </div>
                    <img
                        src={award.path}
                        alt={award.title}
                        className='w-24 md:w-32 lg:w-40 self-center'
                        loading="lazy"
                    />
                </li>
            ))}
        </ul>
    );
}

export default Awards;