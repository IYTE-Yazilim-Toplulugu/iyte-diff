"use client"
import { ThemeContext } from '@/context/Theme';
import React, { useContext, useState } from 'react'

const Hamburger = () => {
    const { isSidebarOpen, setIsSidebarOpen } = useContext(ThemeContext);
    const handleClick = () => {
      setIsSidebarOpen(!isSidebarOpen);
    }
  return (
    <button onClick={handleClick} className='flex flex-col justify-center items-center w-16 h-16 bg-iyte-red-darker transition-all duration-300 ease-out'>
        <span className={`bg-white block transition-all duration-300 ease-out sm:h-1 h-0.5 w-8 sm:rounded-2xl rounded ${isSidebarOpen ? 'rotate-45 sm:translate-y-1.5 translate-y-1' : '-translate-y-1'}`} ></span>
        <span className={`bg-white block transition-all duration-300 ease-out sm:h-1 h-0.5 w-8 sm:rounded-2xl rounded my-0.5 ${isSidebarOpen ? 'opacity-0' : 'opacity-100'}`}  ></span>
        <span className={`bg-white block transition-all duration-300 ease-out sm:h-1 h-0.5 w-8 sm:rounded-2xl rounded ${isSidebarOpen ? '-rotate-45 sm:-translate-y-1.5 -translate-y-1' : 'translate-y-1'}`}  ></span>
    </button>
  )
}

export default Hamburger