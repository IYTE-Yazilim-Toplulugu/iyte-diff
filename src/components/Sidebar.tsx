import { ThemeContext } from '@/context/Theme';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import Iyte from "@/images/iyte_logo-eng.png"

export default function Sidebar({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const { isSidebarOpen } = useContext(ThemeContext);
    return (
        <aside className={`fixed top-16 transition-all duration-300
        h-full bg-black shadow-sm ${isSidebarOpen ? "w-72" : "w-16"}`}>
            <nav className='h-full flex flex-col justify-between'>
                <ul className='relative z-0'>
                    {children}
                </ul>
                <div className='bg-indigo-50 w-full flex gap-2 mb-16 relative z-10'>
                    <div className='w-16 h-16'>
                        <Image src={Iyte} alt='IYTE' />
                    </div>
                    <div className={`flex flex-col items-start justify-around text-xs text-black ${isSidebarOpen ? "block" : "hidden"}`}>
                        <div>
                            <p className='text-sm font-bold'>Izmir Institute of Technology</p>
                            <p className='font-bold'>Differential Equations Portal</p>
                        </div>
                        <p className=''>developed by <a href='https://www.iyteyazilim.online/' className='text-orange-700 font-semibold' target='_blank'>Software Society</a> @2024</p>
                    </div>
                </div>
            </nav>
        </aside>
    )
}

export const SidebarItem = ({ icon, text, active, navigate } : { icon: JSX.Element, text: string, active: boolean, navigate: string }) => {
    const { isSidebarOpen } = useContext(ThemeContext);

    return (
        <Link
        href={navigate}
        className={`
            group
            hover:translate-x-4
            relative flex items-center py-2 px-3 my-1 mx-1 
            font-medium rounded-md cursor-pointer 
            transition-all duration-300
            ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 translate-x-4" : "hover:bg-indigo-50 text-gray-300"}
        `}>
            {icon}
            <span className={`w-52 ml-4 ${!active ? "group-hover:invert" : ""} ${ isSidebarOpen ? "block" : "hidden"}`}>{text}</span>
        </Link>
    )
}