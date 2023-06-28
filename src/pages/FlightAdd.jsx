'use client';
import Image from 'next/image';
import FormFlight from '@/components/FormFlight';
import Aside from '@/components/Aside';
import TopComponent from '@/components/TopComponent';
import { useState } from 'react';
import ButtonSimpan from '@/components/ButtonSimpan';
import ButtonAdd from '@/components/ButtonAdd';

export default function FlightAdd() {
    return (
        <section className='h-[950px] w-[1440px] bg-grey-2  '>
            <nav className=''>
                <div className='flex '>
                    {/* SIDEBAR */}
                    <div className=' '>
                        <Aside />
                    </div>
                    <div className=''>
                        {/* NAVBAR */}
                        <div className='ml-[361px] mt-[47px]'>
                            <div>
                                <div className='flex'>
                                    <h1 className=' text-[32px] font-bold text-blue-1 w-[105px]'>Flight</h1>
                                    <div className='ml-[262px]'>
                                        <TopComponent />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* FORM */}
                        <div className='ml-[351px] mt-[77px] '>
                            <div className='flex'>
                                <img className=' cursor-pointer' src={`./images/back.svg`} alt='' />
                                <h1 className='ml-[12px] text-[21px] font-bold text-blue-1 '>Data Flight Tambah</h1>
                                <div className='ml-[670px] '></div>
                            </div>
                            <div className='mt-[24px]'>
                                <FormFlight />
                                {/* <div className='ml-[800px] mt-[95px] '>
                                    <ButtonSimpan />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}
