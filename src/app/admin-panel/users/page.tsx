"use client"
import { getAllUsers } from '@/app/api';
import Datatable from '@/components/Datatable'
import React, { useEffect, useState } from 'react'

import { Plus } from 'lucide-react';
import { User } from '@/models/User';

const Users = () => {
  const [users, setUsers] = useState<User[] | any>();
  useEffect(() => {
    const getUsers = async () => {
      const u = await getAllUsers();
      console.log(u.data);
      setUsers(u);
    }
    getUsers();
  }, [users]);

  return (
    <div className='w-full my-10 flex flex-col gap-16 conteiner mx-auto max-w-6xl'>
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
          <h1 className='font-bold text-3xl mb-6'>Students Table</h1>
          <button className='px-4 py-2 rounded-xl bg-indigo-200 flex items-center gap-2 text-black'><Plus /> Add Student</button>
        </div>
        <Datatable rows={users} />
      </div>

      <div className='flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
          <h1 className='font-bold text-3xl mb-6'>Instructors Table</h1>
          <button className='px-4 py-2 rounded-xl bg-indigo-200 flex items-center gap-2 text-black'><Plus /> Add Instructor</button>
        </div>
        <Datatable rows={users} />
      </div>

    </div>
  )
}

export default Users