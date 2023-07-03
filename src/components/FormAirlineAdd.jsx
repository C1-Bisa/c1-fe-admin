'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

import axios from 'axios';

import ButtonSubmit from '@/components/ButtonSubmit';

export default function FormAirlineAdd() {
    const [airline, setAirline] = useState({
        airline_code: "",
        airline_name: "",
        
    });

    const handleAirline = (event) => {
        setAirline({ ...airline, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const dataForm = {
                airline_code: airline.airline_code,
                airline_name: airline.airline_name,
            };

            const token =
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJuYW1hIjoiYWRtaW4iLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE2ODgzMjk1NzgsImV4cCI6MTY4ODUwMjM3OH0.pi_GiBwEDg-p67aAEB4pncjuw7sHFq1jmQDsk8e1VuQ';

            const url = 'https://kel1airplaneapi-production.up.railway.app/api/v1/airline';


            const response = await axios.post(url,dataForm, {

                // airline_code,
                // airline_name,
                
                // airline_code: airline.airline_code,
                // airline_name: airline.airline_name,
                
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data);
            console.log('============== SUKSES =============');

            return response.data;
        } catch (error) {
            console.log('============== GAGAL =============');
            console.log(error);
        }
    };

    // const handleAdd = async (event) => {
    //     event.preventDefault();
    //     try {
    //         if (!airline.airline_code || !airline.airline_name) {
    //             // handleVisibleAlert('Field harus diisi semua!', 'failed');
    //             return;
    //         }
    //         const templateObj = {
    //             airline_code: airline.airline_code,
    //             airline_name: airline.airline_name,
    //         };
    //         const res = await handleSubmit(templateObj);

    //         if (res.status === 'Success') {
    //             let id = res.data.airline.id;
    //             // let emails = res.data.user.email;
    //             // emails: res.data.user.email,

    //             // router.push(`otp/${id}/${emails}`);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    return (
        <div className='h-[420px]  w-[989px] bg-white  font-poppins'>
            <div className='h-[48px] w-[982px] rounded-t-[20px] bg-blue-1 pl-6 pt-2'>
                <h1 className='text-[24px] font-semibold text-white'>Airline</h1>
            </div>
            <div className='ml-[20px] mt-[10px] flex '>
                <form onSubmit={handleSubmit}>
                    <div className=''>
                        <div className='mb-[44px] h-[42px] w-[408px]'>
                            <label htmlFor='airline_code' className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                Kode Airline
                            </label>
                            <input
                                // id='airline_code'
                                name='airline_code'
                                // value={airlineData.airline_code}\
                                // type='text'
                                value={airline.airline_code}
                                onChange={handleAirline}
                                className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50  p-2.5 text-gray-900 sm:text-sm '
                                placeholder='SJA'
                                required=''
                            />
                        </div>
                        <div className='mb-[44px] h-[42px] w-[408px] '>
                            <label htmlFor='airline_name' className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                Nama Airline
                            </label>
                            <input
                                // id='airline_name'
                                name='airline_name'
                                // value={airlineData.airline_name}
                                // type='text'
                                value={airline.airline_name}
                                onChange={handleAirline}
                                className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50  p-2.5 text-gray-900 sm:text-sm'
                                placeholder='Super Jet Airline'
                                required=''
                            />
                        </div>

                        <div className='ml-[800px] mt-[150px]'>
                            <button type='submit'>Submit</button>
                            {/* <ButtonSubmit
                                type='submit'
                                // prefix={'Sudah Punya Akun?'}
                                // suffix={'Masuk Disini'}
                                // onClick={() => router.push('/login')}
                            /> */}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
