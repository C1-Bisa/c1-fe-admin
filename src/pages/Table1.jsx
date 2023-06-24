'use client';

export default function () {
    return (
        <div>
            <div>
                <table className="w-full">
                    <thead className="bg-pur-3 border-b-4 border-gray-100 text-yellow-50">
                        <tr>
                            <th className="w-20 p-3 text-sm font-semibold tracking-wide">halo</th>
                            <th className="w-20 p-3 text-sm font-semibold tracking-wide">halo</th>
                            <th className="w-20 p-3 text-sm font-semibold tracking-wide">halo</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td className="p-3 text-sm text-gray-70">tes1</td>
                            <td className="p-3 text-sm text-gray-70">tes1</td>
                         
                        </tr>
                    </tbody>

                </table>
            </div>
            <div className='w-40'>
                <div class=' overflow-x-auto'>
                    <div class='whitespace-nowrap'>
                        Hey everyone! It's almost 2022 and we still don't know if there is aliens living among us, or do we? Maybe
                        the person writing this is an alien. You will never know.
                    </div>
                </div>
            </div>
        </div>
    );
}
