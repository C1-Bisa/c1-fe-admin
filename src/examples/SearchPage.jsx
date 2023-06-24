'use client';

import Navbar from '@/components/Navbar';
import { FiArrowLeft } from 'react-icons/fi';
// import { getDateInRange } from '@/utils/getDateInRange';
import { useState, useEffect } from 'react';

const getDateInRange = () => {
    // const d1 = new Date('2023-05-28');
    const d1 = new Date();
    d1.setHours(0, 0, 0, 0);
    const d2 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate() + 7);

    return new Promise((resolve, reject) => {
        // const date = new Date(startDate.getTime());
        const date = new Date(d1.getTime());
        let angka = 1;
        const dates = [];

        // while (date <= endDate) {
        //     dates.push({
        //         id: angka + dates.length,
        //         date: new Date(date),
        //         active: false,
        //     });

        //     date.setDate(date.getDate() + 1);
        // }
        while (date <= d2) {
            dates.push({
                id: angka + dates.length,
                date: new Date(date),
                active: false,
            });

            date.setDate(date.getDate() + 1);
        }

        // return dates;
        resolve(dates);
    });
};

export default function SearchPage() {
    const [values, setValues] = useState([]);
    const [selectDate, setSelectDate] = useState(0);
    const arr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }];
    useEffect(() => {
        async function rangeOfDates() {
            const date = await getDateInRange();
            setValues(date);
        }
        rangeOfDates();
    }, []);

    // let rangeOfDates = getDatesInRange(d1, d2);
    // rangeOfDates[5].active = true;

    // console.log(rangeOfDates);

    const modifyDate = (value) => {
        // rangeOfDates = rangeOfDates.map((val) => (val.id === value.id ? (val.active = true) : val));
        let finValue = values.find((test) => test.active === true);

        if (finValue) {
            const rangeNew = values.map((val) => (val.id === finValue.id ? { ...val, active: false } : val));
            setValues(rangeNew);
        }

        const range = values.map((val) => (val.id === value.id ? { ...val, active: true } : val));
        // setValues((prev)=> );
        // setValues(range);
        setSelectDate(value);
    };

    console.log(selectDate);

    return (
        <>
            <Navbar />
            <div className='container mx-auto mt-[47px]  max-w-[928px] '>
                <h1 className='font-poppins text-head-1 font-bold'>Pilih Penerbangan</h1>
                <div className='mt-[32px] grid grid-cols-12 gap-[12px]'>
                    {/* desc top start */}
                    <div className='relative col-span-9 flex items-center rounded-rad-3 bg-pur-3 py-[14px] font-poppins text-title-2 text-white'>
                        <FiArrowLeft className='absolute top-1/2 ml-[21px] h-[20px] w-[20px] translate-y-[-50%]' />
                        <h1 className='pl-[58px]'>JKT {'>'} MLB - 2 Penumpang - Economy</h1>
                    </div>
                    <div className='col-span-3 rounded-rad-3 bg-alert-1 py-[14px] text-center font-poppins text-title-2 text-white'>
                        <h1>Ubah Pencarian</h1>
                    </div>
                    {/* desc top end */}

                    {/* day of week start */}
                    <div className='col-span-12 flex '>
                        <div className='flex divide-x-2'>
                            {values.length ? (
                                values.map((val, index) => (
                                    <div key={index} className='cursor-pointer px-2' onClick={() => modifyDate(val.date)}>
                                        <div
                                            className={`${
                                                val.date === selectDate ? 'bg-[#A06ECE] text-white' : 'text-[#151515]'
                                            } flex flex-col items-center justify-center rounded-[8px] px-[22px] py-[4px] font-poppins`}>
                                            <h3 className='text-[14px] font-bold'>{val.date.toLocaleDateString('id-ID', { weekday: 'long' })}</h3>
                                            <p className={`${val.date === selectDate ? 'text-white' : 'text-[#8A8A8A]'} text-[12px] font-normal`}>
                                                {val.date.toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                // <div class='mx-auto mt-20 h-24 w-60 rounded-md border-2'>
                                //     <div class='flex h-full animate-pulse flex-row items-center justify-center space-x-5'>
                                //         <div class='h-12 w-12 rounded-full bg-gray-300 '></div>
                                //         <div class='flex flex-col space-y-3'>
                                //             <div class='h-6 w-36 rounded-md bg-gray-300 '></div>
                                //             <div class='h-6 w-24 rounded-md bg-gray-300 '></div>
                                //         </div>
                                //     </div>
                                // </div>

                                <h1>Loadinggg</h1>
                            )}
                        </div>
                    </div>
                    {/* day of week end */}
                </div>
            </div>
        </>
    );
}
