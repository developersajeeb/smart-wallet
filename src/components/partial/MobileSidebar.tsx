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
import { usePathname } from 'next/navigation';

interface Props {
    visibleLeft: boolean;
    setVisibleLeft: (visible: boolean) => void;
}

const MobileSidebar = ({ visibleLeft, setVisibleLeft }: Props) => {
    const [value, setValue] = useState<number>(10);
    const pathname = usePathname();


    return (
        <Sidebar className='!bg-white dark:!bg-dark-400 mobile-sidebar' visible={visibleLeft} position="left" onHide={() => setVisibleLeft(false)}>
            <div className="flex items-center gap-2 justify-between py-4 border-b border-slate-200 dark:border-dark-100">
                <Image className='max-w-[160px]' src={MainLogo} width={300} height={100} alt='Smart Wallet' />
                <span className='border border-gray-400 p-1 dark:text-gray-400 rounded-full' onClick={() => setVisibleLeft(false)}><RxCross2 size={20} /></span>
            </div>
            <div className='h-screen overflow-y-scroll overflow-style-none pb-[100px] pt-4'>
                <div className='grid gap-1'>
                    <Link href='/dashboard' className={` ${pathname === '/dashboard' ? 'mobile-active' : 'mobile-not-active' }`}>
                        <span className='mobile-inner-active mobile-inner-not-active'><LuLayoutDashboard size={18} /></span>
                        <p>Dashboard</p>
                    </Link>

                    <Link href='/balance' className={` ${pathname === '/balance' ? 'mobile-active' : 'mobile-not-active' }`}>
                        <span className='mobile-inner-active mobile-inner-not-active'><IoWalletOutline size={18} /></span>
                        <p>Balance</p>
                    </Link>

                    <Link href='/deposit' className={` ${pathname === '/deposit' ? 'mobile-active' : 'mobile-not-active' }`}>
                        <span className='mobile-inner-active mobile-inner-not-active'><TbMoneybag size={18} /></span>
                        <p>Deposit</p>
                    </Link>

                    <Link href='/expense' className={` ${pathname === '/expense' ? 'mobile-active' : 'mobile-not-active' }`}>
                        <span className='mobile-inner-active mobile-inner-not-active'><FiUpload size={18} /></span>
                        <p>Expense</p>
                    </Link>

                    <Link href='/transactions' className={` ${pathname === '/transactions' ? 'mobile-active' : 'mobile-not-active' }`}>
                        <span className='mobile-inner-active mobile-inner-not-active'><GrTransaction size={18} /></span>
                        <p>Transactions</p>
                    </Link>

                    <Link href='/bills' className={` ${pathname === '/bills' ? 'mobile-active' : 'mobile-not-active' }`}>
                        <span className='mobile-inner-active mobile-inner-not-active'><TbCalendarDollar size={18} /></span>
                        <p>Bills</p>
                    </Link>

                    <Link href='/analytics' className={` ${pathname === '/analytics' ? 'mobile-active' : 'mobile-not-active' }`}>
                        <span className='mobile-inner-active mobile-inner-not-active'><TbBrandGoogleAnalytics size={18} /></span>
                        <p>Analytics</p>
                    </Link>

                    <Link href='/golas' className={` ${pathname === '/golas' ? 'mobile-active' : 'mobile-not-active' }`}>
                        <span className='mobile-inner-active mobile-inner-not-active'><GoGoal size={18} /></span>
                        <p>Golas</p>
                    </Link>
                </div>
            </div>
        </Sidebar>
    );
};

export default MobileSidebar;