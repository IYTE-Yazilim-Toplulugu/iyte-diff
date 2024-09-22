"use client"
import { getPdfsByType } from '@/app/api'
import AdminEditor from '@/components/AdminEditor'
import AddContentBtn from '@/components/Buttons/AddContentBtn'
import Chapter from '@/components/Chapter'
import { PopupContext } from '@/context/PopupContext'
import { Datatypes } from '@/models/DeletingObj'
import { PdfDocument, PdfType } from '@/models/Pdf'
import { PopupType } from '@/models/PopupTypes'
import { LibraryBig, Play } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'

const MainTextbook = () => {
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
        <AddContentBtn text='Add Chapter' icon={<LibraryBig />} type={PopupType.CHAPTER} />
      </div>

      <div className='flex flex-col gap-6'>
        {
          pdfs?.map((p, idx) => {
            return (
              <AdminEditor type={Datatypes.PDF} id={p.id} name={p.name}>
                <Chapter key={idx} title={p.name} pdf={p} />
              </AdminEditor>
            )
          })
        }

      </div>
    </div>
  )
}

export default MainTextbook