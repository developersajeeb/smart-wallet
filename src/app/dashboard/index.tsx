'use client';
import DesktopSidebar from '@/components/partial/DesktopSidebar';
import TopHeader from '@/components/partial/TopHeader';
import React, { useState } from 'react';
import UpcomingBills from './upcomming-bills/UpcomingBills';

const Dashboard = () => {

  return (
    <div>
      <aside>
        <DesktopSidebar />
      </aside>

      <section className='lg:pl-[300px] 2xl:pl-[350px]'>
        <TopHeader />
        <div className='grid grid-cols-3'>
          <UpcomingBills />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;