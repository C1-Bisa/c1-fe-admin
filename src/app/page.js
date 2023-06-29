'use client';

import Airline from '@/pages/Airline';
import AirlineAdd from '@/pages/AirlineAdd';
import AirlineUpdate from '@/pages/AirlineUpdate';

import Airport from '@/pages/Airport';
import AirportAdd from '@/pages/AirportAdd';
import AirportUpdate from '@/pages/AirportUpdate';

import Flight from '@/pages/Flight';
import FlightAdd from '@/pages/FlightAdd';
import FlightUpdate from '@/pages/FlightUpdate';

import User from '@/pages/User';
import Transaction from '@/pages/Transaction';

export default function Home() {
    return (
        <main className='h-[950px] w-full bg-grey-2'>
            {/* <User /> */}
            {/* <Transaction /> */}

            {/* <Flight /> */}
            {/* <FlightAdd /> */}
            {/* <FlightUpdate /> */}

            {/* <AirlineAdd /> */}
            {/* <AirlineUpdate /> */}
            <Airline />

            {/* <Airport /> */}
            {/* <AirportAdd /> */}
            {/* <AirportUpdate /> */}
        </main>
    );
}
