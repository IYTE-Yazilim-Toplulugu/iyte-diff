import { PopupContext } from '@/context/PopupContext';
import { PdfType } from '@/models/Pdf';
import axios from 'axios';
import { Download } from 'lucide-react';
import React, { useContext, useState } from 'react'

const AddChapterPopup = () => {
    const context = useContext(PopupContext);

    const [title, setTitle] = useState<String | any>()
    const [file, setFile] = useState<File | null>(null);
    const [chapter, setChapter] = useState<Number | any>();


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
          setFile(e.target.files[0]);
        }
      };

      const handleFileSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (file) {
          // const data = await addPdf({ fileName: name, pdf: file, id: 2 });
          const formData = new FormData();
          formData.append('file', file);
          formData.append('name', title);
          formData.append("chapter", chapter);
          formData.append('additionalUrl', "");
          formData.append('type', PdfType.EXAMRESULT);
          formData.append('senderId', "2");
          
          const data = await axios.post(`http://localhost:8080/pdf/addPdfDoc`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log(data.data);
        }
      };

      const handleOutsideClick = (e: React.MouseEvent) => {
        if ((e.target as Element).classList.contains('popup-overlay')) {
          context?.setAddChapter(false);
        }
      };

  return (
    <div onClick={handleOutsideClick} className='fixed z-50 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 popup-overlay'>
    <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <div className="flex items-center mb-4">
          <h1
            className={`flex-1 px-4 py-2 border-b-4 border-indigo-200 text-black text-center`}
          >
            Upload Chapter
          </h1>
        </div>
        <form onSubmit={handleFileSubmit} className="flex flex-col space-y-4 text-black">
            <div>
                <label className="block mb-1">Title:</label>
                <input
                required
                type="text"
                name="title"
                placeholder='Chapter 1: Example...'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div>
              <label className="block mb-1">Chapter Number:</label>
              <input
              required
                type="number"
                name="chapter"
                placeholder='E.g. 1'
                value={chapter}
                onChange={(e) => setChapter(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          <div>
            <label className="block mb-1">
                <div className='w-full rounded-xl min-h-64 cursor-pointer border-4 border-dotted flex flex-col items-center justify-center text-gray-500'>
                    <p className='mb-4'>Upload pdf file</p>
                    <Download size={60} />
                </div>
                <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="hidden"
                />
            </label>
          </div>
          <button type="submit" className="w-full bg-indigo-300 text-white py-2 rounded">
            Add New Chapter
          </button>
        </form>
    </div>
    </div>
  )
}

export default AddChapterPopup