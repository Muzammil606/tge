"use client"
import Image from 'next/image'

const data = [
    {
        image: '/icons/parking.png',
        title: 'Parking',
    },
    {
        image: '/icons/food.png',
        title: 'Food & Beverages',
    },
    {
        image: '/icons/locker.png',
        title: 'Lockers & Chargers',
    },
    {
        image: '/icons/aid.png',
        title: 'First aid',
    },
    {
        image: '/icons/ambulance.png',
        title: 'Ambulance',
    },
    {
        image: '/icons/chair.png',
        title: 'Wheel Chair',
    },
    {
        image: '/icons/changing-room.png',
        title: 'Changing Room',
    },
    {
        image: '/icons/food.png',
        title: 'Baby cradle',
    },
    {
        image: '/icons/shopping.png',
        title: 'Shopping',
    }
]

const Facilities = () => {
    return (
        <div className='grid grid-cols-6 gap-3 m-auto'>
            {
                data.map((val) => {
                    return (
                        <div className='bg-white rounded-3xl text-center drop-shadow-[0_0_1px_rgba(0,0,0,0.25)] p-5'>
                            <Image
                                className='m-auto mb-2'
                                src={val.image}
                                alt={val.title}
                                width={60}
                                height={60}
                            />
                            <p className='text-[#585858] font-medium'>{val.title}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Facilities;