"use client"
import Navbar from '@/components/navbar/Navbar';
import React, { useEffect, useState } from 'react';

import { LayoutGrid, Sigma, MessageCircle, LibraryBig, NotepadText, Video, NotebookPen, School, BookOpenCheck } from 'lucide-react';
import Sidebar, { SidebarItem } from '@/components/Sidebar';
import { ThemeContext } from '@/context/Theme';
import { redirect, usePathname, useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  const [isDark, setIsDark] = useState<Boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<Boolean>(true);
  const pathname = usePathname();

  const { user } = useUser();
  useEffect(() => {
    if (user?.userRole != "STUDENT") {
      if (user?.userRole == "INSTRUCTOR") {
        redirect("/admin-panel");
      }
      else {
        redirect("/login");
      }
    }
  }, []);

  return (
    <main className='h-screen flex flex-col'>
      <ThemeContext.Provider value={{isDark, setIsDark, isSidebarOpen, setIsSidebarOpen}}>
      <Navbar />
      <div className='flex-1 flex'>
        <Sidebar>
          <SidebarItem
            icon={<LayoutGrid className={pathname == "/" ? "" : "group-hover:invert"} size={40} color='white' />}
            text='Dashboard'
            active={pathname == "/"}
            navigate='/'
          />
          <SidebarItem
            icon={<Sigma className={pathname == "/forum" ? "" : "group-hover:invert"} size={40} color='white' />}
            text='Forum'
            active={pathname == "/forum"}
            navigate='/forum'
          />
          <SidebarItem
            icon={<MessageCircle className={pathname == "/chat" ? "" : "group-hover:invert"} size={40} color='white' />}
            text='Chat Room'
            active={pathname == "/chat"}
            navigate='/chat'
          />
          <SidebarItem
            icon={<LibraryBig className={pathname == "/books" ? "" : "group-hover:invert"} size={40} color='white' />}
            text='Books'
            active={pathname == "/books"}
            navigate='/books'
          />
          <SidebarItem
            icon={<NotepadText className={pathname == "/notes" ? "" : "group-hover:invert"} size={40} color='white' />}
            text='Lecture Notes'
            active={pathname == "/notes"}
            navigate='/notes'
          />
          <SidebarItem
            icon={<Video className={pathname == "/records" ? "" : "group-hover:invert"} size={40} color='white' />}
            text='Lecture Records'
            active={pathname == "/records"}
            navigate='/records'
          />
          <SidebarItem
            icon={<NotebookPen className={pathname == "/homeworks" ? "" : "group-hover:invert"} size={40} color='white' />}
            text='Homeworks'
            active={pathname == "/homeworks"}
            navigate='/homeworks'
          />
          <SidebarItem
            icon={<School className={pathname == "/past-exams" ? "" : "group-hover:invert"} size={40} color='white' />}
            text='Past Exams'
            active={pathname == "/past-exams"}
            navigate='/past-exams'
          />
          <SidebarItem
            icon={<BookOpenCheck className={pathname == "/exam-results" ? "" : "group-hover:invert"} size={40} color='white' />}
            text='Exam Result'
            active={pathname == "/exam-results"}
            navigate='/exam-results'
          />
        </Sidebar>
        <main className={`flex-1 p-4 transition-all  duration-300 mt-16 ${isSidebarOpen ? "ml-72" : "ml-16"}`}>
          {children}
        </main>
      </div>

      </ThemeContext.Provider>
    </main>
  )
}


