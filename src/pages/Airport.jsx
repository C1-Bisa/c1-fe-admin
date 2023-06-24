'use client';
import Image from 'next/image';
import TableUser from '@/components/TableUser';
import Aside from '@/components/Aside';
import TopComponent from '@/components/TopComponent';
import { useState } from 'react';

export default function Airpot() {
    return (
        // <section className='h-full w-full bg-white '>
        //     <nav className='bg-white'>
        //         {/* ASIDE */}
        //         <div className=" ">
        //             <Aside/>
        //         </div>
        //         <div>
        //             <TopComponnent/>
        //         </div>
        //         {/* TABLE */}
        //         <div className="mt-[237px] ml-[361px] ">
        //         <TableUser/>
        //         </div>
        //     </nav>
        // </section>

        <main className=''>
            <div className='w-full bg-grey-2'>
                <div className=' '>
                    <Aside />
                </div>
                <div>
                    {/* SIDEBAR */}
                    <div className='ml-[744px]'>
                        <TopComponent />
                    </div>
                    <div className='ml-[361px] mt-[237px] '>
                        <TableUser />
                    </div>
                    {/* TABLE */}
                </div>
            </div>
        </main>
    );
}
