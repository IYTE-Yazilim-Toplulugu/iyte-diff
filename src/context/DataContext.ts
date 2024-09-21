import { DeletingObj } from "@/models/DeletingObj";
import { PdfDocument } from "@/models/Pdf";
import { User } from "@/models/User";
import { VideoLink } from "@/models/VideoLink";
import { Dispatch, createContext } from "react";

interface DataContextType {
    students: User[];
    setStudents: Dispatch<React.SetStateAction<User[]>>;

    instructors: User[];
    setInstructors: Dispatch<React.SetStateAction<User[]>>;

    mainTextbook: PdfDocument[];
    setMainTextbook: Dispatch<React.SetStateAction<PdfDocument[]>>;

    resourcesPdf: PdfDocument[];
    setResourcesPdf: Dispatch<React.SetStateAction<PdfDocument[]>>;

    resourcesVideo: VideoLink[];
    setResourcesVideo: Dispatch<React.SetStateAction<VideoLink[]>>;

    lectureNotes: PdfDocument[];
    setLectureNotes: Dispatch<React.SetStateAction<PdfDocument[]>>;

    lectureRecords: VideoLink[];
    setLectureRecords: Dispatch<React.SetStateAction<VideoLink[]>>;

    homeworks: PdfDocument[];
    setHomeworks: Dispatch<React.SetStateAction<PdfDocument[]>>;

    pastExams: PdfDocument[];
    setPastExams: Dispatch<React.SetStateAction<PdfDocument[]>>;

    examResult: PdfDocument[];
    setExamResult: Dispatch<React.SetStateAction<PdfDocument[]>>;

    // User Experiment
    deleting: DeletingObj | undefined;
    setDeleting: Dispatch<React.SetStateAction<DeletingObj | undefined>>;



    // Users Data:
    loadStudents: () => Promise<void>;
    addStudent: (formData: FormData) => Promise<boolean>;
    // deleteStudent: () => Promise<void>;
    // updateStudent: () => Promise<void>;
    
    loadInstructors: () => Promise<void>;
    addInstructor: (formData: FormData) => Promise<boolean>;
    // deleteInstructor: () => Promise<void>;
    // updateInstructor: () => Promise<void>;


    // Pdf Data:
    // loadMainTextbook: () => Promise<void>;


}

export const DataContext = createContext<DataContextType | undefined>(undefined);