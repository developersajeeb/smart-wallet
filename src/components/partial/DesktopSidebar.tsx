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

const DesktopSidebar = () => {

  return (
    <div className='px-7 py-8 bg-primary-50 fixed left-0 top-0 bottom-0 w-[350px]'>
      <div className='mb-8'>
        <Image className='w-[180px] mx-auto' src={MainLogo} width={300} height={100} alt='Smart Wallet' />
      </div>

      <div className='grid gap-2'>
        <Link href='#' className='flex items-center gap-3 bg-white font-semibold text-gray-600 primary-shadow py-3 px-4 rounded-2xl'>
          <span className='bg-primary-300 p-2 rounded-xl text-white'><LuLayoutDashboard size={18} /></span>
          <p>Dashboard</p>
        </Link>

        <Link href='#' className='flex items-center gap-3 py-3 px-4 rounded-2xl'>
          <span className='bg-white p-2 rounded-xl text-primary-300 primary-shadow'><IoWalletOutline size={18} /></span>
          <p>Balance</p>
        </Link>

        <Link href='#' className='flex items-center gap-3 py-3 px-4 rounded-2xl'>
          <span className='bg-white p-2 rounded-xl text-primary-300 primary-shadow'><TbMoneybag size={18} /></span>
          <p>Deposit</p>
        </Link>

        <Link href='#' className='flex items-center gap-3 py-3 px-4 rounded-2xl'>
          <span className='bg-white p-2 rounded-xl text-primary-300 primary-shadow'><FiUpload size={18} /></span>
          <p>Expense</p>
        </Link>

        <Link href='#' className='flex items-center gap-3 py-3 px-4 rounded-2xl'>
          <span className='bg-white p-2 rounded-xl text-primary-300 primary-shadow'><GrTransaction size={18} /></span>
          <p>Transactions</p>
        </Link>

        <Link href='#' className='flex items-center gap-3 py-3 px-4 rounded-2xl'>
          <span className='bg-white p-2 rounded-xl text-primary-300 primary-shadow'><TbCalendarDollar size={18} /></span>
          <p>Bills</p>
        </Link>

        <Link href='#' className='flex items-center gap-3 py-3 px-4 rounded-2xl'>
          <span className='bg-white p-2 rounded-xl text-primary-300 primary-shadow'><TbBrandGoogleAnalytics size={18} /></span>
          <p>Analytics</p>
        </Link>

        <Link href='#' className='flex items-center gap-3 py-3 px-4 rounded-2xl'>
          <span className='bg-white p-2 rounded-xl text-primary-300 primary-shadow'><GoGoal size={18} /></span>
          <p>Golas</p>
        </Link>
      </div>
    </div>
  );
};

export default DesktopSidebar;