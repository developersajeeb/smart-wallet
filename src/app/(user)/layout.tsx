import DesktopSidebar from "@/components/partial/DesktopSidebar";
import TopHeader from "@/components/partial/TopHeader";

interface Props {
    children: React.ReactNode;
}

export default function MainUserLayout({ children }: Props) {
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
}
