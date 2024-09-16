import PdfFileCard from '@/components/PdfFileCard'
import React from 'react'

const Homeworks = () => {
  return (
    <div className='container mx-auto max-w-3xl flex flex-col gap-6'>
      <PdfFileCard name="HW 1" date={new Date()} pdf="pdf name" user="Gamze Tanoğlu" />
      <PdfFileCard name="HW 2" date={new Date()} pdf="pdf name" user="Gamze Tanoğlu" />
      <PdfFileCard name="HW 3" date={new Date()} pdf="pdf name" user="Gamze Tanoğlu" />
      <PdfFileCard name="HW 4" date={new Date()} pdf="pdf name" user="Gamze Tanoğlu" />
      <PdfFileCard name="HW 5" date={new Date()} pdf="pdf name" user="Gamze Tanoğlu" />
    </div>
  )
}

export default Homeworks