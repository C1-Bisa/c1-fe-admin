'use client';
import Input from '@/components/Input';
import Label from '@/components/Label';
import Image from 'next/image';
import PasswordInput from '@/components/PasswordInput';
import AskAccountButton from '@/components/AskAccountButton';
import Button from '@/components/Button';
import AlertBottom from '@/components/AlertBottom';
import { useState } from 'react';
export default function RegisterResponsive() {
    const [visibleAlert, setVisibleAlert] = useState(false);
    const handleVisibleAlert = () => setVisibleAlert(!visibleAlert);

    return (
        <div className='grid h-screen grid-cols-12 '>
            <div className='relative hidden lg:col-span-6 lg:block'>
                <Image src={`./images/front.svg`} alt='' fill={true} style={{ objectFit: 'cover' }} quality={100} />
            </div>
            <div className='relative col-span-12 flex flex-col justify-around  px-[26px] lg:col-span-6 lg:items-center lg:justify-center lg:px-0'>
                <AlertBottom
                    visibleAlert={visibleAlert}
                    handleVisibleAlert={handleVisibleAlert}
                    className='bg-alert-3'
                    text={'Tautan invalid atau kadaluarsa'}
                />

                <div className=' w-full  lg:mb-10 lg:w-[452px]'>
                    <div className=' flex flex-col gap-4'>
                        <h1 className='mb-2 font-poppins text-head-2 font-bold '>Daftar</h1>
                        <div className='flex flex-col'>
                            <Label htmlFor='name' className='mb-1 text-body-3'>
                                Nama
                            </Label>

                            <Input id='name' placeholder='Nama Lengkap' />
                        </div>
                        <div className='flex flex-col'>
                            <Label htmlFor='email' className='mb-1 text-body-3'>
                                Email
                            </Label>

                            <Input id='name' type='email' placeholder='Contoh: johndee@gmail.com' />
                        </div>
                        <div className='flex flex-col'>
                            <Label htmlFor='nomor' className='mb-1 text-body-3'>
                                Nomor Telepon
                            </Label>

                            <Input id='nomor' placeholder='+62 .' type='number' />
                        </div>
                        <div className='mb-4 flex flex-col'>
                            <Label htmlFor='password' className='mb-1 text-body-3'>
                                Buat Password
                            </Label>

                            <PasswordInput id='password' placeholder='Masukkan password' />
                        </div>
                        <Button onClick={() => handleVisibleAlert()}>Masuk</Button>
                    </div>
                </div>

                <AskAccountButton prefix={'Belum punya akun?'} suffix={'Daftar Disini'} onClick={() => console.log('Ini diganti Fungsi')} />
            </div>
        </div>
    );
}
