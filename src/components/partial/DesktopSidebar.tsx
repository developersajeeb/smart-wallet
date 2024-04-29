import Image from 'next/image';
import React, { useState } from 'react';
import MailLogo from '/public/Smart-wallet.png';

const DesktopSidebar = () => {

    return (
        <div className=''>
          <Image className='w-[180px]' src={MailLogo} width={300} height={100} alt='Smart Wallet' />  
        </div>
    );
};

export default DesktopSidebar;