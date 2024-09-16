import PdfFileCard from '@/components/PdfFileCard'
import React from 'react'

const PastExams = () => {
  return (
    <div className='container mx-auto max-w-3xl flex flex-col gap-6'>
      <PdfFileCard name="2023-2024 Fall Term MT-1" date={new Date()} pdf="pdf name" user="Gamze Tanoğlu" />
      <PdfFileCard name="2023-2024 Fall Term MT-2" date={new Date()} pdf="pdf name" user="Gamze Tanoğlu" />
      <PdfFileCard name="2023-2024 Fall Term Final" date={new Date()} pdf="pdf name" user="Gamze Tanoğlu" />
    </div>
  )
}

export default PastExams