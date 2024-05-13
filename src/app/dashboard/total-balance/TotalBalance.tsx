import React from 'react';
import { LuWallet2 } from "react-icons/lu";
import { MdAdd } from "react-icons/md";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

const TotalBalance = () => {
    return (
        <div className='bg-white dark:bg-dark-400 primary-shadow dark:shadow-sm p-5 rounded-xl'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <span className='text-primary-300'><LuWallet2 size={24} /></span>
                    <h4 className='text-gray-800 dark:text-white font-medium text-xl'>Total Balance</h4>
                </div>
                <span title='Add balance' className='bg-primary-300 hover:bg-primary-400 duration-300 p-2 rounded-full cursor-pointer text-white'><MdAdd size={20} /></span>
            </div>

            <div>
                <h3 className='mt-5 text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-white word-break'>$30000</h3>
                <p className='text-xs mt-[2px] font-light text-gray-400'>All account balance</p>

                <Stack direction="row" sx={{ width: '100%' }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <SparkLineChart
                            plotType="bar"
                            data={[1, 4, 2, 5, 7, 2, 4, 6]}
                            height={100}
                            showTooltip
                            showHighlight
                            xAxis={{
                                scaleType: 'band',
                                data: [
                                    new Date(2016, 0, 1),
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
            </div>
        </div>
    );
};

export default TotalBalance;