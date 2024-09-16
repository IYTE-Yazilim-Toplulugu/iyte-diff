import React from 'react';
import CupCat from "../images/cup.png";
import Image from 'next/image';

const EmptyScreen = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div className='flex flex-col items-center'>
            <p className='text-3xl font-bold'>No Content Available</p>
            <desc className='text-sm font-light mt-10 mb-20'>No content has been added yet</desc>
            <Image src={CupCat} alt='No Content' className='w-64 relative z-10' />
            <div className='w-full bg-amber-950 h-5 -mt-7 relative z-0 rounded-md'></div>
        </div>
    </div>
  )
}

export default EmptyScreen