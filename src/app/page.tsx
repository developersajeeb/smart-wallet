'use client';
import React from 'react';
import MainAppLayout from '../components/partial/MainAppLayout';
import DesktopSidebar from '@/components/partial/DesktopSidebar';
import TopHeader from '@/components/partial/TopHeader';

interface Props {
  children: React.ReactNode;
}

const page = ({ children }: Props) => {

  return (
    <>
      <aside>
        <DesktopSidebar />
      </aside>
      <section className='xl:pl-[300px] 2xl:pl-[350px]'>
        <TopHeader />
        {children}
      </section>
    </>
  );
};

export default page;