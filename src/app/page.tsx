'use client';
import React from 'react';
import MainAppLayout from '../components/partial/MainAppLayout';
import DesktopSidebar from '@/components/partial/DesktopSidebar';
import TopHeader from '@/components/partial/TopHeader';
import MainUserLayout from './(user)/layout';

interface Props {
  children: React.ReactNode;
}

const page = ({ children }: Props) => {

  return (
    <>
      <MainUserLayout>
        {children}
      </MainUserLayout>
    </>
  );
};

export default page;