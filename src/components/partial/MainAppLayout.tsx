import React from 'react';
import DesktopSidebar from './DesktopSidebar';
import TopHeader from './TopHeader';
interface Props {
    children: React.ReactNode;
}


const MainAppLayout = ({ children }: Props) => {
    return (
        <>
            <aside>
                <DesktopSidebar />
            </aside>
            <main className='xl:pl-[300px] 2xl:pl-[350px]'>
                <TopHeader />
                <section>
                    {children}
                </section>
            </main>
        </>
    );
};

export default MainAppLayout;