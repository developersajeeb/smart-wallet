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
import { usePathname } from 'next/navigation';

const DesktopSidebar = () => {
  const [value, setValue] = useState<number>(10);
  const pathname = usePathname();

  return (
    <div className='px-7 py-8 bg-white dark:bg-dark-400 fixed left-0 top-0 bottom-0 w-[300px] 2xl:w-[350px] hidden xl:block shadow-md'>
      <div>
        <Image className='w-[180px] mx-auto' src={MainLogo} width={300} height={100} alt='Smart Wallet' />
        <div className='pt-8 border-b border-slate-200 dark:border-dark-100'></div>
      </div>

      <div className='h-screen overflow-y-scroll overflow-style-none pb-[139px] pt-4'>
        <div className='grid gap-2'>
          <Link href='/dashboard' className={`${pathname === '/dashboard' ? 'active' : 'not-active' }`}>
            <span className='inner-active inner-not-active'><LuLayoutDashboard size={18} /></span>
            <p>Dashboard</p>
          </Link>

          <Link href='/balance' className={` ${pathname === '/balance' ? 'active' : 'not-active' }`}>
            <span className='inner-active inner-not-active'><IoWalletOutline size={18} /></span>
            <p>Balance</p>
          </Link>

          <Link href='/deposit' className={` ${pathname === '/deposit' ? 'active' : 'not-active' }`}>
            <span className='inner-active inner-not-active'><TbMoneybag size={18} /></span>
            <p>Deposit</p>
          </Link>

          <Link href='/expense' className={` ${pathname === '/expense' ? 'active' : 'not-active' }`}>
            <span className='inner-active inner-not-active'><FiUpload size={18} /></span>
            <p>Expense</p>
          </Link>

          <Link href='/transactions' className={` ${pathname === '/transactions' ? 'active' : 'not-active' }`}>
            <span className='inner-active inner-not-active'><GrTransaction size={18} /></span>
            <p>Transactions</p>
          </Link>

          <Link href='/bills' className={` ${pathname === '/bills' ? 'active' : 'not-active' }`}>
            <span className='inner-active inner-not-active'><TbCalendarDollar size={18} /></span>
            <p>Bills</p>
          </Link>

          <Link href='/analytics' className={` ${pathname === '/analytics' ? 'active' : 'not-active' }`}>
            <span className='inner-active inner-not-active'><TbBrandGoogleAnalytics size={18} /></span>
            <p>Analytics</p>
          </Link>

          <Link href='/golas' className={` ${pathname === '/golas' ? 'active' : 'not-active' }`}>
            <span className='inner-active inner-not-active'><GoGoal size={18} /></span>
            <p>Golas</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesktopSidebar;