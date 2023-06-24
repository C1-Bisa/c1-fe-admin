'use client';

import Button from '@/components/Button';
import Label from '@/components/Label';
import ToggleSwitch from '@/components/ToggleSwitch';
import ToggleRotate from '@/components/ToggleRotate';
import PasswordInput from '@/components/PasswordInput';
import Input from '@/components/Input';
import AlertBottom from '@/components/AlertBottom';
import SearchBar from '@/components/SearchBar';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
import HomeSearch from '@/components/HomeSearch';

export default function ComponentDocs() {
    const [showAlertBottom, setShowAlertBottom] = useState(false);
    const handleShowAlertBottom = () => setShowAlertBottom(!showAlertBottom);

    return (
        <div className='m-10'>
            <h1 className='mb-10 font-poppins text-5xl font-medium'>Dokumentasi Reusable Component Final Projek</h1>
            <div className=' flex  h-screen flex-col gap-12'>
                <div className='w-[500px] rounded-rad-2 p-4 shadow-low'>
                    <h1 className='mb-3 font-poppins text-3xl'>1. Button</h1>
                    <Button>Ini adalah Button</Button>
                </div>
                <div className='w-[500px] rounded-rad-2 p-4 shadow-low'>
                    <h1 className='mb-3 font-poppins text-3xl'>2. Label</h1>
                    <Label>Ini adalah Label</Label>
                </div>
                <div className='w-[500px] rounded-rad-2 p-4 shadow-low'>
                    <h1 className='mb-3 font-poppins text-3xl'>3. ToggleSwitch</h1>
                    <ToggleSwitch />
                </div>
                <div className='w-[500px] rounded-rad-2 p-4 shadow-low'>
                    <h1 className='mb-3 font-poppins text-3xl'>4. ToggleRotate</h1>
                    <ToggleRotate />
                </div>
                <div className='w-[500px] rounded-rad-2 p-4 shadow-low'>
                    <h1 className='mb-3 font-poppins text-3xl'>5. Input</h1>
                    <Input />
                </div>
                <div className='w-[500px] rounded-rad-2 p-4 shadow-low'>
                    <h1 className='mb-3 font-poppins text-3xl'>6. PasswordInput</h1>
                    <PasswordInput />
                </div>
                <div className='relative w-[500px] rounded-rad-2 p-4 shadow-low'>
                    <h1 className=' mb-3 font-poppins text-3xl'>7. AlertBottom</h1>
                    <Button onClick={() => handleShowAlertBottom()}>Klik Buat Nampilin Alert Bottom</Button>
                    <AlertBottom text={'Ini Alert'} visibleAlert={showAlertBottom} handleVisibleAlert={handleShowAlertBottom} />
                </div>
                <div className='w-[500px] rounded-rad-2 p-4 shadow-low'>
                    <h1 className='mb-3 font-poppins text-3xl'>8. SearchBar</h1>
                    <SearchBar />
                </div>

                <div>
                    <h1 className='mb-3 font-poppins text-3xl'>9. Navbar</h1>
                    <Navbar />
                </div>

                <div>
                    <h1 className='mb-3 font-poppins text-3xl'>10. HomeSearch</h1>
                    <HomeSearch className={'h-[300px]'} />
                </div>
            </div>
        </div>
    );
}
