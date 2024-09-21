"use client"
import Navbar from "@/components/navbar/Navbar";
import AddStudentPopUp from "@/components/PopUps/AddStudentPopUp";
import DataProvider from "@/components/Providers/DataProvider";
import PopupProvider from "@/components/Providers/PopupProvider";
import Sidebar, { SidebarItem } from "@/components/Sidebar";
import { ThemeContext } from "@/context/Theme";
import { LayoutGrid, User, Sigma, MessageCircle, LibraryBig, NotepadText, Video, NotebookPen, School, Layers, BookOpenCheck, ChartSpline, Info } from "lucide-react";
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
          {/* <AddStudentPopUp /> */}
          <ThemeContext.Provider value={{isDark, setIsDark, isSidebarOpen, setIsSidebarOpen}}>
            <DataProvider>
            <PopupProvider>
            <Navbar />
            <div className='flex-1 flex'>
                <Sidebar>
                    <SidebarItem
                      icon={<LayoutGrid className={pathname == "/admin-panel" ? "" : "group-hover:invert"} size={40} color='white' />}
                      text='Dashboard'
                      active={pathname == "/admin-panel"}
                      navigate='/admin-panel'
                    />
                    <SidebarItem
                      icon={<User className={pathname == "/admin-panel/users" ? "" : "group-hover:invert"} size={40} color='white' />}
                      text='Users'
                      active={pathname == "/admin-panel/users"}
                      navigate='/admin-panel/users'
                    />
                    <SidebarItem
                      icon={<Info className={pathname == "/admin-panel/course-information" ? "" : "group-hover:invert"} size={40} color='white' />}
                      text='Course Information'
                      active={pathname == "/admin-panel/course-information"}
                      navigate='/admin-panel/course-information'
                    />
                    <SidebarItem
                      icon={<ChartSpline className={pathname == "/admin-panel/gradings" ? "" : "group-hover:invert"} size={40} color='white' />}
                      text='Gradings'
                      active={pathname == "/admin-panel/gradings"}
                      navigate='/admin-panel/gradings'
                    />
                    
                    <SidebarItem
                      icon={<Sigma className={pathname == "/admin-panel/forum" ? "" : "group-hover:invert"} size={40} color='white' />}
                      text='Forum'
                      active={pathname == "/admin-panel/forum"}
                      navigate='/admin-panel/forum'
                    />
                    <SidebarItem
                      icon={<MessageCircle className={pathname == "/admin-panel/chat" ? "" : "group-hover:invert"} size={40} color='white' />}
                      text='Chat Room'
                      active={pathname == "/admin-panel/chat"}
                      navigate='/admin-panel/chat'
                    />
                    <SidebarItem
                      icon={<LibraryBig className={pathname == "/admin-panel/main-textbook" ? "" : "group-hover:invert"} size={40} color='white' />}
                      text='Main Textbook'
                      active={pathname == "/admin-panel/main-textbook"}
                      navigate='/admin-panel/main-textbook'
                    />
                    <SidebarItem
                      icon={<Layers className={pathname == "/admin-panel/resources" ? "" : "group-hover:invert"} size={40} color='white' />}
                      text='Lecture Resources'
                      active={pathname == "/admin-panel/resources"}
                      navigate='/admin-panel/resources'
                    />
                    <SidebarItem
                      icon={<NotepadText className={pathname == "/admin-panel/notes" ? "" : "group-hover:invert"} size={40} color='white' />}
                      text='Lecture Notes'
                      active={pathname == "/admin-panel/notes"}
                      navigate='/admin-panel/notes'
                    />
                    <SidebarItem
                      icon={<Video className={pathname == "/admin-panel/records" ? "" : "group-hover:invert"} size={40} color='white' />}
                      text='Lecture Records'
                      active={pathname == "/admin-panel/records"}
                      navigate='/admin-panel/records'
                    />
                    <SidebarItem
                      icon={<NotebookPen className={pathname == "/admin-panel/homeworks" ? "" : "group-hover:invert"} size={40} color='white' />}
                      text='Homeworks'
                      active={pathname == "/admin-panel/homeworks"}
                      navigate='/admin-panel/homeworks'
                    />
                    <SidebarItem
                      icon={<School className={pathname == "/admin-panel/past-exams" ? "" : "group-hover:invert"} size={40} color='white' />}
                      text='Past Exams'
                      active={pathname == "/admin-panel/past-exams"}
                      navigate='/admin-panel/past-exams'
                    />
                    <SidebarItem
                      icon={<BookOpenCheck className={pathname == "/admin-panel/exam-results" ? "" : "group-hover:invert"} size={40} color='white' />}
                      text='Exam Result'
                      active={pathname == "/admin-panel/exam-results"}
                      navigate='/admin-panel/exam-results'
                    />
                </Sidebar>
                <div className={`flex-1 p-4 transition-all duration-300 mt-16 ${isSidebarOpen ? "ml-72" : "ml-16"}`}>
                  {children}
                </div>
            </div>

            </PopupProvider>
            </DataProvider>
          </ThemeContext.Provider>
        </main>
    )
}