import VideoCard from '@/components/VideoCard'
import React from 'react'

const Records = () => {
  return (
    <div>
      <div className='container mx-auto max-w-3xl flex flex-col gap-6'>
        <VideoCard name="Video 1" date={new Date()} url="https://www.youtube.com/watch?v=Acq9UEA2akU" user="Gamze Tanoğlu" />
        <VideoCard name="Video 2" date={new Date()} url="https://www.youtube.com/watch?v=Acq9UEA2akU" user="Gamze Tanoğlu" />
        <VideoCard name="Video 3" date={new Date()} url="https://www.youtube.com/watch?v=Acq9UEA2akU" user="Gamze Tanoğlu" />
        <VideoCard name="Video 4" date={new Date()} url="https://www.youtube.com/watch?v=Acq9UEA2akU" user="Gamze Tanoğlu" />
        <VideoCard name="Video 5" date={new Date()} url="https://www.youtube.com/watch?v=Acq9UEA2akU" user="Gamze Tanoğlu" />
      </div>
    </div>
  )
}

export default Records