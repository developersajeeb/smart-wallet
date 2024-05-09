'use client';
import DesktopSidebar from '@/components/partial/DesktopSidebar';
import TopHeader from '@/components/partial/TopHeader';
import React, { useState } from 'react';
import UpcomingBills from './upcomming-bills/UpcomingBills';
import Goles from './goles/Goles';

const Dashboard = () => {

  return (
    <div>
      <aside>
        <DesktopSidebar />
      </aside>

      <section className='xl:pl-[300px] 2xl:pl-[350px]'>
        <TopHeader />
        <div className='grid lg:grid-cols-3 px-7 gap-6'>
          <Goles />
          <UpcomingBills />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;