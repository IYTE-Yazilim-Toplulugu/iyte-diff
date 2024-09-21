"use client"
import Datatable from '@/components/Datatable'
import React, { useContext, useEffect } from 'react'

import { Plus } from 'lucide-react';
import { PopupContext } from '@/context/PopupContext';
import { DataContext } from '@/context/DataContext';

const Users = () => {
  const dataContext = useContext(DataContext);
  const context = useContext(PopupContext);

  useEffect(() => {
    const getUsers = async () => {
      await dataContext?.loadStudents();
      await dataContext?.loadInstructors();
    }
    getUsers();
  }, []);


  return (
    <div className='w-full my-10 flex flex-col gap-16 conteiner mx-auto max-w-6xl'>
      
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
          <h1 className='font-bold text-3xl mb-6'>Student Table</h1>
          <button onClick={() => context?.setAddStudent(true)} className='px-4 py-2 rounded-xl bg-indigo-200 flex items-center gap-2 text-black'><Plus /> Add Student</button>
        </div>
        <Datatable rows={dataContext?.students} />
      </div>

      <div className='flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
          <h1 className='font-bold text-3xl mb-6'>Instructor Table</h1>
          <button onClick={() => context?.setAddInstructor(true)} className='px-4 py-2 rounded-xl bg-indigo-200 flex items-center gap-2 text-black'><Plus /> Add Instructor</button>
        </div>
        <Datatable rows={dataContext?.instructors} />
      </div>

    </div>
  )
}

export default Users