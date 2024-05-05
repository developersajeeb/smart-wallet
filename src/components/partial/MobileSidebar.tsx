import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import Link from 'next/link';
import { Knob } from 'primereact/knob';
import { LuLayoutDashboard } from 'react-icons/lu';
import { IoWalletOutline } from 'react-icons/io5';
import { TbBrandGoogleAnalytics, TbCalendarDollar, TbMoneybag } from 'react-icons/tb';
import { FiUpload } from 'react-icons/fi';
import { GrTransaction } from 'react-icons/gr';
import { GoGoal } from 'react-icons/go';
import Image from 'next/image';
import MainLogo from '/public/Smart-wallet.png';
import { RxCross2 } from "react-icons/rx";

interface Props {
    visibleLeft: boolean;
    setVisibleLeft: (visible: boolean) => void;
}

const MobileSidebar = ({ visibleLeft, setVisibleLeft }: Props) => {
    const [value, setValue] = useState<number>(10);


    return (
        <Sidebar className='!bg-slate-100 dark:!bg-dark-500 mobile-sidebar' visible={visibleLeft} position="left" onHide={() => setVisibleLeft(false)}>
            <div className="flex items-center gap-2 justify-between py-4 border-b border-slate-200 dark:border-dark-100">
                <Image className='max-w-[160px]' src={MainLogo} width={300} height={100} alt='Smart Wallet' />
                <span className='border border-gray-400 p-1 dark:text-gray-400 rounded-full' onClick={() => setVisibleLeft(false)}><RxCross2 size={20} /></span>
            </div>
            <div className='h-screen overflow-y-scroll overflow-style-none pb-[100px] pt-4'>
                <div className='grid gap-1'>
                    <Link href='#' className='flex items-center gap-3 bg-white dark:bg-dark-100 font-medium text-gray-600 dark:text-white primary-shadow dark:shadow-sm p-2 rounded-full'>
                        <span className='bg-primary-300 p-2 rounded-full text-white'><LuLayoutDashboard size={18} /></span>
                        <p>Dashboard</p>
                    </Link>

                    <Link href='#' className='flex items-center gap-3 p-2 rounded-full text-gray-800 dark:text-white'>
                        <span className='bg-white dark:bg-dark-100 p-2 rounded-full text-primary-300 primary-shadow dark:shadow-none'><IoWalletOutline size={18} /></span>
                        <p>Balance</p>
                    </Link>

                    <Link href='#' className='flex items-center gap-3 p-2 rounded-full text-gray-800 dark:text-white'>
                        <span className='bg-white dark:bg-dark-100 p-2 rounded-full text-primary-300 primary-shadow dark:shadow-none'><TbMoneybag size={18} /></span>
                        <p>Deposit</p>
                    </Link>

                    <Link href='#' className='flex items-center gap-3 p-2 rounded-full text-gray-800 dark:text-white'>
                        <span className='bg-white dark:bg-dark-100 p-2 rounded-full text-primary-300 primary-shadow dark:shadow-none'><FiUpload size={18} /></span>
                        <p>Expense</p>
                    </Link>

                    <Link href='#' className='flex items-center gap-3 p-2 rounded-full text-gray-800 dark:text-white'>
                        <span className='bg-white dark:bg-dark-100 p-2 rounded-full text-primary-300 primary-shadow dark:shadow-none'><GrTransaction size={18} /></span>
                        <p>Transactions</p>
                    </Link>

                    <Link href='#' className='flex items-center gap-3 p-2 rounded-full text-gray-800 dark:text-white'>
                        <span className='bg-white dark:bg-dark-100 p-2 rounded-full text-primary-300 primary-shadow dark:shadow-none'><TbCalendarDollar size={18} /></span>
                        <p>Bills</p>
                    </Link>

                    <Link href='#' className='flex items-center gap-3 p-2 rounded-full text-gray-800 dark:text-white'>
                        <span className='bg-white dark:bg-dark-100 p-2 rounded-full text-primary-300 primary-shadow dark:shadow-none'><TbBrandGoogleAnalytics size={18} /></span>
                        <p>Analytics</p>
                    </Link>

                    <Link href='#' className='flex items-center gap-3 p-2 rounded-full text-gray-800 dark:text-white'>
                        <span className='bg-white dark:bg-dark-100 p-2 rounded-full text-primary-300 primary-shadow dark:shadow-none'><GoGoal size={18} /></span>
                        <p>Golas</p>
                    </Link>
                </div>

                <div className='p-4 bg-primary-200 rounded-2xl mt-6 bg-cover bg-no-repeat bg-right' style={{ backgroundImage: `url(/bg-images/bg.png)`, }}>
                    <h4 className='text-lg font-semibold text-white text-center'>Your profile completion</h4>
                    <Knob className='sw-knob mt-5 mb-2 flex justify-center' readOnly value={value} step={10} onChange={(e) => setValue(e.value)} />
                    <p className='text-sm font-medium text-white text-center'>Please complete your profile with information</p>

                    <div className='pt-6 pb-4 text-center'>
                        <Link href='#' className='px-5 bg-white text-gray-700 text-sm py-3 rounded-xl font-medium hover:shadow-md duration-300'>
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </Sidebar>
    );
};

export default MobileSidebar;