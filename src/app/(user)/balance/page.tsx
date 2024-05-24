'use state';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
// import MasterCardLogo from 'images/logos/mastercard_logo.svg?url';

const Balance = () => {
    return (
        <section className='px-4 pb-4 md:px-7 md:pb-7 grid grid-cols-3 gap-5'>
            <div>
                <div className='flex items-center justify-between'>
                    <h4 className='text-gray-800 font-medium text-lg'>BRAC Bank</h4>
                    <Link href='#' className='text-sm font-medium flex items-center text-primary-300 cursor-pointer'>
                        <span>View Details</span>
                        <span><IoIosArrowForward /></span>
                    </Link>
                </div>

                <div className='bg-secondary-300 p-6'>
                    <div className='flex justify-between'>
                        <div>
                            <h5>Current Balance</h5>
                            <h2>$5750.20</h2>
                        </div>
                        <div>
                            {/* <Image className='w-[45]' src={MasterCardLogo} width={50} height={50} alt='Master Card' /> */}
                            {/* <MasterCardLogo /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Balance;