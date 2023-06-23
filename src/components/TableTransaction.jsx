'use client';

export default function TableTransaction() {
    return (
        <nav className='fixed w-[1046px] border-b border-gray-200 bg-white '>    
    <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
      <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-white border-b">
              <tr className="text-blue-1 text-[14px] font-bold text-center ">
                <th
                  scope="col"
                  className="px-6 py-4"
                >
                  No
                </th>
                <th
                  scope="col"
                  className="px-6 py-4"
                >
                  Airline
                </th>
                <th
                  scope="col"
                  className="px-6 py-4"
                >
                  Airport <br />Asal
                </th>
                <th
                  scope="col"
                  className="px-6 py-4"
                >
                  Airport <br />Tujuan
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 "
                >
                  Derpature
                </th>
                <th
                  scope="col"
                  className="px-6 py-4"
                >
                  Derpature <br />Time
                </th>
                <th
                  scope="col"
                  className="px-6 py-4"
                >
                  Arrival
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 "
                >
                  Arrival <br />Time
                </th>
                <th
                  scope="col"
                  className="px-6 py-4"
                >
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100 border-b text-black font-normal text-[14px] text-center ">
                <td className="px-6 py-4 whitespace-nowrap">
                  01
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                Super Air Jet
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                Ahmad Yani
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                Soekarno Hatta
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                2023-06-23
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                10.00
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                2023-06-24
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                10.00
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                Rp2.000.000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    </nav>
    )
}
