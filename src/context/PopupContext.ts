import { createContext, Dispatch } from "react";

interface PopupContextType {
  addStudent: boolean;
  setAddStudent: Dispatch<boolean>;
  addInstructor: boolean;
  setAddInstructor: Dispatch<boolean>;
  deleteUser: boolean;
  setDeleteUser: Dispatch<boolean>;
  uploadPdf: boolean;
  setUploadPdf: Dispatch<boolean>;
  uploadVideoLink: boolean;
  setUploadVideoLink: Dispatch<boolean>;
  addChapter: boolean;
  setAddChapter: Dispatch<boolean>;
  addHomework: boolean;
  setAddHomework: Dispatch<boolean>;

  deletingPopup: boolean;
  setDeletingPopup: Dispatch<boolean>;
}

export const PopupContext = createContext<PopupContextType | undefined>(undefined);