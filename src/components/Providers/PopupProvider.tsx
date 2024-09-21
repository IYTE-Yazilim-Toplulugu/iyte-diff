import { PopupContext } from '@/context/PopupContext'
import React, { useState } from 'react'
import AddStudentPopUp from '../PopUps/AddStudentPopUp';
import AddInstructorPopUp from '../PopUps/AddInstructorPopUp';
import PdfUploadPopup from '../PopUps/PdfUploadPopup';
import AddVideoLinkPopup from '../PopUps/AddVideoLinkPopup';
import AddChapterPopup from '../PopUps/AddChapterPopup';
import AddHomeworkPopup from '../PopUps/AddHomeworkPopup';
import DeletePopup from '../PopUps/DeletePopup';

const PopupProvider = ({ children } : Readonly<{ children : React.ReactNode}>) => {
    const [addStudent, setAddStudent] = useState<boolean>(false);
    const [addInstructor, setAddInstructor] = useState<boolean>(false);
    const [deleteUser, setDeleteUser] = useState<boolean>(false);
    const [uploadPdf, setUploadPdf] = useState<boolean>(false);
    const [uploadVideoLink, setUploadVideoLink] = useState<boolean>(false);
    const [addChapter, setAddChapter] = useState<boolean>(false);
    const [addHomework, setAddHomework] = useState<boolean>(false);

    const [deletingPopup, setDeletingPopup] = useState<boolean>(false);

  return (
    <PopupContext.Provider value={{
      addStudent, setAddStudent, 
      addInstructor, setAddInstructor, 
      deleteUser, setDeleteUser, 
      uploadPdf, setUploadPdf, 
      uploadVideoLink, setUploadVideoLink, 
      addChapter, setAddChapter, 
      addHomework, setAddHomework,
      deletingPopup, setDeletingPopup
    }}>

        {addStudent && <AddStudentPopUp />}
        {addInstructor && <AddInstructorPopUp />}
        {uploadPdf && <PdfUploadPopup />}
        {uploadVideoLink && <AddVideoLinkPopup />}
        {addChapter && <AddChapterPopup />}
        {addHomework && <AddHomeworkPopup />}
        {deletingPopup && <DeletePopup />}
        {children}
    </PopupContext.Provider>
  )
}

export default PopupProvider