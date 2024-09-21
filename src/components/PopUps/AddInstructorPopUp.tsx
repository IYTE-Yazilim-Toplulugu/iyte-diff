"use client"
import React, { useContext, useState } from 'react';
import { Download } from 'lucide-react';
import { createUser } from '@/app/api';
import { PopupContext } from '@/context/PopupContext';
import { User } from '@/models/User';
import axios from 'axios';
import { DataContext } from '@/context/DataContext';

const AddInstructorPopUp = () => {
    const context = useContext(PopupContext);
    const dataContext = useContext(DataContext);

    const [formData, setFormData] = useState<User | any>({
      fullName: '',
      schoolNumber: '',
      department: '',
      grade: -1,
      username: "",
      password: "",
      userRole: "INSTRUCTOR"
    });

    const [loader, setLoader] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmitForm = async (e: React.FormEvent) => {
      e.preventDefault();
      
      setLoader(true);
      const createdUser = await dataContext?.addInstructor(formData);
      setLoader(false);
      
      if (createdUser) {
        context?.setAddInstructor(false);
      }
    };

    const handleOutsideClick = (e: React.MouseEvent) => {
      if ((e.target as Element).classList.contains('popup-overlay')) {
        context?.setAddInstructor(false);
      }
    };
  return (
    <div onClick={handleOutsideClick} className="fixed z-50 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 popup-overlay">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <div className="flex items-center mb-4">
          <h1
            className={`flex-1 px-4 py-2 border-b-4 border-indigo-200 text-black text-center`}
          >
            Add New Instructor
          </h1>
        </div>

        <div>
        <form onSubmit={handleSubmitForm} className="flex flex-col space-y-4 text-black">
              <div>
                <label className="block mb-1">Full Name:</label>
                <input
                required
                  type="text"
                  name="fullName"
                  value={formData.fullName}
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
                Add Instructor
              </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default AddInstructorPopUp