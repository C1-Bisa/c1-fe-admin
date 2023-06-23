'use client';
import Image from 'next/image';
import TableUser from '@/components/TableUser';
import Aside from '@/components/Aside';
import { useState } from 'react';

export default function User() {
    return (
        <section className='h-full w-full bg-white '>
            <nav className='bg-white'>
                {/* ASIDE */}
                <div className=" ">
                    <Aside/>
                </div>
                {/* TABLE */}
                <div className="mt-[237px] ml-[361px] ">
                <TableUser/>
                </div>
                

            </nav>


        </section>
        
        
    );
}
