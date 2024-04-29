'use client';
import React from 'react';
import DesktopSidebar from '../components/partial/DesktopSidebar';

const page = () => {

  return (
    <div className='grid grid-cols-9'>
      <section className='col-span-2 bg-primary-50'>
        <DesktopSidebar />
      </section>

      <section className='col-span-7'>
        asads
      </section>
    </div>
  );
};

export default page;