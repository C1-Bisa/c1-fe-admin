'use client';
import Image from 'next/image';
import FormFlight from '@/components/FormAirline';
import Aside from '@/components/Aside';
import TopComponent from '@/components/TopComponent';
import { useState } from 'react';
import ButtonUpdate from '@/components/ButtonUpdate';

export default function UpdateAirline() {
    return (
        <section className='h-full w-full bg-grey-2  '>
            <nav className=''>
                <div className='flex '>
                    {/* SIDEBAR */}
                    <div className=' '>
                        <Aside />
                    </div>
                    <div className=''>
                        {/* NAVBAR */}
                        <div className='flex'>
                            <h1 className='ml-[40px] mt-[50px] text-[32px] font-bold text-blue-1 '>Airline</h1>
                            <div className='ml-[278px] pt-[47px]  '>
                                <TopComponent />
                            </div>
                        </div>
                        {/* FORM */}
                        <div className='mt-[77px] '>
                            <div className='flex'>
                                <img className='ml-[30px] cursor-pointer' src={`./images/back.svg`} alt='' />
                                <h1 className='ml-[12px] text-[21px] font-bold text-blue-1 '>Update Airline</h1>
                                <div className='ml-[670px] '></div>
                            </div>
                            <div className='ml-[44px] mt-[1px]'>
                                <FormFlight />
                                <div className='ml-[800px] mt-[95px] '>
                                    <ButtonUpdate />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}