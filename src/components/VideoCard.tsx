import React from 'react'

const VideoCard = ({ name, url, date, user } : { name: String, url: String, date: Date, user: String}) => {
  return (
    <div className='flex flex-col'>
        <div className='flex justify-between items-center p-6 border-2 rounded-xl group hover:cursor-pointer hover:bg-indigo-50 transition-color duration-200'>
            <div>
                <p className='font-bold text-xl group-hover:underline'>{name}</p>
                <p className='italic text-black/70'>{url}</p>
                <p>{user}</p>
            </div>
            <p className='italic'>{date.toUTCString()}</p>
        </div>
    </div>
  )
}

export default VideoCard