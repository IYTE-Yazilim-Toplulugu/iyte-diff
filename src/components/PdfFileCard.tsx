import { User } from '@/models/User';
import Link from 'next/link';
import React from 'react'

const PdfFileCard = ({ name, pdfId, date, user }: { name: String; pdfId: number; date: Date, user: User }) => {
  return (
    <a href={`http://localhost:8080/pdf/download/${pdfId}`} target='_blank' className='flex justify-between items-center p-6 border-2 rounded-xl group hover:cursor-pointer hover:bg-indigo-50 transition-color duration-200'>
        <div className='flex flex-col'>
            <p className='font-bold text-xl group-hover:underline'>{name}</p>
            {/* <p className='italic text-black/70'>{pdf}</p> */}
            <p>{user.name}</p>
        </div>
        <p className='italic'>{date?.toUTCString()}</p>
    </a>
  )
}

export default PdfFileCard