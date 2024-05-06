import React, { useState } from 'react';
import { GoGoal } from 'react-icons/go';
import { FiEdit3 } from "react-icons/fi";
import { Dialog } from 'primereact/dialog';
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';

const UpcomingBills = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [targetValue, setTargetValue] = useState<number>(0);
    const [nowValue, setNowValue] = useState<number>(0);

    return (
        <>
            <div className='bg-white dark:bg-dark-100 primary-shadow dark:shadow-sm p-5 rounded-xl'>
                <div className='flex items-center gap-2'>
                    <span className='text-primary-300'><GoGoal size={26} /></span>
                    <h4 className='text-gray-800 dark:text-white font-medium text-xl'>Goals</h4>
                </div>

                <div className='flex items-center justify-between mt-4'>
                    <div className='flex items-center gap-2'>
                        <h3 className='text-3xl font-semibold text-gray-800 dark:text-white'>$21000</h3>
                        <div onClick={() => setVisible(true)} className='text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 inline-block p-[6px] rounded-md cursor-pointer'><FiEdit3 size={20} /></div>
                    </div>
                    <h4 className='text-lg font-medium text-gray-800 dark:text-white'>May, 2024</h4>
                </div>
                <p className='text-xs mt-[2px] font-light text-gray-400'>Total goals amount</p>
            </div>
            <Dialog header="Header" className='sw-dialog-box' visible={visible} onHide={() => setVisible(false)}>
                <div>
                    <label className='block font-medium text-gray-600 dark:text-white mb-2 text-base' htmlFor='target'>Target Amounts</label>
                    <InputNumber className='w-full dark:!bg-dark-50 dark:border-gray-700 dark:text-gray-300' inputId="target" value={targetValue} onValueChange={(e) => setTargetValue(e.value ?? 0)} />
                </div>
                <div className='mt-5'>
                    <label className='block font-medium text-gray-600 dark:text-white mb-2 text-base' htmlFor='target'>Present Amounts</label>
                    <InputNumber className='w-full dark:!bg-dark-50 dark:border-gray-700 dark:text-gray-300' inputId="target" value={nowValue} onValueChange={(e) => setNowValue(e.value ?? 0)} />
                </div>
            </Dialog>
        </>
    );
};

export default UpcomingBills;