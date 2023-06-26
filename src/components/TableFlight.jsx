'use client';

export default function TableFlight() {
    return (
        <nav className='w-[1014px] border-b border-gray-200 bg-white overflow-x-auto shadow-md sm:rounded-lg'>    
    <div className="overflow-x-auto ">
      <div className="py-2 inline-block min-w-full sm:px-[27px] lg:px-8">
        <div className="overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-white border-b">
              <tr className="text-blue-1 text-[14px] font-bold text-center ">
                <th
                  scope="col"
                  className="px-[27px] py-4"
                >
                  No
                </th>
                <th
                  scope="col"
                  className="px-[27px] py-4"
                >
                  Airline ID
                </th>
                <th
                  scope="col"
                  className="px-[27px] py-4"
                >
                  Airport ID From
                </th>
                <th
                  scope="col"
                  className="px-[27px] py-4"
                >
                  Airport ID To
                </th>
                <th
                  scope="col"
                  className="px-[27px] py-4 "
                >
                  Arrival <br />Date
                </th>
                <th
                  scope="col"
                  className="px-[27px] py-4"
                >
                  Arrival <br />Time
                </th>
                <th
                  scope="col"
                  className="px-[27px] py-4 "
                >
                  Derpature <br />Date
                </th>
                <th
                  scope="col"
                  className="px-[27px] py-4"
                >
                  Derpature <br />Time
                </th>
                <th
                  scope="col"
                  className="px-[27px] py-4"
                >
                  From
                </th>
                <th
                  scope="col"
                  className="px-[27px] py-4 "
                >
                  To
                </th>
                <th
                  scope="col"
                  className="px-[27px] py-4"
                >
                  Duration
                </th>
                <th
                  scope="col"
                  className="px-[27px] py-4"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-[27px] py-4"
                >
                  Flight Class
                </th>
                <th
                  scope="col"
                  className="px-[27px] py-4"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="px-[27px] py-4"
                >
                  Created At
                </th>
                <th
                  scope="col"
                  className="px-[27px] py-4"
                >
                  Updated At
                </th>
                <th
                  scope="col"
                  className="px-[27px] py-4"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100 border-b text-black font-normal text-[14px] text-center ">
                <td className="px-[27px] py-4 whitespace-nowrap">
                  01
                </td>
                <td className="px-[27px] py-4 whitespace-nowrap">
                5
                </td>
                <td className="px-[27px] py-4 whitespace-nowrap">
                1
                </td>
                <td className="px-[27px] py-4 whitespace-nowrap">
                6
                </td>
                <td className="px-[27px] py-4 whitespace-nowrap">
                2023-06-23
                </td>
                <td className="px-[27px] py-4 whitespace-nowrap">
                10.00
                </td>
                <td className="px-[27px] py-4 whitespace-nowrap">
                2023-06-24
                </td>
                <td className="px-[27px] py-4 whitespace-nowrap">
                10.00
                </td>
                <td className="px-[27px] py-4 whitespace-nowrap">
                Jakarta
                </td>
                <td className="px-[27px] py-4 whitespace-nowrap">
                Bali
                </td>
                <td className="px-[27px] py-4 whitespace-nowrap">
                3
                </td>
                <td className="px-[27px] py-4 whitespace-nowrap">
                Rp2.000.000
                </td>
                <td className="px-[27px] py-4 whitespace-nowrap">
                Economy
                </td>
                <td className="px-[27px] py-4 whitespace-pre-line">
                Baggage 20 kg Cabin baggage 7 kg In Flight Entertainment
                </td>
                <td className="px-[27px] py-4 whitespace-nowrap">
                2023-05-06
                </td>
                <td className="px-[27px] py-4 whitespace-nowrap">
                2023-05-06
                </td>
                <td className="px-[50px] py-4 whitespace-nowrap justify-center ">
                    <div className="flex w-[24px] space-x-[12px] item-center justify-center whitespace-nowrap">
                      <img className="cursor-pointer hover:text-blue-1 hover:scale-110 " src={`./images/edit.svg`} alt="" />
                      <img className="cursor-pointer hover:text-blue-1 hover:scale-110 " src={`./images/delete.svg`} alt="" />
                  </div>

                </td>
                {/* BATAS COBA */}

              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    </nav>
    )
}
