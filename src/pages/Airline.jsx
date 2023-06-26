'use client';
import Image from 'next/image';
import TableAirline from '@/components/TableAirline';
import Aside from '@/components/Aside';
import TopComponent from '@/components/TopComponent';
import ButtonAdd from '@/components/ButtonAdd';
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

        <section className='h-[950px] w-full bg-grey-2 '>
        <nav className=''>
            <div className="flex ">
                {/* SIDEBAR */}
                <div className=" ">
                    <Aside/>
                </div>
                <div className="">
                {/* NAVBAR */}
                <div className="flex">
                    <h1 className='text-[32px] mt-[50px] ml-[40px] font-bold text-blue-1 '>Airline</h1>
                <div className="pt-[47px] ml-[278px]  ">
                <TopComponent/>
                </div>
                </div>
                {/* TABLE */}
                <div className="mt-[77px] ">
                    <div className="flex">
                        <Image src={`./images/back.svg`} className=' cursor-pointer' alt="" width={24} height={24}/>
                        <h1 className='ml-[12px] text-blue-1 font-bold text-[21px] ' >Data Airline</h1>
                        <div className="ml-[670px] flex ">
                        <ButtonAdd/>
                        </div>
                    </div>
                    <div className="mt-[24px] flex ">
                        <TableAirline/>
                    </div>
                </div>
                </div>
            </div>

        </nav>


    </section>
    );
}
