import React, { useState } from 'react';
import { GoGoal } from 'react-icons/go';
import { FiEdit3 } from "react-icons/fi";
import { Dialog } from 'primereact/dialog';
import { InputNumber } from 'primereact/inputnumber';
import { GoTrophy } from "react-icons/go";
import { LuCalendarPlus } from "react-icons/lu";
import {
    GaugeContainer,
    GaugeValueArc,
    GaugeReferenceArc,
    useGaugeState,
} from '@mui/x-charts/Gauge';
import { Button } from 'primereact/button';

function GaugePointer() {
    const { valueAngle, outerRadius, cx, cy } = useGaugeState();

    if (valueAngle === null) {
        return null;
    }
    const target = {
        x: cx + outerRadius * Math.sin(valueAngle),
        y: cy - outerRadius * Math.cos(valueAngle),
    };
    return (
        <g>
            <circle cx={cx} cy={cy} r={8} fill="#5305E6" />
            <path
                d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
                stroke="#5305E6"
                strokeWidth={3}
            />
        </g>
    );
}

const Goles = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [targetValue, setTargetValue] = useState<number>(0);
    const [nowValue, setNowValue] = useState<number>(0);

    return (
        <>
            <div className='bg-white dark:bg-dark-400 primary-shadow dark:shadow-sm p-5 rounded-xl'>
                <div className='flex items-center gap-2'>
                    <span className='text-primary-300'><GoGoal size={26} /></span>
                    <h4 className='text-gray-800 dark:text-white font-medium text-xl'>Goals</h4>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-2 sm:flex items-center justify-between mt-4'>
                    <div className='flex items-center gap-2'>
                        <h3 className='text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-white word-break'>$21000</h3>
                        <div onClick={() => setVisible(true)} className='text-gray-800 dark:text-white bg-gray-200 dark:bg-dark-50 inline-block p-[6px] rounded-md cursor-pointer text-base lg:text-xl'><FiEdit3 /></div>
                    </div>
                    <h4 className='text-base lg:text-lg font-medium text-gray-800 dark:text-white text-end'>May, 2024</h4>
                </div>
                <p className='text-xs mt-[2px] font-light text-gray-400'>Total goals amount</p>

                <div className='grid sm:grid-cols-2 mt-6 items-start'>
                    <div className='grid gap-3 lg:gap-5 grid-cols-2 sm:grid-cols-1'>
                        <div>
                            <div className='flex items-start gap-2'>
                                <span className='text-gray-600 dark:text-gray-400'><GoTrophy size={18} /></span>
                                <p className='text-sm text-gray-400 -mt-[2px]'>Target Achieved</p>
                            </div>
                            <h4 className='mt-1 text-xl font-semibold text-gray-800 dark:text-white word-break'>$12,500</h4>
                        </div>

                        <div>
                            <div className='flex items-start gap-2'>
                                <span className='text-gray-600 dark:text-gray-400'><LuCalendarPlus size={18} /></span>
                                <p className='text-sm text-gray-400 -mt-[2px]'>This month Target</p>
                            </div>
                            <h4 className='mt-1 text-xl font-semibold text-gray-800 dark:text-white word-break'>$20,500</h4>
                        </div>
                    </div>

                    <div className='mt-5 sm:mt-0'>
                        <GaugeContainer
                            // width={100}
                            height={95}
                            startAngle={-90}
                            endAngle={90}
                            value={10}
                            cornerRadius="50%"
                            className='target-pie-custom-class max-w-[170px] lg:max-w-auto mx-auto sm:mx-0 sm:ml-auto'
                        >
                            <GaugeReferenceArc />
                            <GaugeValueArc />
                            <GaugePointer />
                        </GaugeContainer>
                        <h3 className='text-lg text-center font-semibold text-gray-400 max-w-[170px] lg:max-w-auto mx-auto sm:mx-0 sm:ml-auto'>12K</h3>
                    </div>
                </div>
            </div>
            <Dialog header="Edit Goals Amounts" className='sw-dialog-box' visible={visible} onHide={() => setVisible(false)}>
                <div>
                    <label className='block font-medium text-gray-600 dark:text-white mb-2 text-base' htmlFor='target'>Target Amounts</label>
                    <InputNumber className='sw-input w-full' inputId="target" value={targetValue} onValueChange={(e) => setTargetValue(e.value ?? 0)} />
                </div>
                <div className='mt-5'>
                    <label className='block font-medium text-gray-600 dark:text-white mb-2 text-base' htmlFor='target'>Present Amounts</label>
                    <InputNumber className='sw-input w-full' inputId="target" value={nowValue} onValueChange={(e) => setNowValue(e.value ?? 0)} />
                </div>
                <div className='text-center mt-5'>
                    <Button className='sw-button' label="Submit" />
                </div>
            </Dialog>
        </>
    );
};

export default Goles;