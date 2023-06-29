'use client'
import Aside from "@/components/Aside"
import Navbar from "@/components/Navbar"
import SearchBar from "@/components/SearchBar"
import Airline from "@/pages/Airline"
import ButtonAdd from "@/components/ButtonAdd"
import TableAirline from "@/components/TableAirline"
import AddAirline from "@/pages/AddAirline"
import UpdateAirline from "@/pages/UpdateAirline"
import Airport from "@/pages/Airport"

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
            {/* <Airline /> */}

            <Airport />
            {/* <AirportAdd /> */}
            {/* <AirportUpdate /> */}
        </main>
    );
}
