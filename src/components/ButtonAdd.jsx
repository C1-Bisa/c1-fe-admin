'use client';
import Image from 'next/image';
import { FiHome, FiSend, FiMap, FiGlobe, FiFile, FiUsers } from 'react-icons/fi';

export default function ButtonAdd() {
    return (
        <nav className='fixed '>
            <button
        type="button"
        className="w-[122px] h-[35px] bg-blue-1 text-white rounded-full  hover:bg-blue-1/90 hover:text-white "
      >
        <div className="flex justify-center align-center ">
            <img src={`./images/add.svg`} alt="" />
          <p className="ml-2">Tambah</p>
        </div>
      </button>
    </nav>
    )
}
