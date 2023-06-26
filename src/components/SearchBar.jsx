'use client';
import { FiSearch } from 'react-icons/fi';
import Input from './Input';

export default function SearchBar() {
    return (
        <div className='relative w-[350px]'>
            <FiSearch className='text-net-3 absolute right-0 top-1/2 mr-6 h-6 w-6 translate-y-[-50%]' />
            <Input
                className='border-net-6 bg-net-6 text-body-6 rounded-full py-[14px] pl-6 pr-12 font-poppins font-normal'
                placeholder={'Search here...'}
            />
        </div>
    );
}
