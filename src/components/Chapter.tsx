import { PdfDocument } from '@/models/Pdf';
import React from 'react'
import PdfFileCard from './PdfFileCard';

const Chapter = ({ title, pdf } : { title: string; pdf: PdfDocument}) => {
  return (
    <div className='flex flex-col gap-2'>
        <h1 className='text-3xl font-bold'>Chapter {pdf.chapter?.toString()}: {title}</h1>
        <PdfFileCard name={pdf.name} pdfId={pdf.id} date={new Date(pdf.date)} user={pdf.sender} />
    </div>
  )
}

export default Chapter