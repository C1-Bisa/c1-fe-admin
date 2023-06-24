'use client';
import Card from '@/components/Card';
import { FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';

export default function CardExample() {
    const [chooseFilterTicket, setChooseFilterTicket] = useState(0);

    const handleChosenFilterTicket = (id) => setChooseFilterTicket(id);

    const filterTicket = [
        {
            id: 1,
            name: 'Harga',
            type: 'Termurah',
        },
        {
            id: 2,
            name: 'Durasi',
            type: 'Terpendek',
        },
        {
            id: 3,
            name: 'Keberangkatan',
            type: 'Paling Awal',
        },
        {
            id: 4,
            name: 'Keberangkatan',
            type: 'Paling Akhir',
        },
        {
            id: 5,
            name: 'Kedatangan',
            type: 'Paling Awal',
        },
        {
            id: 6,
            name: 'Kedatangan',
            type: 'Paling Akhir',
        },
    ];

    return (
        <div className='h-[356px] w-[400px]'>
            <Card>
                <Card.Title handleCardShow={() => console.log('Show the Card')} className={'border-b-[1px] py-[10px]'} />

                <Card.Body>
                    <div className='flex flex-col'>
                        {filterTicket &&
                            filterTicket.map((ticket) => (
                                <div
                                    onClick={() => handleChosenFilterTicket(ticket.id)}
                                    key={ticket.id}
                                    className={`${chooseFilterTicket === ticket.id ? 'bg-pur-5 text-white' : 'bg-white'}`}>
                                    <div
                                        className={`mx-5 flex cursor-pointer items-center  justify-between border-b-[1px] border-b-net-2 py-[10px] font-normal`}>
                                        <div>
                                            <h1
                                                className={`${
                                                    chooseFilterTicket === ticket.id ? ' text-white' : 'text-black'
                                                } text-body-b font-poppins font-semibold`}>
                                                {ticket.name} - <span className='font-poppins font-normal'>{ticket.type}</span>
                                            </h1>
                                        </div>
                                        {chooseFilterTicket === ticket.id && <FaCheckCircle className='h-4 w-4 text-alert-1' />}
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
