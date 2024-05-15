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
    <div>
      <aside>
        <DesktopSidebar />
      </aside>

      <section className='xl:pl-[300px] 2xl:pl-[350px]'>
        <TopHeader />
        <div className='grid lg:grid-cols-3 px-4 pb-4 md:px-7 md:pb-7 gap-6'>
          <TotalBalance />
          <Goles />
          <UpcomingBills />
          <div className="lg:col-span-3">
            <div className='grid lg:grid-cols-4 gap-6'>
              <div className='lg:col-span-2'>
                <RecentTransactions />
              </div>

              <div className='lg:col-span-2'>
                <MonthlyAnalytics />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;