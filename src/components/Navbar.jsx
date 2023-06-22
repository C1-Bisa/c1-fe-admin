'use client';

export default function Navbar() {
    return (
        <nav className='fixed top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800'>
        <div className='px-3 py-3 lg:px-5 lg:pl-3'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start'>
                        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white sm:text-2xl'>Beranda</span>
                </div>
                <div className='flex items-center'>
                    <div className='ml-3 flex items-center'>
                        <div>
                            <button
                                type='button'
                                className='flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
                                aria-expanded='false'
                                data-dropdown-toggle='dropdown-user'>
                                <span className='sr-only'>Open user menu</span>
                                <img
                                    className='h-8 w-8 rounded-full'
                                    src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                                    alt='user photo'
                                />
                            </button>
                        </div>
                        <div
                            className='z-50 my-4 hidden list-none divide-y divide-gray-100 rounded bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700'
                            id='dropdown-user'>
                            <div className='px-4 py-3' role='none'>
                                <p className='text-sm text-gray-900 dark:text-white' role='none'>
                                    Neil Sims
                                </p>
                                <p className='truncate text-sm font-medium text-gray-900 dark:text-gray-300' role='none'>
                                    neil.sims@flowbite.com
                                </p>
                            </div>
                            <ul className='py-1' role='none'>
                                <li>
                                    <a
                                        href='#'
                                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                                        role='menuitem'>
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='#'
                                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                                        role='menuitem'>
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='#'
                                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                                        role='menuitem'>
                                        Earnings
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='#'
                                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                                        role='menuitem'>
                                        Sign out
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    )
}
