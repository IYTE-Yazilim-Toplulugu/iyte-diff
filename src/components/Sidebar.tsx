import { ThemeContext } from '@/context/Theme';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react'

export default function Sidebar({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const { isSidebarOpen } = useContext(ThemeContext);
    return (
        <aside className={`fixed top-16 transition-all duration-300
        h-full bg-black border-r shadow-sm ${isSidebarOpen ? "w-64" : "w-16"}`}>
            <nav className='h-full flex flex-col '>
                <ul>
                    {children}
                </ul>
                {/* <div className='relative'>
                    <div className='absolute w-full h-full'>

                    </div>
                </div> */}
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
            relative flex items-center py-2 px-3 my-1 
            font-medium rounded-md cursor-pointer 
            transition-all duration-300
            ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 translate-x-4" : "hover:bg-indigo-50 text-gray-300"}
        `}>
            {icon}
            <span className={`w-52 ml-4 ${ isSidebarOpen ? "block" : "hidden"}`}>{text}</span>
        </Link>
    )
}