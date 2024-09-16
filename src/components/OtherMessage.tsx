import React from 'react'

const OtherMessage = () => {
  return (
    <div className='flex justify-start'>
        <div className='flex items-end gap-2'>
            <div className='rounded-full w-10 h-10 bg-green-400 flex justify-center items-center'>
                D
            </div>
            <div className='flex flex-col max-w-sm relative rounded-lg p-3 bg-indigo-50 text-black'>

                <div className='flex justify-between items-center text-xs'>
                    <p>Doğukan Topçu</p>
                    <p>dogukantopcu@std.iyte.edu.tr</p>
                </div>

                <p>
                    Reprehenderit labore aute amet cillum amet exercitation nulla ea voluptate do incididunt culpa. Anim irure incididunt mollit consequat quis culpa ea dolore quis quis dolore magna et quis. Mollit nisi sunt non esse sunt. Do consectetur proident do ipsum ut irure eiusmod quis ut anim ipsum occaecat qui.
                </p>

                <div className='text-xs text-end'>12:14</div>
            </div>
        </div>
    </div>
  )
}

export default OtherMessage