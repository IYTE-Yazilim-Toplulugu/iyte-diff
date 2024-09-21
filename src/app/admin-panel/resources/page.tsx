"use client"
import { getPdfsByType } from '@/app/api'
import AddPdfBtn from '@/components/Buttons/AddContentBtn'
import PdfFileCard from '@/components/PdfFileCard'
import { PopupContext } from '@/context/PopupContext'
import { PdfDocument, PdfType } from '@/models/Pdf'
import { PopupType } from '@/models/PopupTypes'
import { LibraryBig, Play } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'

const Books = () => {
  const context = useContext(PopupContext);
  const [pdfs, setPdfs] = useState<PdfDocument[] | null>();

  useEffect(() => {
    async function getPdfs() {
      const res = await getPdfsByType(PdfType.BOOK);
      console.log(res);
      setPdfs(res);
    }
    getPdfs();
  }, [])
  return (
    <div className='container mx-auto max-w-3xl flex flex-col gap-4'>
      <div className='flex justify-end items-center gap-2'>
        <AddPdfBtn text='Add Book' icon={<LibraryBig />} type={PopupType.PDF} />
        <AddPdfBtn text='Add Video' icon={<Play />} type={PopupType.VIDEO} />
      </div>

      <div className='flex flex-col gap-6'>
        {
          pdfs?.map((p, idx) => {
            return (
              <PdfFileCard key={idx} name={p.name} date={new Date(p.date)} pdfId={p.id} user={p.sender} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Books