import Image from 'next/image';
import React from 'react';

import Iyte from "@/images/iyte_logo-eng.png";

const IyteLogo = () => {
  return (
    <div className='w-16 h-16 bg-white flex justify-center items-center'>
        <Image src={Iyte} alt='IYTE' />
    </div>
  )
}

export default IyteLogo