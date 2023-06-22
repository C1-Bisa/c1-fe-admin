'use client';
import Image from 'next/image';
import { FiHome, FiSend, FiMap, FiGlobe, FiFile, FiUsers } from 'react-icons/fi';

export default function Aside(onClick) {
    return (
        <div className='fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full font-poppins transition-transform sm:translate-x-0'>
            <div className='h-full items-center overflow-y-auto bg-blue-1 py-4  text-center dark:bg-gray-800'>
                <div className='mb-5 items-center pl-2.5'>
                    <Image src={`./images/flyid_logo.svg`} width={'150'} height={'150'} alt='FLY ID Logo' className=' pl-16' />
                    <span class='self-center whitespace-nowrap pt-1.5 text-4xl font-bold text-neutral-1'>Admin C1</span>
                </div>
                <ul className='space-y-2 font-medium'>
                    <li >
                        <div className='flex items-center rounded-full rounded-r-lg px-4 p-2 text-gray-900 hover:bg-neutral-1 dark:text-white dark:hover:bg-gray-700'>
                            {/* <Image src={`./images/home.svg`} width={'24'} height={'24'} className='text-purple-6' /> */}
                            <div className='cursor-pointer flex flex-row text-purple-6 hover:text-blue-1'>
                                <FiHome className=' h-6 w-6' />
                                <span className='ml-3 '>
                                    Dashboard
                                </span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center rounded-full rounded-r-lg px-4 p-2 text-gray-900 hover:bg-neutral-1 dark:text-white dark:hover:bg-gray-700'>
                            {/* <Image src={`./images/home.svg`} width={'24'} height={'24'} className='text-purple-6' /> */}
                            <div className='cursor-pointer flex flex-row text-purple-6 hover:text-blue-1'>
                                <FiSend className=' h-6 w-6' />
                                <span className='ml-3'>
                                    Airlane
                                </span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center rounded-full rounded-r-lg px-4 p-2 text-gray-900 hover:bg-neutral-1 dark:text-white dark:hover:bg-gray-700'>
                            {/* <Image src={`./images/home.svg`} width={'24'} height={'24'} className='text-purple-6' /> */}
                            <div className='cursor-pointer flex flex-row text-purple-6 hover:text-blue-1'>
                                <FiMap className=' h-6 w-6' />
                                <span className='ml-3 '>
                                    Airport
                                </span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center rounded-full rounded-r-lg px-4 p-2 text-gray-900 hover:bg-neutral-1 dark:text-white dark:hover:bg-gray-700'>
                            {/* <Image src={`./images/home.svg`} width={'24'} height={'24'} className='text-purple-6' /> */}
                            <div className='cursor-pointer flex flex-row text-purple-6 hover:text-blue-1'>
                                <FiGlobe className=' h-6 w-6' />
                                <span className='cursor-pointer ml-3'>
                                    Flight
                                </span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center rounded-full rounded-r-lg px-4 p-2 text-gray-900 hover:bg-neutral-1 dark:text-white dark:hover:bg-gray-700'>
                            {/* <Image src={`./images/home.svg`} width={'24'} height={'24'} className='text-purple-6' /> */}
                            <div className='cursor-pointer flex flex-row text-purple-6 hover:text-blue-1'>
                                <FiFile className=' h-6 w-6' />
                                <span className='ml-3'>
                                    Transaction
                                </span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center rounded-full rounded-r-lg px-4 p-2 text-gray-900 hover:bg-neutral-1 dark:text-white dark:hover:bg-gray-700'>
                            {/* <Image src={`./images/home.svg`} width={'24'} height={'24'} className='text-purple-6' /> */}
                            <div className='cursor-pointer flex flex-row text-purple-6 hover:text-blue-1'>
                                <FiUsers className='h-6 w-6' />
                                <span className='ml-3'>
                                    User
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
