'use client';
import Image from 'next/image';
import FormFlight from '@/components/FormFlight';
import Aside from '@/components/Aside';
import TopComponent from '@/components/TopComponent';
import { useState } from 'react';
import ButtonSimpan from '@/components/ButtonSimpan';

export default function FlightUpdate() {
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
                        <h1 className='text-[32px] mt-[50px] ml-[40px] font-bold text-blue-1 '>Flight</h1>
                    <div className="pt-[47px] ml-[278px]  ">
                    <TopComponent/>
                    </div>
                    </div>
                    {/* FORM */}
                    <div className="mt-[77px] ">
                    <ButtonSimpan/>
                        <div className="flex">
                        <ButtonSimpan/>
                            <img className='ml-[30px] cursor-pointer' src={`./images/back.svg`} alt="" />
                            <h1 className='ml-[12px] text-blue-1 font-bold text-[21px] ' >Data Flight</h1>
                            <div className="ml-[670px] ">
                            </div>
                        </div>
                        <div className="mt-[1px] ml-[44px]">
                            <FormFlight/>
                        </div>
                    </div>
                    </div>
                </div>

            </nav>


        </section>
        
        
    );
}
