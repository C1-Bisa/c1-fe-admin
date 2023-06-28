'use client';

import Image from "next/image";

export default function TableFlight() {
    return (
        <nav className='w-[920px] overflow-x-auto border-b border-gray-200 bg-white shadow-md sm:rounded-lg'>
            <div className='overflow-x-auto '>
                <div className='inline-block min-w-full py-2 sm:px-[27px] lg:px-8'>
                    <div className='overflow-hidden'>
                        <table className='min-w-full'>
                            <thead className='border-b bg-white'>
                                <tr className='text-center text-[14px] font-bold text-blue-1 '>
                                    <th scope='col' className='px-[27px] py-4'>
                                        No
                                    </th>
                                    <th scope='col' className='px-[27px] py-4'>
                                        Airline
                                    </th>
                                    <th scope='col' className='px-[27px] py-4'>
                                        Airport From
                                    </th>
                                    <th scope='col' className='px-[27px] py-4'>
                                        Airport To
                                    </th>
                                    <th scope='col' className='px-[27px] py-4 '>
                                        Arrival <br />
                                        Date
                                    </th>
                                    <th scope='col' className='px-[27px] py-4'>
                                        Arrival <br />
                                        Time
                                    </th>
                                    <th scope='col' className='px-[27px] py-4 '>
                                        Derpature <br />
                                        Date
                                    </th>
                                    <th scope='col' className='px-[27px] py-4'>
                                        Derpature <br />
                                        Time
                                    </th>
                                    <th scope='col' className='px-[27px] py-4'>
                                        From
                                    </th>
                                    <th scope='col' className='px-[27px] py-4 '>
                                        To
                                    </th>
                                    <th scope='col' className='px-[27px] py-4'>
                                        Duration
                                    </th>
                                    <th scope='col' className='px-[27px] py-4'>
                                        Price
                                    </th>
                                    <th scope='col' className='px-[27px] py-4'>
                                        Flight Class
                                    </th>
                                    <th scope='col' className='px-[27px] py-4'>
                                        Description
                                    </th>
                                    <th scope='col' className='px-[27px] py-4'>
                                        Created At
                                    </th>
                                    <th scope='col' className='px-[27px] py-4'>
                                        Updated At
                                    </th>
                                    <th scope='col' className='px-[27px] py-4'>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-b bg-white text-center text-[14px] font-normal text-black '>
                                    <td className='whitespace-nowrap px-[27px] py-4'>01</td>
                                    <td className='whitespace-nowrap px-[27px] py-4'>Super Air Jet</td>
                                    <td className='whitespace-nowrap px-[27px] py-4'>CGK</td>
                                    <td className='whitespace-nowrap px-[27px] py-4'>SRG</td>
                                    <td className='whitespace-nowrap px-[27px] py-4'>2023-06-23</td>
                                    <td className='whitespace-nowrap px-[27px] py-4'>10.00</td>
                                    <td className='whitespace-nowrap px-[27px] py-4'>2023-06-24</td>
                                    <td className='whitespace-nowrap px-[27px] py-4'>10.00</td>
                                    <td className='whitespace-nowrap px-[27px] py-4'>Jakarta</td>
                                    <td className='whitespace-nowrap px-[27px] py-4'>Semarang</td>
                                    <td className='whitespace-nowrap px-[27px] py-4'>3</td>
                                    <td className='whitespace-nowrap px-[27px] py-4'>Rp2.000.000</td>
                                    <td className='whitespace-nowrap px-[27px] py-4'>Economy</td>
                                    <td className='whitespace-pre-line px-[27px] py-4'>
                                        Baggage 20 kg Cabin baggage 7 kg In Flight Entertainment
                                    </td>
                                    <td className='whitespace-nowrap px-[27px] py-4'>2023-05-06</td>
                                    <td className='whitespace-nowrap px-[27px] py-4'>2023-05-06</td>
                                    <td className='justify-center whitespace-nowrap px-[27px] py-4 '>
                                        <div className=' flex w-[24px] space-x-[12px] whitespace-nowrap'>
                                            <Image
                                                width={24}
                                                height={24}
                                                className='cursor-pointer hover:scale-110 hover:text-blue-1 '
                                                src={`./images/Pencil.svg`}
                                                alt=''
                                            />
                                            <Image
                                                width={24}
                                                height={24}
                                                className='cursor-pointer hover:scale-110 hover:text-blue-1 '
                                                src={`./images/trash.svg`}
                                                alt=''
                                            />
                                        </div>
                                    </td>
                                    {/* BATAS COBA */}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </nav>
    );
}
