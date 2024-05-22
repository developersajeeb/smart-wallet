'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import MainLogo from '/public/Smart-wallet.png';
import { LuLayoutDashboard } from "react-icons/lu";
import Link from 'next/link';
import { IoWalletOutline } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { GoGoal } from "react-icons/go";
import { TbMoneybag } from "react-icons/tb";
import { FiUpload } from "react-icons/fi";
import { TbCalendarDollar } from "react-icons/tb";
import { Knob } from 'primereact/knob';

const DesktopSidebar = () => {
  const [value, setValue] = useState<number>(10);

  return (
    <div className='px-7 py-8 bg-white dark:bg-dark-400 fixed left-0 top-0 bottom-0 w-[300px] 2xl:w-[350px] hidden xl:block shadow-md'>
      <div>
        <Image className='w-[180px] mx-auto' src={MainLogo} width={300} height={100} alt='Smart Wallet' />
        <div className='pt-8 border-b border-slate-200 dark:border-dark-100'></div>
      </div>

      <div className='h-screen overflow-y-scroll overflow-style-none pb-[139px] pt-4'>
        <div className='grid gap-2'>
          <Link href='/dashboard' className='flex items-center gap-3 bg-gray-100 dark:bg-dark-100 font-semibold text-gray-600 dark:text-white py-3 px-4 rounded-2xl'>
            <span className='bg-primary-300 p-2 rounded-xl text-white'><LuLayoutDashboard size={18} /></span>
            <p>Dashboard</p>
          </Link>

          <Link href='/balance' className='flex items-center gap-3 py-3 px-4 rounded-2xl'>
            <span className='bg-white dark:bg-dark-100 p-2 rounded-xl text-gray-600 dark:text-white primary-shadow dark:shadow-none'><IoWalletOutline size={18} /></span>
            <p>Balance</p>
          </Link>

          <Link href='#' className='flex items-center gap-3 py-3 px-4 rounded-2xl'>
            <span className='bg-white dark:bg-dark-100 p-2 rounded-xl text-gray-600 dark:text-white primary-shadow dark:shadow-none'><TbMoneybag size={18} /></span>
            <p>Deposit</p>
          </Link>

          <Link href='#' className='flex items-center gap-3 py-3 px-4 rounded-2xl'>
            <span className='bg-white dark:bg-dark-100 p-2 rounded-xl text-gray-600 dark:text-white primary-shadow dark:shadow-none'><FiUpload size={18} /></span>
            <p>Expense</p>
          </Link>

          <Link href='#' className='flex items-center gap-3 py-3 px-4 rounded-2xl'>
            <span className='bg-white dark:bg-dark-100 p-2 rounded-xl text-gray-600 dark:text-white primary-shadow dark:shadow-none'><GrTransaction size={18} /></span>
            <p>Transactions</p>
          </Link>

          <Link href='#' className='flex items-center gap-3 py-3 px-4 rounded-2xl'>
            <span className='bg-white dark:bg-dark-100 p-2 rounded-xl text-gray-600 dark:text-white primary-shadow dark:shadow-none'><TbCalendarDollar size={18} /></span>
            <p>Bills</p>
          </Link>

          <Link href='#' className='flex items-center gap-3 py-3 px-4 rounded-2xl'>
            <span className='bg-white dark:bg-dark-100 p-2 rounded-xl text-gray-600 dark:text-white primary-shadow dark:shadow-none'><TbBrandGoogleAnalytics size={18} /></span>
            <p>Analytics</p>
          </Link>

          <Link href='#' className='flex items-center gap-3 py-3 px-4 rounded-2xl'>
            <span className='bg-white dark:bg-dark-100 p-2 rounded-xl text-gray-600 dark:text-white primary-shadow dark:shadow-none'><GoGoal size={18} /></span>
            <p>Golas</p>
          </Link>
        </div>

        <div className='p-4 bg-primary-200 rounded-2xl mt-10 bg-cover bg-no-repeat bg-right' style={{backgroundImage: `url(/bg-images/bg.png)`,}}>
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
    </div>
  );
};

export default DesktopSidebar;