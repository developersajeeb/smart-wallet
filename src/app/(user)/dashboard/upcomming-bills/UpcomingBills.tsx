import React from 'react';
import { TbCalendarDollar } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';

const UpcomingBills = () => {
    return (
        <section className='bg-white dark:bg-dark-400 primary-shadow dark:shadow-sm p-5 rounded-xl'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <span className='text-primary-300'><TbCalendarDollar size={26} /></span>
                    <h4 className='text-gray-800 dark:text-white font-medium text-xl'>Upcoming Bill</h4>
                </div>
                <Link href='/bills' className='text-sm font-medium flex items-center cursor-pointer text-primary-300 duration-300'>
                    <span>More</span>
                    <span><IoIosArrowForward /></span>
                </Link>
            </div>

            <div className='grid gap-5 mt-5'>
                <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
                    <div className='flex items-center gap-3'>
                        <div className='bg-gray-200 dark:bg-dark-50 text-center py-2 w-14 rounded-[10px]'>
                            <span className='text-sm text-gray-600 dark:text-gray-300'>Jun</span>
                            <h4 className='text-2xl font-bold text-gray-800 dark:text-white'>14</h4>
                        </div>

                        <div>
                            <h4 className='text-lg font-bold text-gray-800 dark:text-white'>Figma - Monthly</h4>
                            <p className='text-sm text-gray-500 dark:text-gray-400'>Last Charge - 14 Jun, 2024</p>
                        </div>
                    </div>
                    <div className='text-end'>
                        <h3 className='inline-block border py-1 px-2 rounded-lg border-gray-300 dark:border-gray-600'>$160</h3>
                    </div>
                </div>

                <div className='h-[1px] w-full bg-gray-300 dark:bg-gray-700'></div>

                <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
                    <div className='flex items-center gap-3'>
                        <div className='bg-gray-200 dark:bg-dark-50 text-center py-2 w-14 rounded-[10px]'>
                            <span className='text-sm text-gray-600 dark:text-gray-300'>Jun</span>
                            <h4 className='text-2xl font-bold text-gray-800 dark:text-white'>15</h4>
                        </div>

                        <div>
                            <h4 className='text-lg font-bold text-gray-800 dark:text-white'>Adobe - Monthly</h4>
                            <p className='text-sm text-gray-500 dark:text-gray-400'>Last Charge - 15 Jun, 2024</p>
                        </div>
                    </div>
                    <div className='text-end'>
                        <h3 className='inline-block border py-1 px-2 rounded-lg border-gray-300 dark:border-gray-600'>$160</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingBills;