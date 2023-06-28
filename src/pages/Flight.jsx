'use client';
import Image from 'next/image';
import Aside from '@/components/Aside';
import TopComponent from '@/components/TopComponent';
import TableFlight from '@/components/TableFlight';
import ButtonAdd from '@/components/ButtonAdd';
import { useState } from 'react';

export default function Flight() {
    return (
        <section className='h-[2000px] w-[1440px] bg-grey-2  '>
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
                                <div className=' flex'>
                                    <h1 className=' text-[32px] font-bold text-blue-1 '>Flight</h1>
                                    <div className='ml-[262px]'>
                                        <TopComponent />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* TABLE */}
                        <div className='ml-[351px] mt-[120px] '>
                            <div className='flex'>
                                <img className='' src={`./images/back.svg`} alt='' />
                                <h1 className='ml-[12px] text-[21px] font-bold text-blue-1 '>Data Flight</h1>
                                <div className='ml-[670px] '><ButtonAdd/></div>
                            </div>
                            <div className='mt-[24px]'>
                                <TableFlight />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}
