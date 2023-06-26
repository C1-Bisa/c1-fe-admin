'use client';
import Image from 'next/image';
import { FiHome, FiSend, FiMap, FiGlobe, FiFile, FiUsers } from 'react-icons/fi';

export default function Aside(onClick) {
    return (
        <div className='h-[949px]  w-[321px]  font-poppins '>
            <div className='h-full items-center bg-blue-1 py-4  text-center'>
                <div className='mt-[34px] items-center  '>
                    <img className='ml-[116px] h-[42px] w-[91px] ' src={`./images/flyid_logo.svg`} alt='FLY ID Logo' />
                    <span className='mt-[1.8px] self-center whitespace-nowrap text-[36px] font-bold text-neutral-1'>Admin C1</span>
                </div>
                <ul className='ml-[36px] mt-[60px] space-y-[26px] font-[18px] '>
                    <li>
                        <div className='flex items-center rounded-full rounded-r-lg p-2 px-4 text-gray-900 hover:bg-neutral-1 dark:text-white dark:hover:bg-white'>
                            {/* <Image src={`./images/home.svg`} width={'34'} height={'34'} className='text-purple-6' /> */}
                            <div className='flex cursor-pointer flex-row text-purple-6 hover:text-blue-1'>
                                <FiHome className=' h-6 w-6' />
                                <span className='ml-[24px] '>Dashboard</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center rounded-full rounded-r-lg p-2 px-4 text-gray-900 hover:bg-neutral-1 dark:text-white dark:hover:bg-white'>
                            {/* <Image src={`./images/home.svg`} width={'24'} height={'24'} className='text-purple-6' /> */}
                            <div className='flex cursor-pointer flex-row text-purple-6 hover:text-blue-1'>
                                <FiSend className=' h-6 w-6' />
                                <span className='ml-[24px]'>Airlane</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center rounded-full rounded-r-lg p-2 px-4 text-gray-900 hover:bg-neutral-1 dark:text-white dark:hover:bg-white'>
                            {/* <Image src={`./images/home.svg`} width={'24'} height={'24'} className='text-purple-6' /> */}
                            <div className='flex cursor-pointer flex-row text-purple-6 hover:text-blue-1'>
                                <FiMap className=' h-6 w-6' />
                                <span className='ml-[24px] '>Airport</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center rounded-full rounded-r-lg p-2 px-4 text-gray-900 hover:bg-neutral-1 dark:text-white dark:hover:bg-white'>
                            {/* <Image src={`./images/home.svg`} width={'24'} height={'24'} className='text-purple-6' /> */}
                            <div className='flex cursor-pointer flex-row text-purple-6 hover:text-blue-1'>
                                <FiGlobe className=' h-6 w-6' />
                                <span className='ml-[24px] cursor-pointer'>Flight</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center rounded-full rounded-r-lg p-2 px-4 text-gray-900 hover:bg-neutral-1 dark:text-white dark:hover:bg-white'>
                            {/* <Image src={`./images/home.svg`} width={'24'} height={'24'} className='text-purple-6' /> */}
                            <div className='flex cursor-pointer flex-row text-purple-6 hover:text-blue-1'>
                                <FiFile className=' h-6 w-6' />
                                <span className='ml-[24px]'>Transaction</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center rounded-full rounded-r-lg p-2 px-4 text-gray-900 hover:bg-neutral-1 dark:text-white dark:hover:bg-white'>
                            {/* <Image src={`./images/home.svg`} width={'24'} height={'24'} className='text-purple-6' /> */}
                            <div className='flex cursor-pointer flex-row text-purple-6 hover:text-blue-1'>
                                <FiUsers className='h-6 w-6' />
                                <span className='ml-[24px]'>User</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
