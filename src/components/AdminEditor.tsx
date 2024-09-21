import { DataContext } from '@/context/DataContext';
import { PopupContext } from '@/context/PopupContext';
import { Datatypes } from '@/models/DeletingObj';
import { Edit2, Trash2 } from 'lucide-react';
import React, { useContext } from 'react'



interface AdminEditorProps {
  children: React.ReactNode;
  id: number;
  type: Datatypes;
}

const AdminEditor = ({ children, id, type } : Readonly<AdminEditorProps>) => {
  const popupContext = useContext(PopupContext);
  const dataContext = useContext(DataContext);

  const handleEditBtn = () => {

  }

  const handleDeleteBtn = () => {
    dataContext?.setDeleting({
      id: id,
      type: type
    })

    popupContext?.setDeletingPopup(true);
  }
  return (
    <div className='flex justify-center items-center gap-2'>
        <div className='flex-1  border-2 p-2'>
            {children}
        </div>
        <div className='flex justify-center items-center gap-2'>
            <button onClick={handleEditBtn} className='p-3 rounded-full bg-yellow-500'><Edit2 color='white' /></button>
            <button onClick={handleDeleteBtn} className='p-3 rounded-full bg-red-500'><Trash2 color='white' /></button>
        </div>
    </div>
  )
}

export default AdminEditor