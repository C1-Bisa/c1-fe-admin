'use client';
import Image from 'next/image';

import Input from '@/components/Input';
import Label from '@/components/Label';
import PasswordInput from '@/components/PasswordInput';
import AskAccountButton from '@/components/AskAccountButton';
import Button from '@/components/Button';
import { useState } from 'react';
import AlertBottom from '@/components/AlertBottom';

export default function LoginResponsive() {
    const [visibleAlert, setVisibleAlert] = useState(false);
    const handleVisibleAlert = () => setVisibleAlert(!visibleAlert);

    return (
        <div className='grid h-screen grid-cols-12 '>
            {/* sisi kiri start*/}
            <div className='relative hidden lg:col-span-6 lg:block'>
                <Image src={`./images/front.svg`} alt='' fill={true} style={{ objectFit: 'cover' }} quality={100} />
            </div>
            {/* sisi kiri end */}

            {/* sisi kanan start */}
            <div className='relative col-span-12 flex flex-col justify-around  px-[26px] lg:col-span-6 lg:items-center lg:justify-center lg:px-0'>
                {/* notifikasi start */}
                <AlertBottom
                    visibleAlert={visibleAlert}
                    handleVisibleAlert={handleVisibleAlert}
                    className='bg-alert-3'
                    text={'Tautan invalid atau kadaluarsa'}
                />
                {/* notifikasi end */}

                {/* form start */}
                <div className=' w-full lg:mb-10 lg:w-[452px]'>
                    <div className='flex flex-col gap-4 '>
                        <h1 className='mb-2 font-poppins text-head-2 font-bold '>Masuk</h1>
                        <div className='flex flex-col'>
                            <Label htmlFor='email' className='mb-1 text-body-3 '>
                                Email/No Telepon
                            </Label>
                            <Input id='email' placeholder='Contoh: johndoe@gmail.com' />
                        </div>
                        <div className='mb-4 flex flex-col'>
                            <Label htmlFor='password' className='mb-1 flex justify-between text-body-3'>
                                Passwords <span className='cursor-pointer text-body-3 font-medium text-pur-4 hover:text-pur-2'>Lupa Kata Sandi</span>
                            </Label>
                            <PasswordInput id='password' placeholder='Masukkan password' />
                        </div>
                        <Button onClick={() => handleVisibleAlert()}>Masuk</Button>
                    </div>
                </div>
                {/* form end */}

                {/* ask account start */}
                <AskAccountButton prefix={'Belum punya akun?'} suffix={'Daftar Disini'} onClick={() => console.log('Ini diganti Fungsi')} />
                {/* ask account end */}
            </div>
            {/* sisi kanan end */}
        </div>
    );
}
