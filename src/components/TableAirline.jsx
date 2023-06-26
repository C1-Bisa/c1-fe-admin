'use client';

import { FiTrash, FiEdit3 } from 'react-icons/fi';
import Image from 'next/image';

export default function TableUser() {
    return (
        <nav className='w-[409px] border-gray-200 flex flex-row '>
            <div className='sm:mx-0.5 lg:mx-0.5'>
                <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
                    <div className='overflow-hidden'>
                        <table className=''>
                            <thead className='border-b bg-white'>
                                <tr className='text-center text-[14px] font-bold text-blue-1 '>
                                    <th scope='col' className='py-4'>
                                        No
                                    </th>
                                    <th scope='col' className='px-[87px] py-4'>
                                        Kode Airline
                                    </th>
                                    <th scope='col' className='px-[87px] py-4'>
                                        Name Airline
                                    </th>
                                    <th scope='col' className='px-[87px] py-4'>
                                        Action
                                    </th>
                                    {/* <th scope='col' className='px-[87px] py-4 '>
                                        Role
                                    </th> */}
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-b bg-gray-100 text-center text-[14px] font-normal text-black '>
                                    <td className='whitespace-nowrap px-6 py-4'>01</td>
                                    <td className='whitespace-nowrap px-6 py-4'>SJA</td>
                                    <td className='whitespace-nowrap px-6 py-4'>Super Jet Airline</td>
                                    <td className='whitespace-nowrap px-6 py-4 flex '>
                                        <Image src={`./images/Pencil.svg`} width={24} height={24} />
                                        <Image src={`./images/trash.svg`} width={24} height={24} />
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
