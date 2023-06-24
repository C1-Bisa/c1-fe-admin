'use client';
import Input from '@/components/Input';
import Label from '@/components/Label';
import Image from 'next/image';
import PasswordInput from '@/components/PasswordInput';
import AskAccountButton from '@/components/AskAccountButton';
import Button from '@/components/Button';
import AlertBottom from '@/components/AlertBottom';
import { useState } from 'react';

export default function Login() {
    const [visibleAlert, setVisibleAlert] = useState(false);
    const handleVisibleAlert = () => setVisibleAlert(!visibleAlert);

    return (
        <section className='h-screen'>
            <div className='grid h-full grid-cols-12'>
                <div className='col-span-6'>
                    <div className='relative h-full'>
                        <Image src={`./images/front.svg`} alt='' fill={true} style={{ objectFit: 'cover' }} quality={100} />
                    </div>
                </div>
                <div className='relative col-span-6'>
                    <AlertBottom
                        visibleAlert={visibleAlert}
                        handleVisibleAlert={handleVisibleAlert}
                        className='bg-alert-3'
                        text={'Tautan invalid atau kadaluarsa'}
                    />
                    <div className='flex h-full items-center justify-center '>
                        <div className='flex w-[452px] flex-col gap-5 '>
                            <h1 className='text-heading-2 mb-2 font-poppins font-bold'>Masuk</h1>
                            <div className='flex flex-col'>
                                {/* <label htmlFor='email' className='mb-1 font-poppins text-body-b font-normal'>
                                    Email/No Telepon
                                </label> */}
                                <Label htmlFor='email' className='text-body-3'>
                                    Email/No Telepon
                                </Label>
                                {/* <input
                                    type='text'
                                    id='email'
                                    className='appearance-none rounded-rad-4 border border-neutral-2 px-6 py-[14px] font-poppins text-body-c font-normal outline-none focus:border-purple-4'
                                    placeholder='Contoh: johndoe@gmail.com'
                                /> */}
                                <Input id='email' placeholder='Contoh: johndoe@gmail.com' />
                            </div>
                            <div className='flex flex-col'>
                                {/* <label htmlFor='password' className='mb-1 flex justify-between font-poppins text-body-b font-normal'>
                                    Passwords <span className='text-body-b font-medium text-purple-4'>Lupa Kata Sandi</span>
                                </label> */}
                                <Label htmlFor='password' className='mb-1 flex justify-between text-body-3'>
                                    Passwords{' '}
                                    <span className='cursor-pointer text-body-3 font-medium text-pur-4 hover:text-pur-2'>Lupa Kata Sandi</span>
                                </Label>
                                {/* <input
                                    type='password'
                                    id='password'
                                    className='appearance-none rounded-rad-4 border border-neutral-2 px-6 py-[14px] font-poppins text-body-c font-normal outline-none focus:border-purple-4'
                                    placeholder='Masukkan password'
                                /> */}
                                {/* <Input id='password' type='password' placeholder='Masukkan password' /> */}
                                <PasswordInput id='password' placeholder='Masukkan password' />
                            </div>
                            <div>
                                <Input className='rounded-rad-4 bg-net-6 py-[14px] pl-6 font-poppins text-body-6 font-normal' />
                            </div>
                            {/* <button className='rounded-rad-4 bg-purple-4 px-6 py-[14px] font-poppins text-body-c font-medium text-white'>
                                Masuk
                            </button> */}
                            <Button onClick={() => handleVisibleAlert()}>Masuk</Button>
                            {/* <div className='flex justify-center'>
                                <p className='font-poppins text-body-c font-normal'>
                                    Belum punya akun? <span className='ml-2 font-bold text-purple-4'>Daftar Disini</span>
                                </p>
                            </div> */}
                            <AskAccountButton
                                prefix={'Belum punya akun?'}
                                suffix={'Daftar Disini'}
                                onClick={() => console.log('Ini diganti Fungsi')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
