'use client';

import { FiTrash, FiEdit3 } from 'react-icons/fi';
import Image from 'next/image';

export default function TableAirline() {
    return (
        <nav className='flex w-[920px]  border-b border-gray-200 bg-white shadow-md sm:rounded-lg'>
            <div className=''>
                <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
                    <div className='overflow-hidden w-[920px]'>
                        <table className=''>
                            <thead className='border-b bg-white'>
                                <tr className='text-center text-[14px] font-bold text-blue-1 '>
                                    <th scope='col' className='ml-[76px] py-4'>
                                        No
                                    </th>
                                    <th scope='col' className='ml-[93px] px-[93px] py-4'>
                                        Kode Airline
                                    </th>
                                    <th scope='col' className='px-[87px] py-4'>
                                        Name Airline
                                    </th>
                                    <th scope='col' className='pl-[141px] py-4'>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-b text-center text-[14px] font-normal text-black '>
                                    <td className='whitespace-nowrap px-6 py-4'>01</td>
                                    <td className='whitespace-nowrap px-6 py-4'>SJA</td>
                                    <td className='whitespace-nowrap px-6 py-4'>Super Jet Airline</td>
                                    <td className='items-center whitespace-nowrap pl-[141px] py-4 '>
                                        <div className=' flex w-[24px] space-x-[12px] whitespace-nowrap'>
                                            <Image width={24} height={24}
                                                className='cursor-pointer hover:scale-110 hover:text-blue-1 '
                                                src={`./images/Pencil.svg`}
                                                alt=''
                                            />
                                            <Image width={24} height={24}
                                                className='cursor-pointer hover:scale-110 hover:text-blue-1 '
                                                src={`./images/trash.svg`}
                                                alt=''
                                            />
                                        </div>
                                    </td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </nav>
    );
}
