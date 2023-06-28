'use client';
import Image from 'next/image';
import TableAirport from '@/components/TabelAirport';
import Aside from '@/components/Aside';
import TopComponent from '@/components/TopComponent';
import ButtonAdd from '@/components/ButtonAdd';
import ButtonBack from '../../public/images/back.svg';
import { useState } from 'react';

export default function Airport() {
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
                                    <h1 className=' text-[32px] font-bold text-blue-1 '>Airport</h1>
                                    <div className='ml-[262px]'>
                                        <TopComponent />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* TABLE */}
                        <div className='ml-[361px] mt-[120px] '>
                            <div className='flex items-center'>
                                {/* <img className='' src={`./images/back.svg`} alt='' /> */}
                                <h1 className='ml-[px] text-[21px] font-bold text-blue-1 '>Data Airport</h1>
                                <div className='ml-[670px]' alt=''>
                                    <ButtonAdd />
                                </div>
                            </div>
                            <div className='mt-[24px]'>
                                <TableAirport />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}
