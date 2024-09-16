import React from 'react'

const UserInfo = () => {
  return (
    <div className='w-full p-10 rounded-xl bg-indigo-100 flex items-center gap-6 text-black'>
        <div className='w-32 h-32 bg-blue-400 text-white font-bold text-6xl rounded-full flex justify-center items-center'>
            J
        </div>
        <div className='flex flex-col'>
            <p>John Doe</p>
            <p>johndoe@std.iyte.edu.tr</p>
            <p>Computer Engineering Student</p>
            <p>2nd Grade</p>
        </div>
    </div>
  )
}

export default UserInfo