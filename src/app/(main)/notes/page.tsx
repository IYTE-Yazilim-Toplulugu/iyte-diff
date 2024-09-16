import PdfFileCard from '@/components/PdfFileCard'
import React from 'react'

const Notes = () => {
  return (
    <div>
      <div className='container mx-auto max-w-3xl flex flex-col gap-6'>
        <PdfFileCard name="Note 1" date={new Date()} pdf="pdf name" user="Gamze Tanoğlu" />
        <PdfFileCard name="Note 2" date={new Date()} pdf="pdf name" user="Gamze Tanoğlu" />
        <PdfFileCard name="Note 3" date={new Date()} pdf="pdf name" user="Gamze Tanoğlu" />
      </div>
    </div>
  )
}

export default Notes