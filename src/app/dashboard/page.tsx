'use client';
import DesktopSidebar from '@/components/partial/DesktopSidebar';
import TopHeader from '@/components/partial/TopHeader';
import React, { useState } from 'react';
import UpcomingBills from './upcomming-bills/UpcomingBills';
import Goles from './goles/Goles';
import TotalBalance from './total-balance/TotalBalance';
import RecentTransactions from './recent-transactions/RecentTransactions';
import MonthlyAnalytics from './monthly-analytics/MonthlyAnalytics';

const Dashboard = () => {

  return (
    <div className='grid lg:grid-cols-3 px-4 pb-4 md:px-7 md:pb-7 gap-6'>
      <TotalBalance />
      <Goles />
      <UpcomingBills />
      <div className="lg:col-span-3">
        <div className='grid lg:grid-cols-5 gap-6'>
          <div className='lg:col-span-2 bg-white dark:bg-dark-400 primary-shadow dark:shadow-sm p-5 rounded-xl'>
            <RecentTransactions />
          </div>

          <div className='lg:col-span-3 bg-white dark:bg-dark-400 primary-shadow dark:shadow-sm rounded-xl pt-5 pl-5'>
            <MonthlyAnalytics />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;