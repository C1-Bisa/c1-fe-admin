'use client';
import Image from 'next/image';
import { FiHome, FiSend, FiMap, FiGlobe, FiFile, FiUsers } from 'react-icons/fi';

export default function ButtonAdd() {
    return (
        <nav className='fixed w-[931px] h-full border-b border-gray-200 bg-white '>
            <button
        type="button"
        className="w-[122px] h-[35px] bg-blue-1 ml-[548px] text-white rounded-full border-l border-gray-200 hover:bg-blue-1/90 hover:text-white "
      >
        <div className="flex justify-center align-center ">
            <img src={`./images/add.svg`} alt="" />
          <p className="ml-2">Tambah</p>
        </div>
      </button>
    </nav>
    )
}
