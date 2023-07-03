'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

import axios from 'axios';

import TableAirline from '@/components/TabelAirline';
import Aside from '@/components/Aside';
import TopComponent from '@/components/TopComponent';
import ButtonSimpan from '@/components/ButtonSimpan';

export default function Airline() {
    const [fetchAirlines, setFetchAirlines] = useState(true);
    const [airlines, SetAirlines] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [airline, setAirline] = useState({
        airline_code: '',
        airline_name: '',
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

            if (!airline.airline_code || !airline.airline_name) {
                console.log('Field harus diisi semua!');
                return;
            }

            const token =
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJuYW1hIjoiYWRtaW4iLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE2ODgzMjk1NzgsImV4cCI6MTY4ODUwMjM3OH0.pi_GiBwEDg-p67aAEB4pncjuw7sHFq1jmQDsk8e1VuQ';

            const URL_POST = 'https://kel1airplaneapi-production.up.railway.app/api/v1/airline';

            const response = await axios.post(URL_POST, dataForm, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data);
            console.log('============== SUBMIT SUCCESS =============');

            return response.data;
        } catch (error) {
            console.log('============== SUBMIT ERROR =============');
            console.log(error);
        }
    };

    useEffect(() => {
        if (fetchAirlines) {
            const getAirlines = async () => {
                try {
                    const URL_AIRLINE = 'https://kel1airplaneapi-production.up.railway.app/api/v1/airline';

                    const response = await axios.get(URL_AIRLINE);

                    const airlineData = response.data.data.airline;
                    SetAirlines(airlineData);
                } catch (error) {
                    console.log('ERROR AIRLINE', error);
                }
            };
            getAirlines();
        }
        setFetchAirlines(false);
    }, [fetchAirlines]);

    return (
        <section className='h-[950px] w-[1440px] bg-grey-2  '>
            <nav className=''>
                <div className='flex '>
                    {/* SIDEBAR */}
                    <div className=' '>
                        <Aside />
                    </div>
                    <div className=''>
                        {/* NAVBAR */}
                        <div className='ml-[361px] mt-[47px]'>
                            <div>
                                <div className='flex'>
                                    <h1 className=' text-[32px] font-bold text-blue-1 '>Airline</h1>
                                    <div className='ml-[262px]'>
                                        <TopComponent />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* TABLE */}
                        <div className='ml-[351px] mt-[120px] '>
                            <div className='flex items-center'>
                                {/* <img className='' src={`./images/back.svg`} alt='' /> */}
                                <h1 className='ml-[px] text-[21px] font-bold text-blue-1 '>Data Airline</h1>
                                <div className='ml-[670px]' alt=''>
                                    {/* <ButtonAdd onClick={() => setOpenModal(true)} /> */}
                                    <button
                                        onClick={() => setOpenModal(true)}
                                        type='button'
                                        className='h-[35px] w-[122px] rounded-full bg-blue-1 text-white  hover:bg-blue-1/90 hover:text-white '>
                                        <div className='align-center flex justify-center '>
                                            <img src={`./images/add.svg`} alt='' />
                                            <p className='ml-2'>Tambah</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className='mt-[24px]'>
                                <TableAirline airlines={airlines} />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {openModal && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-60'>
                    <div className='h-[600px] w-[600px] bg-white'>
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
                                                id='airline_code'
                                                name='airline_code'
                                                type='text'
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
                                                id='airline_name'
                                                name='airline_name'
                                                type='text'
                                                onChange={handleAirline}
                                                className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50  p-2.5 text-gray-900 sm:text-sm'
                                                placeholder='Super Jet Airline'
                                                required=''
                                            />
                                        </div>
                                        <button
                                            type='submit'
                                            className='h-[43px] w-[110px] rounded-full  bg-blue-1 text-white hover:bg-blue-1/90 hover:text-white '>
                                            <div className='align-center flex justify-center '>
                                                <p className='m-[10px]'>Submit</p>
                                            </div>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
