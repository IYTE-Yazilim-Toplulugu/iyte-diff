"use client"
import React from 'react';
import { UserRound } from 'lucide-react';

const Profile = () => {
  return (
    <div className='rounded-full bg-iyte-blue flex justify-around items-center gap-5 mr-4 transition-all duration-300'>
        <div className='text-xs text-white ml-6'>
            <p>Doğukan Topçu</p>
            <p>Bilgisayar Mühendisliği / 3. Sınıf</p>
        </div>

        <div className='rounded-full h-12 w-12 p-1'>
            <div className='bg-gray-400 w-full h-full rounded-full p-1'>
                <UserRound className='w-full h-full' color='white' />
            </div>
        </div>
    </div>
  )
}

export default Profile