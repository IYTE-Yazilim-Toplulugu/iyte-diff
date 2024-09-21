import { PopupContext } from '@/context/PopupContext'
import { PopupType } from '@/models/PopupTypes';
import React, { useContext } from 'react'

const AddContentBtn = ({ text, icon, type } : { text: string; icon: JSX.Element; type: PopupType}) => {
    const context = useContext(PopupContext);
  return (
    <button onClick={() => type == PopupType.CHAPTER ? context?.setAddChapter(true) : 
      type == PopupType.VIDEO ? context?.setUploadVideoLink(true) : 
      type == PopupType.HOMEWORK ? context?.setAddHomework(true) :
      context?.setUploadPdf(true)} className='bg-indigo-200 text-black flex gap-2 p-3 rounded-lg'>{icon} {text}</button>
  )
}

export default AddContentBtn