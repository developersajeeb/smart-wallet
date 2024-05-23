'use client';
import React from 'react';
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