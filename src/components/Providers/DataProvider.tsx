"use client"
import * as api from "@/app/api";
import { DataContext } from "@/context/DataContext";
import { DeletingObj } from "@/models/DeletingObj";
import { PdfDocument } from "@/models/Pdf";
import { User } from "@/models/User";
import { VideoLink } from "@/models/VideoLink";
import axios from "axios";
import { useState } from "react";

const DataProvider = ({ children } : Readonly<{ children : React.ReactNode}>) => {
    const [students, setStudents] = useState<User[]>([]);
    const [instructors, setInstructors] = useState<User[]>([]);

    const [mainTextbook, setMainTextbook] = useState<PdfDocument[]>([]);
    const [resourcesPdf, setResourcesPdf] = useState<PdfDocument[]>([]);
    const [resourcesVideo, setResourcesVideo] = useState<VideoLink[]>([]);
    const [lectureNotes, setLectureNotes] = useState<PdfDocument[]>([]);
    const [lectureRecords, setLectureRecords] = useState<VideoLink[]>([]);
    const [homeworks, setHomeworks] = useState<PdfDocument[]>([]);
    const [pastExams, setPastExams] = useState<PdfDocument[]>([]);
    const [examResult, setExamResult] = useState<PdfDocument[]>([]);

    const [deleting, setDeleting] = useState<DeletingObj>();

    const loadStudents = async () => {
        setStudents(await api.getStudents());
    }
    const addStudent : (formData: FormData) => Promise<boolean> 
    = async (formData : FormData) => {
        const res : User = await api.createUser(formData);
        setStudents(prev => [...prev, res]);
        return true;
    }


    const loadInstructors = async () => {
        setInstructors(await api.getInstructors());
    }

    const addInstructor : (formData: FormData) => Promise<boolean> 
    = async (formData : FormData) => {
        const res : User = await api.createUser(formData);
        setInstructors(prev => [...prev, res]);
        return true;
    }

  return (
    <DataContext.Provider value={{ 
        students, setStudents,
        instructors, setInstructors,
        mainTextbook, setMainTextbook,
        resourcesPdf, setResourcesPdf,
        resourcesVideo, setResourcesVideo,
        lectureNotes, setLectureNotes,
        lectureRecords, setLectureRecords,
        homeworks, setHomeworks,
        pastExams, setPastExams,
        examResult, setExamResult,

        deleting, setDeleting,

        loadStudents, addStudent,
        loadInstructors, addInstructor
     }}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider