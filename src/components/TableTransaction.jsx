'use client';

export default function TableTransaction() {
    return (
        <nav className='w-[1014px] border-b border-gray-200 bg-white '>
            <div className='overflow-x-auto sm:mx-0.5 lg:mx-0.5'>
                <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
                    <div className='overflow-hidden'>
                        <table className=''>
                            <thead className='border-b bg-white'>
                                <tr className='text-center text-[14px] font-bold text-blue-1 '>
                                    <th scope='col' className='py-4'>
                                        No
                                    </th>
                                    <th scope='col' className='px-[27px] py-4'>
                                        Airline
                                    </th>
                                    <th scope='col' className='px-[27px] py-4'>
                                        Airport <br />
                                        Asal
                                    </th>
                                    <th scope='col' className='px-[27px] py-4'>
                                        Airport <br />
                                        Tujuan
                                    </th>
                                    <th scope='col' className='px-[27px] py-4 '>
                                        Derpature
                                    </th>
                                    <th scope='col' className='px-[27px] py-4'>
                                        Derpature <br />
                                        Time
                                    </th>
                                    <th scope='col' className='px-[27px] py-4'>
                                        Arrival
                                    </th>
                                    <th scope='col' className='px-[27px] py-4 '>
                                        Arrival <br />
                                        Time
                                    </th>
                                    <th scope='col' className='px-[20px] py-4'>
                                        Price
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-b bg-gray-100 text-center text-[14px] font-normal text-black '>
                                    <td className='whitespace-nowrap px-6 py-4'>01</td>
                                    <td className='whitespace-nowrap px-6 py-4'>Super Air Jet</td>
                                    <td className='whitespace-nowrap px-6 py-4'>Ahmad Yani</td>
                                    <td className='whitespace-nowrap px-6 py-4'>Soekarno Hatta</td>
                                    <td className='whitespace-nowrap px-6 py-4'>2023-06-23</td>
                                    <td className='whitespace-nowrap px-6 py-4'>10.00</td>
                                    <td className='whitespace-nowrap px-6 py-4'>2023-06-24</td>
                                    <td className='whitespace-nowrap px-6 py-4'>10.00</td>
                                    <td className='whitespace-nowrap px-6 py-4'>Rp2.000.000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </nav>
    );
}
