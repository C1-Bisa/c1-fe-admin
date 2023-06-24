'use client';
import Image from 'next/image';
import TableTransaction from '@/components/TableTransaction';
import Aside from '@/components/Aside';
import TopComponent from '@/components/TopComponent';
import { useState } from 'react';

export default function Transaction() {
    return (
        <section className='h-[950px] w-[1440px] bg-white  '>
            <nav className=''>
                <div className="flex ">
                    {/* SIDEBAR */}
                    <div className=" ">
                        <Aside/>
                    </div>
                    <div className="">
                    {/* NAVBAR */}
                    <div className="flex">
                        <h1 className='text-[32px] mt-[50px] ml-[40px] font-bold text-blue-1 '>Transaction</h1>
                    <div className="pt-[47px] ml-[158px]  ">
                    <TopComponent/>
                    </div>
                    </div>
                    {/* TABLE */}
                    <div className="mt-[77px] ">
                        <div className="flex">
                            <img className='ml-[30px]' src={`./images/back.svg`} alt="" />
                            <h1 className='ml-[12px] text-blue-1 font-bold text-[21px] ' >Data Transaction</h1>
                        </div>
                        <div className="mt-[24px] ">
                            <TableTransaction/>
                        </div>
                    </div>
                    </div>
                </div>

            </nav>


        </section>
        
        
    );
}
