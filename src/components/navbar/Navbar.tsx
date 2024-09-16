import React from 'react'
import Hamburger from './Hamburger'
import Profile from './Profile'
import DarkMode from './DarkMode'
import IyteLogo from './IyteLogo'

const Navbar = () => {
  return (
    <nav className='fixed top-0 z-50
    w-full bg-iyte-red flex justify-between items-center min-h-16'>
        <div className='flex'>
          <Hamburger />
          <IyteLogo />
        </div>
        <div className='flex flex-row mr-8'>
          <Profile />
          <DarkMode />
        </div>
    </nav>
  )
}

export default Navbar