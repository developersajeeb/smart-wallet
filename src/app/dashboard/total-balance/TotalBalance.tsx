import React, { useState } from 'react';
import { LuWallet2 } from "react-icons/lu";
import { MdAdd } from "react-icons/md";
import { Dialog } from 'primereact/dialog';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";
import Link from 'next/link';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';

interface Account {
    name: string;
}

interface Tags {
    tag: string;
}

const TotalBalance = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [accountType, setAccountType] = useState<Account | null>(null);
    const [transactionTitle, setTransactionTitle] = useState<string>('');
    const [amount, setAmount] = useState<number>();
    const [dateTime, setDateTime] = useState<Nullable<Date>>(new Date());
    const [selectTags, setSelectTags] = useState<Tags | null>(null);
    const account: Account[] = [
        { name: 'Card' },
        { name: 'Bank Account' },
    ];

    const tags: Tags[] = [
        { tag: 'New York' },
        { tag: 'Rome' },
        { tag: 'London' },
        { tag: 'Istanbul' },
        { tag: 'Paris' }
    ];

    return (
        <div className='bg-white dark:bg-dark-400 primary-shadow dark:shadow-sm p-5 rounded-xl'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <span className='text-primary-300'><LuWallet2 size={24} /></span>
                    <h4 className='text-gray-800 dark:text-white font-medium text-xl'>Total Balance</h4>
                </div>
                <span onClick={() => setVisible(true)} title='Add balance' className='bg-primary-300 hover:bg-primary-400 duration-300 p-2 rounded-full cursor-pointer text-white'>
                    <MdAdd size={20} />
                </span>
            </div>

            <div>
                <div className='flex justify-between items-end'>
                    <div>
                        <p className='mt-3 text-xs font-light text-gray-400'>All account balance</p>
                        <h3 className='text-2xl mt-[2px] lg:text-3xl font-semibold text-gray-800 dark:text-white word-break'>$30000</h3>
                    </div>
                    <div className='text-end'>
                        <Link href='/balance' className='text-primary-300 font-medium cursor-pointer leading-none text-sm'>View All</Link>
                    </div>
                </div>

                <div className='mt-3 grid gap-2'>
                    <div className='flex justify-between px-3 py-2 bg-gradient-to-r from-secondary-300 to-blue-500 rounded-lg'>
                        <div>
                            <h5 className='text-xs text-white'>Account Balance</h5>
                            <p className='text-white font-semibold'>$1300</p>
                        </div>
                        <div className='text-end text-white'>
                            <p className='text-xs'>DBBL Bank</p>
                            <span className='text-[18px] leading-none'>...</span>
                        </div>
                    </div>
                    <div className='flex justify-between px-3 py-2 bg-gradient-to-r from-primary-300 to-lime-500 rounded-lg'>
                        <div>
                            <h5 className='text-xs text-white'>Account Balance</h5>
                            <p className='text-white font-semibold'>$1300</p>
                        </div>
                        <div className='text-end text-white'>
                            <p className='text-xs'>DBBL Bank</p>
                            <span className='text-[18px] leading-none'>...</span>
                        </div>
                    </div>
                </div>

            </div>
            <Dialog header="Deposit" className='sw-dialog-box' visible={visible} onHide={() => setVisible(false)}>
                <div className='grid sm:grid-cols-2 gap-5'>
                    <div>
                        <label className='block font-medium text-gray-600 dark:text-white mb-2 text-base'>To Account</label>
                        <Dropdown value={accountType} onChange={(e: DropdownChangeEvent) => setAccountType(e.value)} options={account} optionLabel="name"
                            editable placeholder="Select a account" className="w-full" />
                    </div>
                    <div>
                        <label className='block font-medium text-gray-600 dark:text-white mb-2 text-base'>Transaction Title</label>
                        <InputText className='w-full sw-input' value={transactionTitle} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTransactionTitle(e.target.value)} />
                    </div>
                    <div>
                        <label className='block font-medium text-gray-600 dark:text-white mb-2 text-base'>Amounts</label>
                        <InputNumber className='sw-input w-full' inputId="target" value={amount} onValueChange={(e) => setAmount(e.value ?? 0)} />
                    </div>
                    <div>
                        <label className='block font-medium text-gray-600 dark:text-white text-base mb-2'>Date & Time</label>
                        <Calendar className='w-full' value={dateTime} onChange={(e) => setDateTime(e.value as Nullable<Date>)} showTime hourFormat="24" />
                    </div>
                    <div className='sm:col-span-2'>
                        <label className='block font-medium text-gray-600 dark:text-white text-base mb-2'>Tags</label>
                        <MultiSelect value={selectTags} onChange={(e: MultiSelectChangeEvent) => setSelectTags(e.value)} options={tags} optionLabel="tag"
                            filter placeholder="Tags" maxSelectedLabels={5} display="chip" className="w-full" />
                    </div>
                    <div className='text-center mt-5 sm:col-span-2'>
                        <Button className='sw-button' label="Submit" />
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default TotalBalance;