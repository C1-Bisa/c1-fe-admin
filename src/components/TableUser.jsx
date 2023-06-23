'use client';

export default function TableUser() {
    return (
        <nav className='fixed w-[1046] border-b border-gray-200 bg-white '>    
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
                  Nama
                </th>
                <th
                  scope="col"
                  className="px-6 py-4"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-4"
                >
                  Phone
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 "
                >
                  Role
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100 border-b text-black font-normal text-[14px] text-center ">
                <td className="px-6 py-4 whitespace-nowrap">
                  01
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                Budianto
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                contoh123@gmail.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                08123456789
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                User
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
