'use client';
import Image from 'next/image';
import TableAirline from '@/components/TabelAirline';
import Aside from '@/components/Aside';
import TopComponent from '@/components/TopComponent';
import ButtonAdd from '@/components/ButtonAdd';
import ButtonBack from '../../public/images/back.svg';
import { useState } from 'react';

export default function Airline() {
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
                                    <h1 className=' text-[32px] font-bold text-blue-1 '>Airline</h1>
                                    <div className='ml-[262px]'>
                                        <TopComponent />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* TABLE */}
                        <div className='ml-[351px] mt-[120px] '>
                            <div className='flex items-center'>
                                {/* <img className='' src={`./images/back.svg`} alt='' /> */}
                                <h1 className='ml-[px] text-[21px] font-bold text-blue-1 '>Data Airline</h1>
                                <div className='ml-[680px]' alt=''>
                                    <ButtonAdd />
                                </div>
                            </div>
                            <div className='mt-[24px]'>
                                <TableAirline />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}
