import React, { useState } from 'react';
import { LuWallet2 } from "react-icons/lu";
import { MdAdd } from "react-icons/md";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { Dialog } from 'primereact/dialog';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';

interface Account {
    name: string;
}

const TotalBalance = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [accountType, setAccountType] = useState<Account | null>(null);
    const [transactionTitle, setTransactionTitle] = useState<string>('');
    const account: Account[] = [
        { name: 'Card' },
        { name: 'Bank Account' },
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
                <p className='mt-5 text-xs font-light text-gray-400'>All account balance</p>
                <h3 className='text-2xl mt-[2px] lg:text-3xl font-semibold text-gray-800 dark:text-white word-break'>$30000</h3>

                <Stack className='total-chart-card' direction="row" sx={{ width: '100%' }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <SparkLineChart
                            plotType="bar"
                            data={[4, 2, 5, 7, 2, 4, 10]}
                            height={100}
                            showTooltip
                            showHighlight
                            xAxis={{
                                scaleType: 'band',
                                data: [
                                    new Date(2017, 0, 1),
                                    new Date(2018, 0, 1),
                                    new Date(2019, 0, 1),
                                    new Date(2020, 0, 1),
                                    new Date(2021, 0, 1),
                                    new Date(2022, 0, 1),
                                    new Date(2023, 0, 1),
                                ],
                                valueFormatter: (value) => value.getFullYear(),
                            }}
                        />
                    </Box>
                </Stack>
                <p className='mt-1 text-sm text-end font-light text-gray-400'>Weekly analytics</p>
            </div>
            <Dialog header="Deposit" className='sw-dialog-box' visible={visible} onHide={() => setVisible(false)}>
                <div>
                    <label className='block font-medium text-gray-600 dark:text-white mb-2 text-base' htmlFor='target'>To Account</label>
                    <Dropdown value={accountType} onChange={(e: DropdownChangeEvent) => setAccountType(e.value)} options={account} optionLabel="name"
                        editable placeholder="Select a City" className="w-full" />
                </div>
                <div className='mt-5'>
                    <label className='block font-medium text-gray-600 dark:text-white mb-2 text-base' htmlFor='target'>Transaction Title</label>
                    <InputText className='w-full sw-input' value={transactionTitle} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTransactionTitle(e.target.value)} />
                </div>
                {/* <div className='mt-5'>
                    <label className='block font-medium text-gray-600 dark:text-white mb-2 text-base' htmlFor='target'>Present Amounts</label>
                    <InputNumber className='sw-input w-full' inputId="target" value={nowValue} onValueChange={(e) => setNowValue(e.value ?? 0)} />
                </div> */}
                <div className='text-center mt-5'>
                    <Button className='sw-button' label="Submit" />
                </div>
            </Dialog>
        </div>
    );
};

export default TotalBalance;