"use client"
import React, { useContext } from 'react';
import { MoonStar, Sun } from 'lucide-react';
import { ThemeContext } from '@/context/Theme';

const DarkMode = () => {
    const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <button onClick={() => setIsDark(!isDark)}>
        {
            isDark ? <MoonStar size={30} color='white' /> : <Sun size={30} color='white' />
        }
    </button>
  )
}

export default DarkMode