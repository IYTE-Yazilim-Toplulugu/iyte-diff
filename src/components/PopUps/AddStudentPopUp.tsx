"use client"
import React, { useContext, useState } from 'react';
import { Download } from 'lucide-react';
import { createUser } from '@/app/api';
import { PopupContext } from '@/context/PopupContext';
import { User } from '@/models/User';
import axios from 'axios';
import { DataContext } from '@/context/DataContext';

const AddStudentPopUp = () => {
    const context = useContext(PopupContext);
    const dataContext = useContext(DataContext);

    const [activeTab, setActiveTab] = useState(0);

    const [formData, setFormData] = useState<User | any>({
      name: '',
      schoolNumber: '',
      department: '',
      grade: 0,
      username: "",
      password: "",
      userRole: "STUDENT"
    });
    const [file, setFile] = useState<File | null>(null);
    const [loader, setLoader] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmitForm = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoader(true);
      const createdUser = await dataContext?.addStudent(formData); 
      setLoader(false);

      if (createdUser) {
        context?.setAddStudent(false);
      }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        setFile(e.target.files[0]);
      }
    };

    const handleFileSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (file) {
        console.log(file);
      }
    };

    const handleOutsideClick = (e: React.MouseEvent) => {
      if ((e.target as Element).classList.contains('popup-overlay')) {
        context?.setAddStudent(false);
      }
    };
  return (
    <div onClick={handleOutsideClick} className="fixed z-50 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 popup-overlay">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <div className="flex items-center mb-4">
          <button
            onClick={() => setActiveTab(0)}
            className={`flex-1 px-4 py-2 border-b-4 ${activeTab === 0 ? 'border-indigo-200 text-black' : 'border-gray-200 text-gray-600'}`}
          >
            Add One Student
          </button>
          <button
            onClick={() => setActiveTab(1)}
            className={`flex-1 px-4 py-2 border-b-4 ${activeTab === 1 ? 'border-indigo-200 text-black' : 'border-gray-200 text-gray-600'}`}
          >
            Add Multiple Student
          </button>
        </div>

        <div>
          {activeTab === 0 && (
            <form onSubmit={handleSubmitForm} className="flex flex-col space-y-4 text-black">
              <div>
                <label className="block mb-1">Full Name:</label>
                <input
                required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block mb-1">School Number:</label>
                <input
                required
                  type="text"
                  name="schoolNumber"
                  value={formData.schoolNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Department:</label>
                <input
                required
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Grade:</label>
                <input
                required
                  type="text"
                  name="grade"
                  value={formData.grade}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Username:</label>
                <input
                required
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Password:</label>
                <input
                required
                  type="text"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <button type="submit" className="w-full bg-indigo-300 text-white py-2 rounded">
                {loader ? "..." : "Add Student"}
              </button>
            </form>
          )}
          {activeTab === 1 && (
            <form onSubmit={handleFileSubmit} className="flex flex-col space-y-4">
              <div>
                <label className="block mb-1">
                    <div className='w-full rounded-xl min-h-64 cursor-pointer border-4 border-dotted flex flex-col items-center justify-center text-gray-500'>
                        <p className='mb-4'>Add a file</p>
                        <Download size={60} />
                    </div>
                    <input
                    type="file"
                    accept=".xls,.xlsx"
                    onChange={handleFileChange}
                    className="hidden"
                    />
                </label>
              </div>
              <button type="submit" className="w-full bg-indigo-300 text-white py-2 rounded">
                {loader ? "..." : "Create Users"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default AddStudentPopUp