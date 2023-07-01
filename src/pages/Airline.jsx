
'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import axios from 'axios';

import TableAirline from '@/components/TabelAirline';
import Aside from '@/components/Aside';
import TopComponent from '@/components/TopComponent';
import ButtonAdd from '@/components/ButtonAdd';

export default function Airline() {
    const [fetchAirline, setFetchAirline] = useState(true);
    const [airlines, setAirlines] = useState([]);

    useEffect(() => {
        if (fetchAirline) {
            const getAirline = async () => {
                try {
                    const URL_AIRLINE = 'https://kel1airplaneapi-production.up.railway.app/api/v1/airline';
                    // misal  perlu token
                    // const response = await axios.get(URL_AIRPORT,{
                    //         headers: {
                    //             Authorization: `Bearer ${token}`,
                    //         },
                    //     });

                    const response = await axios.get(URL_AIRLINE);

                    console.log('RESPONSE AIRLINE', response);
                    console.log('RESPONSE DATA AIRLINE', response.data);
                    console.log(' DATA AIRLINE', response.data.data);
                    console.log(' AIRLINE', response.data.data.airline);
                    const airlinesData = response.data.data.airline;
                    setAirlines(airlinesData);
                } catch (error) {
                    console.log('ERROR AIRPORT', error);
                }
            };
            getAirline();
        }
        setFetchAirline(false);
    }, [fetchAirline]);

    console.log('====================================');
    console.log('AIRLINE', airlines);
    console.log('====================================');
    return (
        <section className='h-[950px] w-[1440px] bg-grey-2  '>
            <div className=''>
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
                                <div className='ml-[680px]' alt=''>
                                    <ButtonAdd />
                                </div>
                            </div>
                            <div className='mt-[24px]'>
                                <TableAirline airlines={airlines}/>
                            </div>
                        </div>
                    </div>

                    

                </div>
            </div>
        </section>
    );
}

