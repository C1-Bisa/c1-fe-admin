'use client';

export default function TableUser() {
    return (
        <nav className=' w-[1046] overflow-x-auto border-b border-gray-200 bg-white shadow-md sm:rounded-lg'>
            <div className='overflow-x-auto sm:mx-0.5 lg:mx-0.5'>
                <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
                    <div className='overflow-hidden'>
                        <table className='min-w-full'>
                            <thead className='border-b bg-white'>
                                <tr className='text-center text-[14px] font-bold text-blue-1 '>
                                    <th scope='col' className='px-6 py-4'>
                                        No
                                    </th>
                                    <th scope='col' className='px-6 py-4'>
                                        Nama
                                    </th>
                                    <th scope='col' className='px-6 py-4'>
                                        Email
                                    </th>
                                    <th scope='col' className='px-6 py-4'>
                                        Phone
                                    </th>
                                    <th scope='col' className='px-6 py-4 '>
                                        Role
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-b bg-white text-center text-[14px] font-normal text-black '>
                                    <td className='whitespace-nowrap px-6 py-4'>01</td>
                                    <td className='whitespace-nowrap px-6 py-4'>Rinaldo Dwi F</td>
                                    <td className='whitespace-nowrap px-6 py-4'>RindaldoDwi@gmail.com</td>
                                    <td className='whitespace-nowrap px-6 py-4'>08123456789</td>
                                    <td className='whitespace-nowrap px-6 py-4'>User</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </nav>
    );
}
