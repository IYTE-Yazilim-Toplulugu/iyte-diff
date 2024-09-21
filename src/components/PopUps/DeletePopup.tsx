"use client"
import { DataContext } from '@/context/DataContext';
import { PopupContext } from '@/context/PopupContext';
import { Datatypes } from '@/models/DeletingObj';
import React, { useContext } from 'react'

const DeletePopup = () => {
  const context = useContext(PopupContext);
  const dataContext = useContext(DataContext);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    switch(dataContext?.deleting?.type) {
      case Datatypes.PDF:
        break;
      case Datatypes.USER:
        break;
      case Datatypes.VIDEOLINK:
        break;
      default:
        break;
    }
    
  }

  const handleOutsideClick = (e: React.MouseEvent) => {
    if ((e.target as Element).classList.contains('popup-overlay')) {
      context?.setDeletingPopup(false);
      dataContext?.setDeleting(undefined);
    }
  };
  return (
    <div onClick={handleOutsideClick} className='fixed z-50 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 popup-overlay'>
      <div className="bg-black p-6 rounded-lg w-full max-w-md text-white">
        <div className="flex flex-col items-start mb-4 gap-4">
          <p>Are you sure you want to delete the data specified below?</p>
          <ul>
            <li>id: {dataContext?.deleting?.id}</li>
            <li>Type: {dataContext?.deleting?.type}</li>
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="flex justify-end text-black">
          <button type="submit" className="px-5 bg-iyte-red text-white font-bold py-2 rounded">
            Delete
          </button>
        </form>
    </div>
    </div>
  )
}

export default DeletePopup