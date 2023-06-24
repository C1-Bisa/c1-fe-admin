'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import HomeSearch from '@/components/HomeSearch';
import Button from '@/components/Button';
import { FiSearch } from 'react-icons/fi';

export default function HomePageResponsive() {
    const data = [
        {
            id: 1,
            desc: 'Semua',
        },
        {
            id: 2,
            desc: 'Asia',
        },
        {
            id: 3,
            desc: 'Amerika',
        },
        {
            id: 4,
            desc: 'Australia',
        },
        {
            id: 5,
            desc: 'Eropa',
        },
        {
            id: 6,
            desc: 'Afrika',
        },
    ];

    const favDestinationData = [
        {
            id: 1,
            from: 'Jakarta',
            to: 'Bangkok',
            airline_name: 'AirAsia',
            derpature_date: '2020-06-20',
            derpature_time: '06:00',
            arrival_date: '2020-06-20',
            arrival_time: '10:00',
            price: 950000,
            imageUrl: './images/bangkok.svg',
        },
        {
            id: 2,
            from: 'Jakarta',
            to: 'Bangkok',
            airline_name: 'AirAsia',
            derpature_date: '2020-06-20',
            derpature_time: '06:00',
            arrival_date: '2020-06-20',
            arrival_time: '10:00',
            price: 950000,
            imageUrl: 'https://res.cloudinary.com/dmx4vbrzs/image/upload/v1686282733/static-image/Rectangle_22_d3v1dz.png',
        },
        {
            id: 3,
            from: 'Jakarta',
            to: 'Sydney',
            airline_name: 'AirAsia',
            derpature_date: '2020-06-20',
            derpature_time: '06:00',
            arrival_date: '2020-06-20',
            arrival_time: '10:00',
            price: 3650000,
            imageUrl: 'https://res.cloudinary.com/dmx4vbrzs/image/upload/v1685933057/cld-sample-2.jpg',
        },
        {
            id: 4,
            from: 'Jakarta',
            to: 'Sydney',
            airline_name: 'AirAsia',
            derpature_date: '2020-06-20',
            derpature_time: '06:00',
            arrival_date: '2020-06-20',
            arrival_time: '10:00',
            price: 3650000,
            imageUrl: 'https://res.cloudinary.com/dmx4vbrzs/image/upload/v1686282795/static-image/Rectangle_24_gfgyyx.png',
        },
        {
            id: 5,
            from: 'Jakarta',
            to: 'Bangkok',
            airline_name: 'AirAsia',
            derpature_date: '2020-06-20',
            derpature_time: '06:00',
            arrival_date: '2020-06-20',
            arrival_time: '10:00',
            price: 950000,
            imageUrl: 'https://res.cloudinary.com/dmx4vbrzs/image/upload/v1685933057/cld-sample-2.jpg',
        },
    ];

    return (
        <>
            <Navbar className={'hidden lg:block'} />
            <div className=' mt-8 hidden h-[232px] grid-cols-12  lg:grid'>
                <div className='relative col-span-12 '>
                    <Image src={'./images/banner.svg'} alt='' fill={true} quality={100} />
                </div>
            </div>

            {/* home search mobile start */}
            <div className='mx-[12px] block lg:hidden'>
                {/* <HomeSearch /> */}
                <h1>Ngetesttt</h1>
            </div>
            {/* home search mobile end */}

            {/* home search desktop start */}
            <div className='container mx-auto mt-[-50px] hidden h-[292px] max-w-screen-lg lg:block'>
                <HomeSearch />
            </div>

            {/* home search desktop end */}

            {/* favorite destination start */}
            <div className='container mx-auto mt-8 max-w-screen-lg'>
                <h1 className='mb-4 font-poppins text-body-6 font-bold'>Destinasi Favorit</h1>
                <div className='flex gap-4 '>
                    {data &&
                        data.map((button) => (
                            <Button
                                key={button.id}
                                className='flex items-center   justify-center gap-2 rounded-rad-3 bg-net-2 px-6 py-[14px] font-poppins text-body-6 text-black hover:bg-pur-4 hover:text-white'>
                                <FiSearch /> {button.desc}
                            </Button>
                        ))}
                </div>

                <div className='mt-[32px] grid grid-cols-12 gap-[20px]'>
                    {favDestinationData &&
                        favDestinationData.map((destination) => (
                            <div key={destination.id} className='col-span-3 rounded-rad-1 p-2 text-black shadow-low'>
                                <div className='relative h-[120px] w-full'>
                                    <Image alt='' src={destination.imageUrl} fill style={{ objectFit: 'cover' }} quality={100} loading='lazy' />
                                    <div className='absolute right-0 top-0  rounded-bl-rad-3 rounded-tl-rad-3 bg-pur-3 px-[22px] py-[4px] text-white'>
                                        <h3 className='font-poppins text-body-3 font-medium'>Limited</h3>
                                    </div>
                                </div>

                                <div className='mt-2 flex flex-col gap-1'>
                                    <p className='font-poppins text-body-6 font-medium'>
                                        {destination.from} <span>{'->'}</span>
                                        {destination.to}
                                    </p>
                                    <p className='font-poppins text-body-4 font-medium text-pur-4'>{destination.airline_name}</p>
                                    <p className='font-poppins text-body-3 font-medium'>
                                        {new Date(destination.derpature_date).getDate()} <span> - </span>
                                        {new Date(destination.arrival_date).getDate()} <span>maret 2023</span>
                                    </p>
                                    <p className='font-poppins text-body-5'>
                                        Mulai dari IDR <span className='text-body-6 font-bold text-alert-3'>{destination.price}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            {/* favorite destination end */}
        </>
    );
}
