"use client"
import Navbar from '@/components/navbar/Navbar';
import React, { useEffect, useState } from 'react';

import { LayoutGrid, LibraryBig, NotepadText, Video, NotebookPen, School, BookOpenCheck } from 'lucide-react';
import Sidebar, { SidebarItem } from '@/components/Sidebar';
import { ThemeContext } from '@/context/Theme';
import { usePathname } from 'next/navigation';

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [isDark, setIsDark] = useState<Boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<Boolean>(true);
  const pathname = usePathname();
  return (
    <main className='h-screen flex flex-col'>
      <ThemeContext.Provider value={{isDark, setIsDark, isSidebarOpen, setIsSidebarOpen}}>
      <Navbar />
      <div className='flex-1 flex'>
        <Sidebar>
          <SidebarItem
            icon={<LayoutGrid size={40} color='white' />}
            text='Dashboard'
            active={pathname == "/"}
            navigate='/'
          />
          <SidebarItem
            icon={<LibraryBig size={40} color='white' />}
            text='Books'
            active={pathname == "/books"}
            navigate='/books'
          />
          <SidebarItem
            icon={<NotepadText size={40} color='white' />}
            text='Lecture Notes'
            active={pathname == "/notes"}
            navigate='/notes'
          />
          <SidebarItem
            icon={<Video size={40} color='white' />}
            text='Lecture Records'
            active={pathname == "/records"}
            navigate='/records'
          />
          <SidebarItem
            icon={<NotebookPen size={40} color='white' />}
            text='Homeworks'
            active={pathname == "/homeworks"}
            navigate='/homeworks'
          />
          <SidebarItem
            icon={<School size={40} color='white' />}
            text='Past Exams'
            active={pathname == "/past-exams"}
            navigate='/past-exams'
          />
          <SidebarItem
            icon={<BookOpenCheck size={40} color='white' />}
            text='Exam Result'
            active={pathname == "/exam-results"}
            navigate='/exam-results'
          />
        </Sidebar>
        <main className={`flex-1 p-4 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-16"}`}>
          {children}
        </main>
      </div>

      </ThemeContext.Provider>
    </main>
  )
}