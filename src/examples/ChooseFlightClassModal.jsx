'use client';
import Card from '@/components/Card';
import { FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';

export default function ChooseFlightClassModal() {
    const [chooseFlightClass, setChooseFlightClass] = useState(0);

    const handleChosenFlightClass = (id) => setChooseFlightClass(id);

    const flightClass = [
        {
            id: 1,
            name: 'Economy',
            price: 4950000,
        },
        {
            id: 2,
            name: 'Premium Economy',
            price: 7550000,
        },
        {
            id: 3,
            name: 'Bussiness',
            price: 29220000,
        },
        {
            id: 4,
            name: 'First Class',
            price: 87620000,
        },
    ];

    return (
        <div className='h-[356px] w-[400px]'>
            <Card>
                <Card.Title handleCardShow={() => console.log('Show the Card')} className={'border-b-[1px] py-[10px]'} />

                <Card.Body>
                    <div className='flex flex-col'>
                        {flightClass &&
                            flightClass.map((classType) => (
                                <div
                                    onClick={() => handleChosenFlightClass(classType.id)}
                                    key={classType.id}
                                    className={`${chooseFlightClass === classType.id ? 'bg-pur-5 text-white' : 'bg-white'}`}>
                                    <div
                                        className={`mx-5 flex cursor-pointer items-center  justify-between border-b-[1px] border-b-net-2 py-2 font-normal`}>
                                        <div className='flex flex-col gap-1'>
                                            <h1 className='font-semibold font-poppins text-body-6'>{classType.name}</h1>
                                            <p
                                                className={`${
                                                    chooseFlightClass === classType.id ? ' text-white' : 'text-pur-4'
                                                } font-poppins text-body-6 font-medium `}>
                                                IDR {classType.price}
                                            </p>
                                        </div>
                                        {chooseFlightClass === classType.id && <FaCheckCircle className='w-5 h-5 text-alert-1' />}
                                    </div>
                                </div>
                            ))}
                    </div>
                </Card.Body>
                <Card.Footer handleCardAction={() => console.log('Simpan Data')}>Simpan</Card.Footer>
            </Card>
        </div>
    );
}
