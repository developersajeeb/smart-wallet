'use client';
import DesktopSidebar from '@/components/partial/DesktopSidebar';
import TopHeader from '@/components/partial/TopHeader';
import React from 'react';

const Dashboard = () => {

  return (
    <div>
      <aside>
        <DesktopSidebar />
      </aside>

      <section className='pl-[350px]'>
        <TopHeader />
      </section>
    </div>
  );
};

export default Dashboard;