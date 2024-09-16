"use client"
import Navbar from "@/components/navbar/Navbar";
import Sidebar, { SidebarItem } from "@/components/Sidebar";
import { ThemeContext } from "@/context/Theme";
import { LayoutGrid } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const [isDark, setIsDark] = useState<Boolean>(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState<Boolean>(true);
    return (
        <main className="h-screen flex flex-col'">
          <ThemeContext.Provider value={{isDark, setIsDark, isSidebarOpen, setIsSidebarOpen}}>
            <Navbar />
            <div className='flex-1 flex'>
                <Sidebar>
                    <SidebarItem
                      icon={<LayoutGrid size={40} color='white' />}
                      text='Dashboard'
                      active={pathname == "/admin-panel"}
                      navigate='/admin-panel'
                    />
                    <SidebarItem
                      icon={<LayoutGrid size={40} color='white' />}
                      text='Users'
                      active={pathname == "/admin-panel/users"}
                      navigate='/admin-panel/users'
                    />
                    
                    <SidebarItem
                      icon={<LayoutGrid size={40} color='white' />}
                      text='Forum'
                      active={pathname == "/admin-panel/forum"}
                      navigate='/admin-panel/forum'
                    />
                    <SidebarItem
                      icon={<LayoutGrid size={40} color='white' />}
                      text='Chat Room'
                      active={pathname == "/admin-panel/chat"}
                      navigate='/admin-panel/chat'
                    />
                    <SidebarItem
                      icon={<LayoutGrid size={40} color='white' />}
                      text='Books'
                      active={pathname == "/admin-panel/books"}
                      navigate='/admin-panel/books'
                    />
                    <SidebarItem
                      icon={<LayoutGrid size={40} color='white' />}
                      text='Lecture Notes'
                      active={pathname == "/admin-panel/notes"}
                      navigate='/admin-panel/notes'
                    />
                    <SidebarItem
                      icon={<LayoutGrid size={40} color='white' />}
                      text='Lecture Records'
                      active={pathname == "/admin-panel/records"}
                      navigate='/admin-panel/records'
                    />
                    <SidebarItem
                      icon={<LayoutGrid size={40} color='white' />}
                      text='Homeworks'
                      active={pathname == "/admin-panel/homeworks"}
                      navigate='/admin-panel/homeworks'
                    />
                    <SidebarItem
                      icon={<LayoutGrid size={40} color='white' />}
                      text='Past Exams'
                      active={pathname == "/admin-panel/past-exams"}
                      navigate='/admin-panel/past-exams'
                    />
                </Sidebar>
            </div>

            <div className={`flex-1 p-4 transition-all  duration-300 mt-16 ${isSidebarOpen ? "ml-72" : "ml-16"}`}>
              {children}
            </div>
          </ThemeContext.Provider>
        </main>
    )
}