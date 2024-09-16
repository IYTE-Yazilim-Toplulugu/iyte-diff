import MessageBox from '@/components/MessageBox'
import MyMessage from '@/components/MyMessage'
import OtherMessage from '@/components/OtherMessage'
import React from 'react'

const ChatRoom = () => {
  return (
    <main className='w-full relative h-full'>
        <div className='flex flex-col gap-8 my-5 px-5'>
            <MyMessage />
            <OtherMessage />
            <OtherMessage />
            <OtherMessage />
            <OtherMessage />
            <MyMessage />
        </div>
        <div className='sticky bottom-2 w-full'>
            <MessageBox />
        </div>
    </main>
  )
}


export default ChatRoom