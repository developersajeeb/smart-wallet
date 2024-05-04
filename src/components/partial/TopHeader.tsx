import React, { useState } from 'react';
import { InputText } from "primereact/inputtext";
import { FiSearch } from "react-icons/fi";
import { RiNotification4Line } from "react-icons/ri";
import ThemeSwitch from './ThemeSwitch';
import Image from 'next/image';
import userPhoto from '/public/temp-user.jpg';

const TopHeader = () => {
    const [value, setValue] = useState<string>('');

    return (
        <header className='pr-8 pl-6 py-5 flex justify-between'>
            <section>
                <h1 className='text-2xl font-semibold text-gray-700 dark:text-white'>Dashboard</h1>
            </section>

            <section className='flex items-center gap-6'>
                <div className='relative max-w-[330px] w-[330px]'>
                    <InputText className='header-search-input dark:!bg-dark-50 dark:border-dark-50 dark:text-white' value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
                    <span className='absolute cursor-pointer hover:bg-primary-300 p-[9px] rounded-full right-[1px] top-[0.7px] text-gray-500 dark:text-white hover:text-white duration-300'><FiSearch size={20} /></span>
                </div>

                <ul className='flex items-center gap-4'>
                    <li>
                        <button className='bg-primary-200 hover:bg-primary-400 duration-300 px-4 py-[10px] rounded-xl font-medium text-white text-sm'>+ Add Expense</button>
                    </li>
                    <li>
                        <button className='bg-primary-200 hover:bg-primary-400 duration-300 h-10 w-10 flex justify-center items-center rounded-full text-white'><RiNotification4Line size={20} /></button>
                    </li>
                    <li>
                        <button className='bg-primary-200 hover:bg-primary-400 duration-300 h-10 w-10 flex justify-center items-center rounded-full text-white'><ThemeSwitch /></button>
                    </li>
                    <li>
                        <Image className='w-10 h-10 rounded-full object-cover object-center border p-[2px] border-secondary-200 cursor-pointer' src={userPhoto} width={100} height={100} alt='User Photo' />
                    </li>
                </ul>
            </section>
        </header>
    );
};

export default TopHeader;