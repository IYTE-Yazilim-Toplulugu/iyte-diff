"use client"
import React, { useState } from 'react'

const Syllabus = () => {
  return (
    <div className='w-full bg-indigo-100 rounded-lg p-4 text-black sm:sticky sm:top-0'>
        <h1 className='font-bold text-center text-2xl my-4'>2024-2025 Fall Term</h1>
        
        <div className='flex flex-col gap-1 mt-4'>
          <SyllabusData week='Week 1' title="Definition of Derivative" desc='Laborum deserunt eu et excepteur duis mollit do eiusmod non enim incididunt est. Enim duis labore id eu est sunt occaecat non consectetur. Quis excepteur officia irure commodo eu irure qui. Exercitation id est consectetur cillum ad esse ipsum amet irure. Deserunt eiusmod consequat officia cillum proident voluptate labore aliquip. Consectetur sunt consequat id deserunt.' />
          <SyllabusData week='Week 2' title="Definition of Derivative" desc='Laborum deserunt eu et excepteur duis mollit do eiusmod non enim incididunt est. Enim duis labore id eu est sunt occaecat non consectetur. Quis excepteur officia irure commodo eu irure qui. Exercitation id est consectetur cillum ad esse ipsum amet irure. Deserunt eiusmod consequat officia cillum proident voluptate labore aliquip. Consectetur sunt consequat id deserunt.' />
          <SyllabusData week='Week 3' title="Definition of Derivative" desc='Laborum deserunt eu et excepteur duis mollit do eiusmod non enim incididunt est. Enim duis labore id eu est sunt occaecat non consectetur. Quis excepteur officia irure commodo eu irure qui. Exercitation id est consectetur cillum ad esse ipsum amet irure. Deserunt eiusmod consequat officia cillum proident voluptate labore aliquip. Consectetur sunt consequat id deserunt.' />
          <SyllabusData week='Week 4' title="Definition of Derivative" desc='Laborum deserunt eu et excepteur duis mollit do eiusmod non enim incididunt est. Enim duis labore id eu est sunt occaecat non consectetur. Quis excepteur officia irure commodo eu irure qui. Exercitation id est consectetur cillum ad esse ipsum amet irure. Deserunt eiusmod consequat officia cillum proident voluptate labore aliquip. Consectetur sunt consequat id deserunt.' />
          <SyllabusData week='Week 5' title="Definition of Derivative" desc='Laborum deserunt eu et excepteur duis mollit do eiusmod non enim incididunt est. Enim duis labore id eu est sunt occaecat non consectetur. Quis excepteur officia irure commodo eu irure qui. Exercitation id est consectetur cillum ad esse ipsum amet irure. Deserunt eiusmod consequat officia cillum proident voluptate labore aliquip. Consectetur sunt consequat id deserunt.' />
          <SyllabusData week='Week 6' title="Definition of Derivative" desc='Laborum deserunt eu et excepteur duis mollit do eiusmod non enim incididunt est. Enim duis labore id eu est sunt occaecat non consectetur. Quis excepteur officia irure commodo eu irure qui. Exercitation id est consectetur cillum ad esse ipsum amet irure. Deserunt eiusmod consequat officia cillum proident voluptate labore aliquip. Consectetur sunt consequat id deserunt.' />
          <SyllabusData week='Week 7' title="Definition of Derivative" desc='Laborum deserunt eu et excepteur duis mollit do eiusmod non enim incididunt est. Enim duis labore id eu est sunt occaecat non consectetur. Quis excepteur officia irure commodo eu irure qui. Exercitation id est consectetur cillum ad esse ipsum amet irure. Deserunt eiusmod consequat officia cillum proident voluptate labore aliquip. Consectetur sunt consequat id deserunt.' />
          <SyllabusData week='Week 8' title="Definition of Derivative" desc='Laborum deserunt eu et excepteur duis mollit do eiusmod non enim incididunt est. Enim duis labore id eu est sunt occaecat non consectetur. Quis excepteur officia irure commodo eu irure qui. Exercitation id est consectetur cillum ad esse ipsum amet irure. Deserunt eiusmod consequat officia cillum proident voluptate labore aliquip. Consectetur sunt consequat id deserunt.' />
          <SyllabusData week='Week 9' title="Definition of Derivative" desc='Laborum deserunt eu et excepteur duis mollit do eiusmod non enim incididunt est. Enim duis labore id eu est sunt occaecat non consectetur. Quis excepteur officia irure commodo eu irure qui. Exercitation id est consectetur cillum ad esse ipsum amet irure. Deserunt eiusmod consequat officia cillum proident voluptate labore aliquip. Consectetur sunt consequat id deserunt.' />
          <SyllabusData week='Week 10' title="Definition of Derivative" desc='Laborum deserunt eu et excepteur duis mollit do eiusmod non enim incididunt est. Enim duis labore id eu est sunt occaecat non consectetur. Quis excepteur officia irure commodo eu irure qui. Exercitation id est consectetur cillum ad esse ipsum amet irure. Deserunt eiusmod consequat officia cillum proident voluptate labore aliquip. Consectetur sunt consequat id deserunt.' />
          <SyllabusData week='Week 11' title="Definition of Derivative" desc='Laborum deserunt eu et excepteur duis mollit do eiusmod non enim incididunt est. Enim duis labore id eu est sunt occaecat non consectetur. Quis excepteur officia irure commodo eu irure qui. Exercitation id est consectetur cillum ad esse ipsum amet irure. Deserunt eiusmod consequat officia cillum proident voluptate labore aliquip. Consectetur sunt consequat id deserunt.' />
          <SyllabusData week='Week 12' title="Definition of Derivative" desc='Laborum deserunt eu et excepteur duis mollit do eiusmod non enim incididunt est. Enim duis labore id eu est sunt occaecat non consectetur. Quis excepteur officia irure commodo eu irure qui. Exercitation id est consectetur cillum ad esse ipsum amet irure. Deserunt eiusmod consequat officia cillum proident voluptate labore aliquip. Consectetur sunt consequat id deserunt.' />
          <SyllabusData week='Week 13' title="Definition of Derivative" desc='Laborum deserunt eu et excepteur duis mollit do eiusmod non enim incididunt est. Enim duis labore id eu est sunt occaecat non consectetur. Quis excepteur officia irure commodo eu irure qui. Exercitation id est consectetur cillum ad esse ipsum amet irure. Deserunt eiusmod consequat officia cillum proident voluptate labore aliquip. Consectetur sunt consequat id deserunt.' />
          <SyllabusData week='Week 14' title="Definition of Derivative" desc='Laborum deserunt eu et excepteur duis mollit do eiusmod non enim incididunt est. Enim duis labore id eu est sunt occaecat non consectetur. Quis excepteur officia irure commodo eu irure qui. Exercitation id est consectetur cillum ad esse ipsum amet irure. Deserunt eiusmod consequat officia cillum proident voluptate labore aliquip. Consectetur sunt consequat id deserunt.' />
        </div>
    </div>
  )
}

const SyllabusData = ({ week, title, desc } : { week : string, title: string, desc: string }) => {
  const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
          <div onClick={() => setIsOpen(!isOpen)} className='grid grid-cols-4 cursor-pointer'>
            <div className='font-bold bg-gray-400 p-2 rounded-l-lg'>{week}</div>
            <div className='col-span-3 bg-gray-300 p-2 rounded-r-lg'>{title}</div>
          </div>

          {
            isOpen ? (
              <div className='p-2 bg-gray-100 rounded-lg'>{desc}</div>
            ) : null
          }
        </div>
    );
}

export default Syllabus