'use client';
import Image from 'next/image';
import FormFlight from '@/components/FormFlight';
import Aside from '@/components/Aside';
import TopComponent from '@/components/TopComponent';
import { useState } from 'react';
import ButtonSimpan from '@/components/ButtonSimpan';

export default function FlightUpdate() {
    return (
        <section className='h-full w-[1440px] bg-white  '>
            <nav className=''>
                <div className='flex '>
                    {/* SIDEBAR */}
                    <div className=' '>
                        <Aside />
                    </div>
                    <div className=''>
                        {/* NAVBAR */}
                        <div className='flex'>
                            <h1 className='ml-[40px] mt-[50px] text-[32px] font-bold text-blue-1 '>Flight</h1>
                            <div className='ml-[278px] pt-[47px]  '>
                                <TopComponent />
                            </div>
                        </div>
                        {/* FORM */}
                        <div className='mt-[77px] '>
                            <div className='flex'>
                                <img className='ml-[30px] cursor-pointer' src={`./images/back.svg`} alt='' />
                                <h1 className='ml-[12px] text-[21px] font-bold text-blue-1 '>Data Flight</h1>
                                <div className='ml-[670px] '></div>
                            </div>
                            <div className='ml-[44px] mt-[1px]'>
                                <FormFlight />
                                <div className='ml-[800px] mt-[95px] '>
                                    <ButtonSimpan />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}
