'use client';
import Image from 'next/image';
import { FiHome, FiSend, FiMap, FiGlobe, FiFile, FiUsers } from 'react-icons/fi';

export default function FormFlight(onClick) {
    return (
        <div className='h-[588px]  w-[989px] bg-white  font-poppins'>
            <div className='w-[989px] h-[40px] text-left rounded-t-[20px] bg-blue-1 pl-10'>
                <h1 className='text-[24px] font-semibold text-white'>Flight</h1>
            </div>
        <div className="flex ml-[20px] mt-[10px] ">
            <form>
                <div className=''>
                    <div className='mb-[44px] h-[42px] w-[408px]'>
                        <label htmlFor='airlineID' className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                            Kode Airline
                        </label>
                        <input
                            type='airlineID'
                            id='airlineID'
                            className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50  p-2.5 text-gray-900 sm:text-sm '
                            placeholder='SJA'
                            required=''
                        />
                    </div>
                    <div className='mb-[44px] h-[42px] w-[408px] '>
                        <label htmlFor='AirportIDFrom' className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                            Nama Airline
                        </label>
                        <input
                            type='AirportIDFrom'
                            id='AirportIDFrom'
                            className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50  p-2.5 text-gray-900 sm:text-sm'
                            placeholder='Super Jet Airline'
                            required=''
                        />
                    </div>
                </div>
            </form>

            </div>
        </div>
        
    );
}