'use client';

//core
import { useState, useEffect } from 'react';
import Image from 'next/image';

//third parties
import axios from 'axios';

//components
import TableAirport from '@/components/TabelAirport';
import Aside from '@/components/Aside';
import TopComponent from '@/components/TopComponent';
import ButtonAdd from '@/components/ButtonAdd';
// import ButtonBack from '../../public/images/back.svg';

export default function Airport() {
    //state
    const [fetchAirport, setFetchAirport] = useState(true);
    const [airports, setAirports] = useState([]);
    const [chooseAirport, setChooseAirpot] = useState([null]);
    const [openModal, setOpenModal] = useState(false);
    const [airport, setAirport] = useState({
        airport_code: '',
        airport_name: '',
        airport_location: '',
    });

    const handleAirport = (event) => {
        setAirport({ ...airport, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const dataForm = {
                airport_code: airport.airport_code,
                airport_name: airport.airport_name,
                airport_location: airport.airport_location,
            };

            const token =
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJuYW1hIjoiYWRtaW4iLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE2ODgzMjk1NzgsImV4cCI6MTY4ODUwMjM3OH0.pi_GiBwEDg-p67aAEB4pncjuw7sHFq1jmQDsk8e1VuQ';

            const url = 'https://kel1airplaneapi-production.up.railway.app/api/v1/airport';
            const response = await axios.post(url, dataForm, {
                // airline_code,
                // airline_name,

                // airport_code: airport.airport_code,
                // airport_name: airport.airport_name,
                // airport_location: airport.airport_location,

                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data);
            console.log('============== Data Berhasil Ditambahkan =============');

            return response.data;
        } catch (error) {
            console.log('============== GAGAL =============');
            console.log(error);
        }
    };
    // const [fetchAirport, setFetchAirport] = useState(true);

    // //setup
    // useEffect(() => {
    //     if (fetchAirport) {
    //     }
    //     setFetchAirport(false);
    // }, [fetchAirport]);

    //setup
    useEffect(() => {
        if (fetchAirport) {
            const getAirport = async () => {
                try {
                    const token =
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJuYW1hIjoiYWRtaW4iLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE2ODc5NjA0NTYsImV4cCI6MTY4ODEzMzI1Nn0.v_ktm7kT1I5q_zMQXusG5jvLkW5e9IEz6bvQIb99DH4';
                    const URL_AIRPORT = 'https://kel1airplaneapi-production.up.railway.app/api/v1/airport';
                    // misal  perlu token
                    // const response = await axios.get(URL_AIRPORT,{
                    //         headers: {
                    //             Authorization: `Bearer ${token}`,
                    //         },
                    //     });

                    const response = await axios.get(URL_AIRPORT);

                    console.log('RESPONSE AIRPORT', response);
                    console.log('RESPONSE DATA AIRPORT', response.data);
                    console.log(' DATA AIRPORT', response.data.data);
                    console.log(' AIRPORTS', response.data.data.airport);
                    const airportsData = response.data.data.airport;
                    setAirports(airportsData);
                } catch (error) {
                    console.log('ERROR AIRPORT', error);
                }
            };
            getAirport();
        }
        setFetchAirport(false);
    }, [fetchAirport]);

    console.log('====================================');
    console.log('AIRPORTR', airports);
    console.log('====================================');

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
                                    <h1 className=' text-[32px] font-bold text-blue-1 '>Airport</h1>
                                    <div className='ml-[262px]'>
                                        <TopComponent />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* TABLE */}
                        <div className='ml-[361px] mt-[120px] '>
                            <div className='flex items-center'>
                                {/* <img className='' src={`./images/back.svg`} alt='' /> */}
                                <h1 className='ml-[px] text-[21px] font-bold text-blue-1 '>Data Airport</h1>
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
                                <TableAirport airports={airports} />
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
                                <h1 className='text-[24px] font-semibold text-white'>Airport</h1>
                            </div>
                            <div className='ml-[20px] mt-[10px] flex '>
                                <form onSubmit={handleSubmit}>
                                    <div className=''>
                                        <div className='mb-[44px] h-[42px] w-[408px]'>
                                            <label htmlFor='airport_code' className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                                Kode Airport
                                            </label>
                                            <input
                                                type='text'
                                                name='airport_code'
                                                className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50  p-2.5 text-gray-900 sm:text-sm '
                                                placeholder='CGK'
                                                required=''
                                                onChange={handleAirport}
                                            />
                                        </div>
                                        <div className='mb-[44px] h-[42px] w-[408px] '>
                                            <label htmlFor='airport_name' className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                                Nama Airport
                                            </label>
                                            <input
                                                type='text'
                                                name='airport_name'
                                                className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50  p-2.5 text-gray-900 sm:text-sm'
                                                placeholder='Soekarno-Hatta'
                                                required=''
                                                onChange={handleAirport}
                                            />
                                        </div>
                                        <div className='mb-[44px] h-[42px] w-[408px] '>
                                            <label
                                                htmlFor='airport_location'
                                                className='mb-[6px] text-[16px] font-bold text-blue-1 '>
                                                Lokasi
                                            </label>
                                            <input
                                                type='text'
                                                name='airport_location'
                                                className='mt-[4px] w-full rounded-[5px] border border-gray-300 bg-gray-50  p-2.5 text-gray-900 sm:text-sm'
                                                placeholder='Jakarta'
                                                required=''
                                                onChange={handleAirport}
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
