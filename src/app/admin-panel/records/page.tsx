"use client"
import AddContentBtn from '@/components/Buttons/AddContentBtn';
import { PopupContext } from '@/context/PopupContext';
import { PopupType } from '@/models/PopupTypes';
import { Play } from 'lucide-react';
import React, { useContext } from 'react'

const Records = () => {
  const context = useContext(PopupContext);
  return (
    <div className='container mx-auto max-w-3xl flex flex-col gap-4'>
      <div className='flex justify-end items-center gap-2'>
        <AddContentBtn text='Add Record' icon={<Play />} type={PopupType.VIDEO} />
      </div>
    </div>
  )
}

export default Records