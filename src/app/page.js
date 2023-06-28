

import Airline from '@/pages/Airline';
import AirlineAdd from '@/pages/AirlineAdd';
import AirlineUpdate from '@/pages/AirlineUpdate';

import Airport from '@/pages/Airport';
import AirportAdd from '@/pages/AirportAdd';
import AirportUpdate from '@/pages/AirportUpdate';

import Flight from '@/pages/Flight';
import FlightAdd from '@/pages/FlightAdd';
import FlightUpdate from '@/pages/FlightUpdate';


export default function Home() {
    return (
        <main className='bg-grey-2 w-full h-[950px]'>
            {/* <Flight /> */}
            {/* <FlightAdd /> */}
            <FlightUpdate />

            {/* <AirlineAdd /> */}
            {/* <AirlineUpdate /> */}
            {/* <Airline /> */}

            {/* <Airport /> */}
            {/* <AirportAdd /> */}
            {/* <AirportUpdate /> */}
        </main>
    );
}
