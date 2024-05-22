'use client';
import React, { useRef, useState } from 'react';
import { InputText } from "primereact/inputtext";
import { FiSearch } from "react-icons/fi";
import { RiNotification4Line } from "react-icons/ri";
import ThemeSwitch from './ThemeSwitch';
import Image from 'next/image';
import userPhoto from '/public/temp-user.jpg';
import MobileSidebar from './MobileSidebar';
import { CgMenuLeft } from "react-icons/cg";
import { OverlayPanel } from 'primereact/overlaypanel';
import { FiSettings } from "react-icons/fi";
import { RxExit } from "react-icons/rx";

const TopHeader = () => {
    const [value, setValue] = useState<string>('');
    const [visibleLeft, setVisibleLeft] = useState<boolean>(false);
    const profileToggle = useRef<OverlayPanel | null>(null);

    return (
        <>
            <header className='md:pr-6 xl:pr-8 md:pl-6 px-4 py-5 flex justify-between items-center'>
                <section className='flex gap-3 items-center'>
                    <div className='xl:hidden'>
                        <CgMenuLeft className='cursor-pointer' onClick={() => setVisibleLeft(true)} size={25} />
                    </div>
                    <h1 className='text-xl sm:text-2xl font-semibold text-gray-700 dark:text-white'>Dashboard</h1>
                </section>

                <section className='flex items-center gap-6'>
                    <div className='relative max-w-[330px] w-[330px] hidden md:block'>
                        <InputText className='header-search-input dark:!bg-dark-400 dark:border-dark-50 dark:text-gray-300' value={value} placeholder='Search...' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
                        <span className='absolute cursor-pointer hover:bg-primary-300 p-[9px] rounded-full right-[1px] top-[0.7px] text-gray-500 dark:text-gray-300 hover:text-white duration-300'><FiSearch size={20} /></span>
                    </div>

                    <div>
                        <ul className='flex items-center gap-2 sm:gap-4'>
                            <li className='hidden lg:block'>
                                <button className='bg-primary-300 hover:bg-primary-400 duration-300 px-4 py-[10px] rounded-xl font-medium text-white text-sm'>+ Add Expense</button>
                            </li>
                            <li className='hidden lg:block'>
                                <button className='bg-primary-300 hover:bg-primary-400 duration-300 h-10 w-10 flex justify-center items-center rounded-full text-white'><RiNotification4Line size={20} /></button>
                            </li>
                            <li>
                                <button className='bg-primary-300 hover:bg-primary-400 duration-300 w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center rounded-full text-white'><ThemeSwitch /></button>
                            </li>
                            <li>
                                <Image
                                    onClick={(e) => profileToggle.current && profileToggle.current.toggle(e)}
                                    className='w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover object-center border p-[2px] border-secondary-200 cursor-pointer' src={userPhoto} width={100} height={100} alt='User Photo' />
                                <OverlayPanel ref={profileToggle} className='!bg-white dark:!bg-dark-400'>
                                    <ul>
                                        <li className='block lg:hidden mb-4 dark:text-white'>
                                            <span title='Notification' className='cursor-pointer'><RiNotification4Line size={20} /></span>
                                        </li>
                                        <li className='dark:text-white'>
                                            <span title='Profile Settings' className='cursor-pointer'><FiSettings size={20} /></span>
                                        </li>
                                        <li className='mt-4 dark:text-white'>
                                            <span title='Log out' className='cursor-pointer'><RxExit size={20} /></span>
                                        </li>
                                    </ul>
                                </OverlayPanel>
                            </li>
                        </ul>
                    </div>
                </section>
            </header>

            <MobileSidebar visibleLeft={visibleLeft} setVisibleLeft={setVisibleLeft} />
        </>
    );
};

export default TopHeader;