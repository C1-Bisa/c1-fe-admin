'use client';

//core
import { useState } from 'react';
import Image from 'next/image';

//components
import TableTransaction from '@/components/TableTransaction';
import Aside from '@/components/Aside';
import TopComponent from '@/components/TopComponent';

export default function Transaction() {
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
                                <div className=' flex'>
                                    <h1 className=' text-[32px] font-bold text-blue-1 '>Transaction</h1>
                                    <div className='ml-[262px]'>
                                        <TopComponent />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* TABLE */}
                        <div className='ml-[361px] mt-[120px] '>
                            <div className='flex'>
                                <h1 className=' text-[21px] font-bold text-blue-1 '>Data Transaction</h1>
                            </div>
                            <div className='mt-[24px] '>
                                <TableTransaction />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}
