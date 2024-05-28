'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import MasterCardLogo from '/public/images/logos/mastercard_logo.svg';
import VisaLogo from '/public/images/logos/visa_logo.svg';
import AmexLogo from '/public/images/logos/amex.svg';
import CardMicroInfo from '/public/images/icons/card-helper.svg';
import { FiTrash2 } from "react-icons/fi";
import toast from 'react-hot-toast';

const Balance = () => {
    const notify = () => toast('Here is your toast.');

    return (
        <section className='px-4 pb-4 md:px-7 md:pb-7 grid md:grid-cols-3 gap-5'>
            <div className='relative'>
                <h4 className='text-gray-800 dark:text-white font-medium text-lg mb-2 px-2'>BRAC Bank</h4>

                <div className='bg-gradient-to-r  from-secondary-300 to-blue-500 p-6 rounded-3xl min-h-56 grid virtual-card'>
                    <div className='flex justify-between'>
                        <div>
                            <h5 className='text-sm text-white opacity-70 tracking-wider'>Current Balance</h5>
                            <h2 className='text-white text-2xl font-medium mt-2 word-break'>$5750.20</h2>
                        </div>
                        <div>
                            <MasterCardLogo />
                        </div>
                    </div>

                    <div className='grid align-bottom'>
                        {/* <div className='flex flex-col justify-end'>
                            <h5 className='text-sm text-white opacity-70 tracking-wider'>Account Number</h5>
                            <p className='text-white text-base word-break'>********* 896600</p>
                        </div> */}
                        <div className='flex justify-between items-end'>
                            <div className='flex flex-col justify-end'>
                                <h5 className='text-sm text-white opacity-70 tracking-wider'>Card Number</h5>
                                <p className='text-white text-base word-break'>****** 63 297</p>
                            </div>
                            <span><CardMicroInfo /></span>
                        </div>
                    </div>
                </div>

                <div className='text-end'>
                    <Link href='#' className='text-sm mt-2 font-medium inline-flex justify-end items-center text-primary-300 cursor-pointer'>
                        <span>View Details</span>
                        <span><IoIosArrowForward /></span>
                    </Link>
                </div>
            </div>
            <div className='relative'>
                <h4 className='text-gray-800 dark:text-white font-medium text-lg mb-2 px-2'>DBBL Bank</h4>

                <div className='bg-gradient-to-r  from-primary-300 to-lime-500 p-6 rounded-3xl min-h-56 grid virtual-card'>
                    <div className='flex justify-between'>
                        <div>
                            <h5 className='text-sm text-white opacity-70 tracking-wider'>Current Balance</h5>
                            <h2 className='text-white text-2xl font-medium mt-2 word-break'>$5750.20</h2>
                        </div>
                        <div>
                            <VisaLogo />
                        </div>
                    </div>

                    <div className='grid align-bottom'>
                        <div className='flex flex-col justify-end'>
                            <h5 className='text-sm text-white opacity-70 tracking-wider'>Account Number</h5>
                            <p className='text-white text-base word-break'>********* 896600</p>
                        </div>
                        <div className='flex justify-between items-end'>
                            <div className='flex flex-col justify-end'>
                                <h5 className='text-sm text-white opacity-70 tracking-wider'>Card Number</h5>
                                <p className='text-white text-base word-break'>****** 63 297</p>
                            </div>
                            <span><CardMicroInfo /></span>
                        </div>
                    </div>
                </div>

                <div className='text-end'>
                    <Link href='#' className='text-sm mt-2 font-medium inline-flex justify-end items-center text-primary-300 cursor-pointer'>
                        <span>View Details</span>
                        <span><IoIosArrowForward /></span>
                    </Link>
                </div>
            </div>

            <div className='relative'>
                <h4 className='text-gray-800 dark:text-white font-medium text-lg mb-2 px-2'>American Express</h4>

                <div className='bg-gradient-to-r  from-[#5B628B] to-[#203B59] p-6 rounded-3xl min-h-56 grid virtual-card'>
                    <div className='flex justify-between'>
                        <div>
                            <h5 className='text-sm text-white opacity-70 tracking-wider'>Current Balance</h5>
                            <h2 className='text-white text-2xl font-medium mt-2 word-break'>$5750.20</h2>
                        </div>
                        <div>
                            <AmexLogo />
                        </div>
                    </div>

                    <div className='grid align-bottom'>
                        <div className='flex flex-col justify-end'>
                            <h5 className='text-sm text-white opacity-70 tracking-wider'>Account Number</h5>
                            <p className='text-white text-base word-break'>********* 896600</p>
                        </div>
                        <div className='flex justify-between items-end'>
                            <div className='flex flex-col justify-end'>
                                <h5 className='text-sm text-white opacity-70 tracking-wider'>Card Number</h5>
                                <p className='text-white text-base word-break'>****** 63 297</p>
                            </div>
                            <span><CardMicroInfo /></span>
                        </div>
                    </div>
                </div>

                <div className='text-end'>
                    <Link href='#' className='text-sm mt-2 font-medium inline-flex justify-end items-center text-primary-300 cursor-pointer'>
                        <span>View Details</span>
                        <span><IoIosArrowForward /></span>
                    </Link>
                </div>
            </div>

            <div className='relative'>
                <h4 className='text-gray-800 dark:text-white font-medium text-lg mb-2 px-2'>American Express</h4>

                <div className='bg-gradient-to-r  from-[#5B628B] to-[#203B59] p-6 rounded-3xl min-h-56 grid virtual-card'>
                    <div className='flex justify-between'>
                        <div>
                            <h5 className='text-sm text-white opacity-70 tracking-wider'>Current Balance</h5>
                            <h2 className='text-white text-2xl font-medium mt-2 word-break'>$5750.20</h2>
                        </div>
                        <div>
                            <AmexLogo />
                        </div>
                    </div>

                    <div className='grid align-bottom'>
                        <div className='flex flex-col justify-end'>
                            <h5 className='text-sm text-white opacity-70 tracking-wider'>Account Number</h5>
                            <p className='text-white text-base word-break'>********* 896600</p>
                        </div>
                        <div className='flex justify-between items-end'>
                            <div className='flex flex-col justify-end'>
                                <h5 className='text-sm text-white opacity-70 tracking-wider'>Card Number</h5>
                                <p className='text-white text-base word-break'>****** 63 297</p>
                            </div>
                            <span><CardMicroInfo /></span>
                        </div>
                    </div>
                </div>

                <div className='text-end'>
                    <Link href='#' className='text-sm mt-2 font-medium inline-flex justify-end items-center text-primary-300 cursor-pointer'>
                        <span>View Details</span>
                        <span><IoIosArrowForward /></span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Balance;