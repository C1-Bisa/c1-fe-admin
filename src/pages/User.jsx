'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

import axios from 'axios';

import TableUser from '@/components/TableUser';
import Aside from '@/components/Aside';
import TopComponent from '@/components/TopComponent';

export default function User() {
    const [fetchUsers, setFetchUsers] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (fetchUsers) {
            const getUsers = async () => {
                try {
                    const token =
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJuYW1hIjoiYWRtaW4iLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE2ODgzMjk1NzgsImV4cCI6MTY4ODUwMjM3OH0.pi_GiBwEDg-p67aAEB4pncjuw7sHFq1jmQDsk8e1VuQ';
                    const URL_USER = 'https://kel1airplaneapi-production.up.railway.app/api/v1/user';

                    const response = await axios.get(URL_USER, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    // console.log('RESPONSE USER', response);
                    // console.log('RESPONSE DATA USER', response.data);
                    // console.log(' DATA USER', response.data.data);
                    // console.log(' DATA USER', response.data.data.users);

                    const usersData = response.data.data.users;
                    setUsers(usersData);
                } catch (error) {
                    console.log('ERROR USER', error);
                }
            };
            getUsers();
        }
        setFetchUsers(false);
    }, [fetchUsers]);

    // console.log('====================================');
    // console.log('USERS', users);
    // console.log('====================================');

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
                                <div className=' flex'>
                                    <h1 className=' text-[32px] font-bold text-blue-1 '>User</h1>
                                    <div className='ml-[262px]'>
                                        <TopComponent />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* TABLE */}
                        <div className='ml-[361px] mt-[120px] '>
                            <div className='flex items-center'>
                                <h1 className='text-[21px] font-bold text-blue-1 '>Data User</h1>
                            </div>
                            <div className='mt-[24px] '>
                                <TableUser users={users} />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}
