"use client"
import { addVideoLink } from '@/app/api';
import { PopupContext } from '@/context/PopupContext';
import { VideoLinkType } from '@/models/VideoLink';
import axios from 'axios';
import { Download } from 'lucide-react';
import React, { useContext, useState } from 'react'

const AddVideoLinkPopup = () => {
    const context = useContext(PopupContext);
    
    const [name, setName] = useState<String | any>();
    const [link, setLink] = useState<String | any>();

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      const res = await axios.post(`http://localhost:8080/video/addLink`, {
          "name" : name,
          "url" : link,
          "videoType" : VideoLinkType.RESOURCE,
          "senderId" : 2
      });
      console.log(res.data);
    }
    const handleOutsideClick = (e: React.MouseEvent) => {
      if ((e.target as Element).classList.contains('popup-overlay')) {
        context?.setUploadVideoLink(false);
      }
    };
  return (
    <div onClick={handleOutsideClick} className='fixed z-50 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 popup-overlay'>
    <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <div className="flex items-center mb-4">
          <h1
            className={`flex-1 px-4 py-2 border-b-4 border-indigo-200 text-black text-center`}
          >
            Upload Video Link
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 text-black">
            <div>
              <label className="block mb-1">Video Name:</label>
              <input
              required
                type="text"
                name="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Video Link:</label>
              <input
              required
                type="text"
                name="username"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          <button type="submit" className="w-full bg-indigo-300 text-white py-2 rounded">
            Add New Book
          </button>
        </form>
    </div>
    </div>
  )
}

export default AddVideoLinkPopup