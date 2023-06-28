'use client';
import Image from 'next/image';
import TableUser from '@/components/TableUser';
import Aside from '@/components/Aside';
import TopComponent from '@/components/TopComponent';
import { useState } from 'react';

export default function User() {
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
                                    <h1 className=' text-[32px] font-bold text-blue-1 '>User</h1>
                                    <div className='ml-[262px]'>
                                        <TopComponent />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* TABLE */}
                        <div className='ml-[361px] mt-[120px] '>
                            <div className='flex items-center'>
                                <h1 className='text-[21px] font-bold text-blue-1 '>Data User</h1>
                            </div>
                            <div className='mt-[24px] '>
                                <TableUser />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}
