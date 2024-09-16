import React from 'react'

const PdfFileCard = ({ name, pdf, date, user }: { name: String; pdf: String; date: Date, user: String }) => {
  return (
    <div className='flex justify-between items-center p-6 border-2 rounded-xl group hover:cursor-pointer hover:bg-indigo-50 transition-color duration-200'>
        <div>
            <p className='font-bold text-xl group-hover:underline'>{name}</p>
            <p className='italic text-black/70'>{pdf}</p>
            <p>{user}</p>
        </div>
        <p className='italic'>{date.toUTCString()}</p>
    </div>
  )
}

export default PdfFileCard