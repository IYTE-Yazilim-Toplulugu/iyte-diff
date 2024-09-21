"use client"
import AddPdfBtn from '@/components/Buttons/AddContentBtn';
import { PopupContext } from '@/context/PopupContext';
import { PopupType } from '@/models/PopupTypes';
import { LibraryBig } from 'lucide-react';
import React, { useContext } from 'react'

const Notes = () => {
  const context = useContext(PopupContext);
  return (
    <div className='container mx-auto max-w-3xl flex flex-col gap-4'>
      <div className='flex justify-end items-center gap-2'>
        <AddPdfBtn text='Add Lecture Note' icon={<LibraryBig />} type={PopupType.PDF} />
      </div>
    </div>
  )
}

export default Notes