'use client';

export default function HomePage() {
    return (
        <div className='w-screen bg-red-400'>
            <div className='container mx-auto max-w-screen-xl '>
                <div className='bg-green-500 py-[18px]'>
                    <h1>Navbar</h1>
                </div>
            </div>
            <div className='relative'>
                <div className='container mx-auto max-w-screen-xl'>
                    <div className=' mt-8 h-[232px] rounded-[20px] bg-yellow-300'>
                        <h1>Hero</h1>
                    </div>
                </div>
                <div className='absolute top-1/2 h-[150px] w-full translate-y-[-50%] bg-purple-700'>
                    <p className='invisible'>.</p>
                </div>
            </div>

            <div className='container mx-auto mt-[-80px] h-[280px] max-w-screen-lg rounded-rad-3 bg-blue-500'>
                <h1>Form</h1>
            </div>
        </div>
    );
}
