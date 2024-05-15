import React from 'react';
import { GrTransaction } from 'react-icons/gr';

const RecentTransactions = () => {
    return (
        <div className='bg-white dark:bg-dark-400 primary-shadow dark:shadow-sm p-5 rounded-xl'>
            <div className='flex items-center gap-2'>
                <span className='text-primary-300'><GrTransaction size={24} /></span>
                <h4 className='text-gray-800 dark:text-white font-medium text-xl'>Recent Transactions</h4>
            </div>

            <ul>
                <li></li>
            </ul>
        </div>
    );
};

export default RecentTransactions;