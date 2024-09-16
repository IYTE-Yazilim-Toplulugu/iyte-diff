"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { SendHorizontal } from 'lucide-react';
import { Camera } from 'lucide-react';

const MessageBox = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event : ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
          setSelectedFile(event.target.files[0]);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault(); // Enter tuşunun normal davranışını engeller (yeni satır eklemez)
        submit(); // Mesajı gönder
      }
    };

    const submit = () => {
        console.log('Mesaj gönderildi:'); // Mesajı gönderdikten sonra textarea'yı temizle
    };

    const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
        console.log("a");
    }
  return (
    <div className='relative w-full rounded-xl bg-indigo-100'>
        <form className='w-full flex items-start justify-between p-4 gap-4' onSubmit={handleSubmit}>
            <label className="cursor-pointer">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full hover:bg-gray-900">
                <Camera className="w-8 h-8 text-gray-600" color='white' />
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>

            <div className='flex-1 flex justify-center items-center'>
                <textarea 
                rows={2}
                onKeyDown={handleKeyDown}
                placeholder="Type a Message..."
                className='p-2 border-2 border-indigo-500 flex-1 rounded-xl resize-none text-black' name="messagebox" id="" />
                <button type="submit"><SendHorizontal width={60} color='black' /></button>
            </div>
        </form>
    </div>
  )
}

export default MessageBox