import Link from 'next/link';
import React from 'react';
import { GrTransaction } from 'react-icons/gr';

const RecentTransactions = () => {
    return (
        <>
            <div className='flex items-center gap-2'>
                <span className='text-primary-300'><GrTransaction size={24} /></span>
                <h4 className='text-gray-800 dark:text-white font-medium text-xl'>Recent Transactions</h4>
            </div>

            <ul className='mt-5 grid gap-3'>
                <li className='flex justify-between bg-slate-50 dark:bg-dark-50 px-5 py-3 rounded-xl primary-shadow dark:shadow-md'>
                    <div>
                        <span className='text-xs font-medium text-primary-200'>May 27, 2024 @ 10:00 PM</span>
                        <h3 className='font-medium text-gray-800 dark:text-white'>$60 Spent From Cash</h3>
                        <span className='text-xs font-medium text-gray-500 dark:text-gray-400'>Account: Cash</span>
                    </div>
                    <div>
                        <p className='text-xs text-gray-500 dark:text-gray-400'>Personal Spending</p>
                        <span className='text-primary-200 text-lg font-semibold'>$60</span>
                    </div>
                </li>
                <li className='flex justify-between bg-slate-50 dark:bg-dark-50 px-5 py-3 rounded-xl primary-shadow dark:shadow-md'>
                    <div>
                        <span className='text-xs font-medium text-primary-200'>May 27, 2024 @ 10:00 PM</span>
                        <h3 className='font-medium text-gray-800 dark:text-white'>$60 Spent From Cash</h3>
                        <span className='text-xs font-medium text-gray-500 dark:text-gray-400'>Account: Cash</span>
                    </div>
                    <div>
                        <p className='text-xs text-gray-500 dark:text-gray-400'>Personal Spending</p>
                        <span className='text-primary-200 text-lg font-semibold'>$60</span>
                    </div>
                </li>
                <li className='flex justify-between bg-slate-50 dark:bg-dark-50 px-5 py-3 rounded-xl primary-shadow dark:shadow-md'>
                    <div>
                        <span className='text-xs font-medium text-primary-200'>May 27, 2024 @ 10:00 PM</span>
                        <h3 className='font-medium text-gray-800 dark:text-white'>$60 Spent From Cash</h3>
                        <span className='text-xs font-medium text-gray-500 dark:text-gray-400'>Account: Cash</span>
                    </div>
                    <div>
                        <p className='text-xs text-gray-500 dark:text-gray-400'>Personal Spending</p>
                        <span className='text-primary-200 text-lg font-semibold'>$60</span>
                    </div>
                </li>
                <li className='flex justify-between bg-slate-50 dark:bg-dark-50 px-5 py-3 rounded-xl primary-shadow dark:shadow-md'>
                    <div>
                        <span className='text-xs font-medium text-primary-200'>May 27, 2024 @ 10:00 PM</span>
                        <h3 className='font-medium text-gray-800 dark:text-white'>$60 Spent From Cash</h3>
                        <span className='text-xs font-medium text-gray-500 dark:text-gray-400'>Account: Cash</span>
                    </div>
                    <div>
                        <p className='text-xs text-gray-500 dark:text-gray-400'>Personal Spending</p>
                        <span className='text-primary-200 text-lg font-semibold'>$60</span>
                    </div>
                </li>
            </ul>

            <div className='mt-3 text-end'>
                <Link href='/analytics' className='text-primary-300 font-medium cursor-pointer text-sm'>View All</Link>
            </div>
        </>
    );
};

export default RecentTransactions;