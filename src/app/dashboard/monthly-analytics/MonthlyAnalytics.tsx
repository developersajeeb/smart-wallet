import { Stack } from '@mui/material';
import { LineChart } from '@mui/x-charts';
import React from 'react';

const MonthlyAnalytics = () => {
    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
    const xLabels = [
        'Sat',
        'Sun',
        'Mon',
        'Tues',
        'Wed',
        'Thurs',
        'Fri',
    ];

    return (
        <div className='bg-white dark:bg-dark-400 primary-shadow dark:shadow-sm rounded-xl pt-5 pl-5'>
            <LineChart
                height={300}
                series={[
                    { data: pData, label: 'pv' },
                    { data: uData, label: 'uv' },
                ]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}
            />
        </div>
    );
};

export default MonthlyAnalytics;